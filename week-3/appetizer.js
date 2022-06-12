// Import product class from product.js
import { Product } from "./product";

// Create Appetizer class and export module
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}