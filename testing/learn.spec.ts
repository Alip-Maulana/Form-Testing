import { test, expect } from '@playwright/test';

test('learn pw on website formy project', async ({ page }) => {
    // Navigasi ke halaman utama
    await page.goto('https://formy-project.herokuapp.com/');

    // Buka halaman autocomplete dan isi form
    await page.getByRole('link', { name: 'autocomplete' }).click();
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete');
    await page.getByPlaceholder('Enter address').fill('alifgbr0@gmailssss');
    await page.getByPlaceholder('Street address', { exact: true }).fill('alamat1');
    await page.getByPlaceholder('Street address 2').fill('alamat2');
    await page.getByPlaceholder('City').fill('malang');
    await page.getByPlaceholder('State').fill('jawa timur');
    await page.getByPlaceholder('Zip code').fill('12321');
    await page.getByPlaceholder('Country').fill('indonesia');

    // Interaksi dengan checkbox
    await page.getByRole('link', { name: 'Components' }).click();
    await page.getByRole('link', { name: 'checkbox' }).click();
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/checkbox');
    await page.locator('#checkbox-1').click();
    await page.locator('#checkbox-2').click();
    await page.locator('#checkbox-3').click();
    await page.locator('#checkbox-3').click();
    await page.locator('#checkbox-2').click();
    await page.locator('#checkbox-1').click();

    // Isi tanggal pada datepicker
    await page.getByRole('link', { name: 'Components' }).click();
    await page.getByRole('link', { name: 'datepicker' }).click();
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/datepicker');
    await page.getByPlaceholder('mm/dd/yyyy').fill('01/14/2021'); // Format mm/dd/yyyy

    // Isi form "Complete Web Form"
    await page.getByRole('link', { name: 'Components' }).click();
    await page.getByRole('link', { name: 'Complete Web Form' }).click();
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/form');
    await page.getByPlaceholder('Enter first name').fill('Alip');
    await page.getByPlaceholder('Enter last name').fill('Maulana');
    await page.getByPlaceholder('Enter your job title').fill('EPEP');
    await page.locator('#radio-button-2').click();
    await page.locator('#checkbox-3').click();
    await page.getByLabel('Years of experience:').click();
    await page.locator('select#select-menu').selectOption({ index: 2 });
    await page.getByPlaceholder('mm/dd/yyyy').fill('01/14/2021'); // Format mm/dd/yyyy sesuai dengan placeholder
    await page.getByRole('button', { name: 'Submit' }).click();

    // Validasi URL halaman "thanks"
    await page.goto('https://formy-project.herokuapp.com/thanks');
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/thanks');
});
