function contador(){
    var Initial = window.document.getElementById('initial').value
    var Final = window.document.getElementById('final').value
    var Step = window.document.getElementById('step').value
    var Result = window.document.getElementById('result').value
    var Total = window.document.getElementById('total')

    Result = Final - Initial;

    do {
        Total.innerHTML += Result + '&#x1F449;'
        Result++
    } while (Number(Result) <= Number(Final))

    Total.innerHTML += '&#x1F3C1;'
}