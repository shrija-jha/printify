import React from 'react';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Printify Logo" />
        </div>
        <nav className="nav">
          <ul>
              <li> <a href="#">Catalog</a> </li>
              <li> <a href="#">How it works</a> </li>
              <li> <a href="#">Pricing</a> </li>
              <li> <a href="#">Blog</a> </li>
              <li> <a href="#">Services</a> </li>
              <li> <a href="#">Use-cases</a> </li>
              <li> <a href="#">Need help?</a> </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login"><b>Log in</b></button>
          <button className="signup"><b>Sign up</b></button>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="left">
            <h1>Create and sell custom products</h1>   
            <ul className="features">
              <b>
              <li>
              ✔ 100% Free to use
              </li><br />
              <li>
              ✔ 900+ High-Quality Products
              </li><br />
              <li>
              ✔ Largest global print network
              </li><br />
              </b>
            </ul>
            <button className="start"><b>Start for free</b></button>
            <button img className="how"><b>How it works?</b> </button>
            <p className="trusted"><b>Trusted by over 8M sellers around the world</b></p>
          </div>
          <div className="right">
            <div className="woman">
              <img src="woman.svg" alt="Woman" />
            </div>
          </div>
        </div>
        <div className="card-container">
      <div className="card">
        <img src="piggy.svg" alt="Higher Profits" />
        <h3>Higher Profits</h3>
        <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
      </div>
      <div className="card">
        <img src="rocket.svg" alt="Robust Scaling" />
        <h3>Robust Scaling</h3>
        <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
      </div>
      <div className="card">
        <img src="t-shirt.svg" alt="Best Selection" />
        <h3>Best Selection</h3>
        <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
      </div>
    </div>
    <div className="product-customization-container">
     
     <div className='product-customization-child'>
     <div className='img_demo'>
       <div>
       <img src="custom.png" alt="" />
       </div>
      
      <div className="preview-section">       {/* Display the selected product with the user's design here */}
       <img src="review.svg" alt="T-shirt Preview" className="product-preview" />
     </div>
     </div>

     <div className="design-section">
       <h2>Easily add your design to a wide range of products</h2>
       <p>
         With our free design tools, you can easily add your custom designs to t-shirts, mugs,
         phone cases, and hundreds of other products.
       </p>
       <button className="view-products-button">All products →</button>
     </div>
     </div> 
     


     
   </div>
    
    <div className="card-container">
      <div className="section">
        <div className="image">
          <img src="create.png" alt="Create custom products" />
        </div>
        <div className="card">
          <h2>CREATE</h2><br />
          <h3>custom products</h3><br />
          <p>Easily add your designs to a wide range of products using our free tools</p>
        </div>
      </div>
      <div className="section">
        <div className="image">
          <img src="sell.png" alt="Sell on your terms" />
        </div>
        <div className="card">
          <h2>SELL</h2>
          <h3>on your terms</h3>
          <p>You choose the products, sale price, and where to sell</p>
        </div>
      </div>
      <div className="section">
        <div className="image">
          <img src="handle.png" alt="We handle fulfillment" />
        </div>
        <div className="card">
          <h2>WE HANDLE</h2>
          <h3>fulfillment</h3>
          <p>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
        </div>
      </div>
    </div>
    <div className="containers">
      <div className="headers">
        <h1>Connect your store</h1>
        <p>Printify easily integrates with major e-commerce platforms and marketplaces</p>
      </div>
      <div className="integration-map">
        <div className="central-node">
          {/* Replace with Printify logo */}
          <img src="printify.png" alt="Printify" />
        </div>
        <div className="integration-node">
          {/* Replace with Bigcommerce logo */}
          <img src="bigecommerce.svg" alt="Bigcommerce" />
        </div>
        <div className="integration-node">
          <img src="shopyfi.svg" alt="Shopify" />
        </div>
        <div className="integration-node">
          {/* Replace with Squarespace logo */}
          <img src="owl.svg" alt="owl" />
        </div>
        <div className="integration-node">
          {/* Replace with WooCommerce logo */}
          <img src="woo.svg" alt="WooCommerce" />
        </div>
        <div className="integration-node">
          {/* Replace with Wix logo */}
          <img src="wix.svg" alt="Wix" />
        </div>
        <div className="integration-node">
          {/* Replace with Etsy logo */}
          <img  src="etsy.svg" alt="Etsy" />
        </div>
        <div className="integration-node">
          {/* Replace with custom platform logo */}
          <img src="api.jpg" alt="Custom Platform" />
        </div>
        <div className="integration-node">
          <img src="andmore.png" alt="andmore" />
        </div> 
        <div id="square" className="integration-node">
          <img src="squarespace.svg" alt="Square Space" />
        </div>      {/* Add lines connecting the central node to each integration node */}
      </div>
      <div className="cta-banner">
        <h2>Are you a large business looking for custom solutions?</h2>
        <button>Talk to sales</button>
      </div>
    </div>
    <div className='bitcoin-container'>
      <img src="bitcoins.svg" alt="" />
    </div>
    
      <div className="last-container">
        <div className="column">
          <div className="col-md-3">
            <h3>Integrations</h3>
            <ul>
              <li>Shopify</li><br />
              <li>Etsy</li><br />
              <li>eBay</li> <br />
              <li>Amazon</li> <br />
              <li>TikTok Shop</li> <br />
              <li>PrestaShop</li> <br />
              <li>BigCommerce</li> <br />
              <li>Wix</li> <br />
              <li>WooCommerce</li> <br />
              <li>Squarespace</li> <br />
              <li>Printify API</li> <br />
              <li>Printify Pop-Up Store</li> <br />
              <li>Shutterstock</li> <br />
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Discover</h3>
            <ul>
              <li>Blog</li><br />
              <li>Guides</li><br />
              <li>Products</li><br />
              <li>Etsy print-on-demand</li><br />
              <li>Shopify print-on-demand</li><br />
              <li>Woocommerce print-on-demand</li><br />
              <li>Wix print-on-demand</li><br />
              <li>Squarespace print-on-demand</li><br />
              <li>Make Your Own Shirt</li><br />
              <li>Brands</li><br />
              <li>Pricing</li><br />
              <li>Shipping Rates</li><br />
              <li>Mockup Generator</li><br />
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Start selling</h3>
            <ul>
              <li>Custom T-shirts</li><br />
              <li>Custom Hoodies</li><br />
              <li>Custom Mugs</li><br />
              <li>Custom Socks</li><br />
              <li>Custom Backpacks</li><br />
              <li>Custom Branding</li><br />
              <li>Sell on Etsy</li><br />
              <li>Sell on Social Media</li><br />
              <li>Free T-shirt Designs</li><br />
              <li>Custom Products</li><br />
              <li>Custom All-Over-Print Hoodies</li><br />
              <li>Start a Clothing Line</li><br />
              <li>Start POD Business</li><br />
              <li>Bulk Orders</li><br />
              <li>Transfering To Printify</li><br />
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Printify</h3>
            <ul>
              <li>Print on Demand</li><br />
              <li>Print Providers</li><br />
              <li>Experts Program</li><br />
              <li>Printify Express Delivery</li><br />
              <li>Become a Partner</li><br />
              <li>About</li><br />
              <li>Printify Quality Promise</li><br />
              <li>Jobs</li><br />
              <li>Webinars</li><br />
              <li>Printing Profits Podcast</li><br />
              <li>Contact Us</li><br />
              <li>Affiliate</li><br />
              <li>Contact Sales</li><br />
              <li>POD Glossary</li><br />
              <li>Network Fulfillment Status</li><br />
              <li>Merchant Protection</li><br />
              <li>Security</li><br />
              <li>Sitemap</li><br />
            </ul>
          </div>
        </div>
       </div>
      </main>
      <footer className="footer"></footer>
    </div>

    



  );
}

export default App;