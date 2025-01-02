import Convert from "@/utility/Convert"
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js"
import { FC } from "react"
import { Doughnut } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip)

type UsageMetricCardProps = {
  name: string
  metric: UsageMetrics
  convertTo: "MB" | "GB" | "None"
}

const UsageMetricCard: FC<UsageMetricCardProps> = ({
  name, metric, convertTo
}) => {
  let convert: (bytes: number) => string
  switch (convertTo) {
    case "MB":
      convert = Convert.bytesToMB
      break
    case "GB":
      convert = Convert.bytesToGB
      break
    default:
      convert = (bytes: number) => `${bytes}`
  }

  const chartData = {
    datasets: [{
      data: [metric.used, metric.total - metric.used],
      backgroundColor: [
        "rgba(255, 255, 255, 0.9)",  // Used space - white
        "rgba(255, 255, 255, 0.2)",  // Free space - transparent white
      ],
      borderWidth: 0,
      cutout: "75%"
    }],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }

  return <div className="flex flex-col items-center justify-center
    bg-purple-500 p-4 rounded-3xl shadow-md text-purple-100"
  >
    <h1 className="text-xl font-bold">{name}</h1>

    <div className="w-32 h-32 relative">
      <Doughnut data={chartData} options={chartOptions} />

      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm text-center mt-3">
          {convert(metric.used)
          }<br /> {convert(metric.total)
          }<br /> ({metric.percentage
          }%)
        </p>
      </div>
    </div>
  </div>
}

export default UsageMetricCard