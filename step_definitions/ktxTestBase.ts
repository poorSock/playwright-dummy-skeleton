import { test as base } from 'playwright-bdd';
import { createBdd } from 'playwright-bdd';
import { KtxHomePage } from '../pages/ktx_home_page';
import { KtxLoginPage } from '../pages/ktx_login_page';
import { KtxProfilPage } from '../pages/profil/ktx_profil_page';
import { KtxAdressePage } from '../pages/profil/ktx_adresse_page';

// Declare the types of your fixtures.
type PageFixtures = {
  ktxHomePage: KtxHomePage;
  ktxLoginPage: KtxLoginPage;
  ktxProfilPage: KtxProfilPage;
  ktxAdressePage: KtxAdressePage;
};

// Extend base test by providing my Pages
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<PageFixtures>({
    ktxHomePage: async ({ page }, use) => {
        await use(new KtxHomePage(page));
    },
    ktxLoginPage: async ({ page}, use) => {
        await use(new KtxLoginPage(page));
    },
    ktxProfilPage: async ({ page}, use) => {
        await use(new KtxProfilPage(page));
    },
    ktxAdressePage: async ({ page}, use) => {
        await use(new KtxAdressePage(page));
    }
});

export const { Given, When, Then } = createBdd(test);