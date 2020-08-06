// //Procurar o botao
document.querySelector("#add-time")
    // //quando clica no botao
    .addEventListener('click', cloneField)
// //executar uma acao
function cloneField() {
    // console.log("cheguei aqui")

    // duplicar os campo. QUE CAMPO?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. QUE CAMPOS?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function (field) {
        //pega o field do momento e limpa
        field.value = ""
    })

    // colocar na pagina. ONDE?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
