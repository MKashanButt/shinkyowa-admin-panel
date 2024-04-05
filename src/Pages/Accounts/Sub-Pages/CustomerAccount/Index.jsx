import React from 'react'
import Table from './components/Table';
import Breadcrumbs from '../../../../components/Breadcrumbs/Index';
import TableHeading from '../../../../components/TableHeading/Index';

import styles from './CustomerAccount.module.css';

const CompanyAccount = () => {
    return (
        <>
            <section className={styles.customerAccount}>
                <Breadcrumbs mainPage="Account" subPage="Customer Account" />
                <TableHeading heading="Customer account" pageUrl="add-customer-data" />
                <Table />
            </section>
        </>
    )
}

export default CompanyAccount