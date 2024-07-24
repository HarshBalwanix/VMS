// ChartComponents.js
import {
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
} from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  BarChartContainer,
  ChartContainer,
} from "../ui/chart";

export function LinechartChart({ data }) {
  return (
    <div className="border items-center">
      <ChartContainer
        config={{
          userCount: { label: "User Count", color: "#8884d8" },
        }}
      >
        <LineChart
          accessibilityLayer
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="title"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="userCount"
            type="natural"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

export function BarchartChart({ data }) {
  return (
    <div className="border">
      <BarChartContainer
        config={{
          userCount: {
            label: "Registered Users : ",
            color: "#8884d8",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="title"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="userCount" fill="#2B9D91" radius={8} />
        </BarChart>
      </BarChartContainer>
    </div>
  );
}

export function PiechartChart({ data }) {
  // Enhanced color mapping with more options
  const colorMapping = {
    red: "#ff0000",
    blue: "#E76E50",
    green: "#00ff00",
    yellow: "#ffff00",
    purple: "#E76E50",
    // Add more colors as needed
  };

  // Function to generate a color if not found in colorMapping
  const generateColor = (fullName) => {
    let hash = 0;
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 100%, 70%)`;
    return color;
  };

  const chartPieData = data.map((item) => {
    // Attempt to find a color in colorMapping by converting fullName to lowercase
    const colorKey = Object.keys(colorMapping).find(
      (key) => key.toLowerCase() === item.fullName.toLowerCase()
    );
    return {
      ...item,
      // Use the color from colorMapping if found; otherwise, use generateColor
      fill: colorKey ? colorMapping[colorKey] : generateColor(item.fullName),
    };
  });

  return (
    <div className="border">
      <PieChart width={300} height={300}>
        <Pie
          data={chartPieData}
          dataKey="totalWorkedHours"
          nameKey="fullName"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <ChartTooltip />
      </PieChart>
    </div>
  );
}
