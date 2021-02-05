import React, {useState} from 'react';
import './index.css';
import data from './data.json';
import Products from './components/products';
import Filter from './components/filter';
import Cart from './components/cart';
import Slider from './components/slider';

// export const TitleContext = createContext( data.products);

export const App = () => {
  const prodotti = data.products;
  const [product, setProduct] = useState(prodotti);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItems") ? 
    JSON.parse(localStorage.getItem("cartItems")): 
    []
  );// al ricaricamento della pagina rimane memorizato la cart

  

  console.log('SIZE-->',size);
  console.log('PRODUCT-->',product);
  console.log('SORT-->',sort);
  console.log('CARTITEM-->',cartItem);

  

  const addCartItem = (product) => {
    const cartItems = cartItem.slice();
    let inCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        setCartItem(item.count++, inCart = true);
      }
    });
    if(!inCart) {
      cartItems.push({...product, count: 1})
    }
    setCartItem(cartItems);

    localStorage.setItem(
      "cartItems", 
      JSON.stringify(cartItems));
  };

  const removeCartItem = (product) => {
    const cartItems = cartItem.slice();
    setCartItem(cartItems.filter( x => x.id !== product.id));
    localStorage.setItem(
      "cartItems", 
      JSON.stringify(cartItems.filter( x => x.id !== product.id))
    );
  };

  const filterProducts = (e) => {
    // console.log('value--->',e.target.value);
    setSize(e.target.value);
    
    if (e.target.value === '') {
      setProduct(prodotti)
    } else {
      setProduct(prodotti.filter( 
        (products) => 
          products.availableSizes.indexOf(e.target.value) >= 0)
      )
    }
  };

  const sortProducts = (e) => {
    const sort = e.target.value;
    setSort( 
      sort,
      product
      .sort((a,b) => {
        if (sort === 'lowest') {
           
          if (a.price > b.price) {
            return 1 
          } else {
             return -1
            }
        } else if (sort === 'highest') {
            if (a.price < b.price) {
              return 1
            } else {
                return -1
              }
          } else {
              if (a.id < b.id) {
                return 1 
              } else {
                  return -1
                }
            }
        },
         
        // sort === 'lowest' ? a.price > b.price ? 1 : -1 : sort === 'highest' 
        // ? a.price < b.price
        // ? 1
        // : -1 
        // : a.id < b.id 
        // ? 1
        // : -1
      )
     
      
    )
  };

  return (
    
    <div className="grid-container">
      
      <div className="heroImage">
        <Slider />
      </div>
      
      <main>
        <div className='content'>
          <div className='main'>
            
          
            <Filter 
              count={product.length} 
              size={size} 
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products 
              key={product.id}
              products={product}
              addToCart={addCartItem}/>
          </div>
          <div className='sidebar'>
            <Cart
              cartItems={cartItem}
              removeCart={removeCartItem}
            />
          </div>
        </div>
        
      </main>
      <footer>FOOTER!</footer>
    </div>
    
  );
};

export default App;


