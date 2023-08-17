import isNil from 'lodash/isNil';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './compliance-stats.module.scss';

export const ComplianceStats = () => {
  const accountList = useSelector(state => state.get('cloud_credentials'));
  const totalAccounts =
    accountList?.nodes?.reduce?.((prev, node) => {
      if (Array.isArray(node?.nodes)) {
        return prev + node.nodes.length;
      }
      return prev + 1;
    }, 0) ?? 0;

  return (
    <div className={styles.container}>
      <div className={styles.statsBox}>
        <div className="name heading">总账户数量</div>
        <div className={styles.statsBoxBody}>
          {totalAccounts}
        </div>
      </div>
      <div className={styles.statsBox}>
        <div className="name heading">合规性 %</div>
        <div className={styles.statsBoxBody}>
          {!isNil(accountList?.compliance_percentage)
            ? `${Number(accountList?.compliance_percentage).toFixed(0)} %`
            : '-'}
        </div>
      </div>
      <div className={styles.statsBox}>
        <div className="name heading">总扫描数量</div>
        <div className={styles.statsBoxBody}>
          {!isNil(accountList?.total_scans) ? accountList?.total_scans : '-'}
        </div>
      </div>
      <div className={styles.statsBox}>
        <div className="name heading">云资源总数</div>
        <div className={styles.statsBoxBody}>
          {!isNil(accountList?.total_resources)
            ? accountList?.total_resources
            : '-'}
        </div>
      </div>
    </div>
  );
};
