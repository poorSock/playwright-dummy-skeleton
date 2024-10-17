import { expect } from "@playwright/test";
import { Given, When, Then } from "./ktxTestBase";

Given('user {string} is logged in', async ({ ktxLoginPage }, username: string) => {
  await ktxLoginPage.login();
});


When('he successfully changes his address', async ({ ktxHomePage, ktxProfilPage, ktxAdressePage }) => {
  await ktxHomePage.gotoProfil();
  await ktxProfilPage.gotoAdresse();
  await ktxAdressePage.setAdresse('AbcStraße', '22', '47443', 'Moers');
});


Then('hes back at the profil page', async ({ ktxProfilPage } ) => {
  await expect(ktxProfilPage.btnAdresse).toBeVisible();
});