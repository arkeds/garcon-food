import { useEffect, useState } from "react";
import menuItems from '../../MOCK/menu.json';

interface IFood {
    id: number;
    name: string;
    price: number;
    preparationTime: number;
    cookingTime: number;
    classification: string;
    isChefRecommendation: number;
    pictureUrl: string;
}

const useGetFoods = (menuType: string) => {
    const [food, setFood] = useState<IFood[]>([]);

    useEffect(() => {
        let items;
        if (menuType.toUpperCase() === "MAIN COURSE") {
            items = menuItems.filter(menu => menu.classification.toUpperCase() === "MAIN");
        } else {
            items = menuItems.filter(menu => menu.classification.toUpperCase() === menuType.toUpperCase());
        }
        setFood(items);

        return () => {setFood([]);}
    }, []);

    return {
        food
    }
}

export default useGetFoods;