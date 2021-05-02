//Traffic Options
trafficBar = document.querySelectorAll(".traffic-nav-link");
const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update({
      duration: 800,
      easing: 'linear',
    });
  };

trafficBar.forEach(navItem => {
    navItem.addEventListener("click", function(){
        trafficBar.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        if (navItem.textContent === "Hourly" ){
            updateChart(trafficChart, trafficDataHourly);
            
        }
        else if (navItem.textContent === "Daily" ){
            updateChart(trafficChart, trafficDataDaily);
            
        }
        else if (navItem.textContent === "Weekly" ){
            updateChart(trafficChart, trafficDataWeekly);
            
        }
        else if (navItem.textContent === "Monthly" ){
            updateChart(trafficChart, trafficDataMonthly);
        }
    });
});


