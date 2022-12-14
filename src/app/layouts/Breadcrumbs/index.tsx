import { useContext } from "react"
import { Link } from "react-router-dom";
import { BreadcrumbContext } from "../../context/BreadcrumbContext"
import styles from "./breadcrumbs.module.scss";

export default function Breadcrumbs(){
    const breadcrumbContext = useContext(BreadcrumbContext);
    return (
        <div className={styles.breadcrumbs_container}>
            <ul className={styles.breadcrumbs}>
                {
                    breadcrumbContext?.breadcrumbState.map((crumb, index: number) => {
                        return (
                            <li key={crumb.path} className={styles.crumb}>
                                {index !== 0 && (
                                    <span>/</span>
                                )} 
                                <div>
                                    {
                                        crumb.path === '' ? (
                                            <div className={styles.crumb_current}>
                                                {crumb.label}
                                            </div>
                                        ) : (
                                            <Link to={crumb.path} className={styles.crumb_link}>
                                                {`${crumb.label}`}
                                            </Link>
                                        )
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}