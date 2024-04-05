import React from 'react'
import styles from '../Payments.module.css'

const Table = () => {
    return (
        <table className={styles.account}>
            <thead>
                <tr>
                    <th>Customer Id</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1454</td>
                    <td>04/04/2024</td>
                    <td>Jacob Obrian</td>
                    <td>demo@demo.com</td>
                    <td>$6000</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table