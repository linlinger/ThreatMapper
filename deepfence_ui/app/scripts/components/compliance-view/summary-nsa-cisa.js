import React from 'react';
import { connect } from 'react-redux';
import HostReportContainer from './host-report-container';
import ComplianceTotalTestReportContainer from './total-test-report-container';
import injectModalTrigger from '../common/generic-modal/modal-trigger-hoc';
import { dateTimeFormat } from '../../utils/time-utils';

const testValueConfig = [
  {
    display: 'Alarm',
    value: 'alarm',
  },
  {
    display: 'Info',
    value: 'info',
  },
  {
    display: 'Ok',
    value: 'ok',
  },
  {
    display: 'Skip',
    value: 'skip',
  },
];

class CISSummary extends React.PureComponent {
  render() {
    const {
      location: urlLocation,
    } = this.props;
    const data =this.props.chartData?.compliance_scan_status[0]|| [];
    const scanTimeStamp = data && data.time_stamp;
    return (
      <div>
        <div className="chart-wrapper top-wrapper">
          <div className="chart-heading">
            <h4>合规性测试</h4>
            <h5>整体合规性概述</h5>
          </div>
          {scanTimeStamp !== undefined &&
            <div style={{display: 'flex', flexDirection: 'row-reverse', paddingTop: '23px'}}>Last scanned on {dateTimeFormat(scanTimeStamp)}</div>
          }
          <div className="report">
            <div className="total-test-report">
              <ComplianceTotalTestReportContainer
                checkType='nsa-cisa'
                nodeId={this.props.match.params.nodeid}
              />
            </div>
          </div>
        </div>
        <div className="chart-wrapper table-wrapper">
          <div className="table relative table-compliance-cis">
            <HostReportContainer
              checkType='nsa-cisa'
              nodeId={this.props.match.params.nodeid}
              testValueConfig={testValueConfig}
              urlLocation={urlLocation}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chartData: state.get('compliance_chart_data'),
  };
}

export default connect(mapStateToProps)(injectModalTrigger(CISSummary));
