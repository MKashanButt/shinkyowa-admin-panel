import React from 'react'
import styles from '../CompanyAccount.module.css'

const Table = () => {
    return (
        <table className={styles.account}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>04/04/2024</td>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio dolores soluta itaque, explicabo impedit quia.</td>
                    <td>70,000/-</td>
                    <td>20,000/-</td>
                    <td>50,000/-</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table