

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
                "Margaritas are synonymous with Mexican food and, of course, Cinco de Mayo! Jack’s Ultimate Frozen Margaritas are a luscious frozen cocktail that will make you want to shout olé!", 
                "7.99", 
                "images/frozen-marg.jpg");

    products[1] = new product(
                "Frozen Hot Chocolate", 
                "This frozen hot chocolate with whipped cream, chocolate sauce and chocolate curls is the stuff hot summer days are made for!", 
                "8.99", 
                "images/frozen-hot-chocolate.jpg");

    products[2] = new product(
                 "Frozen Sangria", 
                 "This Frozen Sangria Slush is just five ingredients, comes together in the blender, and will be the hit of the party! Make a double batch!", 
                 "7.99", 
                 "images/frozen-sangria.jpg");

    products[3] = new product(
                "Frozen Lemonade", 
                "On a hot day, it's hard to beat a tall glass of slushy frozen lemonade! Cool down with this easy drink at your next picnic.", 
                "7.99", 
                "images/frozen-lemonade.jpeg");

    products[4] = new product(
                "Frozen Daiquiri", 
                "There are two styles of daiquiris: frozen and shaken. This mix is for the frozen version of the basic and original lime Daiquiri. It is simple, delicious, and a fantastic way to cool down on a hot summer day.", 
                "8.99", 
                "images/frozen-daiquiri.jpg");

    products[5] = new product(
                "Frozen Pina Colada", 
                "This updated version of a classic summer cocktail includes coconut ice cream and frozen pineapple chunks.", 
                "9.99", 
                "images/frozen-pina-colada.jpeg");

    products[6] = new product(
                "Frozen Mangorita", 
                "if you’re looking for a fun cocktail these Mango Margaritas taste like heaven in a glass. They’re sweet, salty, creamy, and refreshing. But more importantly it gives you the good feels.", 
                "9.99", 
                "images/mangorita.jpeg");

    products[7] = new product(
                "Frozen Chi Chi", 
                "Though many ‘50s cocktails have made it back into circulation, a few have been unjustly forgotten. Take the chi-chi: A cousin to the pina colada that swaps out the rum for vodka. It’s perfect for those who love that pineapple and coconut combination, but not necessarily the sugar rush that comes along.", 
                "9.99", 
                "images/frozen-chi-chi");

    products[8] = new product(
            "Frozen Bushwacker", 
            "The Bushwacker is a fun, indulgent smoothie that is a lot like a chocolate-flavored Pina Colada without the pineapple.", 
            "9.99", 
            "images/bushwacker.jpg");
   
    
    
    
printProducts();
    
    
    
    
    
      