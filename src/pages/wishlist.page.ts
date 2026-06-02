import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class WishlistPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }   
}