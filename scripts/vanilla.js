

    //create an empty array of product objects
    var products = [];
    
    //store DOM elements in variable names for easy access
    var productDiv = document.getElementsByClassName("product")[0];
    var productName = document.querySelector(".product-name > h4");
    var productDescription= document.querySelector(".description > p");
    var price= document.querySelector(".price > p");
    var image = document.querySelector(".product-image > img"); 
    
    //create a constructor functions to add new products
    function product(name, description, price, url) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.url = url;
    }
    
    //create a function to iterate over the array and input them into the html
    function printProducts(){
        for (var i = 0; i <= products.length; i++){  
             if (i < products.length-1){
                var clone = productDiv.cloneNode(true);
                productDiv.parentNode.insertBefore(clone, productDiv);
            };
            productDiv.style.display = "block";
            productName.innerHTML = products[i].name;
            productDescription.innerHTML = products[i].description;
            price.innerHTML = products[i].price;
            image.setAttribute("src", products[i].url); 
            
        }
    
    }
    

    products[0] = new product("Frozen Margarita 0", "Description", "9.99", "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/cl/13/05/frozen-margarita-cl-x.jpg?itok=4LuenRaw");
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
    
    
    
    
    
      