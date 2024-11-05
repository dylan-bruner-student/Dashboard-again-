const data = [
    { Day: "Monday", Punchouts: 1 },
    { Day: "Tuesday", Punchouts: 5 },
    { Day: "Wednesday", Punchouts: 3 },
    { Day: "Thursday", Punchouts: 9 },
    { Day: "Friday", Punchouts: 4 },
];

let myChart = new Chart(
    document.getElementById('weeklyActivity'),
    {
        type: 'bar',
        data: {
            labels: data.map(row => row.Day),
            datasets: [
                {
                    label: 'Weekly Punchouts',
                    data: data.map(row => row.Punchouts),
                    tension: 0.1
                }
            ]
        },
        options: {
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
        }
    }
);

setInterval(() => {
    const newData = [
        { Day: "Monday", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "Tuesday", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "Wednesday", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "Thursday", Punchouts: Math.floor(Math.random() * 10) + 1 },
        { Day: "Friday", Punchouts: Math.floor(Math.random() * 10) + 1 },
    ];

    myChart.data.datasets[0].data = newData.map(row => row.Punchouts);
    myChart.update();
}, 1000);