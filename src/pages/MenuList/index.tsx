import { useParams } from "react-router-dom";
import useGetFoods from "../../app/hooks/useGetFoods";
import FoodTile from "../../app/features/FoodTile";
import styles from './menulist.module.scss';
import { useContext, useEffect } from "react";
import {BreadcrumbContext} from "../../app/context/BreadcrumbContext";


export default function MenuList() {
    const breadcrumbContext = useContext(BreadcrumbContext);

    useEffect(() => {
        breadcrumbContext?.setCrumbs([
            {path: '/home', label: 'Home'},
            {path: '/menu', label: 'Menu'},
            {path: '', label: 'Menu Types'},
          ])

          return () => {breadcrumbContext?.setCrumbs([])}
    }, []);

    const {menuType} = useParams();
    const {food} = useGetFoods(menuType as string);
    return (
        <main className="page_container">
            <h1>{menuType}</h1>

            <div className={styles.food_items}>
                {
                    food.map(f => (
                        <FoodTile
                            image={f.pictureUrl}
                            isRecommended={f.isChefRecommendation}
                            name={f.name}
                            price={f.price}
                            key={f.id}
                        />
                    ))
                }
            </div>
        </main>
    )
}