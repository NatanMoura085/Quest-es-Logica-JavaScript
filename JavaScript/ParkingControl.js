let data = new Date();
let Parking = (hours, mins) => {
    hours = Math.round(Math.random() * hours);
    mins = Math.round(Math.random() * mins);
    let formatHrs = (hours < 10 ? "0" : "");
    let formatMin = (mins < 10 ? "0" : "");
    let pm = (hours < 12 ? "AM" : "PM");

    let proF = Math.floor(Math.random() * 100)

    if ((hours >= 5 && hours <= 11) && (mins >= 0 && mins <= 59)) {
        console.log(String(` ${proF} Teachers acess the  parking in the morning: ${formatHrs + hours}:${formatMin}${mins} ${pm}`));

    } else if ((hours >= 12 && hours <= 17) && (mins >= 0 && mins <= 59)) {
        console.log(String(` ${proF} Teachers acess the  parking in the evening ${formatHrs + hours}:${formatMin}${mins} ${pm}`))

    } else if ((hours >= 18 && hours <= 4) && (mins >= 0 && mins <= 59)) {
        console.log(String(` ${proF} Teachers acess the  parking in the night ${formatHrs + hours}:${formatMin}${mins} ${pm}`));


    } else {
        console.log('No Teachers ;(');

    }
}
Parking(24, 50)





