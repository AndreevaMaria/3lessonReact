import React from 'react';

function Header(props) {
  return <header> <h1>Header</h1> <div>{props.page}</div> </header>
}

export default Header;