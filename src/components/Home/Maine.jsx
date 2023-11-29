import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dqdlm from './img-main/donqui.jpg';
import elp from './img-main/princi.jpg';

const Maine = ({ addToCart }) => {
    const [products] = useState([
        {
            id: 1,
            name: 'Don Quijote de la Mancha',
            author: 'Miguel de Cervantes',
            description: 'Una de las novelas más importantes de todos los tiempos y para muchos la obra definitiva de la literatura española. Escrita por Miguel de Cervantes (1547-1616) y publicada entre 1605 y 1615, narra las aventuras del ingenioso hidalgo Don Quijote de la Mancha (llamado realmente Alonso Quijano), en su misión personal de enmendar entuertos en donde los hubiere, acompañado de su fiel escudero, y amigo Sancho Panza. Nacida del amor de su autor por la novela caballeresca, Don Quijote se convirtió en una oda a ese particular estilo y en una crítica mordaz y humorística de la sociedad y el mundo de la época.',
            image: dqdlm,
            price: 20.0,
        },
        {
            id: 2,
            name: 'El Principito',
            author: 'Antoine de Saint-Exupéry',
            description: 'Un piloto que viaja solo tiene que aterrizar en medio de un desierto para arreglar una avería de su avioneta. Allí, en medio de la nada, aparece un niño que le pide que le dibuje un cordero... y poco a poco, a base de preguntas, le va contando su propio historia: la historia de un planeta minúsculo, su casa, una preciosa flor que brotó orgullosa, la historia de sus volcanes y de los temibles baobabs. Y también la historia de su viaje, de los planetas por los que pasó y las personas que conoció.',
            image: elp,
            price: 15.0,
        },
    ]);

    const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 });
    };

    return (
        <div>
            <main>
                <div className="catalogo">
                    <section className="cabecera">
                        <h2 className="titu">Obras destacadas</h2>
                        <div className="buslib">
                            <input type="text" placeholder="Buscar libros" />
                            <button className="buscarb">Buscar</button>
                        </div>
                    </section>
                    <section className="librachoz">
                        {products.map((product) => (
                            <article className="libro" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <div className="biolib">
                                    <h3>{product.name}</h3>
                                    <p>{product.author}</p>
                                    <p>{product.description}</p>
                                    <p>${product.price}</p>
                                </div>
                                <Link to="/carrito">
                                    <button className="agrcar" onClick={() => handleAddToCart(product)}>
                                        Agregar al carrito
                                    </button>
                                </Link>

                            </article>
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Maine;
