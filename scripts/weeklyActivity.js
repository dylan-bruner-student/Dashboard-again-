const gradient = window['chartjs-plugin-gradient'];

const barLinePlugin = {
    id: 'barLinePlugin',
    afterDatasetsDraw(chart) {
        const { ctx, chartArea: { top, bottom }, scales: { x, y } } = chart;

        // Set the style for the line
        ctx.strokeStyle = 'rgb(66, 255, 132)';
        ctx.lineWidth = 2;

        chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);

            meta.data.forEach((bar, index) => {
                const barTop = bar.y;
                const barLeft = bar.x - bar.width / 2;
                const barRight = bar.x + bar.width / 2;

                // Draw a line across the top of each bar
                ctx.beginPath();
                ctx.moveTo(barLeft, barTop);
                ctx.lineTo(barRight, barTop);
                ctx.stroke();
            });
        });
    }
};

const data = [
    { Day: "Mon", Punchouts: 0 },
    { Day: "Tue", Punchouts: 1 },
    { Day: "Wed", Punchouts: 2 },
    { Day: "Thu", Punchouts: 3 },
    { Day: "Fri", Punchouts: 4 },
];

const ctx = document.getElementById('weeklyActivity').getContext('2d');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(row => row.Day),
        datasets: [
            {
                label: 'Weekly Punchouts',
                data: data.map(row => row.Punchouts),
                tension: 0.1,
                borderColor: 'rgb(66, 255, 132)',
                borderWidth: {
                    top: 2,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                gradient: {
                    backgroundColor: {
                        axis: 'y',
                        colors: {
                            0: 'rgb(28, 28, 31)',
                            100: 'rgb(50, 186, 98)'
                        }
                    },
                }
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: false
            },
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'start',
                align: 'top',
                formatter: Math.round,
                color: '#fff',
                offset: -6,
                font: {
                    weight: 'bold'
                }
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        responsive: true,
        animation: {
            duration: 250,
        },
        transitions: {
            active: {
                animation: {
                    duration: 250
                }
            }
        },
    },
    plugins: [ChartDataLabels, gradient]
});


setInterval(() => {
    const newData = [
        { Day: "M", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "T", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "W", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "T", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "F", Punchouts: Math.floor(Math.random() * 10) + 1 },
    ];

    myChart.data.datasets[0].data = newData.map(row => row.Punchouts);
    myChart.update();
}, 1000);