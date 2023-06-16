import { DonutChartProps, StudyStat } from '@/lib/types';
import { getColorForChart } from '@/lib/utils';
import { Group } from '@visx/group';
import { Pie } from '@visx/shape';

export default function DonutChart({ width, height, data }: DonutChartProps) {
  const getTime = (d: StudyStat) => d.time;

  // const defaultMargin = { top: 10, right: 10, bottom: 10, left: 10 };

  // const innerWidth = width - defaultMargin.left - defaultMargin.right;
  // const innerHeight = height - defaultMargin.top - defaultMargin.bottom;

  const centerY = height / 2;
  const centerX = width / 2;
  const radius = Math.min(width, height) / 2;
  const top = centerY;
  const left = centerX;
  const donutThickness = 10;

  return (
    <svg width={width} height={height}>
      <Group top={top} left={left}>
        <Pie
          data={data}
          pieValue={getTime}
          pieSort={null}
          pieSortValues={null}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie) => {
            return pie.arcs.map((arc, index) => {
              const { category } = arc.data;
              const arcPath = pie.path(arc);
              const arcFill = getColorForChart(category);
              return (
                <g key={`arc-${category}-${index}`}>
                  {/* changed type of d to allow null */}
                  <path d={arcPath} fill={arcFill} />
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
}
