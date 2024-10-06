import React from "react";
import style from "./style.module.css";
import elec from "../../assets/elec.svg";

export const Rec = () => {
    return (
        <div className={style.block}>
            <div className="container">
                <ul className={style.list}>
                    <li className={style.item}>
                        <img src={elec} alt="elec" />
                        <div>
                            <h2 className={style.title}>Тезкор етказиш</h2>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </li>

                    <li className={style.item}>
                        <img src={elec} alt="elec" />
                        <div>
                            <h2 className={style.title}>Тезкор етказиш</h2>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </li>

                    <li className={style.item}>
                        <img src={elec} alt="elec" />
                        <div>
                            <h2 className={style.title}>Тезкор етказиш</h2>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </li>

                    <li className={style.item}>
                        <img src={elec} alt="elec" />
                        <div>
                            <h2 className={style.title}>Тезкор етказиш</h2>
                            <p className={style.text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
