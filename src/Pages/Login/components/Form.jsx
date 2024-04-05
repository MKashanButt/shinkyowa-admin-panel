import React from 'react'

const Form = () => {
    return (
        <form action="/dashboard" method='POST'>
            <h1>Shinkyowa Pannel</h1>
            <h2>Login</h2>
            <input type="email" id="email" placeholder="Email..." />
            <input type="password" id="password" placeholder="Password..." />
            <button>Login</button>
        </form>
    )
}

export default Form