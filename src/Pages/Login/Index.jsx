import React from 'react'
import Form from './components/Form'

import styles from "./Login.module.css"

const Login = () => {
    return (
        <section className={styles.login}>
            <Form />
        </section>
    )
}

export default Login