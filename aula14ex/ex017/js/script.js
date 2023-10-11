function genTable(){
    let num = window.document.getElementById('num')
    let table = window.document.getElementById('tabSelect')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let c = 0

        table.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `table${c}`
            table.appendChild(item)
            c++
        }
    }
}