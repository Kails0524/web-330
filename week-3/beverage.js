// Import product class from product.js
import { Product } from "./product";

// Create Beverage class and export module.
export class Beverage extends Product {
  constructor(name, price) {
    super(name, price);
  }
}