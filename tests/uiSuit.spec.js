const { test, expect } = require('@playwright/test');
import Pages from '../pageObjects/pages';
const { Header } = require('../pageObjects/elements/header')
const { Footer } = require('../pageObjects/elements/footer')
const { RoutingConsole } = require('../pageObjects/elements/routingConsole')

const mainPage = Pages.main
const introPage = Pages.intro
const writingTestPage = Pages.writingTest
const header = new Header();
const footer = new Footer();
const routingConsole = new RoutingConsole();

test.describe('test playwright documentation', ()=>{
  test.beforeEach('open main page', async ({ page, baseURL }) => {
    await mainPage.navigateTo(page);
    await expect(page).toHaveURL(baseURL + mainPage.url);
  });

  test('open how to writing test tutorial', async ({ page, baseURL }) => {
    const openDocsButton = page.locator(header.docsButton);
    const selectWritingTestItem = page.locator(introPage.writingTestItem);

    await openDocsButton.click();
    await selectWritingTestItem.click();
    await expect(page).toHaveURL(baseURL + writingTestPage.url);
    await expect(page).toHaveTitle(/Writing tests | Pywright/);
  });

  test('search by text feature', async ({ page }) => {
    await header.searchByText(page, 'Installation')
    await expect(page).toHaveTitle(/Installation/);
  });

  test('programming language filtering feature', async ({ page }) => {
    await header.selectLanguage(page, header.nodeJsButton, 'Playwright');
    await header.selectLanguage(page, header.pythonButton, 'Playwright for Python');
    await header.selectLanguage(page, header.javaButton, 'Playwright for Java');
    await header.selectLanguage(page, header.dotnetButton, 'Playwright for .NET');
  });

  test('check header elements', async ({ page }) => {
    const headerElements = header.getHeaderElements();
    for(let headerItem of headerElements){
      await expect(page.locator(headerItem)).toBeVisible()
    }
  });

  test('check footer elements', async ({ page }) => {
  const expectedSections = ['Docs', 'Community', 'More'];

  for (const text of expectedSections) {
    const footerSections = await footer.getFooterSections(page, text);
    for (const footerSection of footerSections) {
      expect(footerSection).toContain(text);
    }
  }
  const footerElements = footer.getFooterElements()
    for(let footerItem of footerElements){
      await expect(page.locator(footerItem)).toBeVisible()
    }
  });

  test('check home button', async ({ page, baseURL }) => {
    await introPage.navigateTo(page);
    await page.locator(routingConsole.homeBreadCrumbButton).click()
    await expect(page).toHaveURL(baseURL + mainPage.url);
  });
})
