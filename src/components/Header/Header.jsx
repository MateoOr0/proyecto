import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <div>
                        <Link to="/">
                            <h1 className="title">
                                Librachos
                            </h1>
                        </Link>
                    </div>

                    <div className="icons">
                        <Link to="/Carrito">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </Link>
                        <Link to="/Logreg" className="material-symbols-outlined">
                            login
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
