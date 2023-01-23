


let data = new Date();
const CalcAge = (ano)=>{
    console.log(` Thiago sua idade ${ data.getFullYear() - ano}`)
    

}
console.log(CalcAge(1993))

let Calcperc = (students,segundo) =>{
    let totPercentual = 100;
   return  `${Math.round((totPercentual * segundo ) / students).toFixed(2).concat('%')} `
}
console.log(Calcperc(20,8))

 let Media = (notaTeorica1,nota2,nota3)=>{
  
    let media = (notaTeorica1 + nota2 + nota3) / 2
   
    if(notaTeorica1 >= 5 &&  nota2 >= 6 && nota3 >= 6 && media < 10) {


        return `O aluno está aprovado.${media}`
    }else if (media >= 10) {   

        return `O aluno está reprovado.${media}`
    } 



}

console.log(Media(2,4,4))