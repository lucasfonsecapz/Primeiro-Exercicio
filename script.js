function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotobebemenino.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotohomemadulto.png')
            } else {
                img.setAttribute('src', 'fotohomemidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotobebemenina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemmenina.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotomulheradulta.png')
            } else {
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade}anos.`
        res.appendChild(img)
    }
}