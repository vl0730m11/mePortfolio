import React from 'react';

function DrawerToggleButton(props){
    return (
        <button onClick={props.click}>
            Open
        </button>
    );
}

export default DrawerToggleButton;