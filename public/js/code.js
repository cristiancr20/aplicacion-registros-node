const modal = new bootstrap.Modal(document.getElementById('modal'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
  }
  on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML.trim()
    nombre_editar.value = fila.children[1].innerHTML.trim()
    apellido_editar.value = fila.children[2].innerHTML.trim()
    cedula_editar.value = fila.children[3].innerHTML.trim()
    modal.show()
})
