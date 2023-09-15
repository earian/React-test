import { useState } from "react";

const Header = () => {
    let [login, setLogin] = useState('Login');

    function loginHandler(){
        setLogin('Panel');
        if(login == 'Panel'){ 
            window.location = 'https://google.com';
         }
    }
    return ( 
    <div className="main-header">
        <div className="logo">LOGO</div>
        <nav>
            <ol>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pics</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#" onClick={ loginHandler }>{ login }</a></li>
            </ol>
        </nav>
    </div>
     );
}
 
export default Header;