import styles from "./Footer.module.css";
import Icons from "../../subpages/Icons";

export default function Footer({marginTop}){
    return(
            <footer className={styles.footer} style={{marginTop: marginTop}}>
                <div>
                    <Icons/>
                </div>
            </footer>
    )
}
