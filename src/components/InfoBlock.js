//Компонент отвечает за отображение блока с информацией с заголовком и передаваемым через children содержимым
import React from 'react';

const InfoBlock = ({title, titleRef, img, children}) => {
    return (
        <div style={{border: "1px dashed", margin: "1rem"}}>
            {img && <img style={{width: "16rem"}} src={img} alt="placeholder" />}
            <a href={titleRef} style={{textDecoration: "none"}}>
                <h2 style={{color: "skyblue", margin: "1rem"}}>{title}</h2>
            </a>
            <div>
                {children}
            </div>
            
        </div>
    );
};

export default InfoBlock;