trafficBar = document.querySelectorAll(".traffic-nav-link");

trafficBar.forEach(navItem => {
    navItem.addEventListener("click", function(){
        trafficBar.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        // if(this === trafficbar[0]){
        //     let trafficChart = new Chart(trafficCanvas, {
        //         type: 'line',
        //         data: trafficDataHourly,
        //         options: trafficOptions
        //     });
        // }
        // else if(this === trafficBar[1]){
        //     let trafficChart = new Chart(trafficCanvas, {
        //         type: 'line',
        //         data: trafficDataDaily,
        //         options: trafficOptions
        //     });
        // }

        // else if(this === trafficBar[2]){
        //     let trafficChart = new Chart(trafficCanvas, {
        //         type: 'line',
        //         data: trafficDataWeekly,
        //         options: trafficOptions
        //     });
        // }

        // else if(this === trafficBar[3]){
        //     let trafficChart = new Chart(trafficCanvas, {
        //         type: 'line',
        //         data: trafficDataMonthly,
        //         options: trafficOptions
        //     });
        // }
    });
});