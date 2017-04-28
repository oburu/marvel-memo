import React from 'react';

const Header = (props) =>{
  return(
    <div className={props.headerStyle}>
      <div className="container logo-group">
        <div className="logo"/><h3 className="header-title"><span className="big">M</span>EMO</h3>
      </div>
    </div>
  );
}

export default Header;
