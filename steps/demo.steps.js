const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to the Demoblaze website', async function () {
  await this.page.goto('https://demoblaze.com/');
});

Then('the page title should be {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});

When('I login with username {string} and password {string}', async function (username, password) {
  await this.page.getByRole('link', { name: 'Log in' }).click();
  await this.page.locator('#loginusername').fill(username);
  await this.page.locator('#loginpassword').fill(password);
  await this.page.getByRole('button', { name: 'Log in' }).click();
});

Then('I should see the welcome message {string}', async function (message) {
  await expect(this.page.getByRole('link', { name: message })).toBeVisible();
});

When('I select the product {string}', async function (product) {
  await this.page.getByRole('link', { name: product }).click();
});

Then('I should see the product details page for {string}', async function (product) {
  await expect(this.page.locator(`//h2[normalize-space()='${product}']`)).toHaveText(product);
});

When('I add the product to the cart', async function () {
  this.page.once('dialog', (dialog) => dialog.accept().catch(() => {}));
  await this.page.getByRole('link', { name: 'Add to cart' }).click();
  await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
});

When('I proceed to checkout', async function () {
  await this.page.getByRole('button', { name: 'Place Order' }).click();
});

Then('the {string} dialog should be displayed', async function (dialogTitle) {
  await expect(this.page.getByRole('heading', { name: dialogTitle })).toHaveText(dialogTitle);
});

When('I enter the order details:', async function (dataTable) {
  const details = dataTable.rowsHash();

  await this.page.locator('#name').fill(details['Name']);
  await this.page.getByRole('textbox', { name: 'Country:' }).fill(details['Country']);
  await this.page.getByRole('textbox', { name: 'City:' }).fill(details['City']);
  await this.page.getByRole('textbox', { name: 'Credit Card:' }).fill(details['Credit Card']);
  await this.page.getByRole('textbox', { name: 'Month:' }).fill(details['Month']);
  await this.page.getByRole('textbox', { name: 'Year:' }).fill(details['Year']);
});


When('I confirm the purchase', async function () {
  await this.page.getByRole('button', { name: 'Purchase' }).click();
});

Then('I should see the message {string}', async function (message) {
  await expect(this.page.getByRole('heading', { name: message })).toBeVisible();
});

Then('I close the confirmation', async function () {
  await this.page.getByRole('button', { name: 'OK' }).click();
  console.log("Confirmation popup is closed")
});
