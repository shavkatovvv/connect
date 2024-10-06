import React from "react";
import style from "./style.module.css";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => (
    <Link key={item.id} to={`/card-detail/${item.id}`}>
        <li className={style.items}>
            <img src={item.img} alt="img" />
            <h3 className={style.link_title}>{item.title}</h3>
            <p className={style.about}>{item.about}</p>
            <div className={style.img_block}>
                <img src={item.info} alt="" />
                <img src={item.lis} alt="" />
            </div>
        </li>
    </Link>
);

export const Card = () => {
    return (
        <div className={style.block}>
            <div className="container">
                <h2 className={style.title}>Янги қўшилганлар</h2>
                <div className={style.list_block}>
                    <ul className={style.list}>
                        {data.map((item) => (
                            <CardItem key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
