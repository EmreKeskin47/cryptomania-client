import React from "react";
import ReactApexChart from "react-apexcharts";

const CandleStickChart = (props) => {
    const { data, title } = props;
    const candleData = [];
    for (let i = 0; i < data.length; i++) {
        let date = new Date(data[i][0]);
        date.setHours(date.getHours() + 3);
        candleData.push({
            x: date,
            y: [data[i][1], data[i][2], data[i][3], data[i][4]],
        });
    }
    const series = [
        {
            data: candleData,
        },
    ];
    const options = {
        chart: {
            type: "candlestick",
        },

        title: {
            text: `${title} in last 30 minutes`,
            align: "left",
        },
        xaxis: {
            type: "datetime",
        },

        theme: {
            mode: "dark",
        },
        tooltip: {
            x: {
                format: "HH:mm",
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={"230"}
                width={"100%"}
            />
        </div>
    );
};

export default CandleStickChart;
