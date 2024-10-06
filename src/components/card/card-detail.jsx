import React from "react";
import style from "./style.module.css";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";

export const Carddetail = () => {
    const { id } = useParams();
    const product = data.find((item) => item.id == parseInt(id));

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div className="container">
            <div className={style.wrapper_block}>
                <div className={style.main}>
                    <ul className={style.list}>
                        <li className={style.items}>
                            <img src={product.img} alt="img" />
                        </li>
                    </ul>
                </div>

                <div className={style.big_block}>
                    <div className="container">
                        <div className={style.header}>
                            <p className={style.title_2}>
                                Элжернга аталган гуллар
                            </p>
                            <div className={style.rating}>4.0 ★</div>
                        </div>
                        <div className={style.details}>
                            <h2 className={style.details_title}>
                                SIYOSAT, FANTASTIKA
                            </h2>
                            <p className={style.big_text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                            <div className={style.name_block}>
                                <p className={style.name_text}>
                                    Муаллиф: Kevin Smiley
                                </p>
                                <p className={style.name_text}>Йил: 1999</p>
                                <p className={style.name_text}>Wepress Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
