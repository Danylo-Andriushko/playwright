import { BasePage } from '../basePage';
const { test, expect } = require('@playwright/test');

export class Footer extends BasePage{
  constructor(page) {
    super(page);
    this.footerTitles = `.footer__title`
    this.gettingStartedButton = `//a[text()="Getting started"]`
    this.apiReferenceButton = `//a[text()="API reference"]`
    this.stackOverflowButton = `a[href="https://stackoverflow.com/questions/tagged/playwright"]`
    this.discordButton = `a.footer__link-item[href="https://aka.ms/playwright/discord"]`
    this.githubButton = `a.footer__link-item[href="https://github.com/microsoft/playwright"]`
    this.youTubeButton = `a[href="https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg"]`
    this.blogButton = `a[href="https://dev.to/playwright"]`

    
  }

  async getFooterSections(page, text) {
    const footerTitlesItems = await page.$$(this.footerTitles);
    return Promise.all(footerTitlesItems.map(async (footerTitle) => await footerTitle.textContent()))
      .then(textContents => textContents.filter(content => content.includes(text)));
  }

  getFooterElements(){
    const elements = [
        this.gettingStartedButton,
        this.apiReferenceButton,
        this.stackOverflowButton,
        this.discordButton,
        this.githubButton,
        this.youTubeButton,
        this.blogButton
    ]
    return elements
  }
};