const data = [
    { Day: "Monday", Punchouts: 1 },
    { Day: "Tuesday", Punchouts: 5 },
    { Day: "Wednesday", Punchouts: 3 },
    { Day: "Thursday", Punchouts: 9 },
    { Day: "Friday", Punchouts: 4 },
]

new Chart(
    document.getElementById('weeklyActivity'),
    {
        type: 'bar',
        data: {
            labels: data.map(row => row.Day),
            datasets: [
                {
                    label: 'Weekly Punchouts',
                    data: data.map(row => row.Punchouts)
                }
            ]
        }
    }
)