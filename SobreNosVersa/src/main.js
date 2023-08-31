

var radio = document.querySelectorAll('.manual-btn') 
var cont = 1

document.getElementById('radio1').checked = true


function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}
setInterval(() => {
    proximaImg()
}, 5000)