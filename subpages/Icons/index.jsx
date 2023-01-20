import {Link} from "@mui/material";
import ImageAvatars from "../../components/Avatar";
import styles from "./Icons.module.css";

export default function Icons() {
    return (
        <div className={styles.alinhamento}>
            <Link href="https://www.instagram.com/aruanda.capoeira/" className={styles.espacamento}>
                <ImageAvatars src="insta.png" width="40" height="40"/>
            </Link>

            <Link href="https://pt-br.facebook.com/AruandaCapoeira/photos/?ref=page_internal" className={styles.espacamento}>
                <ImageAvatars src="face.png" width="40" height="40"/>
            </Link>
        </div>

    );
}
