import styles from './foodtile.module.scss';
import RecommendIcon from '../../../assets/icons/recommend.svg';
interface IProps {
    image: string;
    name: string;
    price: number;
    isRecommended: number
}
export default function FoodTile(props: IProps) {
    return (
        <div className={styles.food_tile}>
            <div className={styles.image_container}>
                <img className={styles.image} src={`/src/assets/menu/${props.image}`} alt="Image of food"/>
                {
                    !!props.isRecommended && (
                        <div className={styles.recommended}>
                            <img className={styles.recommend_image} src={RecommendIcon} />
                        </div>
                    )
                }
            </div>
            <div className={styles.food_info}>
                <label>{props.name}</label>
                <div>{`P ${props.price.toFixed(2)}`}</div>
            </div>
        </div>
    )
}