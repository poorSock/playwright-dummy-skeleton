import { expect, Locator, type Page } from '@playwright/test';

export class QmMainPage {

    readonly page: Page;
    readonly mobileBurgerMenu: Locator
    readonly linkPortfolio: Locator
    readonly linkKontakt: Locator
    readonly btnDeclineCookies: Locator

    constructor(page: Page) {
        this.page = page;
        this.mobileBurgerMenu = page.getByLabel('Toggle navigation menu');
        this.linkPortfolio = page.getByRole('link', {name: 'Portfolio', exact: true});
        this.linkKontakt = page. getByLabel('Services menu').getByRole('link', {name: 'Kontakt'});
        this.btnDeclineCookies = page.getByRole('button', {name: 'Ablehnen'});
      }

      async goto() {
        await this.page.goto(process.env.URL!);
        await this.btnDeclineCookies.click();
      }

      async headerLinksDoExist(isMobile: boolean){
        if (isMobile){
          await this.clickMobileMenuBar();
        }
        await expect(this.linkPortfolio).toBeVisible();
        await expect(this.linkKontakt).toBeVisible();
      }

      protected async clickMobileMenuBar(){
        await this.mobileBurgerMenu.click();
      }
}