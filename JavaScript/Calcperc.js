let Calcperc = (students,segundo) =>{
    let totPercentual = 100;
   return  `${Math.round((totPercentual * segundo ) / students).toFixed(2).concat('%')} `
}
console.log(Calcperc(20,8))