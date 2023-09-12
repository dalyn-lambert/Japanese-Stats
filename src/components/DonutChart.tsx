import { DonutChartProps, StudyStat } from '@/lib/types';
import { getColorForChart } from '@/lib/utils';
import { Group } from '@visx/group';
import { Pie } from '@visx/shape';

export default function DonutChart({ width, height, data, donutThickness }: DonutChartProps) {
  const getTime = (d: StudyStat) => d.time;

  const centerY = height / 2;
  const centerX = width / 2;
  const radius = Math.min(width, height) / 2;
  const top = centerY;
  const left = centerX;

  // type TooltipData = {
  //   key: StudyCategory;
  // };

  // const tooltipStyles = {
  //   ...defaultStyles,
  //   minWidth: 50,
  //   // base-gray
  //   backgroundColor: '#B7B6C1',
  // };

  // let tooltipTimeout: number;

  // this is the line of code giving me the error 'TypeError: Cannot read properties of undefined (reading 'prototype')'
  // const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } = useTooltip<TooltipData>();

  // const { containerRef, TooltipInPortal } = useTooltipInPortal({
  //   // TooltipInPortal is rendered in a separate child of <body /> and positioned
  //   // with page coordinates which should be updated on scroll. consider using
  //   // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
  //   scroll: true,
  // });

  return (
    <div style={{ position: 'relative' }}>
      {/* ref={containerRef} */}
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
            // onMouseLeave={() => {
            //   tooltipTimeout = window.setTimeout(() => {
            //     hideTooltip();
            //   }, 200);
            // }}
            // onMouseMove={(event) => {
            //   if (tooltipTimeout) clearTimeout(tooltipTimeout);
            //   // TooltipInPortal expects coordinates to be relative to containerRef
            //   // localPoint returns coordinates relative to the nearest SVG, which
            //   // is what containerRef is set to in this example.
            //   const eventSvgCoords = localPoint(event);
            //   const left = 2;
            //   showTooltip({
            //     tooltipData: 'hello',
            //     tooltipTop: eventSvgCoords?.y,
            //     tooltipLeft: left,
            //   });
            // }}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const { category } = arc.data;
                const arcPath = pie.path(arc);
                const arcFill = getColorForChart(category);
                return (
                  <g key={`arc-${category}-${index}`}>
                    {/* changed type of d to allow null but not undefined */}
                    <path d={arcPath} fill={arcFill} />
                  </g>
                );
              });
            }}
          </Pie>
        </Group>
      </svg>
      {/* {tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          <div className='text-black'>
            <strong>{'Category'}</strong>
          </div>
          <div className='text-black'>{'Time'}</div>
        </TooltipInPortal>
      )} */}
    </div>
  );
}
