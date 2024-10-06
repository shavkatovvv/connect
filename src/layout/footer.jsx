import React from "react";
import style from "./style.module.css";
import playmarket from "../assets/playmarket.svg";
import facebook from "../assets/facebook.svg";
import uzcard from "../assets/uzcard.svg";

export const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.top}>
                <div className="container">
                    <div className={style.wrapper}>
                        <div className={style.platfrom}>
                            <h2 className={style.platfrom_title}>
                                Платформа хақида
                            </h2>
                            <ul>
                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Liber ўзи нима?
                                    </a>
                                </li>

                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Фойдаланиш шартлари
                                    </a>
                                </li>

                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Ёрдам
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={style.podp}>
                            <h2 className={style.platfrom_title}>
                                Обуна хақида
                            </h2>

                            <ul>
                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Обуна бўлиш
                                    </a>
                                </li>

                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Қандай тўлаш
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={style.books}>
                            <h2 className={style.platfrom_title}>Китоблар</h2>

                            <ul>
                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Аудио китоблар
                                    </a>
                                </li>

                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Электрон китоблар
                                    </a>
                                </li>

                                <li>
                                    <a className={style.platfrom_link} href="#">
                                        Китоблар
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={style.socials}>
                            <h2 className={style.platfrom_title}>
                                Мобил илова
                            </h2>

                            <ul>
                                <li>
                                    <a href="#">
                                        <img src={playmarket} alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img src={playmarket} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.bottom_block}>
                <div className="container">
                    <div className={style.bottom_wrapper}>
                        <div className={style.social_links}>
                            <h2 className={style.socials_title}>
                                Ижтимоий тармоқлар
                            </h2>

                            <ul className={style.socials_list}>
                                <li>
                                    <a href="#">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={style.connect}>
                            <h2 className={style.connect_title}>Боғланиш</h2>

                            <ul className={style.connect_list}>
                                <li>
                                    <a
                                        className={style.connect_link}
                                        href="tel:+998 90 253 77 53"
                                    >
                                        +998 90 253 77 53
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={style.connect_link}
                                        href="mailto:support@liber.uz"
                                    >
                                        support@liber.uz
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={style.pay}>
                            <h2 className={style.pay_title}>
                                Биз қабул қиламиз
                            </h2>

                            <ul className={style.pay_list}>
                                <li>
                                    <a href="#">
                                        <img src={uzcard} alt="card" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={uzcard} alt="card" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={uzcard} alt="card" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
