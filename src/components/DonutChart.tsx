import { DonutChartProps, StudyStat } from '@/lib/types';
import { buildTimeArray, getColorForChart, sumArray, toHoursAndMinutes } from '@/lib/utils';
import { Group } from '@visx/group';
import { Pie } from '@visx/shape';

export default function DonutChart({ width, height, data, donutThickness }: DonutChartProps) {
  const getTime = (d: StudyStat) => d.time;

  const centerY = height / 2;
  const centerX = width / 2;
  const radius = Math.min(width, height) / 2;
  const top = centerY;
  const left = centerX;
  const background = 'rgb(241 245 249)';

  // get total study time to display in center of chart
  const timeArray = data.map(buildTimeArray);
  const totalTime = toHoursAndMinutes(sumArray(timeArray));
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
    <div className='grid place-items-center'>
      {/* ref={containerRef} */}
      <div className='absolute grid place-items-center'>{totalTime === '0分' ? 'No study time' : totalTime}</div>
      <svg width={width} height={height}>
        {/* <rect x={0} y={0} width={width} height={height} fill={background} /> */}
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
                const arcPath: string | undefined | null = pie.path(arc);
                const arcFill = getColorForChart(category);
                return (
                  <g key={`arc-${category}-${index}`}>
                    {/* @ts-ignore */}
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
