import { test, expect } from "../src/fixtures/base";

test.describe('Product Sorting Tests', () => {

    /**
     * Test Case: Verify that default sorting option sorts products correctly.
     */
    test('verify that default sorting option sorts products correctly', async ({ mainPage }) => {
        await mainPage.navigateToMainPage();
        await mainPage.selectSortingOption('Default sorting');
        const uiTitles = await mainPage.getProductTitles();

        const sortedTitles = [...uiTitles].sort();
        expect(uiTitles).toEqual(sortedTitles);
    });

});