import React from "react";
import { Mainlayout } from "../layout/main-layout";
import { Hero } from "../components/hero/hero";
import { Rec } from "../components/rec/rec";
import { Posters } from "../components/posters/posters";
import { Card } from "../components/card/card";

export const Home = () => {
    return (
        <div>
            <Hero />
            <Rec />
            <Posters />
            <Card />
        </div>
    );
};
