import React from 'react'
import Breadcrumbs from '../../../../../components/Breadcrumbs/Index';

import styles from './Form.module.css'


const Form = () => {
    return (
        <section className={styles.submitForm}>
            <Breadcrumbs mainPage="Account" subPage="Payments" extraPage="Add Record" />
            <h2>Add Record</h2>
            <form action="" method='POST'>
                <div className={styles.fields}>
                    <div className={styles.item}>
                        <label htmlFor="customer-id">Customer Id</label><input type='text' id="customer-id" />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="date">Date</label>
                        <input type="date" id='date' />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="name">Name</label><input type='text' id="name" />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="email">Email</label><input type='email' id="email" />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="amount">Amount</label><input type='text' id="amount" />
                    </div>
                </div>
                <button>Add Record</button>
            </form>
        </section >
    )
}

export default Form