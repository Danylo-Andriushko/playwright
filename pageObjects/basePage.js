import { Page } from "@playwright/test";

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(page) {
        await page.goto(this.url);
    }
}
