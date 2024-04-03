const { expect } = require('@playwright/test');
import { BasePage } from './basePage';


export class MainPage extends BasePage{
  constructor(page) {
    super(page);
    this.url = '';
  }
};