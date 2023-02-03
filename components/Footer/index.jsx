import styles from "./Footer.module.css";
import Icons from "../../subpages/Icons";
import Image from "next/image";
import {Link} from "@mui/material";

export default function Footer(){
    return(
        <div className={styles.test2}>
            <footer className={styles.footer}>
                <div className={styles.alinhamento}>
                    <Link href="/">
                        <Image className={styles.teste}
                               src="/logo.svg"
                               width={50}
                               height={50}
                        />
                    </Link>
                </div>

                <div className={styles.test}>
                    <h1 className={styles.text_align}>Siga o Grupo Aruanda</h1>
                    <Icons/>
                </div>

                {/*<div className="container">*/}
                {/*    <div className="row" id={styles.align_footer}>*/}
                {/*        <div className="col">*/}
                {/*            Locais de treino - BR*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </footer>
        </div>

    )
}
