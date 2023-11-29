import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="contacto">
                        <h3>Contáctanos</h3>
                        <p>Para cualquier duda o consulta, ponete en contacto con nosotros.</p>
                        <p>Email: Mateo@gmail.com</p>
                        <p>Teléfono: 12 345 6789</p>
                    </div>
                    <div className="creditos">
                            <p>Creado por <span className="autor">Mateo</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
