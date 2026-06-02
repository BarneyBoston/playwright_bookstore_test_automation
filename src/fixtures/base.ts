import { test as base } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { WishlistPage } from '../pages/wishlist.page';

// define types for webpages
type MyFixture = {
    mainPage: MainPage;
    wishlistPage: WishlistPage;
}

// extend base test with pages
export const test = base.extend<MyFixture>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    wishlistPage: async ({ page }, use) => {
        await use(new WishlistPage(page));
    },
});

export { expect } from '@playwright/test';