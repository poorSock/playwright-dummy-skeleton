import { Locator, type Page } from '@playwright/test';

export class KtxProfilPage {

    readonly page: Page;
    readonly btnPersoenliches: Locator;
    readonly btnAdresse: Locator;
    readonly btnFinanzamt: Locator;
    readonly btnBankverbindung: Locator;

    constructor(page: Page) {
      this.page = page;
      this.btnPersoenliches = page.getByRole('button', {name: 'Persönliches'});
      this.btnAdresse = page.getByRole('button', {name: 'Adresse'});
      this.btnFinanzamt = page.getByRole('button', {name: 'Finanzamt'});
      this.btnBankverbindung = page.getByRole('button', {name: 'Bankverbindung'});
    }

    async gotoAdresse(){
      this.btnAdresse.click();
    }

  }