import test, { expect } from "@playwright/test";
import { MainPage } from "../pages/main.page.ts";

test.describe('Product Sorting Tests', () => {

    /**
     * Test Case: Verify that default sorting option sorts products correctly.
     */
    test('verify that default sorting option sorts products correctly', async ({ page }) => {
        const mainPage = new MainPage(page);

        await mainPage.navigateToMainPage();
        await mainPage.selectSortingOption('Default sorting');
        const uiTitles = await mainPage.getProductTitles();

        const sortedTitles = [...uiTitles].sort();
        expect(uiTitles).toEqual(sortedTitles);
    });

});