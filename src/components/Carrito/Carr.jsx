import React from 'react';
import '../Carrito/Carr.css';

const Carr = ({ cart, updateQuantity, clearCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <main>
      <div className="carrito">
        <div className="block1">
          <div className="icons">
            <span className="material-symbols-outlined" id='bl'>
              shopping_cart
            </span>
          </div>
          <h2>Carrito de Compras</h2>
        </div>
        <div className="block2">
          {cart.length === 0 ? (
            <>
              <p className="empty-cart-message">Tu carrito está vacío</p>
            </>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>
                      ${item.price} x{' '}
                      <div className="quantity-selector">
                        <button
                          className="quantity-button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        />
                        <button
                          className="quantity-button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </p>
                    <button className="remove-item-button" onClick={() => updateQuantity(item.id, 0)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <p>Total: ${total.toFixed(2)}</p>
                <button className="clear-cart-button" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="checkout-button">
                  Realizar Pedido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Carr;
