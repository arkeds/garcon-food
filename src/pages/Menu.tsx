import { useContext, useEffect } from "react";
import { menuClassification } from "../app/constants/menu";
import { BreadcrumbContext } from "../app/context/BreadcrumbContext";
import Tile from "../app/features/Tile";
import styles from './menu.module.scss';


export default function Menu() {
  const breadcrumbContext = useContext(BreadcrumbContext)

  useEffect(() => {
    breadcrumbContext?.setCrumbs([
      {path: '/home', label: 'Home'},
      {path: '', label: 'Menu'}
    ])

    return () => {breadcrumbContext?.setCrumbs([])}
  }, [])
  return (
    <main className="page_container">
      <h1>Categories</h1>
      <div className={styles.category_container}>
        {
          menuClassification.map((menu, index: number) => (
            <Tile key={menu.menuType} imageUrl={menu.menuImage} linkTo={`/menu/${menu.menuType}`} tileLabel={menu.menuType}/>
          ))
        }
      </div>
    </main>
  );
}
