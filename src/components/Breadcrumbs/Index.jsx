import React from 'react'
import styles from './Breadcumbs.module.css'

const Breadcrumbs = ({ mainPage, subPage }) => {
    return (
        <span className={styles.breadcrumbs}>{mainPage} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
            {subPage} </span>
    )
}

export default Breadcrumbs