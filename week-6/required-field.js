export class RequiredField {
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
  
    // If user input value is a valid string, will return true, else false and display a message.
    validate() {
      if (this.field) {
        return true;
      }
      return false;
    }
  
    getMessage() {
      return `${this.name} is a required field.`;
    }
  }