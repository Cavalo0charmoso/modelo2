function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert("ERRO")
    } else {
        var fsex = document.getElementById('mas')
        var idade = ano - Number (fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
       if (fsex.checked)
       {
        genero = 'Homem'
        if(idade >=0 &&  idade < 10){
            //criança
            img.setAttribute('src' , './png/fotobbM.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src' , './pngfotojovemM.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src' , './pngfotoadultoM.png')
        } else{
            //idoso
            img.setAttribute('src' , './pngfotoidosoM.png')
        }
        

    
    
    } else{
       genero = 'Mulher'
       if(idade >=0 &&  idade < 10){
        //criança
        img.setAttribute('src' , './pngfotobbF.png')
    } else if (idade < 21){
        //jovem
        img.setAttribute('src' , './pngfotojovemF.png')
    } else if (idade < 50){
        //adulto
        img.setAttribute('src' , './pngfotoadultoF.png')
    } else{
        //idoso
        img.setAttribute('src' , './pngfotoidosaF.png')
    }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.` 
    res.appendChild(img)
    }
}