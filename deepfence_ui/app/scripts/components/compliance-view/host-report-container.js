/* eslint-disable */
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { nodeFilterValueSelector } from '../../selectors/node-filters';
import HostReport from './host-report';
import {
  reportGenerateAction,
  reportDownloadStatusAction,
  downloadReportAction,
  toaster,
} from '../../actions/app-actions';

const HostReportContainer = props => {
  const dispatch = useDispatch();

  const handleDownload = async params => {
    const { scanId = '', nodeType = '' } = params;

    const apiParams = {
      action: 'download_report',
      node_type: nodeType,
      add_hist: false,
      action_args: {
        resources: [
          {
            type: 'compliance',
            filter: {
              scan_id: scanId,
            },
          },
        ],
        filters: {
          type: [nodeType],
        },
      },
    };

    const generateReport = dispatch(reportGenerateAction(apiParams));
    dispatch(toaster('生成报告中...'));
    generateReport.then(res => {
      if (res.success) {
        const fetchReportStatus = dispatch(reportDownloadStatusAction());
        fetchReportStatus.then(async res => {
          if (res.data[0]) {
            let tries = 0;
            const totalTries = 3;
            while (tries < totalTries) {
              // ==========================
              await new Promise(resolve => setTimeout(resolve, 2000));
              const downloadReport = dispatch(
                downloadReportAction({
                  path: `/data/xlsx-report/${res.data[0].report_id}/report.xlsx`,
                })
              );
              await downloadReport.then(res => {
                if (!res) {
                  dispatch(toaster('正在下载 ...'));
                  tries = 3;
                } else if (tries + 1 < totalTries) {
                  dispatch(toaster('文件未生成，重试中 ..'));
                  tries = tries + 1;
                } else {
                  dispatch(toaster('文件不可用，请稍后重试'));
                  dispatch(toaster('文件生成失败，请稍后重试'));
                  tries = tries + 1;
                }
              });
              // ==========================
            }
          } else {
            dispatch(toaster('报告生成状态失败'));
          }
        });
      } else {
        dispatch(toaster('生成失败'));
      }
    });
  };

  const { reportView, checkType, ...rest } = props;
  const { isToasterVisible } = props;
  return (
    <HostReport
      checkType={checkType}
      nodeId={props.nodeId}
      handleDownload={params => handleDownload(params)}
      isToasterVisible={isToasterVisible}
      {...rest}
    />
  );
};

function mapStateToProps(state) {
  const reportView = state.getIn(['compliance', 'host_report_view']);
  const savedTablePageNumber = state.getIn([
    'compliance',
    'host_report_table',
    'state',
    'page_number',
  ]);
  return {
    reportView,
    savedTablePageNumber,
    filterValues: nodeFilterValueSelector(state),
    isToasterVisible: state.get('isToasterVisible'),
  };
}

export default connect(mapStateToProps, {})(HostReportContainer);
