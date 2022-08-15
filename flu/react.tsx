import React from 'React';
function CapsLock(props){
    const textoInserido = props.texto;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}
function pagina() {
return <CapsLock texto="textoem caps lock"/>
}
