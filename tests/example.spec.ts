import { expect, test } from '@playwright/test';
import { Step1 } from '../src/pages/step1.page';

const mainTextTitle = 'Call & Get Same-Day Installation!¹';
const mainTextSubTitle = 'Get a FREE Quote on your ADT Security\nAlarm System!';
const checkMainSecondSubTitleText = '¹ Available in most areas';

let step1Page: Step1;

test.describe("Step 1 Validation", async function() {
    test.beforeEach("Init Page", async function ({ page }){
      await page.goto('/homesecurity/appv2/step/1')
        step1Page = new Step1(page)
        await step1Page.isPageLoaded;
})

//Тест на 1 шаге
test('Check Step 1 Main title text', async () => {
  expect(await step1Page.getMainTitleText(), "Page Step 1 not contain main text as expected").toEqual(mainTextTitle)
  expect(await step1Page.getMainSubTitleText(), "Page Step 1 not contain main text as expected").toEqual(mainTextSubTitle)
  expect(await step1Page.getMainSecondSubTitleText(), "Page Step 1 not contain main text as expected").toEqual(checkMainSecondSubTitleText)
});

})