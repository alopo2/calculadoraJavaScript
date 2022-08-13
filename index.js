/*function multiplicaSalario (){
    const dias = document.getElementById('dias').value;
    const salario_hora = document.getElementById('salario_hora').value;
    const totalSalario = dias*salario_hora
    totalSalario = document.querySelector('#total').innerHTML += total
    return totalSalario
}*/

let label = document.getElementsByTagName('label')[0];
let input = document.getElementsByTagName('input')[0];

label.onclick = function () {
    label.style.display = 'none';
    input.focus();
};
input.onblur = function () {
    if(!this.value) label.style.display = 'block';
};

let label2 = document.getElementsByTagName('label')[1];
let input2 = document.getElementsByTagName('input')[1];

label2.onclick = function () {
    label2.style.display = 'none';
    input2.focus();
};
input2.onblur = function () {
    if(!this.value) label2.style.display = 'block';
};

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