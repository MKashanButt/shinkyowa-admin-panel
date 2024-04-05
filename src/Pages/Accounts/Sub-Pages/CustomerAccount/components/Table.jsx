import React from 'react'
import styles from '../CustomerAccount.module.css'

const Table = () => {
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
                        <td>$4000</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table