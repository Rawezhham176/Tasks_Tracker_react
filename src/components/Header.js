import React from 'react'
import Button from "./Button";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


const Header = ({title, onAdd, showAdd}) => {

    const location = useLocation(

    )
    return (
        <header className='header'>
            <h1 className='header'>{title}</h1>
            {location.pathname === '/' && 
                <Button 
                    color={showAdd ? "red" : "green"} 
                    text={showAdd ? "Close" : "Add"} 
                    onClick={onAdd}/>
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task To Do"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header