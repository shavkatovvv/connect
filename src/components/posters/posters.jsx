import React from "react";
import style from "./style.module.css";
import poster from "../../assets/poster.svg";

export const Posters = () => {
    return (
        <div className={style.block}>
            <div className="container">
                <h2 className={style.title}>Рукнлар</h2>

                <div className={style.list_block}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <img src={poster} alt="poster" />
                        </li>

                        <li className={style.item}>
                            <img src={poster} alt="poster" />
                        </li>

                        <li className={style.item}>
                            <img src={poster} alt="poster" />
                        </li>

                        <li className={style.item}>
                            <img src={poster} alt="poster" />
                        </li>

                        <li className={style.item}>
                            <img src={poster} alt="poster" />
                        </li>

                        <li className={style.item}>
                            <img src={poster} alt="poster" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
