// src/components/dashboard/performance-chart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PerformanceData {
  year: number;
  score: number;
  type: "past" | "predicted";
}

interface PerformanceChartProps {
  data: PerformanceData[];
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const pastData = data.filter((d) => d.type === "past");
  const lastPastPoint = pastData[pastData.length - 1];
  const predictedData = [lastPastPoint, ...data.filter((d) => d.type === "predicted")];


  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickFormatter={(tick) => tick.toString()}
          allowDuplicatedCategory={false}
          data={data}
        />
        <YAxis label={{ value: "Score (%)", angle: -90, position: "insideLeft" }} />
        <Tooltip
          formatter={(value: number, name: string, props) => [
            value,
            props.payload.type === "past"
              ? "Past Performance"
              : "Predicted Performance",
          ]}
          labelFormatter={(label) => `Year: ${label}`}
        />
        <Legend />
        <Line
          type="monotone"
          data={pastData}
          dataKey="score"
          stroke="#3F51B5"
          strokeWidth={2}
          name="Past Performance"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          data={predictedData}
          dataKey="score"
          stroke="#3F51B5"
          strokeWidth={2}
          strokeDasharray="5 5"
          name="Predicted Performance"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
