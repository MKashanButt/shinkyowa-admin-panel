import React, { useEffect, useState } from 'react'
import styles from '../CustomerAccount.module.css'

const Table = () => {
    const [balance, setBalance] = useState()

    useEffect(() => {
        totalBalance()
    }, [])
    function totalBalance() {
        const balance = document.querySelectorAll('#customer-balance');
        let total = 0

        balance.forEach(elm => {
            let balance = parseFloat(elm.textContent) || 0;
            total += balance
        });

        setBalance(total)
    }
    return (
        <div className={styles.table}>
            <table className={styles.account}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Vehicle Name</th>
                        <th>Chasis</th>
                        <th>Total C&F</th>
                        <th>Payment Recieved</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01.</td>
                        <td>04/04/2024</td>
                        <td>Toyota Corolla 2016</td>
                        <td>CRF1456</td>
                        <td>$6000</td>
                        <td>08/04/2024</td>
                        <td>$<span id='customer-balance'>4000</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className={styles.customerBalance}>Total</td>
                        <td className={styles.customerBalance}>${balance}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table