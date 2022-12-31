//Компонент отвечает за отображение рекламного баннера
import React from 'react';

const Banner = ({img}) => {
    return (
        <div style={{width: "100%", border: "1px solid", display: "flex", justifyContent: "center"}}>
            <img style={{height: "10rem"}} src={img} alt="placeholder" />
        </div>
    );
};

export default Banner;