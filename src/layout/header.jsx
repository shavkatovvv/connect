import React from "react";
import style from "./style.module.css";
import logo from "../assets/logo.svg";

export const Header = () => {
    return (
        <div className="body">
            <div className="container">
                <div className={style.main_block}>
                    <div className={style.logo_block}>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>

                        <div className={style.sel_block}>
                            <select className={style.select}>
                                <option value="Рукнлар">Рукнлар</option>
                            </select>

                            <form className={style.form} method="post">
                                <input
                                    className={style.input}
                                    type="search"
                                    placeholder="Қидириш"
                                    name="inp"
                                />

                                <button className={style.btn}></button>
                            </form>
                        </div>

                        <div className={style.lan_block}>
                            <select className={style.lan_sel}>
                                <option value="Ўз">Ўз</option>
                            </select>

                            <a className={style.link} href="#">
                                Кириш
                            </a>
                        </div>
                    </div>

                    <div className={style.links__block}>
                        <ul className={style.list_links}>
                            <li>
                                <a className={style.lin_bottom} href="#">
                                    Аудиокитоб
                                </a>
                            </li>
                            <li>
                                <a className={style.lin_bottom} href="#">
                                    Электрон китоблар
                                </a>
                            </li>
                            <li>
                                <a className={style.lin_bottom} href="#">
                                    Босма китоблар
                                </a>
                            </li>
                            <li>
                                <a className={style.lin_bottom} href="#">
                                    Контакт
                                </a>
                            </li>
                            <li>
                                <a className={style.lin_bottom} href="#">
                                    Биз хақимизда
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
