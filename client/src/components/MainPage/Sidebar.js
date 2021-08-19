import React from "react";
import { Link } from "react-router-dom";
import fridge from '../../images/fridgeP.png'

const Sidebar = () => {
  return (
    <div style={{paddingTop: "40px"}} className="ui left demo visible vertical inverted sidebar labeled icon menu">
        <Link to={'/'}>
            <a className="item">
                <i className="search icon"></i>
            </a>
        </Link>
        <div className="ui hidden divider"></div>
        <Link to={'/shopping'}>
            <a className="item">
                <i className="user icon"></i>
            </a>
        </Link>
        <div className="ui hidden divider"></div>
        <Link to={'/shopping'}>
            <a className="item">
                <i className="shopping cart icon"></i>
            </a>
        </Link>
        <div className="ui hidden divider"></div>
        <Link to={'/bookmark'}>
            <a className="item">
                <i className="bookmark outline icon"></i>
            </a>
        </Link>
        <div className="ui hidden divider"></div>
        <Link to={'/pantry'}>
            <a className="item">
                <img src={fridge} className="image icon"/>
            </a>
        </Link>
        
    </div>
  );
};

export default Sidebar;
