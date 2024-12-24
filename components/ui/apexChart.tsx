'use client'
import { ApexOptions } from "apexcharts";
// import ReactApexChart from "react-apexcharts";


import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
    ssr: false,
    loading: () => <div className="text-white text-[13px]">Loading chart...</div>
})

const ApexChart = ({
    state,
    type,
    height = 350
}: {
    state: {
        options: ApexOptions,
        series: ApexAxisChartSeries | number[]
    },
    type:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap",
    height: number
}) => {
    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type={type} height={height} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default ApexChart;