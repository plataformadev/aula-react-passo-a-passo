import React from "react";

// export const element = (<h1>2 na décima potência é  {2**10}</h1>);
// const curso = 'ReactJS'
// export const element = (<h1>Bem vindo ao curso de {curso}!<br/> a quantidade de letras do nome do curso é  {curso.length}</h1>);

const user = {
    firstName: 'João',
    lastName: 'da Silva'
}

function fullName(user){
    return `${user.firstName} ${user.lastName}`
}

const title = 'Título principal'
export const element = (<h1 title={title}>Bem-vindo {fullName(user)}!!!!</h1>);