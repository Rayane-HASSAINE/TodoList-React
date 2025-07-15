import React from 'react'
import './Header.module.css'
import styles from "./header.module.css"
import reactLogo from '../../assets/react.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={reactLogo} alt="logo" width={50} />
                <div>
                    <h1>TaskFlow</h1>
                    <div className="color-gray">
                        <code>Eliminez le chaos, suivez le flux.</code>
                    </div>

                </div>
            </div>
            <code className="color-primary">
                v.1.0
            </code>
        </div>
    )
}

export default Header