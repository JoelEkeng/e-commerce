"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", Computing: 186, SmartPhone: 80, Appliances: 100 },
  { month: "February", Computing: 305, SmartPhone: 200, Appliances: 150 },
  { month: "March", Computing: 237, SmartPhone: 120, Appliances: 200 },
  { month: "April", Computing: 73, SmartPhone: 190, Appliances: 100 },
  { month: "May", Computing: 209, SmartPhone: 130, Appliances: 150 },
  { month: "June", Computing: 214, SmartPhone: 140, Appliances: 200 },
]

const chartConfig = {
  Computing: {
    label: "Computing",
    color: "#2563eb",
  },
  SmartPhone: {
    label: "SmartPhone",
    color: "#60a5fa",
  },
  Appliances: {
    label: "Appliances",
    color: "#60c5da",
  },
} satisfies ChartConfig

export function BarCharts() {
  return (
    <ChartContainer config={chartConfig} className="max-h-[540px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Computing" fill="var(--color-Computing)" radius={4} />
        <Bar dataKey="SmartPhone" fill="var(--color-SmartPhone)" radius={4} />
        <Bar dataKey="Appliances" fill="var(--color-Appliances)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
