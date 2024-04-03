import { BasePage } from './basePage';

export class WritingTest extends BasePage{
  constructor(page) {
    super(page);
    this.url = 'docs/writing-tests';
  }
};