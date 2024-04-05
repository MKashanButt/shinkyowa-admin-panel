import React from 'react'
import Breadcrumbs from '../../../../../components/Breadcrumbs/Index';

import styles from './Form.module.css'


const Form = () => {
    return (
        <section className={styles.submitForm}>
            <Breadcrumbs mainPage="Account" subPage="Customer Account" extraPage="Add Record" />
            <h2>Add Record</h2>
            <form action="" method='POST'>
                <div className={styles.fields}>
                    <div className={styles.item}>
                        <label htmlFor="date">Date</label>
                        <input type="date" id='date' />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="vehicle-name">Vehicle Name</label><input type='text' id="vehicle-name" />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="chassis">Chassis</label><input type='text' id="chassis" />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="cnf">Total C&F</label><input type='text' id="cnf" />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="date">Payment Recieved</label>
                        <input type="date" id='date' />
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="balance">Balance</label><input type='text' id="balance" />
                    </div>
                </div>
                <button>Add Record</button>
            </form>
        </section >
    )
}

export default Form