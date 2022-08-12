import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state ={
            price: 9999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this.state', this.state);
    }
    render() {
        const {price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                   <img alt=""style={styles.image}/>
                </div>
                <div className="rigth-block">
                    <div style={ { fontSize: 25} }>{title}</div>
                    <div style={ { color:'#777'} }>{price}</div>
                    <div style={ { color:'#777'} }>{qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                         alt="increse"
                         className="action-icons" 
                         src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1660316325~hmac=31d09cc401ab3704a82c8820de7ea476" 
                         onClick={this.increaseQuantity} />
                        <img
                         alt="decrese"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
                        <img 
                        alt="delete"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" />
                    

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius:4
  }
}

export default CartItem;