import React,{useState} from 'react';
import './index.css';

function App() { 

  const [num,setNum] = useState(0)

  function incrementNum(){
    setNum(prevNum => prevNum+1);
  }

  return (
    <div className="App">

      <div className="App-header">
        <div className='heading-section'><h2 className='header-title'>Shopping Cart</h2></div>
        <div className="cart-section">
          <i id ="icon" class="fa-solid fa-cart-shopping"></i>
          <p id="cart-num">{num}</p>
        </div>  
      </div>

      <div className="main-container">

          <h2 className="container-title">Our Items</h2>

          <div className="box">
      
              <div className="card">

                <div className="image-div">
                  <img src ='img1.png' alt="pic of shirt-1" />
                </div>

                <div className="info-div">
                    <h3 className="shirt-name">Cotton Shirt</h3>
                    <p className = "shirt-details">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <h3 className="shirt-price">Price: Rs.250 <del> Rs.300 </del> </h3>
                    <button className="btn" onClick={incrementNum}>ADD TO CART</button>

                </div>

              </div>

              <div className="card">

                <div className="image-div">
                  <img src ="img2.png" alt="pic of shirt-2" />
                </div>

                <div className="info-div">
                    <h3 className="shirt-name">White Tshirt</h3>
                    <p className = "shirt-details">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <h3 className="shirt-price">Price: Rs.550 <del> Rs.600 </del> </h3>
                    <button className="btn" onClick={incrementNum}>ADD TO CART</button>
                </div>

              </div>

              <div className="card">

                <div className="image-div">
                  <img src ="img3.png" alt="pic of shirt-3" />
                </div>

                <div className="info-div">
                    <h3 className="shirt-name">Full Sleeve Tshirt</h3>
                    <p className = "shirt-details">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    <h3 className="shirt-price">Price: Rs.200 <del> Rs.250 </del> </h3>
                    <button className="btn" onClick={incrementNum}>ADD TO CART</button>
                </div>

              </div>

          </div>

      </div>

    </div>
  );
}

export default App;
