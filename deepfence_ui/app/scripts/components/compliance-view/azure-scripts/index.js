/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { ComplianceStats } from '../compliance-stats';
import ComplianceTable from '../compliance-table';

export const AzureTerraFormScript = withRouter(props => {
  const [collapsed, setCollapsed] = useState(true);
  const terraformLink = "https://community.deepfence.io/threatmapper/docs/v1.5/cloudscanner/azure";

  return (
    <div
      style={{
        paddingTop: '8px',
      }}
    >
      <h5
        style={{
          cursor: 'pointer',
          color: 'white',
          justifyContent: 'flex-start',
          marginBottom: 0,
        }}
        onClick={() => setCollapsed(!collapsed)}
        className="name heading"
      >
        {collapsed ? (
          <i className="fa fa-chevron-right" />
        ) : (
          <i className="fa fa-chevron-down" />
        )}
        &nbsp;&nbsp; Setup instructions
      </h5>
      {!collapsed ? (
        <div
          style={{
            paddingLeft: '16px',
            paddingRight: '16px',
            backgroundColor: '#141414',
          }}
        >
          <div style={{ paddingTop: '17px' }}>
            <p>
              使用下面的代码示例在单个订阅的Terraform部署合规性检查扫描器。
              <br/>
              <a target="_blank" rel="noreferrer" href={terraformLink}>{terraformLink}</a>
            </p>
          </div>
        </div>
      ) : null}
      <ComplianceStats />
      <ComplianceTable cloudType="azure" />
    </div>
  );
});
