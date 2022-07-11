export class FloatMinField {
    constructor(name, field, min) {
      this.name = name;
      this.field = field;
      this.min = min;
    }
  
    // Validates if input value greater than the minimum amount, then return true, else false and display a message.
    validate() {
      if (parseFloat(this.field) > this.min) {
        return true;
      }
      return false;
    }
  
    getMessage() {
      return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
  }