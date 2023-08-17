import React from 'react';
import { connect } from 'react-redux';
import HostReportContainer from './host-report-container';
import ComplianceTotalTestReportContainer from './total-test-report-container';
import injectModalTrigger from '../common/generic-modal/modal-trigger-hoc';
import { dateTimeFormat } from '../../utils/time-utils';

const testValueConfigCloud = [
  {
    display: '警报',
    value: 'alarm',
  },
  {
    display: '信息',
    value: 'info',
  },
  {
    display: '好',
    value: 'ok',
  },
  {
    display: '跳过',
    value: 'skip',
  },
];

const testValueConfigHosts = [
  {
    display: '信息',
    value: 'info',
  },
  {
    display: '备注',
    value: 'note',
  },
  {
    display: '通过',
    value: 'pass',
  },
  {
    display: '警告',
    value: 'warn',
  },
];

class HIPAASummary extends React.PureComponent {
  render() {
    const {
      location: urlLocation,
    } = this.props;
    const cloudType = window.location.hash.split('/').reverse()[3];
    let scanType = '';
    if(cloudType === 'aws' || cloudType === 'azure' || cloudType === 'gcp') {
      scanType = 'cloud'
    }
    else if(cloudType === 'kubernetes' || cloudType === 'linux') {
      scanType = 'host'
    }
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
            <div style={{display: 'flex', flexDirection: 'row-reverse', paddingTop: '23px'}}>上次扫描于{dateTimeFormat(scanTimeStamp)}</div>
          }
          <div className="report">
            <div className="total-test-report">
              <ComplianceTotalTestReportContainer
                checkType="hipaa"
                nodeId={this.props.match.params.nodeid}
              />
            </div>
          </div>
        </div>
        <div className="chart-wrapper table-wrapper">
          {
            scanType === 'cloud' &&
            <div className="table relative">
              <HostReportContainer
                nodeId={this.props.match.params.nodeid}
                checkType="hipaa"
                testValueConfig={testValueConfigCloud}
                urlLocation={urlLocation}
              />
            </div>
          }
          {
            scanType === 'host' &&
            <div className="table relative">
              <HostReportContainer
                nodeId={this.props.match.params.nodeid}
                checkType="hipaa"
                testValueConfig={testValueConfigHosts}
                urlLocation={urlLocation}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chartData: state.get('compliance_chart_data')
  };
}

export default connect(mapStateToProps)(injectModalTrigger(HIPAASummary));
