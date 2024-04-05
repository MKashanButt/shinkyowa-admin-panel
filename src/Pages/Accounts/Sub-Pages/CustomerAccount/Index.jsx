import React from 'react'
import Table from './components/Table';
import Breadcrumbs from '../../../../components/Breadcrumbs/Index';

import styles from './CustomerAccount.module.css';

const CompanyAccount = () => {
    return (
        <>
            <section className={styles.customerAccount}>
                <Breadcrumbs mainPage="Account" subPage="Company Account" />
                <Table />
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                    Add Record</button>
            </section>
        </>
    )
}

export default CompanyAccount