let Media = (notaTeorica1,nota2,nota3)=>{
  
    let media = (notaTeorica1 + nota2 + nota3) / 2
   
    if(notaTeorica1 >= 5 &&  nota2 >= 6 && nota3 >= 6 && media < 10) {


        return `O aluno está aprovado.${media}`
    }else if (media >= 10) {   

        return `O aluno está reprovado.${media}`
    } 



}

console.log(Media(2,4,4))