import { test, Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {

    private readonly sortingDropdown: string = '.orderby';
    private readonly productTitlesLocator: string = '.product-title';

    constructor(page: Page) {
        super(page);
    }
    
    /**
     * Navigates to the base URL and returns an instance of MainPage.
     * @returns A promise that resolves to the MainPage instance.
     */
    async navigateToMainPage(): Promise<MainPage> {
        return await test.step('Navigate to main page', async () => {
            await this.page.goto('/');
            return this;
        });
    }

    /**
     * Selects a sorting option from the dropdown.
     * @param optionText - The visible text of the option to select.
     * @returns A promise that resolves to the current MainPage instance for chaining.
     */
    async selectSortingOption(optionText: string): Promise<this> {
        return await test.step(`Select sorting option as ${optionText}`, async () => {
            await this.page.locator(this.sortingDropdown).selectOption({ label: optionText });
            return this;
        });
    }

    /**
     * Retrieves all product titles visible on the page.
     * @returns A promise that resolves to an array of product title strings.
     */
    async getProductTitles(): Promise<string[]> {
        return await test.step('Get all product titles', async () => {
            return await this.page.locator(this.productTitlesLocator).allTextContents();
        });
    }
}