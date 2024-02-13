import test, { expect } from "@playwright/test";

test.describe('', () => {
    test.beforeEach(async({page}) => {
        await page.goto("http://zero.webappsecurity.com/");
        await page.click('#feedback');
    })

    test('Reset Feedback form', async({page}) => {
        await page.type('#name', "username");
        await page.type('#email', 'password');
        await page.type('#subject', "username");
        await page.type('#comment', 'password');
        await page.click("input[name='clear']");

        const nameInput = await page.locator('#name');
        const commentInput = await page.locator('#comment');
        await expect(nameInput).toBeEmpty();
        await expect(commentInput).toBeEmpty();
    })

    test('Submit Feedback form', async({page}) => {
        await page.type('#name', "username");
        await page.type('#email', 'password');
        await page.type('#subject', "username");
        await page.type('#comment', 'password');

        const nameInput = await page.locator('#name');
        const commentInput = await page.locator('#comment');
        await expect(nameInput).not.toBeEmpty();
        await expect(commentInput).not.toBeEmpty();

        await page.click("input[type='submit']");

        // another way of assertion
        await page.waitForSelector("#feedback-title");
    })
})