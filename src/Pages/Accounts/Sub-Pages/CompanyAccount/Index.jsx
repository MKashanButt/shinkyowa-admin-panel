import React from 'react'
import Table from './components/Table';
import Breadcrumbs from '../../../../components/Breadcrumbs/Index';
import TableHeading from '../../../../components/TableHeading/Index';

import styles from './CompanyAccount.module.css';

const CompanyAccount = () => {
    return (
        <>
            <section className={styles.companyAccount}>
                <Breadcrumbs mainPage="Account" subPage="Company Account" />
                <TableHeading heading="Company Account" pageUrl="add-company-data" />
                <Table />
            </section >
        </>
    )
}

export default CompanyAccount