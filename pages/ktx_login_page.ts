import { Locator, type Page } from '@playwright/test';

export class KtxLoginPage {

    readonly page: Page;
    readonly btnEinloggen: Locator
    readonly btnDeclineCookies: Locator;
    readonly txtEMail: Locator;
    readonly txtPasswort: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnEinloggen = page.getByRole('button', {name: 'Einloggen'});
        this.btnDeclineCookies = page.getByRole('button', {name: 'Alle ablehnen'});
        this.txtEMail = page.getByRole('textbox', {name: 'E-Mail'});
        this.txtPasswort = page.getByRole('textbox', {name: 'Passwort'});
      }

      async goto() {
        await this.page.goto('https://login.klartax.de/auth/realms/timp/login-actions/authenticate?client_id=sb-backend&tab_id=w7EkYh-Te-A');
        await this.btnDeclineCookies.click();
      }

      async login(){
        await this.goto();
        await this.btnEinloggen.click();
        await this.txtEMail.fill('tpr-testuser-prod@shitmail.me');
        await this.txtPasswort.fill('v8sGqKs63zwe3b4!');
        await this.btnEinloggen.click();
      }
}