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
        this.testing();
    }
    testing () {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })

        promise.then(() => {
            // setStatus acts like a synchronous call
            // this.setState({qty: 100});
            this.setState({qty: this.state.qty +  10 });
            this.setState({qty: this.state.qty +  10 });
            this.setState({qty: this.state.qty +  10 });

            console.log('state', this.state);
        });
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        console.log('this', this.state);
       //setstate form 1
        // this.setState({
        //     qty:this.state.qty + 1
        // });

            // setState form 2
                this.setState((prevState) => {
                    return {
                        qty: prevState.qty + 1
                    }
            });
       
    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if (qty == 0){
            return;
        }
    
            // setState form 2
                this.setState((prevState) => {
                    return {
                        qty: prevState.qty - 1
                    }
            });
       
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
                         src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1660332676~hmac=544b5da67ed381c16c066ec592cd028c" 
                         onClick={this.increaseQuantity} />
                        <img
                         alt="decrese"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                         onClick={this.decreaseQuantity}/>
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