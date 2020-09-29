import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div class="nav-wrapper orange">
              <a href="#!" class="brand-logo">{titulo}</a>
            </div>
        </nav>
            
    );
}
 
export default Header;