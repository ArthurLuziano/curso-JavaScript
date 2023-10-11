function contador(){
    var Initial = window.document.getElementById('initial').value
    var Final = window.document.getElementById('final').value
    var Step = window.document.getElementById('step').value
    var Result = window.document.getElementById('result').value
    var Total = window.document.getElementById('total')

    if (Step == 0){
        Step = 1
    }

    Result = Number(Initial) + Number(Step)

    Total.innerHTML += Initial + '&#x1F449;'

    do {
        Total.innerHTML += Result + '&#x1F449;'
        Result += Number(Step)
    } while (Number(Result) <= Number(Final))

    Total.innerHTML += '&#x1F3C1;'
}

function clearValue(){
    var Total = window.document.getElementById('total')
    Total.innerHTML = 'Contando: <br>'
}