// hooks.js
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  this.browser = await chromium.launch({ headless: false }); // set true for CI
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});
