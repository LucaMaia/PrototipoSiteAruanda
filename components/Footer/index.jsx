import styles from "./Footer.module.css";
import Icons from "../../subpages/Icons";
import Image from "next/image";
import {Link} from "@mui/material";

export default function Footer(){
    return(
        <div>
            <footer className={styles.footer}>
                <div className={styles.alinhamento}>
                    <Link href="/">
                        <Image src="/logo.svg"
                               width={50}
                               height={50}
                        />
                    </Link>
                </div>

                <div className={styles.test}>
                    <h1 className={styles.text_align}>Siga o Grupo Aruanda</h1>
                    <Icons/>
                </div>

                <div className="container">
                    <div className={styles.text_align}>
                        Links rápidos
                    </div>
                    <div  className={styles.align_footer}>
                        <Link href="" className={styles.color_link} style={{color:"white"}}>
                            Aruanda capoeira - RO
                        </Link>
                        <Link href="" className={styles.color_link} style={{color:"white"}}>
                            Aruanda capoeira - BA
                        </Link>
                    </div>
                </div>

            </footer>
        </div>

    )
}
