$(document).ready(function() {
    function pizza(size, crust) {
        this.size = size;
        this.crust = crust;
        this.toppings = [];
    }

    function location(name, estate) {
        this.name = name;
        this.estate = estate;
    }

    var sizePrice = {
        small: 500,
        medium: 800,
        large: 1200
        mega: 1500
    }

    var toppingsPrice =[
        {
           pepperoni: {
               small: 50,
               medium: 75,
               large: 100,
               mega: 125
           },
           mushrooms: {
            small: 50,
            medium: 75,
            large: 100,
            mega: 125
           },
           onions: {
            small: 50,
            medium: 75,
            large: 100,
            mega: 125
           },
           sausage: {
            small: 50,
            medium: 75,
            large: 100,
            mega: 125
           },
           cheese: {
            small: 50,
            medium: 75,
            large: 100,
            mega: 125
           }
        }
    ];
    var crustPrice = {
        crispy: 100,
        stuffed: 120,
        glutenfree: 100
    };

    function sizecalc(size) {
        if (size === "small"){
            return sizePrice.small * 1;
        }else if(size === "medium") {
            return sizePrice.medium*1;
        }else if {size === "large") {
            return sizePrice.large * 1;
        } else {
            return sizePrice.mega * 1;
        }
    }
});