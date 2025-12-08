import { Locator, type Page } from '@playwright/test';
import { QmMainPage } from './qm_main.page';

export class QmKontaktPage extends QmMainPage {

    readonly page: Page;
    readonly isMobile: boolean;
    readonly txtName: Locator
    readonly txtNachricht: Locator
    readonly txtEMail: Locator
    readonly txtEMailErrorMsg: Locator
    readonly btnAbsenden: Locator
    readonly chkDatenschutz: Locator
    readonly lblErrorMsg: Locator

    constructor(page: Page, isMobile: boolean) {
      super(page);
      this.page = page;
      this.isMobile = isMobile;
      this.txtName = page.getByPlaceholder('Vorname');
      this.txtNachricht = page.getByPlaceholder('Nachricht');
      this.txtEMail = page.getByPlaceholder('E-Mail*');
      this.txtEMailErrorMsg = this.txtEMail.locator('..').getByText('Bitte füllen Sie dieses Feld aus.');
      this.btnAbsenden = page.getByRole('button', {name: 'Absenden'});
      this.chkDatenschutz = page.getByRole('checkbox')
      this.lblErrorMsg = page
        .getByLabel('Kontaktformular')
        .getByText('In einem oder mehreren Feldern ist ein Fehler aufgetreten. Bitte überprüfen Sie dies und versuchen Sie es erneut.');
    }

    async goto() {
      await super.goto();
      if (this.isMobile){
        await this.clickMobileMenuBar();
      }
      await this.linkKontakt.click();
    }

}