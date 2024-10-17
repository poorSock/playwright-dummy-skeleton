import { Locator, type Page } from '@playwright/test';

export class KtxHomePage {

    readonly page: Page;
    readonly btnHome: Locator;
    readonly btnProfil: Locator;


    constructor(page: Page) {
      this.page = page;
      this.btnHome = page.getByTestId('IMG_Logo');
      this.btnProfil = page.getByRole('button', {name: 'Profil'});

    }

    async goto() {
      await this.btnHome.click();
    }

    async gotoProfil() {
      await this.btnProfil.click();
    }

}