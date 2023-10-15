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
    var major = Math.max.apply(null, numbers)
    var minor = Math.min.apply(null, numbers)
    var sum = 0

    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }

    if(numbers == 0){
        alert('Adicione alguns valores primeiro!')
    } else {
        result.innerHTML = `Ao todo, temos ${numbers.length} números cadastrados.`
        result.innerHTML += `<p>O maior valor informado foi ${major}.</p>`
        result.innerHTML += `<p>O menor valor informado foi ${minor}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        result.innerHTML += `<p>A média dos valores digitados é ${sum/numbers.length}.</p>`
    }

    
}