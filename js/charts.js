let trafficCanvas = document.getElementById("traffic-chart");
let dailyCanvas = document.getElementById("daily-chart");
let mobileCanvas = document.getElementById("mobile-chart");

//Chart inputs

//Traffic chart variabes
var hourlyTrafficData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

var dailyTrafficData =[1200, 1650, 1300, 8000, 1900, 2150, 1950, 2650, 3150, 1900, 3000];

var weeklyTrafficData = [1900, 3200, 3000, 4000, 5000, 3450, 2450, 3650, 4550, 3000, 5000];

var monthlyTrafficData = [1750, 11250, 11000, 1000, 11500, 11750, 11250, 11850, 12250, 1500, 12500]

let trafficDataHourly = {
    labels: ["13-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: hourlyTrafficData,
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }

}

// Daily Chart variables
const dailyData = {
    labels: ["S", "M", "T", "W", "Th", "F", "Su"],
    datasets: [{
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: "#7477BF",
        borderWidth: 1
    }]
};


const dailyOptions = {
    scale: {
        y:{
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        data: [2000, 550, 500],
        backgroundColor: [
            "#7477BF",
            "#78CF82",
            "#51B6C8"
        ]
    }]
};

const mobileOptions= {
    plugins: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold"
            }
        }
    }
};



//Charts
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions
});

let dailyChart = new Chart(dailyCanvas,{
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

let mobileChart = new Chart(mobileCanvas, {
    type: "doughnut",
    data: mobileData,
    options: mobileOptions
});

