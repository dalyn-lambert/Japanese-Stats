// https://github.com/airbnb/visx/issues/1637#issuecomment-1587440404
'use client';
import { StudyCategory } from '@/lib/types';
import { AxisBottom } from '@visx/axis';
import { localPoint } from '@visx/event';
import { Grid } from '@visx/grid';
import { Group } from '@visx/group';
import { LegendOrdinal } from '@visx/legend';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarStack } from '@visx/shape';
import { defaultStyles, useTooltip, useTooltipInPortal } from '@visx/tooltip';

const data = [
  {
    date: '2023-08-12',
    聴く: '100',
    読書: '20',
    観る: '20',
    ゲーム: '0',
    話す: '0',
  },
  {
    date: '2023-08-13',
    聴く: '60',
    読書: '15',
    観る: '40',
    ゲーム: '5',
    話す: '0',
  },
  {
    date: '2023-08-14',
    聴く: '10',
    読書: '0',
    観る: '20',
    ゲーム: '0',
    話す: '30',
  },
  {
    date: '2023-08-15',
    聴く: '75',
    読書: '13',
    観る: '20',
    ゲーム: '0',
    話す: '0',
  },
];

interface StudyDay {
  date: string;
  話す: string;
  聴く: string;
  読書: string;
  ゲーム: string;
  観る: string;
  書く: string;
}

const exData = [
  {
    date: '2011-10-12',
    'New York': '61.8',
    'San Francisco': '61.5',
    Austin: '75.3',
  },
];

type ToolipData = {
  category: string;
  time: string;
};

type BarStackProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

const defaultMargin = {
  top: 10,
  right: 0,
  bottom: 0,
  left: 0,
};

const tooltipStyles = {
  ...defaultStyles,
  minWidth: 50,
  backgroundColor: 'rgba(0,0,0,0.9)',
};

const background = '#eaedff';

const keys = Object.keys(data[0]).filter((d) => d !== 'date') as StudyCategory[];

const studyTotals = data.reduce((allTotals, currentDate) => {
  const totalStudy = keys.reduce((dailyTotal, k) => {
    // TS error, come back to this later
    dailyTotal += Number(currentDate[k]);
    return dailyTotal;
  }, 0);
  allTotals.push(totalStudy);
  return allTotals;
}, [] as number[]);

// accessors
// TS error, come back to this later
const getDate = (d) => d.date;

// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2,
});

const timeScale = scaleLinear<number>({
  domain: [0, Math.max(...studyTotals)],
});

const colorScale = scaleOrdinal<StudyCategory, string>({
  domain: keys,
  range: ['#52489C', '#CE6D8B', '#FA8334', '#018E42', '#247BA0'],
});

let tooltipTimeout: number;

export default function BarGraphStack({ width, height, margin = defaultMargin }: BarStackProps) {
  const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } = useTooltip<TooltipData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // TooltipInPortal is rendered in a separate child of <body /> and positioned
    // with page coordinates which should be updated on scroll. consider using
    // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
    scroll: true,
  });

  if (width < 10) return null;
  // bounds
  const xMax = width;
  const yMax = height - margin.top - 100;

  dateScale.rangeRound([0, xMax]);
  timeScale.range([yMax, 0]);

  return width < 10 ? null : (
    <div style={{ position: 'relative' }}>
      <svg ref={containerRef} width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <Grid
          top={margin.top}
          left={margin.left}
          xScale={dateScale}
          yScale={timeScale}
          width={xMax}
          height={yMax}
          stroke='black'
          strokeOpacity={0.1}
          xOffset={dateScale.bandwidth() / 2}
        />
        <Group top={margin.top}>
          <BarStack<StudyDay, StudyCategory>
            // TS error
            data={data}
            keys={keys}
            x={getDate}
            xScale={dateScale}
            yScale={timeScale}
            color={colorScale}
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    x={bar.x}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width}
                    fill={bar.color}
                    onMouseLeave={() => {
                      tooltipTimeout = window.setTimeout(() => {
                        hideTooltip();
                      }, 200);
                    }}
                    onMouseMove={(event) => {
                      if (tooltipTimeout) clearTimeout(tooltipTimeout);
                      // TooltipInPortal expects coordinates to be relative to containerRef
                      // localPoint returns coordinates relative to the nearest SVG, which
                      // is what containerRef is set to in this example.
                      const eventSvgCoords = localPoint(event);
                      const left = bar.x + bar.width / 2;
                      showTooltip({
                        tooltipData: bar,
                        tooltipTop: eventSvgCoords?.y,
                        tooltipLeft: left,
                      });
                    }}
                  />
                ))
              )
            }
          </BarStack>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          scale={dateScale}
          // tickFormat={formatDate}
          // change these later
          stroke={'#a44afe'}
          tickStroke={'#a44afe'}
          tickLabelProps={{
            fill: '#a44afe',
            fontSize: 11,
            textAnchor: 'middle',
          }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: margin.top / 2 - 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '14px',
        }}
      >
        <LegendOrdinal scale={colorScale} direction='row' labelMargin='0 15px 0 0' />
      </div>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          <div style={{ color: colorScale(tooltipData.key) }}>
            <strong>{tooltipData.key}</strong>
          </div>
          <div>{tooltipData.bar.data[tooltipData.key]}℉</div>
          <div>
            <small>{getDate(tooltipData.bar.data)}</small>
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
}
