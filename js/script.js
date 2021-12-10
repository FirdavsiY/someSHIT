let pro = document.querySelector(".pro")
let proMax = document.querySelector(".proMax")
let img = document.querySelector('#img')
let item1 = document.querySelector('#item1')
let item2 = document.querySelector('#item2')
let item3 = document.querySelector('#item3')
let item4 = document.querySelector('#item4')


pro.onclick = () => {
    pro.setAttribute('data', 'true')
    proMax.setAttribute('data', 'false')

    if(pro.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proBlue.png')
         
    }
}
proMax.onclick = () => {
    proMax.setAttribute('data', 'true')
    pro.setAttribute('data', 'false')
    if(proMax.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proMaxBlue.png')
    } else {
        console.log('shit');
    }
}
item1.onclick = () => {
    if(pro.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proBlue.png')
    } else if(proMax.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proMaxBlue.png')
    } else if(pro.getAttribute('data') != 'true' && proMax.getAttribute('data') != 'true'){
        img.setAttribute('src', './images/13proBlue.png')
    }
}
item2.onclick = () => {
    if(pro.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proSilver.png')
    } else if(proMax.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proMaxSilver.png')
    } else if(pro.getAttribute('data') != 'true' && proMax.getAttribute('data') != 'true'){
        img.setAttribute('src', './images/13proSilver.png')
    }
}
item3.onclick = () => {
    if(pro.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proGold.png')
    } else if(proMax.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proMaxGold.png')
    } else if(pro.getAttribute('data') != 'true' && proMax.getAttribute('data') != 'true'){
        img.setAttribute('src', './images/13proGold.png')
    }
}
item4.onclick = () => {
    if(pro.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proGraphite.png')
    } else if(proMax.getAttribute('data') === 'true'){
        img.setAttribute('src', './images/13proMaxGraphite.png')
    } else if(pro.getAttribute('data') != 'true' && proMax.getAttribute('data') != 'true'){
        img.setAttribute('src', './images/13proGraphite.png')
    }
}

