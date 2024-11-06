function createPattern() {
    const blobCanvas = document.createElement('canvas');
    blobCanvas.width = 400;
    blobCanvas.height = 300;
    const blobCtx = blobCanvas.getContext('2d');
    blobCtx.fillStyle = "#09d866";
    blobCtx.fillRect(0,0,300,300)

    function drawBlob(x, y, radius, color) {
        blobCtx.beginPath();
        blobCtx.arc(x, y, radius, 0, 2 * Math.PI);
        blobCtx.fillStyle = color;
        blobCtx.filter = 'blur(12px)';
        blobCtx.fill();
        blobCtx.filter = 'none';
    }
    const colors = ['rgba(3, 240, 165, 0.5)', 'rgba(0, 166, 58, 0.5)', 'rgba(13, 239, 113, 0.5)', 'rgba(3, 240, 165, 0.5)'];
    for (let i = 0; i < 250; i++) {
        const x = Math.random() * blobCanvas.width;
        const y = Math.random() * blobCanvas.height;
        const radius = Math.random() * 40 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        drawBlob(x, y, radius, color);
    }

    return blobCtx.createPattern(blobCanvas, 'repeat');
}

const background = createPattern();

const data = [
    { Day: "Mon", Punchouts: 1 },
    { Day: "Tue", Punchouts: 5 },
    { Day: "Wed", Punchouts: 3 },
    { Day: "Thu", Punchouts: 9 },
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
                backgroundColor: background,
                borderRadius: 8,
                borderSkipped: false
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
                display: false
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
    plugins: [ChartDataLabels]
});

/*setInterval(() => {
    const newData = [
        { Day: "M", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "T", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "W", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "T", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "F", Punchouts: Math.floor(Math.random() * 10) + 1 },
    ];

    myChart.data.datasets[0].data = newData.map(row => row.Punchouts);
    myChart.update();
}, 1000);*/