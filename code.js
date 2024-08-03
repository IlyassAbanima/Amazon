let Products = [];
let p1=0;
let p2=0;
let p3=0;
let Product=``;
function addToWishlist(button){
  if (button.getAttribute('data-name') == "Product 1"){
    if(p1 == 0){
    console.log(button.getAttribute('data-name'));
    Product = `<li class="d">
    <span>${button.getAttribute('data-name')}</span>
    <button class="delete1" onclick=" deletefun(1);">Remove</button>
  </li>`;
    Products.push(Product) ;
  }
  p1 = 1;
  }

  else if (button.getAttribute('data-name') == "Product 2"){
    if(p2 == 0){
    console.log(button.getAttribute('data-name'));
    PProduct = `<li class="d">
    <span>${button.getAttribute('data-name')}</span>
    <button class="delete2" onclick="deletefun(2);">Remove</button>
    </li>`;
    Products.push(Product)
  }
  p2 = 1;
  }

  else if (button.getAttribute('data-name') == "Product 3"){
    if(p3 == 0){console.log(button.getAttribute('data-name'));
      Product = `<li class="d">
      <span>${button.getAttribute('data-name')}</span>
      <button class="delete3" onclick="deletefun(3);">Remove</button>
    </li>`;
      Products.push(Product)
    }
  p3 = 1;
  }
let dataPro = ``;
Products.forEach((product)=>{
    dataPro += product;
})
    document.querySelector('#wishlist').innerHTML =dataPro;
};

function deletefun(n){
  console.log
  if(n == 1){
    Products.splice(1,1)
  }
  else if(n == 2){
    Products.splice(2,1)
  }
  else if(n == 3){
    Products.splice(3,1)
  }
  console.log(Products);
}