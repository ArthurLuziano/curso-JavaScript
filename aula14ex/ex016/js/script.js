function calculate(){
    var Initial = window.document.getElementById('initial').value
    var Final = window.document.getElementById('final').value
    var Step = window.document.getElementById('step').value
    var Result = window.document.getElementById('result').value
    var Total = window.document.getElementById('total')

    if (Step == 0){
        Step = 1
    }

    Result = Number(Initial) + Number(Step)

    if (Number(Final) <= Number(Initial) || Number(Result) > Number(Final)){
        window.alert('Não é possível realizar esta operação, digite valores válidos. (O valor final não pode ser maior que o inicial!)')
    } else {
        Total.innerHTML += Initial + '&#x1F449;'

        do {
            Total.innerHTML += Result + '&#x1F449;'
            Result += Number(Step)
        } while (Number(Result) <= Number(Final))
    
        Total.innerHTML += '&#x1F3C1;'
    }

}

function clearValue(){
    var Total = window.document.getElementById('total')
    Total.innerHTML = 'Contando: <br>'
}