import { Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * MainPage class represents the primary landing page and provides 
 * technical interactions with its UI elements.
 */
export class MainPage extends BasePage {
    
    private readonly sortingDropdown = '.orderby';
    private readonly productTitlesLocator = '.woocommerce-loop-product__title';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigates to the application's base URL.
     */
    async navigateToMainPage(): Promise<void> {
        await this.goToUrl('/');
    }

    /**
     * Selects a sorting option from the dropdown by its visible text.
     * @param optionText - The visible label of the option (e.g., 'Sort by price').
     */
    async selectSortingOption(optionText: string): Promise<void> {
        await this.selectDropdownOption(this.sortingDropdown, { label: optionText });
    }

    /**
     * Retrieves all product titles visible on the page as an array of strings.
     * @returns An array containing text content of each product title.
     */
    async getProductTitles(): Promise<string[]> {
        return await this.getTextContents(this.productTitlesLocator);
    }
}