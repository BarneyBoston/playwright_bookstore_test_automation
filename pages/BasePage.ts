//BasePage stores Playwright 'Page' instance. Class is protected, so only extending classes can access it
import {Page, Locator, expect} from "@playwright/test";

export abstract class BasePage {

// BasePage is an abstract class, so it cannot be instantiated directly. 
// It can only be extended by other page classes. 
constructor(protected readonly page: Page) {}

// navigates to the specified URL path
protected async goToUrl(path: string){
    await this.page.goto(path);
}

// convert string selector into Locator
protected toLocator(selector: string | Locator): Locator {
    return typeof selector === 'string'
    ? this.page.locator(selector)
    : selector;
}


}
