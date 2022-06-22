import React from "react";



function onClickHandler(){
    alert('Você clicou no Botão!!!!!');
}

export const element = (<button onClick={onClickHandler}>Click aqui!!!</button>)