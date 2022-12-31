//Компонент отвечает за отображение ссылки, может иметь картинку, текст и ссылку
import React from 'react';

const InfoLink = ({img, text, linkRef}) => {
    return (
        <div>
            {img && <img style={{width: "1rem"}} src={img} alt="placeholder"/>}
            <a style={{textDecoration: "none"}} href={linkRef}>{text}</a>
        </div>
    );
};

export default InfoLink;