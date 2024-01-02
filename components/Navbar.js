import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Navbar.module.css";


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h2>@ Peace</h2>
            </div>

            <div className={styles.connect}>
                <ConnectWallet
                    dropdownPosition={{
                    side: "bottom",
                    align: "center",
                    }}
                />
            </div>
            
        </nav>
    )
}