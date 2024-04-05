import React from 'react'
import styles from './TableHeading.module.css'

const Index = ({ heading, pageUrl }) => {
    const url = `/${pageUrl}`
    return (
        <div className={styles.heading}>
            <h1>{heading}</h1>
            <a href={url}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Record</button>
            </a>
        </div >
    )
}

export default Index