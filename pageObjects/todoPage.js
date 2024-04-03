import { BasePage } from './basePage';

export class TodoPage extends BasePage{
  constructor(page) {
    super(page);
    this.url = '/todomvc';
    this.inputField = `input[placeholder="What needs to be done?"]`;
    this.todoCount = `.todo-count`;
    this.itemCheckbox = `input[aria-label="Toggle Todo"]`;
    this.clearButton = `button.clear-completed`;
  }

  async appendItem(page, text){
    await page.fill(this.inputField, text);
    await page.keyboard.press('Enter');
  }

  async deleteItem(page){
    await page.click(this.itemCheckbox);
    await page.click(this.clearButton);
  }
};