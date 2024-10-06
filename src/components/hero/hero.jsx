import React from "react";
import style from "./style.module.css";
import book from "../../assets/book.png";

export const Hero = () => {
    return (
        <div className={style.block}>
            <div className="container">
                <div className={style.main_wrapper}>
                    <div className={style.big_block}>
                        <div className={style.wrapper}>
                            <h2 className={style.title}>Кўп ўқилаётганлар</h2>

                            <div className={style.list_block}>
                                <ul className={style.list}>
                                    <li className={style.item}>
                                        <div>
                                            <img src={book} alt="book" />
                                            <h3 className={style.item_title}>
                                                1984
                                            </h3>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div>
                                            <img src={book} alt="book" />
                                            <h3 className={style.item_title}>
                                                1984
                                            </h3>
                                        </div>
                                    </li>

                                    <li className={style.item}>
                                        <div>
                                            <img src={book} alt="book" />
                                            <h3 className={style.item_title}>
                                                1984
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={style.an_block}>
                        <h2 className={style.an_title}>
                            Китоб ўқишни ёқтирасизми?
                        </h2>

                        <p className={style.text}>
                            Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга
                            обуна бўлинг
                        </p>

                        <button className={style.btn}>Обуна бўлиш</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
