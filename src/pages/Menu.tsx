import { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../app/context/BreadcrumbContext";

export default function Menu() {
  const breadcrumbContext = useContext(BreadcrumbContext)

  useEffect(() => {
    breadcrumbContext?.setCrumbs([
      {path: '/home', label: 'Home'},
      {path: '/menu', label: 'Menu'}
    ])

    return () => {breadcrumbContext?.setCrumbs([])}
  }, [])
  return <h1>Menu</h1>;
}
