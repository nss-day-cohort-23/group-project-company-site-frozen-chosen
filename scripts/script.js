$(document).ready(function(){

//create an empty array of product objects
var products = [];

//store DOM elements in variable names for easy access
var productDiv = $(".product");
var productName = $(".product-name h4");
var productDescription = $(".description p");
var price = $(".price p");
var imgurl = $(".image").attr("src");

//create a constructor functions to add new products
function product(name, description, price, url) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = imageurl;
}

//create a function to add new products to the array
function addToArray(product) {
    products.push(product);
}


//create a function to iterate over the array and input them into the html
function printProducts(){
    for (var i = 0; i <= products.length; i++){
        if (i < products.length-1){
            productDiv.clone().insertAfter(productDiv);
        };
        productDiv.show();
        productName.text(products[i].name);
        productDescription.text(products[i].description);
        price.text(products[i].price);
        img.text(products[i].url);   
    }

}

// add products
products[0] = new product("Frozen Margarita 0", "Description", "9.99", "url");
products[1] = new product("Frozen Margarita 1", "Description", "9.99", "url");
products[2] = new product("Frozen Margarita 2", "Description", "9.99", "url");
products[3] = new product("Frozen Margarita 3", "Description", "9.99", "url");
products[4] = new product("Frozen Margarita 4", "Description", "9.99", "url");
products[5] = new product("Frozen Margarita 5", "Description", "9.99", "url");
products[6] = new product("Frozen Margarita 6", "Description", "9.99", "url");
products[7] = new product("Frozen Margarita 7", "Description", "9.99", "url");
products[8] = new product("Frozen Margarita 8", "Description", "9.99", "url");
products[9] = new product("Frozen Margarita 9", "Description", "9.99", "url"); 

printProducts();

});



  