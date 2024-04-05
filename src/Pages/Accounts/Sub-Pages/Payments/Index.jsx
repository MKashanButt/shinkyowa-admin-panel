import React from 'react'
import Breadcrumbs from '../../../../components/Breadcrumbs/Index';
import Table from './components/Table';
import TableHeading from '../../../../components/TableHeading/Index';

import styles from './Payments.module.css';

const Payments = () => {
    return (
        <>
            <section className={styles.payments}>
                <Breadcrumbs mainPage="Account" subPage="Company Account" />
                <TableHeading heading="Payments" pageUrl="add-payment-data" />
                <Table />
            </section>
        </>
    )
}

export default Payments