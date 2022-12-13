import AppetizerIcon from '../../assets/icons/appetizer.svg';
import DessertIcon from '../../assets/icons/dessert.svg';
import DrinksIcon from '../../assets/icons/drinks.svg';
import MainIcon from '../../assets/icons/main.svg';

enum menuEnum {
    MAIN_COURSE = 'Main Course',
    APPETIZER = 'Appetizer',
    DESSERT = 'Dessert',
    DRINKS = 'Drink',
}

interface IMenuClassification {
    menuType: menuEnum;
    menuImage: string;
}
export const menuClassification: IMenuClassification[] = [
    {
        menuType: menuEnum.MAIN_COURSE,
        menuImage: MainIcon
    },
    {
        menuType: menuEnum.APPETIZER,
        menuImage: AppetizerIcon
    },
    {
        menuType: menuEnum.DESSERT,
        menuImage: DessertIcon
    },
    {
        menuType: menuEnum.DRINKS,
        menuImage: DrinksIcon
    },
]

