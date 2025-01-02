import Convert from "@/utility/Convert"
import { FC } from "react"

type UsageMetricCardProps = {
  name: string
  metric: UsageMetrics
  convertTo?: "MB" | "GB",
  icon: React.ReactNode
}

const UsageMetricCard: FC<UsageMetricCardProps> = ({
  name, metric, convertTo, icon
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
      convert = (bytes: number) => String(bytes)
  }

  return <div className="flex items-center gap-4 w-full">
    <div className="flex flex-col items-center justify-center w-12">
      <small className="font-bold">
        {name}
      </small>

      {icon}
    </div>

    <div className="flex flex-col items-center justify-center gap-2 grow">
      <b className="text-xs">
        {convert(metric.used)} / {convert(metric.total)} {convertTo}
      </b>

      <div className="h-4 relative rounded-full overflow-hidden w-full">
        <div className="w-full h-full bg-white/20">
          <div
            className="h-full transition-all duration-1000"
            style={{
              width: `${metric.percentage}%`,
              backgroundColor: getColor(metric.percentage)
            }}
          />
        </div>

        <b className="absolute inset-0 flex items-center justify-center
          text-xs mix-blend-difference"
        >
          {metric.percentage}%
        </b>
      </div>
    </div>
  </div>
}

const getColor = (percentage: number) => {
  if (percentage >= 90) {
    const value = (percentage - 90) / 10
    return `rgb(255, ${Math.round(165 * (1 - value))
      },0)`
  } else if (percentage >= 75) {
    const value = (percentage - 75) / 15
    return `rgb(255,${Math.round(255 - (255 - 165) * value)
      },${Math.round(255 * (1 - value))
      })`
  }
  return "rgb(255, 255, 255)"
}

export default UsageMetricCard