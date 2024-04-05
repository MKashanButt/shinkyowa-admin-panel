import React, { useEffect, useState } from 'react'
import styles from '../CompanyAccount.module.css'

const Table = () => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        totalBalance()
    }, [])
    function totalBalance() {
        const balance = document.querySelectorAll('#company-balance');
        let total = 0

        balance.forEach(elm => {
            let balance = parseFloat(elm.textContent) || 0;
            total += balance
        });

        setBalance(total)
    }
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
                    <td>$ <span id='company-balance'>50000</span>/-</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className={styles.companyBalance}>Total</td>
                    <td className={styles.companyBalance}>${balance}/-</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table