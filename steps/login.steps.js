const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to the Demoblaze webapp', async function () {
  await this.page.goto('https://demoblaze.com/');
});

When('I click on the login link', async function () {
  await this.page.locator('id=login2').click();
  console.log("Clicked on login button");
});

When('I enter username {string}', async function (username) {
  // Two ways of filling shown in original code
  await this.page.locator('#loginusername').fill(username); 
  await this.page.fill('#loginusername', username);
  console.log("Entered username");
 console.log("Entered username");
});

When('I enter password {string}', async function (password) {
  await this.page.fill('#loginpassword', password);
  console.log("Entered password");
});

When('I click on the login button', async function () {
  await this.page.click("//button[normalize-space()='Log in']");
  console.log("Clicked login button");
});

Then('I should see the logout link', async function () {
  const logoutlink = this.page.locator("//a[@id='logout2']");
  await expect(logoutlink).toBeVisible();
  console.log("Logout link is visible");
});
