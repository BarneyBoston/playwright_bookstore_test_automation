//BasePage stores Playwright 'Page' instance. Class is protected, so only extending classes can access it
import { Page, Locator, expect } from "@playwright/test";

export abstract class BasePage {

    // BasePage is an abstract class, so it cannot be instantiated directly. 
    // It can only be extended by other page classes. 
    constructor(protected readonly page: Page) { }

    /* ============== NAVIGATION ============== */
    // navigates to the specified URL path
    protected async goToUrl(path: string) {
        await this.page.goto(path);
    }

    /* ============== HELPERS ============== */
    // clicks on the specified element
    protected async clickElement(selector: string | Locator) {
        await this.toLocator(selector).click();
    }

    // fills the specified input field with the given value
    protected async fillInput(selector: string | Locator, value: string) {
        await this.toLocator(selector).fill(value);
    }

    // asserts that the specified element is visible on the page
    protected async expectElementVisible(selector: string | Locator) {
        await expect(this.toLocator(selector)).toBeVisible();
    }

    // asserts that the specified element is enabled on the page
    protected async expectElementEnabled(selector: string | Locator) {
        await expect(this.toLocator(selector)).toBeEnabled();
    }

    /* ============== UTILITY ============== */
    // convert string selector into Locator
    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string'
            ? this.page.locator(selector)
            : selector;
    }


}
