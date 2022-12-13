import { useContext } from "react"
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
                            <li key={crumb.path}>
                                {index !== 0 && (
                                    <span>/</span>
                                )} 
                                {`${crumb.label}`}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}