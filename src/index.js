//const element = document.createElement('h1')
//element.innerText = 'Hola mamá'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Abigail',
    lastName: 'Narella',
    avatar: 'https://perfil9.com/wp-content/uploads/2022/01/ascii03-1028x685-1.jpg'
}

function getName(user){
    return `${user.firstName} ${user.lastName}` //ALT 96 `
}

function getGreeting(user){
    if(user){
        return <h1>Hola {getName(user)}</h1>
    }
    return <h1>Hola papá</h1>
}

const nombre = 'Abigail'

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar}/>
    </div>
    )
const container = document.getElementById('root')

//ReactDOM.render(__Que__,___Donde___)
ReactDOM.render(element,container)