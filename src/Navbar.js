import React from 'react';

class NavBar extends React.Component {
   
    render() {
        console.log('this.props', this.props);
      
        return (
            <div style= {styles.nav}>
                <div style= {styles.cartIconConatiner}>
               <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="cart-icon" />
               <span style= {styles.cartCount}>3</span>
                    

                    </div>
            </div>
        );
    }
}

const styles = {
    cartIcon: {
        height: 35,
        marginRight: 20,
        marginTop: 10
    },
nav: {
    height: 70,
    background: '#2467b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'centre'
},
cartIconConatiner: {
    position: 'relative'
},
cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
}
  };


export default NavBar;