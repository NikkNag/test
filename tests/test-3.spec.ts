import { test, expect } from '@playwright/test';
import { Step1 } from '../src/pages/step1.page';


  let step1Page: Step1;

  test.describe("Step 1 Validation", async function() {
      test.beforeEach("Init Page", async function ({ page }){
        await page.goto('/homesecurity/appv2/step/1')
          step1Page = new Step1(page)
          await step1Page.isPageLoaded;
  })
  test('test1', async ({ page }) => {
    await page.goto('https://development.testpx.com/homesecurity/appv2/step/1');
  await expect(page.getByRole('banner').getByRole('img', { name: 'ADT Logo' })).toBeVisible();
  await expect(page.getByText('Choose your property type:')).toBeVisible();
  await expect(page.getByRole('progressbar')).toBeVisible();
  await expect(page.getByRole('progressbar')).toContainText('20%');
  await expect(page.getByRole('button', { name: 'Homeowner' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Rental' })).toBeVisible();
  await expect(page.getByTestId('form-field-OwnRented').getByRole('group')).toContainText('Homeowner');
  
  await expect(page.getByTestId('form-field-OwnRented').getByRole('group')).toContainText('Rental');
  await expect(page.locator('section').filter({ hasText: 'Call & Get Same-Day' }).getByRole('link')).toBeVisible();
  await expect(page.locator('adt-app-v2-form')).toContainText('CALL US NOW!');



  await page.getByRole('button', { name: 'Next' }).first().click();
  await expect(page.getByRole('img', { name: 'Smart home package', exact: true })).toBeVisible();
  
  await expect(page.locator('adt-app-v2-form')).toContainText('Security Products');
  await expect(page.getByRole('img', { name: 'Touchscreen panel' })).toBeVisible();


  await page.getByRole('button', { name: 'Homeowner' }).click();
  expect(await page.waitForURL("/homesecurity/appv2/step/2"));

  await expect(page.locator('adt-app-v2-form').getByRole('button').first()).toBeVisible();
  await expect(page.getByRole('img', { name: 'ADT Logo' })).toBeVisible();
  await expect(page.getByText('What is your ZIP code?')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'It will help us locate' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^40%$/ }).nth(1)).toBeVisible();
  await expect(page.locator('adt-app-v2-form')).toContainText('What is your ZIP code?');
  await expect(page.getByRole('heading')).toContainText('It will help us locate qualified professionals near you.');
  await expect(page.getByTestId('prev-btn')).toContainText('Back');
  await expect(page.getByTestId('next-btn')).toContainText('Next');
  await expect(page.getByTestId('input-element')).toBeVisible();
  await page.getByTestId('input-element').click();
  await page.getByTestId('input-element').fill('90001');
  await page.locator('adt-app-v2-form').getByRole('button').first().click();
  await page.getByTestId('next-btn').click();
});
  })