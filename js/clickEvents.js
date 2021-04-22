trafficBar = document.querySelectorAll(".traffic-nav-link");

trafficBar.forEach(navItem => {
    navItem.addEventListener("click", function(){
        trafficBar.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        if (navItem.textContent === "Hourly" ){
            const updateChart = (trafficChart, hourlyTrafficData) => {
                trafficChart.data.datasets[0].data = dailyTrafficData.datasets[0].data;
                trafficChart.update();
              };
        }
        else if (navItem.textContent === "Daily" ){
            const updateChart = (trafficChart, dailyTrafficData) => {
                trafficChart.data.datasets[0].data = dailyDataHourly.datasets[0].data;
                trafficChart.update();
              };
            
        }
        else if (navItem.textContent === "Weekly" ){
            const updateChart = (trafficChart, weeklyTrafficData) => {
                trafficChart.data.datasets[0].data = weeklyDataHourly.datasets[0].data;
                trafficChart.update();
              };
            
        }
        else if (navItem.textContent === "Monthly" ){
            const updateChart = (trafficChart, monthlyTrafficData) => {
                trafficChart.data.datasets[0].data = trafficDataHourly.datasets[0].data;
                trafficChart.update();
              };  
        }
    });
});


