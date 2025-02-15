import { ReportHandler } from "web-vitals";

const reporWebVitals = (onPerfentry?: ReportHandler) => {
  if (onPerfentry && onPerfentry istanceof Function) {
    import ('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reporWebVitals
