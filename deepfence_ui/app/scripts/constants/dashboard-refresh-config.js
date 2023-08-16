export const TIME_BOUNDARY_OPTIONS = [
  { label: '前15分钟', value: { number: 15, time_unit: 'minute' } },
  { label: '前30分钟', value: { number: 30, time_unit: 'minute' } },
  { label: '前1小时', value: { number: 1, time_unit: 'hour' } },
  { label: '前4小时', value: { number: 4, time_unit: 'hour'} },
  { label: '前12小时', value: { number: 12, time_unit: 'hour' } },
  { label: '前24小时', value: { number: 24, time_unit: 'hour' } },
  { label: '前一周', value: { number: 7, time_unit: 'day' } },
  { label: '前1月', value: { number: 30, time_unit: 'day' } },
  { label: '前60天', value: { number: 60, time_unit: 'day' } },
  { label: '前90天', value: { number: 90, time_unit: 'day' } },
  { label: '前6个月', value: { number: 6, time_unit: 'month' } },
  { label: '显示全部', value: { number: 0, time_unit: 'all' } }
];

export const REFRESH_INTERVALS_OPTIONS = [
  { label: '5 秒', value: 5},
  { label: '10 秒', value: 10},
  { label: '30 秒', value: 30},
  { label: '45 秒', value: 45},
  { label: '1 分钟', value: 60},
  { label: '5 分钟', value: 5 * 60},
  { label: '15 分钟', value: 15 * 60},
  { label: '30 分钟', value: 30 * 60},
  { label: '1 小时', value: 1 * 60 * 60},
  { label: '2 小时', value: 2 * 60 * 60},
  { label: '12 小时', value: 12 * 60 * 60},
  { label: '1 天', value: 24 * 60 * 60}
];
