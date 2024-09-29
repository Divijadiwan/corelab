
class Shop {
    constructor(name,category,price,stock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
    stockCheck(){
        if(this.stock>0)
        console.log(`Availability in stock for ${this.name} is ${this.stock}`);
        else
        console.log(`${this.name} is out of stock`)

    }
    priceChange(change){
        if(change>0){
            this.price = this.price+change;
            console.log(`Price has been increased to $${this.price}`);
        }
        else{
            this.price = this.price+change;
            console.log(`Price has been decreased to $${this.price}`);   
        }
    }

}

const myItem = new Shop('Sequence','Games',15,0);
console.log(myItem);
myItem.stockCheck();
myItem.priceChange(10);
const mySecondItem = new Shop('Fabell Sketch Pens','Stationery',30,50);
console.log(mySecondItem);
mySecondItem.stockCheck();
mySecondItem.priceChange(-10);


