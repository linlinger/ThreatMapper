
export const EDGE_ID_SEPARATOR = '---';

// NOTE: Inconsistent naming is a consequence of
// keeping it backwards-compatible with the old URLs.
export const GRAPH_VIEW_MODE = '拓补';
export const TABLE_VIEW_MODE = '网格';

// Named constants to avoid typos that would result in hard-to-detect bugs.
export const BLURRED_EDGES_LAYER = 'blurred-edges';
export const BLURRED_NODES_LAYER = 'blurred-nodes';
export const NORMAL_EDGES_LAYER = 'normal-edges';
export const NORMAL_NODES_LAYER = 'normal-nodes';
export const HIGHLIGHTED_EDGES_LAYER = 'highlighted-edges';
export const HIGHLIGHTED_NODES_LAYER = 'highlighted-nodes';
export const HOVERED_EDGES_LAYER = 'hovered-edges';
export const HOVERED_NODES_LAYER = 'hovered-nodes';

export const CONTENT_INCLUDED = 'content-included';
export const CONTENT_COVERING = 'content-covering';


//
// DeepFence Variables
//
export const CRITICAL_SEVERITY = '严重';
export const CRITICAL_SEVERITY_CLASS = '严重';
export const HIGH_SEVERITY = '高';
export const HIGH_SEVERITY_CLASS = '高严重性';
export const MEDIUM_SEVERITY = '中';
export const MEDIUM_SEVERITY_CLASS = '中等严重性';
export const LOW_SEVERITY = '低';
export const INFO_SEVERITY = '信息';
export const LOW_SEVERITY_CLASS = '低严重性';
export const INFO_SEVERITY_CLASS = '信息严重性';


export const NETWORK_ANOMALY = 'network_anomaly';
export const SYSTEM_AUDIT = 'system_audit';
export const BEHAVIORAL_ANOMALY = 'behavioral_anomaly';
export const SYSCALL_ANOMALY = 'syscall_anomaly';
export const FILE_ANOMALY = 'file_anomaly';
export const PROCESS_ANOMALY = 'process_anomaly';
export const SE_LINUX_ANOMALY = 'selinux_apparmour_anomaly';
export const CONNECTION_ANOMALY = 'connection_anomaly';
export const CORRELATION_ANOMALY = 'correlation';

export const PROCESSES_RESOURCE = 'processes';
export const FILES_RESOURCE = 'files';
export const NETWORK_RESOURCE = 'network';

export const BEHAVIORAL_ANOMALY_CLASS = 'behavioral-anomaly';


export const CRITICAL_SEVERITY_CHECKBOX = 'critical-severity-checkbox';
export const HIGH_SEVERITY_CHECKBOX = 'high-severity-checkbox';
export const MEDIUM_SEVERITY_CHECKBOX = 'medium-severity-checkbox';
export const LOW_SEVERITY_CHECKBOX = 'low-severity-checkbox';

export const NETWORK_ANOMALY_CHECKBOX = 'network-anomaly-checkbox';
export const BEHAVIORAL_ANOMALY_CHECKBOX = 'behavioral-anomaly-checkbox';
export const SYSTEM_AUDIT_ANOMALY_CHECKBOX = 'system-audit-anomaly-checkbox';
export const SYSCALL_ANOMALY_CHECKBOX = 'syscall-anomaly-checkbox';

export const EMPTY_STATE_TEXT = '无数据';
export const RESPONSE_PENDING_TEXT = '正在获取数据';

export const SEVERITY_RADIO_BUTTON_COLLECTION_HEADING = '请选择严重性';
export const ALERT_TYPE_RADIO_BUTTON_COLLECTION_HEADING = '请选择警告类型';

export const CLOUD_PROVIDER_DROP_DOWN_COLLECTION_HEADING = '请选择云提供商';

export const TOPOLOGY_ID_FOR_CONTAINER = '容器';
export const TOPOLOGY_ID_FOR_HOST = '主机';
export const TOPOLOGY_ID_FOR_PODS = 'pods';
export const LOCAL_NETWORKS_FOR_HOSTS = '本地网络';
export const DESTINATION_IP_KEY_FOR_HOST = '公共IP地址';
