let horario = ""

function validadehorario(event){

    horario = event.target.value
    if(horario == '') {
        txtHorario.innerHTML = "Horario Invalido"
        txtHorario.style.color = "red"
    }else{
        txtHorario.innerHTML = "ok"
        txtHorario.style.color = "green"
    }

}