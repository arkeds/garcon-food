import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './tile.module.scss';


interface IProps {
    tileLabel: string;
    imageUrl: string;
    linkTo: string;
}

export default function Tile(props: IProps){
    return (
        <div className={styles.tile_container}>
            <Link to={props.linkTo} className={styles.tile_link}>
                <div className={styles.tile_content}>
                    <img className={styles.tile_image} src={props.imageUrl}/>
                </div>
                <label className={styles.tile_label}>
                    {props.tileLabel}
                </label>
            </Link>
        </div>
    )
}