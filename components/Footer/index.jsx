import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
            <footer className={styles.footer}>
                <div style={{display:"flex"}}>
                    {/* <span className={styles.logo}>*/}
                    {/*     <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
                    {/*</span>*/}

                    {/*<span className={styles.logo}>*/}
                    {/*    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
                    {/*</span>*/}

                    {/*<span className={styles.logo}>*/}
                    {/*    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
                    {/*</span>*/}
                </div>

                <a
                    // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{paddingTop:"10px"}}
                >
              <span style={{padding:"20px"}}>
                    <Image src="/vercel.svg"
                           alt="Vercel Logo"
                           width={72}
                           height={16}
                    />
              </span>
                    Aruanda Capoeira Brasília
                </a>
            </footer>
        )


}
