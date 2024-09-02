import { Page, expect } from "@playwright/test";

export class Step1 {
    
    constructor(private page: Page){
        
    }

    async isPageLoaded(): Promise<void> {
        await this.page.waitForURL("/homesecurity/appv2/step/1");
        await this.waitModalClose();
    }

    private async waitModalClose(): Promise<void> {
        if(await this.page.locator("div.modal").locator(".close-btn").isVisible({ timeout: 10000 })){
            await this.page.locator("div.modal").locator(".close-btn").click({ timeout: 30000 });
            const isModalVisible = await this.page.locator("div.modal").locator(".close-btn").isVisible();
            expect(isModalVisible).toBeFalsy();
        }
    }

    async getMainTitleText(): Promise<String>{
        return await this.page.innerText("div.main-text>p:nth-child(1)");
    }
    async getMainSubTitleText(): Promise<String>{
        return await this.page.innerText("p.main-text_subtitle");
    }
    async getMainSecondSubTitleText(): Promise<String>{
        return await this.page.innerText("p.main-text_second-subtitle");
    }
}