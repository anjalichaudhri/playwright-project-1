import {expect, test} from '@playwright/test';
import helpers from '../helpers/helpers';
test.skip("Selectors", async({page}) => {
    // text
    await page.click('text=some text');

    //css selectors
    await page.click('button');
    await page.click('#id');
    await page.click('.class');

    // only visible css selector
    await page.click('submit-button:visible');

    //combinations
    await page.click('#username .first');

    //xapth
    await page.click('//button');
})

test('working with inputs', async({page})=> {
    await page.goto("http://zero.webappsecurity.com/");
    await page.click('#signin_button');

    await page.fill('#user_login', 'some username');
    await page.fill('#user_password', 'some password');

    await page.click('text=Sign in');

    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong');
})

test('Click Button', async({page}) => {
    await page.goto("http://zero.webappsecurity.com/");
    await page.click('a.brand');
    await page.click('#signin_button');
    await page.click('text=Sign in');

    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong');
});

test.skip('annotations', async({page}) => {
    //skip
    //only
    //describe
});

test.describe.only('Learn Palywright suite', () => {
    // hooks
    test.beforeEach(async({page}) => {
        await page.goto("https://www.example.com");
    })

    test('Navigate to a page', async({page}) => {
        // await page.goto("https://www.example.com");
        const pageTitle = await page.locator('h1');
        await expect(pageTitle).toContainText('Example Domain');
    })

    test('Assertions', async({page})=> {
        const url = "https://www.example.com";
        const title = "Example Domain";
        // await page.goto("https://www.example.com");
        await expect(page).toHaveURL(url);
        await expect(page).toHaveTitle(title);
    
        const element = await page.locator('h1');
    
        await expect(element).toBeVisible();
        await expect(element).toHaveText(title);
        await expect(element).toHaveCount(1);
    
        const elementNotExist = await page.locator('h5');
        await expect(elementNotExist).not.toBeVisible();
    
        await expect(element).toBeVisible();
    });
});

test('tagging @my-tag @testTag', async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/");

    // grep or grep-invert to run tagged tests
});

test('screenshots', async ({page}) => {
    helpers.loadPage(page);
    await page.goto("http://zero.webappsecurity.com/");
    await page.screenshot({path: 'screenshots/main_page1.png'});
    // grep or grep-invert to run tagged tests
});

test('screenshots', async ({page}) => {
    helpers.loadPage(page);
    helpers.takeScreenshot(page);
});

