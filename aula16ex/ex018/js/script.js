var numbers = [];

function getValue(){
    let n = document.getElementById('num')
    let sel = document.getElementById('sel')
    let num = Number(n.value)
    console.log(numbers)

    if (numbers.indexOf(num) != -1){
        alert('O número já existe')
    } else if (num < 1 || num > 100){
        alert('O número é invalido')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        item.value = num
        sel.appendChild(item)
        numbers.push(num)
    }
}

function finalResult(){
    var result = document.getElementById('result')
}