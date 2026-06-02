import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page.ts';
import { WishlistPage } from './wishlist.page.ts';

export class NavigationBar extends BasePage {

    private readonly cartPageButton = '.wc-block-mini-cart__button';
    private readonly myAccountPageButton = "//a[text()='My account']";
    private readonly wishlistPageButton = "//a[text()='Wishlist']";

    constructor(page: Page) {
        super(page);
    }

    async clickWishlistPageButton(): Promise<WishlistPage> {
        await this.toLocator(this.wishlistPageButton).click();
        return new WishlistPage(this.page);
    }

}