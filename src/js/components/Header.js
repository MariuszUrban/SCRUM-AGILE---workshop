import React from "react";
import "../../scss/utils/_all.scss";
import {NavLink as Link} from 'react-router-dom';

const Header = ()=>(
    <header>
    <h1><logo className="logo1">Zaplanuj</logo><logo className="logo2">Jedzonko</logo></h1>
        <ul>
        <li>
        <Link 
        exact to='/mainApp'
        >Zaplanuj posiłki</Link></li>
        <li><a href="#aboutApp">Dlaczego Warto? </a></li>
        <li><a href="#aboutAuthor">O mnie</a></li>
        <li><a href="#footer">Kontakt</a></li>
        </ul>
    </header>
)

export default Header;