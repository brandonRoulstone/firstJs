let productsContainer = document.getElementById('products');
let activateSidebar = document.getElementById('btnActive');
let body = document.querySelector('body');



activateSidebar.addEventListener('click', () => {
    body.classList.remove("")
})

function dataOrigin(){
    // fetch data
  fetch('https://fakestoreapi.com/products')
   .then(res => res.json())
   .then(data => renderProducts(data))
    .catch(err => {
          console.log(err)
        }
    )
}

dataOrigin();

function renderProducts(products) {

    // Clear any previous content in the container
    productsContainer.innerHTML ='';

    products.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="product-container" key=${item.id}>
           <div class="productCard">
              <div class="image-container">
                 <img src="${item.image}" alt="" height='130px' width=' 100px' class="Img"/>
              </div>
             <h2 class="title">${item.title}</h2>
             <p class="price">$ ${item.price}</p>
             <p>${item.description}</p>
             <p>${item.category}</p>
             <div class="button">
                 <button id="purchase">Click me</button>
             </div>
           </div>
        </div>
        `;
        productsContainer.appendChild(newDiv);
    })
}