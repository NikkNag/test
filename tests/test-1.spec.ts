import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://cds-app-poc-cds.testpx.com/homesecurity/appv2/step/1');
//Logo
  await expect(page.getByRole('banner').getByRole('img', { name: 'ADT Logo' })).toBeVisible();
  //Choose your property type:
  await expect(page.getByText('Choose your property type:')).toBeVisible();
  await expect(page.locator('adt-app-v2-form')).toContainText('Choose your property type:');
  
  //Buttons
  await expect(page.getByRole('button', { name: 'Homeowner' })).toBeVisible();
  await expect(page.getByTestId('form-field-OwnRented').getByRole('group')).toContainText('Homeowner');
  await expect(page.getByRole('button', { name: 'Rental' })).toBeVisible();
  await expect(page.getByTestId('form-field-OwnRented').getByRole('group')).toContainText('Rental');
  
  await expect(page.locator('.phone-section').first()).toBeVisible();
  await expect(page.locator('adt-app-v2-form')).toContainText('CALL US NOW!');

  //Security Products

  await expect(page.getByText('Security Products')).toBeVisible();
  await expect(page.locator('adt-app-v2-form')).toContainText('Security Products');
      //Pictures
  await expect(page.getByRole('img', { name: 'Touchscreen panel' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Door & window sensors' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'ADT mobile app' })).toBeVisible();
      //Text
        //Touchscreen panel
    await expect(page.getByText('Touchscreen panelCommand')).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('Touchscreen panelCommand smart home security touchpad');
    await expect(page.locator('section').filter({ hasText: 'Security ProductsTouchscreen' }).getByRole('button').first()).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('GET A FREE QUOTE');
       //Door & Window Sensors
      await expect(page.getByText('Door & Window SensorsSmart,')).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('Door & Window SensorsSmart, front-line detection for your security system.');
      await expect(page.locator('section').filter({ hasText: 'Security ProductsTouchscreen' }).getByRole('button').nth(1)).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('GET A FREE QUOTE');
        //ADT Mobile App
      await expect(page.getByText('ADT Command platform is')).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('ADT Command platform is accessible in the palm of your hand');
      await expect(page.locator('section').filter({ hasText: 'Security ProductsTouchscreen' }).getByRole('button').nth(2)).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('GET A FREE QUOTE');

  //Professionally installed
    //Logo
    await expect(page.getByRole('img', { name: 'Product installation' })).toBeVisible();

    //Text
    await expect(page.getByText('Professionally installed')).toBeVisible();
    await expect(page.getByText('/7 fast-response pro monitoring for intrusion, fire and Carbon Monoxide Expertly installed by professionals, customized to your needs Smart home security and video packages 6-month money-back guarantee** **Applies after ADT has made attempts to resolve a system related issue. See below for full terms.')).toBeVisible();
    
    //Button

    await expect(page.locator('section').filter({ hasText: 'Professionally installed 24/7' }).getByRole('button')).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('GET A FREE QUOTE');

  //ADT In The News
    //Title

    await expect(page.getByText('ADT Security In The News')).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('ADT Security In The News');
    
    //Pictures
    await expect(page.getByRole('img', { name: 'The wall street journal logo' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Mashable logo' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Security infoWatch logo' })).toBeVisible();
    
    //Text
    await expect(page.getByText('“Home security giant ADT has')).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('“Home security giant ADT has made a strategic expansion beyond alarm systems and into the realm of the Internet of Things.”');
    await expect(page.getByText('“ADT brings smart automation')).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('“ADT brings smart automation apps to home security.”');
    await expect(page.getByText('“One of the biggest companies')).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('“One of the biggest companies making breakthroughs in home automation”');

    //Slider

    await expect(page.locator('fieldset').filter({ hasText: 'Customer reviewLynn McNelly “' }).locator('div').first()).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('“Within minutes, every carbon monoxide detector on every floor of the house was going off and ADT called me immediately.Thank goodness ADT called me after three of my alarms kept warning me to evacuate and insisted that I do so.”');
    await expect(page.getByRole('button', { name: 'Previous' }).nth(1)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' }).nth(1)).toBeVisible();

    //Move Left
    await page.getByRole('button', { name: 'Previous' }).nth(1).click();

    //Move right

    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await expect(page.locator('fieldset').filter({ hasText: 'Customer reviewDavid Lee “' })).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('“During a recent storm, our power went out, and the ADT system\'s backup battery kicked in, ensuring that our home remained protected. The system kept working without any hiccups until the power was restored. Thanks to ADT, we never had to worry about our home\'s safety during the outage.”');

    //Back left
    await page.getByRole('button', { name: 'Previous' }).nth(1).click();
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await expect(page.locator('fieldset').filter({ hasText: 'Customer reviewSarah Johnson' }).locator('div').first()).toBeVisible();
    await expect(page.locator('adt-app-v2-form')).toContainText('“I accidentally set off my ADT alarm while at work, and within seconds, they were calling me to check on my safety. The customer service was exceptional, and I appreciate their quick response and concern.”');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    
    await page.locator('fieldset').filter({ hasText: 'Customer reviewEmily Thompson' }).locator('div').first().click();
    await expect(page.locator('adt-app-v2-form')).toContainText('“I had a break-in attempt at my house, and ADT\'s security system immediately alerted me and the authorities. Within minutes, the police arrived, and the perpetrator was caught. Thanks to ADT, my family and I feel safe again.”');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();

    //Guarantee

      //Images
    await expect(page.getByRole('img', { name: 'Theft protection guarantee' })).toBeVisible();
    await expect(page.getByRole('img', { name: '-month, money-back guarantee icon' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Over 145 years icon' })).toBeVisible();
      //Text

      await expect(page.getByText('If a burglary occurs while')).toBeVisible();
      await expect(page.getByText('We’re so confident in our')).toBeVisible();
      await expect(page.getByText('ADT has your back. We’ve been')).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('If a burglary occurs while your ADT system is armed, we’ll pay up to $500† of your insurance deductible. †Certain restrictions may apply. See terms and conditions below.');
      await expect(page.locator('adt-app-v2-form')).toContainText('We’re so confident in our products, we offer one of the best money-back guarantees in the industry. **Applies after ADT has made attempts to resolve a system related issue. See below for full terms.');
      await expect(page.locator('adt-app-v2-form')).toContainText('ADT has your back. We’ve been helping to protect homes longer than any other company in the business.');


      await expect(page.locator('adt-app-v2-form')).toContainText('Theft protection guarantee†');
      await expect(page.locator('adt-app-v2-form')).toContainText('6-month, money-back guarantee**');
      await expect(page.locator('adt-app-v2-form')).toContainText('Over 145 years');
      await expect(page.locator('.guarantees_cta > .phone-section')).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('CALL US NOW!');
      await expect(page.locator('section').filter({ hasText: 'Theft protection guarantee†' }).getByRole('button')).toBeVisible();
      await expect(page.locator('adt-app-v2-form')).toContainText('GET A FREE QUOTE');

    //Footer

    await expect(page.getByRole('contentinfo').getByRole('img', { name: 'ADT Logo' })).toBeVisible();
    await expect(page.getByLabel('Accessibility')).toBeVisible();
    await expect(page.getByText('1501 Yamato Rd, Boca Raton,')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('1501 Yamato Rd, Boca Raton, FL 33431 ©2024 ADT LLC');
    await expect(page.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('Privacy Policy');
    await expect(page.getByRole('link', { name: 'Terms of Use' })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('Terms of Use');
    await expect(page.getByRole('link', { name: 'Licenses' })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('Licenses');
    await expect(page.getByRole('link', { name: 'Communication Opt Out' })).toBeVisible();
    await expect(page.getByText('†Theft Protection Guarantee: Customer may receive reimbursement of up to five')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('†Theft Protection Guarantee: Customer may receive reimbursement of up to five hundred dollars ($500) of Customer’s homeowner’s insurance deductible (if any) if, and only if, ALL requirements for Theft Protection Guarantee are met to ADT’s reasonable satisfaction. Customer must request reimbursement within 60 days of property loss. Request must be mailed to ADT and include: Theft Protection Guarantee certificate signed by Customer, a letter from Customer requesting reimbursement, a copy of the police report, and a copy of the accepted insurance claim. ADT reserves the right to reject any application for reimbursement that does not comply with all of the requirements.');
    await expect(page.getByText('**ADT Money-Back Guarantee: Money back guarantee only applies after ADT has')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('**ADT Money-Back Guarantee: Money back guarantee only applies after ADT has made attempts to resolve a system related issue and has not been able to resolve that issue within the first 6 months of your contract. Equipment must be fully removed before a refund will be processed. Conditions preventing normal system operation cannot be caused by the customer.');
    await expect(page.getByText('General: Additional charges')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('General: Additional charges may apply in areas that require guard response service for municipal alarm verification. System remains property of ADT. Local permit fees may be required. rices and offers subject to change and may vary by market. Aditional taxes and fees may apply. Satisfactory credit required. A security deposit may be required. Simulated screen images and photos are for illustrative purposes only.');
    await expect(page.getByText('Interactive Services: ADT')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('Interactive Services: ADT Command Interactive Solutions Services (“ADT Command”) helps you manage your home environment and family lifestyle. Requires purchase of an ADT alarm system with 36 month monitoring contract ranging $45.99-$59.99/mo with QSP (24-month monitoring contract in California, total fees ranging $1,103.76-$1,439.76), enrollment in ADT Easy Pay, and a compatible device with Internet and email access. These interactive services do not cover the operation or maintenance of any household equipment/systems that are connected to the ADT Command equipment. All ADT Command services are not available with all interactive service levels. All ADT Command services may not be available in all geographic areas. You may be required to pay additional charges to purchase equipment required to utilize the interactive service features you desire.');
    await expect(page.getByText('License information: ©2023')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toContainText('License information: ©2023 ADT LLC dba ADT Security Services. 1 Town Center Rd Boca Raton, FL 33486. All rights reserved. ADT, the ADT logo, 800.ADT.ASAP and the product/service names listed in this document are marks and/or registered marks. Unauthorized use is strictly prohibited. Third-party marks are the property of their respective owners. License information available at www.ADT.com/legal or by calling 800.ADT.ASAP. CA ACO7155, 974443, PPO120288; FL EF0001121; LA F1639, F1640, F1643, F1654, F1655; MA 172C; NC Licensed by the Alarm Systems Licensing Board of the State of North Carolina, 7535P2, 7561P2, 7562P10, 7563P7, 7565P1, 7566P9, 7564P4; NY 12000305615; PA 09079, MS 15019511.');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Communication Opt Out' }).click();
    const page1 = await page1Promise;
    
    expect(await page.waitForURL("/general/opt-out/#page/1"));




});