export const POLICY_ACTION_DROPDOWN = {
  heading: '选择操作',
  options: [
    { id: 1, display: '重启', value: 'restart' },
    { id: 2, display: '停止', value: 'stop' },
    { id: 3, display: '暂停', value: 'pause' },
  ],
};

export const NODE_TYPE_DROPDOWN = {
  heading: '选择节点类型',
  options: [
    { id: 1, display: '容器', value: 'container' },
    { id: 3, display: 'Pod', value: 'pod' },
  ],
};

export const ALERT_TYPE_RADIO_BUTTON_COLLECTION = {
  heading: '',
  options: [
    { name: '关键', value: 'critical' },
    { name: '高', value: 'high' },
    { name: '中', value: 'medium' },
    { name: '低', value: 'low' },
  ],
};

export const CLOUD_PROVIDER_DROP_DOWN_COLLECTION = {
  heading: '',
  options: [
    { id: 1, name: '亚马逊AWS', value: 'aws' },
    { id: 2, name: '谷歌云', value: 'gce' },
    { id: 3, name: '微软Azure', value: 'azure' },
  ],
};

export const DURATION_DROPDOWN_COLLECTION = {
  heading: '选择间隔',
  options: [
    {
      id: 1,
      value: '-1',
      time_unit: 'minute',
      display: '实时',
    },
    {
      id: 2,
      value: '5',
      time_unit: 'minute',
      display: '每5分钟',
    },
    {
      id: 3,
      value: '15',
      time_unit: 'minute',
      display: '每15分钟',
    },
    {
      id: 4,
      value: '30',
      time_unit: 'minute',
      display: '每30分钟',
    },
    {
      id: 5,
      value: '60',
      time_unit: 'minute',
      display: '每60分钟',
    },
  ],
};

export const NOTIFICATION_RESOURCE_OPTIONS = [
  {
    label: '漏洞',
    value: 'vulnerability',
  },
  {
    label: '合规检查结果',
    value: 'compliance',
  },
  {
    label: '用户活动',
    value: 'user_activity',
  },
  {
      label: '恶意软件扫描',
    value: 'malware-scan',
  },
  {
    label: '密码密钥扫描',
    value: 'secret-scan',
  },
];

export const NOTIFICATION_RESOURCE_OPTIONS_CLOUDTRAIL = [
  {
    label: '漏洞',
    value: 'vulnerability',
  },
  {
    label: '合规检查结果',
    value: 'compliance',
  },
  {
    label: '用户活动',
    value: 'user_activity',
  },
  {
    label: 'CloudTrail告警',
    value: 'cloudtrail_alert',
  },
  {
    label: '恶意软件扫描',
    value: 'malware-scan',
  },
  {
    label: '密码密钥扫描',
    value: 'secret-scan',
  }
];

export const REGION_OPTIONS = {
  heading: '选择地区',
  options: [
    {
      value: 'us-east-1',
      label: 'us-east-1',
    },
    {
      value: 'us-east-2',
      label: 'us-east-2',
    },
    {
      value: 'us-west-1',
      label: 'us-west-1',
    },
    {
      value: 'us-west-2',
      label: 'us-west-2',
    },
    {
      value: 'af-south-1',
      label: 'af-south-1',
    },
    {
      value: 'ap-east-1',
      label: 'ap-east-1',
    },
    {
      value: 'ap-south-1',
      label: 'ap-south-1',
    },
    {
      value: 'ap-northeast-1',
      label: 'ap-northeast-1',
    },
    {
      value: 'ap-northeast-2',
      label: 'ap-northeast-2',
    },
    {
      value: 'ap-northeast-3',
      label: 'ap-northeast-3',
    },
    {
      value: 'ap-southeast-1',
      label: 'ap-southeast-1',
    },
    {
      value: 'ap-southeast-2',
      label: 'ap-southeast-2',
    },
    {
      value: 'ap-southeast-3',
      label: 'ap-southeast-3',
    },
    {
      value: 'ca-central-1',
      label: 'ca-central-1',
    },
    {
      value: 'eu-central-1',
      label: 'eu-central-1',
    },
    {
      value: 'eu-west-1',
      label: 'eu-west-1',
    },
    {
      value: 'eu-west-2',
      label: 'eu-west-2',
    },
    {
      value: 'eu-west-3',
      label: 'eu-west-3',
    },
    {
      value: 'eu-south-1',
      label: 'eu-south-1',
    },
    {
      value: 'eu-north-1',
      label: 'eu-north-1',
    },
    {
      value: 'me-south-1',
      label: 'me-south-1',
    },
    {
      value: 'me-central-1',
      label: 'me-central-1',
    },
    {
      value: 'sa-east-1',
      label: 'sa-east-1',
    },
    {
      value: 'us-gov-east-1',
      label: 'us-gov-east-1',
    },
    {
      value: 'us-gov-west-1',
      label: 'us-gov-west-1',
    },
  ],
};
