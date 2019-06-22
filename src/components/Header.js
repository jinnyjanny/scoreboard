import React from 'react';

/** 애로우 function **/
export const Header = (props) => {
    console.log(props);

    //★ destruct assignment
    const {title, totalPlayers} = props;


    return (
        <header className="header">
            <h1 className="h1">{title}</h1>
            <span className="stats">Players: {totalPlayers}</span>
        </header>
    )
}