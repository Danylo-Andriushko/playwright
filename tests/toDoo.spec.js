const { test, expect } = require('@playwright/test');
import Pages from '../pageObjects/pages';

const mainPage = Pages.main;
const todoPage = Pages.todo;

test.describe('test playwright documentation', ()=>{
  test.beforeEach('open todo page', async ({ page, baseURL }) => {
    await todoPage.navigateTo(page);
    await expect(page).toHaveURL(baseURL + todoPage.url + '/#/');
  });

  test('add item to the list', async ({ page }) => {
    await todoPage.appendItem(page, 'start');
    const counter = page.locator(todoPage.todoCount)
    await expect(counter).toHaveText('1 item left');
  });

  test('delete item from the list', async ({ page }) => {
    await todoPage.appendItem(page, 'start');
    await todoPage.deleteItem(page);
    expect(todoPage.todoCount).toBeFalsy;
  });

});