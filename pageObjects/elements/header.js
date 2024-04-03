import { BasePage } from '../basePage';
const { test, expect } = require('@playwright/test');

export class Header extends BasePage{
  constructor(page) {
    super(page);
    this.homeButtonPointer = `b.navbar__title.text--truncate`
    this.docsButton = `.navbar__item.navbar__link[href='/docs/intro']`
    this.apiButton = `//a[text()="API"]`
    this.programmingLanguageButton = `a.navbar__link[role="button"]`
    this.communityButton = `a[href="/community/welcome"]`
    this.githubButton = `.navbar__link.header-github-link`
    this.discordButton = `.header-discord-link`
    this.colorModeButton = `button[title="Switch between dark and light mode (currently dark mode)"]`
    this.searchButton = `.DocSearch-Button-Placeholder`
    this.searchPlaceholder = `#docsearch-input`
    this.searchText = `.DocSearch-Hit-path mark`
    this.nodeJsButton = `a[data-language-prefix="/"]`
    this.pythonButton = `a[data-language-prefix="/python/"]`
    this.javaButton = `a[data-language-prefix="/java/"]`
    this.dotnetButton = `a[data-language-prefix="/dotnet/"]`
  }

  async searchByText(page, searchText) {
    await page.click(this.searchButton);
    await page.fill(this.searchPlaceholder, searchText);
    await page.waitForSelector(this.searchText);
    await page.keyboard.press('Enter');
  }

  async selectLanguage(page, languageButton, expectedText){
    await page.click(this.programmingLanguageButton);
    await page.click(languageButton);
    if(languageButton){
      const textLocator = page.locator(this.homeButtonPointer);
      await expect(textLocator).toHaveText(expectedText);
    }else{
      throw new Error(`Language wasn't found`)
    }
}

getHeaderElements(){
  const elements = [
      this.homeButtonPointer,
      this.docsButton,
      this.apiButton,
      this.programmingLanguageButton,
      this.communityButton,
      this.githubButton,
      this.discordButton,
      this.colorModeButton,
      this.searchButton,
  ]
  return elements
}

};