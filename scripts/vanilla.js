

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
    

    products[0] = new product(
                "Frozen Margarita", 
                "A luscious frozen cocktail that will make you want to shout olé!",
                "7.99", 
                "images/frozen-marg.jpg");

    products[1] = new product(
                "Frozen Hot Chocolate", 
                "Top with whipped cream and chocolate sauce for a dreamy drink!", 
                "8.99", 
                "images/frozen-hot-chocolate.jpg");

    products[2] = new product(
                 "Frozen Sangria", 
                 "With just five ingredients, this is a surefire hit!", 
                 "7.99", 
                 "images/frozen-sangria.jpg");

    products[3] = new product(
                "Frozen Lemonade", 
                "Cool down with this easy drink at your next picnic!", 
                "7.99", 
                "images/frozen-lemonade.jpeg");

    products[4] = new product(
                "Frozen Daiquiri", 
                "A simple and delicious way to cool down on a hot day!",
                "8.99", 
                "images/frozen-daiquiri.jpg");

    products[5] = new product(
                "Frozen Pina Colada", 
                "An updated version of a classic summer cocktail", 
                "9.99", 
                "images/frozen-pina-colada.jpeg");

    products[6] = new product(
                "Frozen Mangorita", 
                "Sweet, salty, creamy, and refreshing! Make a double batch!", 
                "9.99", 
                "images/mangorita.jpeg");

    products[7] = new product(
                "Frozen Chi Chi", 
                "A cousin to the pina colada that swaps out the rum for vodka.", 
                "9.99", 
                "images/frozen-chi-chi");

    products[8] = new product(
            "Frozen Bushwacker", 
            "Like a chocolate-flavored Pina Colada without the pineapple!", 
            "9.99", 
            "images/bushwacker.jpg");
   
    
    
    
printProducts();
    
    
    
    
    
      