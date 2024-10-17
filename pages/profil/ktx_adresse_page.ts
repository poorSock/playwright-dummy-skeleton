import { Locator, type Page } from '@playwright/test';

export class KtxAdressePage {

    readonly page: Page;
    readonly txtStraße: Locator;
    readonly txtHausnummer: Locator;
    readonly txtPLZ: Locator;
    readonly txtOrt: Locator;
    readonly btnSpeichernUndZurueck: Locator;

    constructor(page: Page) {
      this.page = page;
      this.txtStraße = page.getByRole('textbox', {name: 'Straße'});
      this.txtHausnummer = page.getByRole('textbox', {name: 'Hausnummer'});
      this.txtPLZ = page.getByRole('textbox', {name: 'PLZ'});
      this.txtOrt = page.getByRole('textbox', {name: 'Ort'});
      this.btnSpeichernUndZurueck = page.getByRole('button', {name: 'Speichern und zurück'})
    }

    async setAdresse(straße: string, hausnummer: string, plz: string, Ort: string){
      this.txtStraße.fill(straße);
      this.txtHausnummer.fill(hausnummer);
      this.txtPLZ.fill(plz);
      this.txtOrt.fill(Ort);
    }

}