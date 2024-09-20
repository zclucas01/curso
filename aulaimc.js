let nota1 = Number (prompt(`Digite a sua primeira nota`))
let nota2 = Number (prompt(`Digite a sua segunda nota`))
let nota3 = Number (prompt(`Digite a sua terceira nota`))
resultado = nota1 + nota2 + nota3 
media = resultado / 3
alert (`Sua media foi `+media )
if (media>=7){
alert(` APROVADO! ${media.toFixed(2)}`) 
}
    
 else (media<7)
alert(`REPROVADO ;(  ${media.toFixed(2)} `) 
    
