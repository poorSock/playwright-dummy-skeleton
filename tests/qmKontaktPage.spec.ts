import { test, expect } from "../qmTestBase";

test.describe('kontakt page tests', async () => {
  test.beforeEach('go to kontakt page', async ({qmKontaktPage}) => {
    await qmKontaktPage.goto();
  })

  test('txt fields do exist (Dummy um Annotations zu demonstrieren)', {
    tag: '@dummyTag'
  }, async ({ qmKontaktPage }) => {
    await expect(qmKontaktPage.txtNachricht).toBeVisible();
    await expect(qmKontaktPage.txtNachricht).toBeVisible();
  });

  test('can go to contact page and read error messages', async ({ qmKontaktPage }) => {
    await expect(qmKontaktPage.txtEMailErrorMsg).not.toBeVisible();
    await qmKontaktPage.txtNachricht.fill('TestKommentar');
    await qmKontaktPage.txtName.fill('Testname');
    await qmKontaktPage.chkDatenschutz.check();
    await expect(qmKontaktPage.lblErrorMsg).not.toBeVisible();
    await qmKontaktPage.btnAbsenden.click();
    await expect(qmKontaktPage.txtEMailErrorMsg).toBeVisible();
    await expect(qmKontaktPage.lblErrorMsg).toBeVisible();
  });
});



