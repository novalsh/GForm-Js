const { chromium } = require('playwright');

const formData = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSe7PmRDLsd3waWdvCSSCaxnxzX6AFiyHS5dQHJ_ndwIGy1KYA/viewform',
  names: [
    'AUGUSTINUS ADRIAN TRIPUTRA', 'HADAD AL AKBAR', 'MICHAEL AWARSA KESUMA', 'VANESSA DANUWIJAYA',
    'STEVEN SADEMI', 'MOSSES FERRO PUTRA', 'AURELIUS TRISANDIO PRASETYO', 'ANDRE WIJAYA SIREGAR',
    'ABEL KRISTANTO', 'GRACIO ELIKA ENOLD TIRTAHARDJA', 'Rifaldi Indrajaya', 'CHANTYO ATMAJA PRIYOTAMA',
    'MOCHAMMAD LATIFULFIKRI', 'HANA DYAH AYU PERTIWI', 'VINCENT', 'ALVIN TRISTANDY',
    'FEBRIANT YAPSON', 'MUHAMMAD REZA FATURRAHMAN', 'APRILIA JOCELYNE GUNAWAN', 'TIMOTEUS DAMAR WICAKSONO',
    'YEHUDA KRISTIAWAN', 'RAFAEL VALENTINO SONTANA', 'JONATHAN APRILIANO SAPUTRA BOEDIONO', 'MARCELINO HANS SETIA BUDI',
    'ANGELINA PATIENCE MULIA', 'PRISTIAN BUDI DHARMAWAN', 'SEFTICO FRIG INJEK B', 'RYAN WIRA ARIZA DIPURA',
    'M. RIFKY FAUZAN', 'AHMAD ZAINI', 'MUHAMMAD RIZQI AULIA', 'VELA PUTRI MAULIA',
    'DIRK JOHANES HENDRIK YAPSOUMILENA', 'STACIA AGATHA', 'PHILEO CHARLES IRAWAN', 'MARCHEL CHRISTHOPER WUISANG',
    'MARIO GRACIUS KRISHNA LITA', 'GABRIEL RYU FERDINAND HADIWIDJOJO', 'KOMANG ANDIKA WIRA SANTOSA', 'RAIHAN DAFFA RIZKY',
    'YOSEPH ZOSIMUS SAKERA', 'ROY JONES SANTOSO', 'KENNETH EZEKIEL SUNARDIBUANA', 'MARWAH INAS RABBANI',
    'MUHAMMAD NAUFAL SINAI HARJANA', 'OWEN TJIOE', 'ALYA DHIYA MARDHIYYAH', 'ATHALLAH YUDHISTIRA ANNABEEL NUGROHO',
    'DIMAS SYAUQI SYAFA', 'DAVID CHRISTIAN DJARANG', 'MUHAMMAD ZUFAR IBRAHIM', 'ZAIDAN SULTANSYAH',
    'DENY ANDRIAWAN', 'NABIL IZZATURRAHMAN', 'MARIANUS ALAND GIAN NDAY', 'ADAM YAKSYAPUTRA HADIAN',
    'KEVIN IRZAM RACHMADIANSYAH', 'ATHAILLAH ADHAR JUMANA', 'CHRISTOPHER JONATHAN', 'EDREA RAMAYO JECONIAH GIRSANG',
    'MUHAMMAD FADZLI MAULA', 'HANLEY YUNANDA SAPUTRA', 'NAUFAL HUMAM RISQULLAH PUJIANPUTRA', 'SHAFWAN HAFIZH SUPARNO',
    'FIKRI AL-FALAQ FI RAJABI', 'KHARISMA INDHIARTO PUTRA', 'AHMAD MUDHIYA ANANTA RAHMAN', 'BAYU FERDIMAN',
    'ADEVA SATRIA ARIF WIBAWA', 'KEYLA AZZAHRA', 'HENDRA WIJAYA PUTRA', 'AHMAD NAUFAL ABDURROHMAN ALFADLI',
    'ADIE AGENG PRAYOGO BIN MUTTAQIN', 'JEDITH ALMANDO ISTIAN', 'ADONIA GRACIO', 'CHRISTIAN ALFASHANOEL RIYANTO',
    'SEPTY AULIA ANGGRAENI', 'ACHMAD RIJAAL FAJRUL FALACH', 'THEODORUS AUSTIN VALENZIO', 'PATRICK LERE DAWA',
    'CHANTIKKA RIFFKA RAHMADHANI CITRA KARISMA', 'ADAM FAWAZZAKY FARDY ANDREEAN', 'MOCHAMMAD RYAN PUTRA HERMAWAN',
    'JAZLYN JAN KEYLA LATIF', 'BENEDIKTUS HENGKI SETIAWAN', 'NAURA SHEIKA MARYAM', 'FAIRUZ FIRNANDA ARIANTO',
    'RAMADHAN IHSANI YULFA', 'RAFFI NAUFAL AHNAFFADHIL', 'EVELYN CHRISYLA VALENTINA', 'SEBASTIANUS DIMAS ANJANGASMARA',
    'MUHAMMAD THALENTA DIRGANTARA DEHA', 'DANIEL LEE RUNTUWENE', 'RIZALDI PRASETYA', 'ROSYIDAN ROUF FAISAL',
    'SAMUEL PRAWIRA KUSUMA', 'ARYA YUDHA SAPUTRA', 'MUHAMMAD FARIDZ ANUGRAH', 'MUHAMMAD AKBAR RAHMAN',
    'MUHAMMAD HERNANDO DZAKWAN HASAN', 'PATRICIA LAURENCIA WOGE', 'RIZALDI ARDIKA MAHENDRA PRATAMA'
  ],
  experience: ['< 1 Tahun', '3 - 5 Tahun', '10 - 15 Tahun', '> 20 Tahun'],
  feedbacks: [
    "Aplikasi ini sangat praktis untuk manajemen data sehari-hari.",
    "Waktu loading cukup cepat, tetapi ada ruang untuk peningkatan.",
    "Fitur export ke Excel sangat membantu analisis data.",
    "Mohon tambahkan tema gelap untuk kenyamanan mata.",
    "Saya mengalami error saat mencoba mencetak laporan tertentu.",
    "Integrasi dengan email sangat memudahkan pengiriman laporan.",
    "Desain aplikasi ini sangat intuitif untuk pengguna pemula.",
    "Mohon tambahkan fitur untuk backup data otomatis.",
    "Dokumentasi API sangat jelas dan membantu pengembang.",
    "Beberapa fitur membutuhkan akses internet yang lebih stabil.",
    "Mohon tambahkan statistik penggunaan pada dashboard.",
    "Fitur filter pada laporan sangat bermanfaat.",
    "Aplikasi ini cukup ringan digunakan di perangkat lama.",
    "Mohon perbaiki error yang terjadi saat login di jam tertentu.",
    "Saya suka dengan fleksibilitas pengaturan hak akses pengguna.",
    "Proses pembaruan aplikasi cukup mudah dan cepat.",
    "Mohon tambahkan fitur pengingat berbasis lokasi.",
    "Saya mengalami kesulitan saat mencoba mengimpor data besar.",
    "Pengaturan preferensi pengguna cukup lengkap dan fleksibel.",
    "Fitur analitik data sangat membantu pengambilan keputusan.",
    "Mohon tambahkan opsi untuk menyesuaikan notifikasi.",
    "Waktu respon aplikasi ini cukup cepat di perangkat baru.",
    "Fitur pengelompokan data memudahkan organisasi informasi.",
    "Beberapa ikon di dashboard sulit dimengerti oleh pengguna baru.",
    "Dukungan offline sangat membantu saat jaringan tidak stabil.",
    "Saya suka fitur template laporan yang disediakan.",
    "Mohon tambahkan opsi untuk mengunduh laporan dalam format PDF.",
    "Aplikasi ini sangat kompatibel dengan sistem operasi terbaru.",
    "Fitur log aktivitas pengguna sangat bermanfaat.",
    "Saya mengalami kendala saat mencoba sinkronisasi data.",
    "Mohon tambahkan fitur untuk melihat history perubahan data.",
    "Proses pencadangan data sangat cepat dan aman.",
    "Saya suka dengan detail informasi pada laporan.",
    "Mohon tambahkan integrasi dengan platform media sosial.",
    "Aplikasi ini cukup hemat baterai saat digunakan di perangkat mobile.",
    "Fitur pemetaan data sangat inovatif.",
    "Saya mengalami sedikit keterlambatan saat membuka menu tertentu.",
    "Mohon tambahkan opsi untuk menghapus beberapa data secara massal.",
    "Fitur keamanan data cukup terpercaya.",
    "Saya suka dengan desain laporan yang bisa disesuaikan.",
    "Mohon tambahkan fitur untuk membandingkan data antar periode.",
    "Fitur drag-and-drop sangat memudahkan pengelolaan data.",
    "Aplikasi ini memiliki opsi pencarian yang sangat cepat.",
    "Mohon tambahkan opsi untuk menambahkan catatan pada laporan.",
    "Integrasi dengan cloud storage sangat bermanfaat.",
    "Mohon tambahkan pengaturan untuk mengurangi konsumsi data.",
    "Fitur kolaborasi tim sangat memudahkan kerja kelompok.",
    "Mohon tambahkan opsi pengingat waktu dengan alarm suara.",
    "Proses registrasi pengguna baru sangat sederhana.",
    "Saya suka dengan grafik visual yang disajikan di aplikasi ini.",
    "Mohon tambahkan fitur untuk menyimpan pengaturan preferensi.",
    "Saya mengalami kesulitan memahami istilah tertentu dalam aplikasi.",
    "Aplikasi ini sangat membantu untuk mengelola jadwal harian.",
    "Mohon tambahkan opsi untuk berbagi laporan secara langsung.",
    "Fitur autocomplete sangat membantu dalam pengisian data.",
    "Waktu login kadang memakan waktu lebih lama dari biasanya.",
    "Fitur pencarian dalam aplikasi ini cukup komprehensif.",
    "Mohon tambahkan tutorial interaktif saat pertama kali menggunakan aplikasi.",
    "Saya suka dengan fitur pengelompokan kategori data.",
    "Mohon tambahkan dukungan untuk pengguna dengan kebutuhan khusus.",
    "Aplikasi ini sangat mudah dipahami bahkan tanpa panduan.",
    "Fitur notifikasi email sangat berguna.",
    "Mohon tambahkan opsi untuk mencetak laporan langsung dari aplikasi.",
    "Fitur penguncian aplikasi sangat bermanfaat untuk keamanan data.",
    "Mohon tambahkan informasi statistik harian pada dashboard.",
    "Saya mengalami sedikit kesulitan saat mencoba mengatur pengaturan awal.",
    "Fitur konektivitas Bluetooth sangat inovatif.",
    "Aplikasi ini dapat diakses dengan mudah dari berbagai perangkat.",
    "Mohon tambahkan fitur untuk menyematkan data favorit.",
    "Saya mengalami crash saat mencoba membuka laporan tertentu.",
    "Fitur sorting data sangat membantu.",
    "Mohon tambahkan pengaturan otomatis untuk pembaruan aplikasi.",
    "Dokumentasi aplikasi ini cukup jelas dan lengkap.",
    "Fitur pelacakan waktu sangat membantu manajemen proyek.",
    "Mohon tambahkan fitur untuk menyimpan draft laporan.",
    "Saya suka dengan fleksibilitas pengaturan format laporan.",
    "Mohon tambahkan opsi untuk mengunduh laporan dalam format CSV.",
    "Fitur reminder berbasis kalender sangat membantu.",
    "Aplikasi ini cukup kompatibel dengan perangkat lama.",
    "Mohon tambahkan opsi untuk mengatur warna pada grafik.",
    "Fitur import data sangat memudahkan transisi dari sistem lama.",
    "Mohon tambahkan opsi backup otomatis ke cloud."
  ],
};

async function fillAllQuestions(page, questionType) {
  const questions = await page.$$('div[role="listitem"]');
  console.log(`[INFO] ${questionType}: ${questions.length} pertanyaan ditemukan.`);

  let filledQuestions = 0;

  for (const [index, question] of questions.entries()) {
    const options = await question.$$('label');
    if (options.length > 0) {
      const randomOption = options[Math.floor(Math.random() * options.length)];
      await randomOption.click();
      console.log(`[INFO] ${questionType}: Pertanyaan ke-${index + 1} diisi.`);
      filledQuestions++;
    } else {
      console.log(`[WARNING] ${questionType}: Tidak ada opsi untuk pertanyaan ke-${index + 1}.`);
    }
  }

  if (filledQuestions === questions.length) {
    console.log(`[SUCCESS] Semua pertanyaan di ${questionType} berhasil diisi.`);
  } else {
    console.log(`[ERROR] ${questionType}: ${questions.length - filledQuestions} pertanyaan tidak terisi.`);
  }
}
  
async function fillForm(page, iteration, name) {
  try {
      console.log(`\n=== Mengisi Form ke-${iteration + 1} ===`);
      await page.goto(formData.url);
      await page.waitForLoadState('networkidle');

      // Isi nama
      const nameField = await page.waitForSelector('input[type="text"]');
      await nameField.fill(name);
      console.log('Nama terisi:', name);

      // Pilih pengalaman
      const experienceChoice = formData.experience[iteration % formData.experience.length];
      await page.click(`text="${experienceChoice}"`);
      console.log('Pengalaman dipilih:', experienceChoice);

      // Lanjut ke halaman berikutnya
      await page.click('div[role="button"]:has-text("Berikutnya")');
      await page.waitForTimeout(2000);

      // Isi pertanyaan halaman 2
      await fillAllQuestions(page, 'Halaman 2');
      await page.click('div[role="button"]:has-text("Berikutnya")');
      await page.waitForTimeout(2000);

      // Isi pertanyaan halaman 3
      await fillAllQuestions(page, 'Halaman 3');
      await page.click('div[role="button"]:has-text("Berikutnya")');
      await page.waitForTimeout(2000);

      // Isi feedback dengan random feedback
      const textArea = await page.waitForSelector('textarea');
      const randomFeedback = formData.feedbacks[Math.floor(Math.random() * formData.feedbacks.length)];
      await textArea.fill(randomFeedback);
      console.log('Feedback terisi:', randomFeedback);

      // Kirim form
      await page.click('div[role="button"]:has-text("Kirim")');

      // Tunggu konfirmasi
      for (let attempt = 0; attempt < 3; attempt++) {
          try {
              await page.waitForSelector('div.freebirdFormviewerViewResponseConfirmationMessage', { timeout: 5000 });
              console.log('Konfirmasi pengiriman diterima.');
              break;
          } catch {
              console.log(`[RETRY] Menunggu konfirmasi pengiriman (percobaan ${attempt + 1})...`);
              if (attempt === 2) {
                  throw new Error('Gagal memverifikasi pengiriman setelah 3 kali percobaan.');
              }
          }
      }
  } catch (error) {
      console.error(`Error pada iterasi ${iteration + 1}:`, error);
  }
}

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
      // Proses setiap nama dalam array
      for (let i = 0; i < formData.names.length; i++) {
          console.log(`\n=== Mulai Iterasi ke-${i + 1} dari ${formData.names.length} ===`);
          await fillForm(page, i, formData.names[i]);
          console.log(`\n=== Iterasi ke-${i + 1} selesai ===`);
          await page.waitForTimeout(2000);
      }
  } catch (error) {
      console.error('Kesalahan dalam proses utama:', error);
  } finally {
      console.log(`\nTotal form yang diproses: ${formData.names.length}`);
      console.log('Semua proses selesai. Menutup browser...');
      await browser.close();
  }
}

main().catch(console.error);