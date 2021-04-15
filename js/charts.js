let trafficCanvas = document.getElementById("traffic-chart");
let dailyCanvas = document.getElementById("daily-chart");

//Chart inputs
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1
    }]
};

//Traffic chart variabes
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration:0
    },
    scale: {
        y: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    plugins: {
        legend: {
            display: false
        }
    }
};



const dailyData = {
    labels: ["S", "M", "T", "W", "Th", "F", "Su"],
    datasets: [{
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: "#7477BF",
        borderWidth: 1
    }]
};

// Daily Chart variables
const dailyOptions = {
    scale: {
        y:[{
            beginAtZero: true
        }]
    },
    plugins: {
        legend: {
            display: false
        }
    }
};


//Charts
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

let dailyChart = new Chart(dailyCanvas,{
    type: 'bar',
    data: dailyData,
    options: dailyOptions
})