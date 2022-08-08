/*function multiplicaSalario (){
    const dias = document.getElementById('dias').value;
    const salario_hora = document.getElementById('salario_hora').value;
    const totalSalario = dias*salario_hora
    totalSalario = document.querySelector('#total').innerHTML += total
    return totalSalario
}*/
const horasDiarias = 8;
function multiplicarSalario(){
    let diasTrabalhados = document.getElementById("dias").value;
    let valorHora = document.getElementById("salario_hora").value;
    let valorDia = valorHora * horasDiarias; 
    let salarioMes = valorDia * diasTrabalhados;
    let salarioFinal = document.getElementById("total");
    salarioFinal.innerHTML = 'R$ ' + salarioMes.toFixed(2)
}


function calcularValorHora(){
    const diasTrabalhados = document.querySelector('#dias').value
    const salarioTotal = document.querySelector('#salario_total').value
    const valorHora = (salarioTotal / diasTrabalhados) / horasDiarias
    const salarioHora = document.querySelector('#valor_hora')
    salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)

}