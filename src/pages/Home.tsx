import { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../app/context/BreadcrumbContext";

export default function Home() {

  const breadcrumbContext = useContext(BreadcrumbContext)
  
  useEffect(() => {
    breadcrumbContext?.setCrumbs([{path: '/home', label: 'Home'}])

    return () => {breadcrumbContext?.setCrumbs([])}
  }, [])
  return <h1>Home</h1>;
}
