const { test, expect } = require('@playwright/test');

const url = "https://docs.google.com/forms/d/e/1FAIpQLSfQeVf5o66PyFWyL590nc2wXVoVMsetkV2rqzQsPWVD3cMxZw/viewform";

const LOOPING = 80;

test('TEST', async ({ page }) => {
    for(let i = 0; i < LOOPING; i++){
        await page.goto(url);

        // Page 1
        // Status Anda
        await page.locator('div[class="AB7Lab Id5V1"]').nth(Math.floor(Math.random() * 3)).click();

        // Frekuensi membeli jajanan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(3 + Math.floor(Math.random() * 4)).click();

        // Lokasi tempat membeli jajanan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(7 + Math.floor(Math.random() * 3)).click();

        // Click "Berikutnya"
        const nextButton = page.getByRole('button', { name: 'Berikutnya' });
        await nextButton.click();

        // Page 2
        // Kebersihan lingkungan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(Math.floor(Math.random() * 5)).click();

        // Penggunaan alat pelindung diri
        await page.locator('div[class="AB7Lab Id5V1"]').nth(5 + Math.floor(Math.random() * 5)).click();

        // Kondisi peralatan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(10 + Math.floor(Math.random() * 5)).click();

        // Penyimpanan jajanan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(15 + Math.floor(Math.random() * 5)).click();

        // Penilaian cita rasa
        await page.locator('div[class="AB7Lab Id5V1"]').nth(20 + Math.floor(Math.random() * 5)).click();

        // Gangguan kesehatan dari Kantin Kampus
        await page.locator('div[class="AB7Lab Id5V1"]').nth(25 + Math.floor(Math.random() * 5)).click();

        // Gangguan kesehatan dari Pinggir Jalan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(30 + Math.floor(Math.random() * 5)).click();

        // Risiko kesehatan Batagor
        await page.locator('div[class="AB7Lab Id5V1"]').nth(35 + Math.floor(Math.random() * 5)).click();

        // Risiko kesehatan Pentol
        await page.locator('div[class="AB7Lab Id5V1"]').nth(40 + Math.floor(Math.random() * 5)).click();

        // Risiko kesehatan Telur Gulung
        await page.locator('div[class="AB7Lab Id5V1"]').nth(45 + Math.floor(Math.random() * 5)).click();

        // Pengaruh harga terhadap kebersihan
        await page.locator('div[class="AB7Lab Id5V1"]').nth(50 + Math.floor(Math.random() * 5)).click();

        // Tempat yang lebih higienis
        await page.locator('div[class="AB7Lab Id5V1"]').nth(55 + Math.floor(Math.random() * 4)).click();

        // Click "Kirim"
        const submitButton = page.locator('text=Kirim');
        await submitButton.click();

        console.log(` > Data ${i+1} terkirim`);
    }
});