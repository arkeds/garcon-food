import { createContext, FC, ReactNode, useState } from "react";

interface IProps {
    children: ReactNode
}
export interface IBreadcrumb {
    path: string;
    label: string;
}

interface IBreadcrumbContext {
    breadcrumbState: IBreadcrumb[];
    setCrumbs: (crumbs: IBreadcrumb[]) => void;
}

export const BreadcrumbContext =  createContext<IBreadcrumbContext | null>(null);



export const BreadcrumbContextProvider: FC<IProps> = ({children}) => {
    const [crumbs, setCrumbState] = useState<IBreadcrumb[]>([]);

    const setCrumbs = (crumbs: IBreadcrumb[]) => {
        setCrumbState(crumbs);
    }
    return (
        <BreadcrumbContext.Provider value={{breadcrumbState: crumbs , setCrumbs}}>
            {children}
        </BreadcrumbContext.Provider>
    )
}

export default {BreadcrumbContextProvider, BreadcrumbContext}