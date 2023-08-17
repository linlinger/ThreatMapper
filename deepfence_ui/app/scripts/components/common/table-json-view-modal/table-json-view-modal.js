/*eslint-disable*/
// React imports
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { Map } from 'immutable';
// Custom component imports
import Tabs from './tabs-view';
import NotificationToaster from '../../common/notification-toaster/notification-toaster';

import {
  unmaskAlertRuleAction,
  closeJsonTableViewModal,
  saveClusteringRuleAction,
  maskDocsAction,
  toaster,
} from '../../../actions/app-actions';
import { AlertCorrelationView } from './alerts-correlation-view';
import OutsideClickHandler from 'react-outside-click-handler';

class TableJSONViewModal extends React.Component {

  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.saveClusteringRule = this.saveClusteringRule.bind(this);
    this.maskDocs = this.maskDocs.bind(this);
    this.unmaskDocs = this.unmaskDocs.bind(this);
  }
  saveClusteringRule(params) {
    const { saveClusteringRuleAction, toaster } = this.props;
    saveClusteringRuleAction(params).then((response) => {
      if (response && response.success) {
        toaster('规则保存成功');
      } else {
        const {
          error: {
            message,
          } = {}
        } = response;
        const errorMessage = message ? `保存规则时出错: ${message}` : '保存规则时出错';
        toaster(errorMessage);
      }
    });
  }

  unmaskDocs(params) {
    const { unmaskAlertRuleAction, toaster } = this.props;
    unmaskAlertRuleAction(params).then(() => {
      toaster('您启用当前警报规则的首选项已成功保存');
    }, (error) => {
      const {
        error: {
          message,
        } = {}
      } = error;
      const errorMessage = message ? `保存首选项时出错: ${message}` : '保存您的首选项时发生了错误';
      toaster(errorMessage);
    });
  }

  maskDocs(params) {
    const { maskDocsAction, toaster } = this.props;
    maskDocsAction(params).then((response) => {
      if (response && response.success) {
        toaster('您启用当前警报规则的首选项已成功保存');
      } else {
        const {
          error: {
            message,
          } = {},
        } = response;
        const errorMessage = message ? `保存首选项时出错: ${message}` : '保存您的首选项时发生了错误';
        toaster(errorMessage);
      }
    }, (httpResponse) => {
      const response = JSON.parse(httpResponse.response);
      const {
        error: {
          message,
        } = {},
      } = response;
      const errorMessage = message ? `保存首选项时出错: ${message}` : '保存您的首选项时发生了错误';
      toaster(errorMessage);
    });
  }

  onClickClose() {
    this.props.closeJsonTableViewModal();
    const {
      dispatch,
      config: {
        onCloseAction = "",
      } = {}
    } = this.props;
    if (onCloseAction) {
      dispatch({ type: onCloseAction });
    }
  }
  getDate(dateObj) {
    let date = new Date(dateObj).toString();
    return date;
  }

  render() {
    const { data = {}, meta: { prevAlertIds = [], prevCVEIds = [], isPartialData } = {}, alertsByHost = Map(), cveByHost = Map(), isToasterVisible, toaster, correlatedAlert } = this.props;
    let prevAlerts, prevCVEs, showCorrelation, alertModalTabClass;
    if (data._source) {
      const currentHost = data._source.host;
      const hostAlerts = alertsByHost.get(currentHost);
      prevAlerts = prevAlertIds.map(el => hostAlerts.get('index')[el]);
      showCorrelation = prevAlerts && prevAlerts.length > 0;
      alertModalTabClass = classnames('alert-modal-tab-view', {
        partial: showCorrelation,
      });
      const hostCVEs = cveByHost.get(currentHost);
      prevCVEs = prevCVEIds.map(el => hostCVEs.get('index')[el]);
    }
    const correlationData = {
      alerts: prevAlerts,
      cve: correlatedAlert,
    };
    return (
      <div className="table-json-view-modal-wrapper">
        <div className="table-json-view-modal">
          <OutsideClickHandler onOutsideClick={this.onClickClose}>
            <div className={`modal-container ${this.props.isSideNavCollapsed ? 'collapse-fixed-panel' : 'expand-fixed-panel'}`}>
              <div className="modal-body tabs-wrapper">
                <div className={alertModalTabClass}>
                  <Tabs
                    data={data}
                    partial={showCorrelation}
                    saveClusteringRule={this.saveClusteringRule}
                    unmaskDocs={this.unmaskDocs}
                    maskDocs={this.maskDocs}
                    toaster={toaster}
                    onClickClose={this.onClickClose}
                  />
                </div>
                {showCorrelation && <div className="alert-modal-chart-view">
                  <div className="alert-modal-title"> 警报关联 </div>
                  <div className="alert-modal-chart">
                    <AlertCorrelationView
                      data={correlationData}
                      loading={isPartialData}
                    />
                  </div>
                </div>}
              </div>
            </div>
          </OutsideClickHandler>
        </div>
        {isToasterVisible && <NotificationToaster />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const modalData = state.get('tableJSONViewData');
  const originalAlertData = state.get('alertIndex', {});
  let data = modalData;
  let meta = {};
  if (modalData.data) {
    data = modalData.data;
    meta = modalData.meta || {};
  }
  const {
    _id: alertId,
    _source: {
      correlated_alerts: correlatedAlertsExpanded,
    },
  } = data;

  // Commit 4e6c20da19187236bb73382035a39aee2c88c286 changed the way data
  // is displayed on the modal. Instead of showing a copy of alert data,
  // it dynamically fetches original alert from the alert index which
  // keeps updating based on the polling interval.
  // Because of this change, when correlated alerts were expanded on the copy
  // of the alert obj, it was not being show in the modal.
  // Hence we have to override the field correlated_alerts which is quick hack
  // until we find a better alternative.

  let originalData = {};
  if (originalAlertData[alertId]) {
    originalData = {
      ...originalAlertData[alertId],
      _source: {
        ...originalAlertData[alertId]._source,
        correlated_alerts: correlatedAlertsExpanded,
      },
    };
  } else {
    // In case the data is not of type alert (for CVE, Complaiance etc, 
    // we don't look up the alert index. We pass the data as it is
    originalData = data;
  }
  return {
    data: originalData,
    meta,
    config: modalData.config || {},
    isSideNavCollapsed: state.get('isSideNavCollapsed'),
    alertsByHost: state.get('alerts_by_host'),
    cveByHost: state.get('cve_by_host'),
    isToasterVisible: state.get('isToasterVisible'),
    correlatedAlert: state.getIn(['correlatedData', 'data'])
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({
      unmaskAlertRuleAction,
      closeJsonTableViewModal,
      saveClusteringRuleAction,
      maskDocsAction,
      toaster,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TableJSONViewModal);
