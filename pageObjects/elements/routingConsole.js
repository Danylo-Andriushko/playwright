import { BasePage } from '../basePage';
const { test, expect } = require('@playwright/test');

export class RoutingConsole extends BasePage{
  constructor(page) {
    super(page);
    this.homeBreadCrumbButton = `.breadcrumbHomeIcon_YNFT`
  }
};