let Media = (notaTeorica1, nota2, nota3) => {

    if (nota2 < 5) {

        throw new Error('nota Pratica vale 5')

    } else if (nota3 < 5) {
        throw 'nota Pratica vale 5'

    }

    let media = (notaTeorica1 + nota2 + nota3) / 3


    if (media >= 7) {

        return `O aluno está aprovado.${media.toFixed(2)}`
    } else if (media < 6) {
 
        return `O aluno está reprovado.${media.toFixed(2)}`
    }



}

console.log(Media(6, 5, 5))