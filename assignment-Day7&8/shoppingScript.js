// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpeg",
    description: "Good looking black shirt",
  },
  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product3.jpg",
    description: "Good looking Checked Shirt",
  },
  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Beautifull Blazer",
  },
  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product5.jpg",
    description: "Good looking Top",
  },
  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Brown Tshirt",
    size: "L",
    color: "brown",
    price: 1000,
    image: "product7.jpg",
    description: "Good looking brown tshirt",
  },
  {
    id: 8,
    name: "Red Shirt",
    size: "M",
    color: "Red",
    price: 1100,
    image: "product8.jpg",
    description: "Good looking red shirt",
  },
  {
    id: 9,
    name: "Checked Shirt",
    size: "S",
    color: "Brown & Black",
    price: 700,
    image: "product9.jpg",
    description: "Good looking Checked Shirt",
  },
  {
    id: 10,
    name: "Red Female Blazer",
    size: "M",
    color: "Red",
    price: 3000,
    image: "product10.jpg",
    description: "Beautifull Blazer",
  },
  {
    id: 11,
    name: "yellow Top",
    size: "S",
    color: "yellow",
    price: 1000,
    image: "product11.jpg",
    description: "Good looking Top",
  },
  {
    id: 12,
    name: "Indian Dress",
    size: "XL",
    color: "Henna",
    price: 1800,
    image: "product12.jpg",
    description: "Good looking Traditional Dress",
  },
];

function searchByPrice(searchValue) {
  let minPrice = document.getElementById('priceFilter1').value;
  let maxPrice = document.getElementById('priceFilter2').value;
  console.log(minPrice);
  console.log(maxPrice);
  let searchedProducts = [];
  products.filter(function (product, index) {
    if (product.price >= minPrice && product.price <= maxPrice) {
      console.log('ashish');
      searchedProducts.push(product);
    }
  });

  displayProducts(searchedProducts);
}

cart = [];
let addedToCartNo = 0;


function displayProducts(productsData, who = "productwrapper") {

  document.getElementById('addedToCartNo').innerHTML = addedToCartNo

  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
        <p id="message"></p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function checkCart(idofProd){
  cart.forEach(function(product) {
    if(product.id == idofProd){
      console.log("Product is already in cart");
      document.getElementById('message').innerHTML = "Product is already added in cart";
    }
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);

  checkCart(pro.id);

  //   putting in cart
  cart.push(pro);
  addedToCartNo++;
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  addedToCartNo--;
  displayProducts(cart, "cart");
}