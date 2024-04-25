import React, { useState } from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    const [account, toggleAccount] = useState(false)
    const [stock, toggleStock] = useState(false)

    return (
        <aside className={styles.sidebar}>
            <ul>
                <li onClick={() => toggleAccount(!account)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    Accounts
                </li>
                {
                    account &&
                    <div className={styles.subMenu}>
                        <ul>
                            <a href="/company-account"><li>Company Account</li></a>
                            <a href="/customer-account"><li>Customer Account</li></a>
                            <a href="/payments"><li>Payments</li></a>
                        </ul>
                    </div>
                }
                <li onClick={() => toggleStock(!stock)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    Stock</li>
                {
                    stock &&
                    <div className={styles.subMenuSecond}>
                        <ul>
                            <a href="/view-stock"><li>View Stock</li></a>
                            <a href="/add-stock"><li>List Vehicle</li></a>
                            <a href="/view-stock"><li>Edit</li></a>
                            <a href="/view-stock"><li>Delete</li></a>
                        </ul>
                    </div>
                }
            </ul>
        </aside>
    )
}

export default Sidebar