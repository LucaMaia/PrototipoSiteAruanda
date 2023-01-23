import styles from "./Footer.module.css";
import Image from "next/image";
import Icons from "../../subpages/Icons";

export default function Footer(){
    return(
            <footer className={styles.footer}>
                  <span className={styles.espacamento}>
                        <Image src="/vercel.svg"
                               alt="Vercel Logo"
                               width={72}
                               height={20}
                        />
                  </span>

                <Icons/>
            </footer>
        )


}
