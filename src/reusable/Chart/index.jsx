import { useMemo } from "react";
import appleStock from "@visx/mock-data/lib/mocks/appleStock";
import { LinearGradient } from "@visx/gradient";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { TooltipWithBounds, useTooltip, defaultStyles } from "@visx/tooltip";
import { scaleBand, scaleLinear } from "@visx/scale";
import { localPoint } from "@visx/event";
import useMeasure from "react-use-measure";
import { timeFormat } from "d3-time-format";

const data = appleStock.slice(0, 31);

const getYValue = (d) => d.close;

const getXValue = (d) => d.date;

const tooltipStyles = {
  ...defaultStyles,
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
  padding: "5px",
  borderRadius: 5,
  background: "#2D3D52",
  color: "white",
  fontSize: "8px",
};

const margin = 25;

const Chart = () => {
  const [ref, bounds] = useMeasure();

  const width = bounds.width || 100;
  const height = bounds.height || 100;

  const innerWidth = width - margin;
  const innerHeight = height - margin;

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip();

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [margin, innerWidth],
        domain: data.map(getXValue),
        padding: 0.3,
      }),
    [innerWidth]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight, margin],
        domain: [
          Math.min(...data.map(getYValue)) - 1,
          Math.max(...data.map(getYValue)) + 1,
        ],
      }),
    [innerHeight]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "323px",
          minWidth: "300px",
        }}
        ref={ref}
      >
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <LinearGradient
            radius={180}
            from="#0575E6"
            to="#021B79"
            id="gradient-blue"
          />
          ;
          <Group>
            {data.map((d) => {
              const xValue = getXValue(d);
              const barWidth = xScale.bandwidth();
              const barHeight = innerHeight - (yScale(getYValue(d)) ?? 0);
              const barX = xScale(xValue);
              const barY = innerHeight - barHeight;

              return (
                <Bar
                  key={`bar-${xValue}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="url(#gradient-blue)"
                  rx={7}
                  onMouseMove={(event) => {
                    const point = localPoint(event);

                    if (!point) return;

                    showTooltip({
                      tooltipData: d,
                      tooltipTop: point.y,
                      tooltipLeft: point.x,
                    });
                  }}
                  onMouseLeave={() => hideTooltip()}
                />
              );
            })}
          </Group>
          <Group>
            <AxisBottom
              top={innerHeight}
              scale={xScale}
              tickFormat={(date) => timeFormat("%m-%d")(new Date(date))}
            />
          </Group>
          <Group>
            <AxisLeft left={margin} scale={yScale} />
          </Group>
          {tooltipData && (
            <g>
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                stroke="#056DDD"
                strokeOpacity={1}
                strokeWidth={8}
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                width={6}
                height={6}
                fill="#2D3D52"
                pointerEvents="none"
              />
            </g>
          )}
        </svg>

        {tooltipData ? (
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
            style={tooltipStyles}
          >
            <b>{`$${getYValue(tooltipData)}`}</b>
            {`${timeFormat("%d.%m.%Y")(new Date(getXValue(tooltipData)))}`}
          </TooltipWithBounds>
        ) : null}
      </div>
    </div>
  );
};

export default Chart;
