import { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../app/context/BreadcrumbContext";
import Tile from "../app/features/Tile";
import styles from './home.module.scss';
import MenuIcon from './../assets/icons/menu.svg';
import OrderIcon from './../assets/icons/order.svg';

export default function Home() {

  const breadcrumbContext = useContext(BreadcrumbContext)

  useEffect(() => {
    breadcrumbContext?.setCrumbs([{ path: '/home', label: 'Home' }])

    return () => { breadcrumbContext?.setCrumbs([]) }
  }, [])
  return (
    <main className={styles.page_container}>
      <div className={styles.menu_container}>
        <Tile imageUrl={OrderIcon} linkTo="/order-status" tileLabel="Order Status" />
        <Tile imageUrl={MenuIcon} linkTo="/menu" tileLabel="Menu" />
      </div>
    </main>
  );
}
