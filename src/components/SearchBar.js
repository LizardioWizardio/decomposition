//Компонент отвечает за отображение поискового блока с логотипом, ссылками, предложением поискового ввода и пользовательским вводом
import React from 'react';
import SearchInput from "./SearchInput";

const SearchBar = () => {
    return (
        <div style={{width: "100%", height: "20%", border: "1px dashed"}}>
            <div style={{height: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                Search Bar
                <SearchInput />
            </div>

        </div>
    );
};

export default SearchBar;