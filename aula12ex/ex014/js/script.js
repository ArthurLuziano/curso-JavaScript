function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 5 && hora < 12){
        img.src = 'fotos/fotomanha.png'
        document.body.style.background = '#f5d3a1'

    } else if (hora >= 12 && hora <= 18){
        img.src = 'fotos/fototarde.png'
        document.body.style.background = '#fcb941'

    } else {
        img.src = 'fotos/fotonoite.png'
        document.body.style.background = '#213c4b'
    }
}