import { BasePage } from './basePage';

export class IntroPage extends BasePage{
  constructor(page) {
    super(page);
    this.url = '/docs/intro';
    this.writingTestItem = `.menu__link[href="/docs/writing-tests"]`
  }
};