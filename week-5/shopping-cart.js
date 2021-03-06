export class ShoppingCart {
    constructor() {
      this._products = [];
    }
  
    count() {
      return this._products.length;
    }
  
    add(products) {
      this._products.push(products);
    }
  
    // iterator function that will yield the results of the product array
    *iterator() {
      for (let product of this._products) yield product;
    }
  
  }