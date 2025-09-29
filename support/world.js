// world.js
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.loginpom = null; // optional placeholder
  }
}

setWorldConstructor(CustomWorld);
