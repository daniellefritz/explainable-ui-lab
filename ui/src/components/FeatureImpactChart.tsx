import ReactECharts from 'echarts-for-react';
import type { Explanation } from '../types';

type Props = { exp: Explanation; topK?: number };

export default function FeatureImpactChart({ exp, topK = 12 }: Props) {
  const sorted = [...exp.contributions]
    .sort((a,b) => Math.abs(b.weight) - Math.abs(a.weight))
    .slice(0, topK);

  const yLabels = sorted.map(c => c.feature);
  const values = sorted.map(c => c.weight);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (params: any) => {
        const i = (params[1] ?? params[0]).dataIndex;
        const name = yLabels[i];
        const w = values[i];
        const val = exp.input[name as keyof typeof exp.input];
        const dir = w >= 0 ? '↑ increases' : '↓ decreases';
        return `<b>${name}</b><br/>Value: ${val}<br/>Impact: ${w.toFixed(3)} (${dir})`;
        }
    },
    grid: { left: 140, right: 24, top: 24, bottom: 24 },
    xAxis: {
      type: 'value',
      splitLine: { show: true },
      axisLine: { onZero: true },
      min: (val: {min:number, max:number}) => Math.min(0, val.min),
      max: (val: {min:number, max:number}) => Math.max(0, val.max),
    },
    yAxis: { type: 'category', inverse: true, data: yLabels },
    series: [
      {
        name: 'impact',
        type: 'bar',
        stack: 'impact',
        data: values.map(v => ({
          value: v,
          itemStyle: { color: v >= 0 ? '#E86E47' : '#4E7CF5' },
        })),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: { show: true, position: 'inside', formatter: (d: any) => (d.data?.value ?? d.value).toFixed(2) },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 44 * yLabels.length + 40 }} />;
}
