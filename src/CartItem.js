import React from 'react';

const CartItem = (props) => {

    // constructor () {
    //     super();
    //     this.state ={
    //         price: 9999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     this.increaseQuantity = this.increaseQuantity.bind(this);
    //     this.testing();
    // }
    // testing () {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setStatus acts like a synchronous call
    //         // this.setState({qty: 100});
    //         this.setState({qty: this.state.qty +  10 });
    //         this.setState({qty: this.state.qty +  10 });
    //         this.setState({qty: this.state.qty +  10 });

    //         console.log('state', this.state);
    //     });
    // }
    // increaseQuantity = () => {
    //     // this.state.qty += 1;
    //     // console.log('this', this.state);
    //    //setstate form 1
    //     // this.setState({
    //     //     qty:this.state.qty + 1
    //     // });

    //         // setState form 2
    //             this.setState((prevState) => {
    //                 return {
    //                     qty: prevState.qty + 1
    //                 }},
    //                 () => {
    //                     console.log('this.state', this.state);
    //                 });
        
       
    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if (qty === 0){
    //         return;
    //     }
    
    //         // setState form 2
    //             this.setState((prevState) => {
    //                 return {
    //                     qty: prevState.qty - 1
    //                 }
    //         });
       
    // }
  
   
        const {price, title, qty } = props.product;
        const { product, 
             onIncreaseQuantity,
             onDecreaseQuantity,
             onDeleteProduct
             } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                   <img alt=""style={styles.image} src = {product.img}/>
                </div>
                <div className="rigth-block">
                    <div style={ { fontSize: 25} }>{title}</div>
                    <div style={ { color:'#777'} }>Rs {price}</div>
                    <div style={ { color:'#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                         alt="increse"
                         className="action-icons" 
                         src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1660622756~hmac=76f3521a22334a70b1005dcd52f5730d" 
                         onClick={() => onIncreaseQuantity(product)} />
                        <img
                         alt="decrese"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                         onClick={() => onDecreaseQuantity(product)} />
                        <img 
                        alt="delete"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" 
                         onClick={() => onDeleteProduct(product.id)} />
                    

                    </div>
                </div>
            </div>
);
    
        }

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius:4
  }
}

export default CartItem;