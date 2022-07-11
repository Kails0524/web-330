export class FloatMaxField {
    constructor(name, field, max) {
      this.name = name;
      this.field = field;
      this.max = max;
    }
  
    // Validates if input value less than the maximum amount, then return true, else false and display a message.
    validate() {
      if (parseFloat(this.field) < this.max) {
        return true;
      }
  
      return false;
    }
  
    getMessage() {
      return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
  }