import { expect, Page } from "@playwright/test";

const loginData = JSON.parse(JSON.stringify(require("../loginTestData.json")));
const username = '#username';
const password = '#password'
const signin = 'Sign in'

/**
 * Function to log into the application using the provided username and password
 * @param page 
 */
export async function login(page:Page){
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.locator(username).fill(loginData.username)
    await page.locator(password).fill(loginData.password)
    await page.getByRole('button', {name: signin}).click()
    
    await expect(page.getByRole('banner').getByRole('heading', { name: 'Web Application' })).toBeVisible();
  }