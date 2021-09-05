const displayLocalStorageCart =()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}
const addItem =()=>{
    const nameField =document.getElementById('product-name');
    name =nameField.value;
    if(!name){
        return;
    }
    //display in the ui
    displayProduct(name);
    //add to local storage
    addProductToCart(name);
    //clear input field
    nameField.value = '';
}
const displayProduct = name =>{
    const ul =document.getElementById('products');
    const li =document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}
const getCart = () =>{
    const cart =localStorage.getItem('cart');
    let cartObject;
    if(cart){
        cartObject = JSON.parse(cart);
    }
    else{
        cartObject={};
    }
    return cartObject;
}

const addProductToCart = name => {
    const cart = getCart();
    if(cart[name]){
    cart[name]=cart[name]+1;
    }
    else{
    cart[name]=1;
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}
const placeOrder = () =>{
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();
