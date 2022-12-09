import { useContext } from "react"
import { BreadcrumbContext } from "../../context/BreadcrumbContext"

export default function Breadcrumbs(){
    const breadcrumbContext = useContext(BreadcrumbContext);
    return (
        <div className="breadcrumbs">
            <ul>
                {
                    breadcrumbContext?.breadcrumbState.map(crumb => {
                        return (
                            <li key={crumb.path}>{`${crumb.label} ${crumb.path}`}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}