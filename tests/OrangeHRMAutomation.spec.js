import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
import {LoginPage} from '../pages/login';


test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  test.setTimeout(60000); // 60 seconds
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
//test.setTimeout(30000); // 30 seconds
await Login.login('Admin', 'admin123');

});