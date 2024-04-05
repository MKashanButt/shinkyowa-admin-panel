import React, { useEffect, useState } from 'react'
import styles from '../Payments.module.css'

const Table = () => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        totalBalance()
    }, [])
    function totalBalance() {
        const balance = document.querySelectorAll('#customer-payment');
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
                    <td>$<span id='customer-payment'>6000</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className={styles.customerPayment}>Total</td>
                    <td className={styles.customerPayment}>${balance}/-</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table