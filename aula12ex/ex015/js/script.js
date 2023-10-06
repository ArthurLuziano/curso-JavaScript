function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (form_ano.value.length == 0 || Number(form_ano.value) > ano){
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotos/bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'fotos/jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'fotos/adulto-m.png')
            } else if (idade < 75){
                img.setAttribute('src', 'fotos/idoso-m.png')
            } else if (idade > 100){
                img.setAttribute('src', 'fotos/caveira.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotos/bebe-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'fotos/jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'fotos/adulto-f.png')
            } else if (idade < 75){
                img.setAttribute('src', 'fotos/idoso-f.png')
            } else if (idade > 100){
                img.setAttribute('src', 'fotos/caveira.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}