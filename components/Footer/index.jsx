import styles from "./Footer.module.css";
import Image from "next/image";
import Icons from "../../subpages/Icons";

export default function Footer(){
    return(
            <footer className={styles.footer}>
                <Image src="/logo.svg"
                       alt="Logo Aruanda"
                       width={100}
                       height={60}
                />
                <div className={styles.alinhamento_icones}>
                    <Icons/>
                </div>
            </footer>
    )
}
