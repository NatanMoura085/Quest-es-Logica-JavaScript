let data = new Date();
let timeVary = Math.round(Math.random() * data.getHours()).toFixed(2)
let randomTime = (hours, mins) => {
    hours = Math.round(Math.random()*hours);
   mins = Math.round(Math.random()*mins);    
   let formatHrs = (hours<10 ? "0" : "");
   let formatMin = (mins<10 ? "0" : "");
   let pm = (hours<12 ? "AM" : "PM");
   return String(`${formatHrs + hours}:${formatMin}${mins} ${pm}`);
}

console.log(randomTime(20,30))

let Parking = ()=>{
    let data = new Date();
    
  


    // if (hora >=5 && hora <= 11){
    // console.log('Bom dia !!');
    
    // } else if (hora >= 12 && hora < 17){
    // console.log('Boa tarde')
    
    // }else if(hora >= 17 && hora <= 23){
    // console.log('Boa noite!!');
    
    
    // }else{
    // console.log('Deu Error');
    
    // }
}

console.log(timeVary)



