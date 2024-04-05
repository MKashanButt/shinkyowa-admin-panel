import React, { useState } from 'react'
import Breadcrumbs from '../../../../../components/Breadcrumbs/Index';

import styles from './Form.module.css'


const Form = () => {
    const [balance, setBalance] = useState(0);

    function calculateBalance() {
        const debit = parseFloat(document.getElementById('debit').value, 2) || 0;
        const credit = parseFloat(document.getElementById('credit').value, 2) || 0;

        const amount = debit - credit;
        const currency = '¥'
        const result = `${amount} ${currency}`
        const number = result.toLocaleString()
        setBalance(number)
    }
    return (
        <section className={styles.submitForm}>
            <Breadcrumbs mainPage="Account" subPage="Company Account" extraPage="Add Record" />
            <h2>Add Record</h2>
            <form action="" method='POST'>
                <div className={styles.fields}>
                    <div className={styles.item}>
                        <label htmlFor="date">Date</label>
                        <input type="date" id='date' />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="description">Description</label><textarea id="description"></textarea>
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="debit">Debit</label><input type='text' id="debit" onChange={calculateBalance} />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="credit">Credit</label><input type='text' id="credit" onChange={calculateBalance} />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="credit">Balance</label><input type='text' id="balance" disabled value={balance} />
                    </div>
                </div>
                <button>Add Record</button>
            </form>
        </section >
    )
}

export default Form