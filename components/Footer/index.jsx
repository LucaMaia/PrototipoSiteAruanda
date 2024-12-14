import styles from "./Footer.module.css";
import Icons from "../../subpages/Icons";
import Image from "next/image";
import {Link} from "@mui/material";

export default function Footer(){
    return(
        <div>
            <footer className={styles.footer}>
                <div className={styles.test}>
                    <h1 className={styles.text_align}>Siga o Grupo Aruanda</h1>
                    <Icons/>
                </div>
            </footer>
        </div>

    )
}
