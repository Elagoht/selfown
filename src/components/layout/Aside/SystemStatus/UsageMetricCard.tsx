import Convert from "@/utility/Convert"
import { FC } from "react"

type UsageMetricCardProps = {
  name: string
  metric: UsageMetrics
  convertTo?: "MB" | "GB"
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
      convert = (bytes: number) => String(bytes)
  }

  return <div className="flex flex-col items-center justify-center gap-2">
    <h1 className="font-bold">
      {name}
    </h1>

    <div className="w-20 h-4 relative rounded-full overflow-hidden">
      <div className="w-full h-full bg-white/20">
        <div
          className="h-full bg-white/90 transition-all duration-1000"
          style={{ width: `${metric.percentage}%` }}
        />
      </div>

      <b className="absolute inset-0 flex items-center justify-center
        text-xs mix-blend-difference"
      >
        {metric.percentage}%
      </b>
    </div>

    <b className="text-xs">
      {convert(metric.used)} / {convert(metric.total)} {convertTo}
    </b>
  </div>
}

export default UsageMetricCard