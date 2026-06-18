const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('open', !isOpen);
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });
}

const LANGUAGE_STORAGE_KEY = 'agentops-language';
const WHATSAPP_NUMBER = '6288808399025';
const supportedLanguages = new Set(['en', 'id']);
const textNodeOriginals = new WeakMap();
const attributeOriginals = new WeakMap();

const translations = {
  id: {
    'AgentOps Indonesia — AI Agents for Real Indonesian Business Workflows': 'AgentOps Indonesia — Agen AI untuk Operasi Bisnis Indonesia',
    'AgentOps Indonesia builds supervised AI agents for real Indonesian business workflows across WhatsApp, Excel, email, PDFs, CRM, ERP, HR, finance, and reporting.': 'AgentOps Indonesia membangun agen AI bersupervisi untuk workflow bisnis nyata di Indonesia, mulai dari WhatsApp, Excel, email, PDF, CRM, ERP, HR, keuangan, hingga pelaporan.',
    'Turn repetitive WhatsApp, Excel, email, PDF, CRM, ERP, HR, finance, and reporting workflows into supervised AI agents with human approval, monitoring, and measurable ROI.': 'Ubah workflow repetitif di WhatsApp, Excel, email, PDF, CRM, ERP, HR, keuangan, dan pelaporan menjadi agen AI bersupervisi dengan persetujuan manusia, monitoring, dan ROI yang terukur.',
    'Skip to content': 'Lewati ke konten',
    'Primary navigation': 'Navigasi utama',
    'AgentOps Indonesia home': 'Beranda AgentOps Indonesia',
    'Open navigation menu': 'Buka menu navigasi',
    'Use cases': 'Contoh penggunaan',
    'Offers': 'Paket',
    'Safety': 'Keamanan',
    'Process': 'Proses',
    'Book audit': 'Pesan audit',
    'Agentic AI Ops Agency for Indonesian Businesses': 'Agensi Agentic AI Ops untuk Bisnis Indonesia',
    'AI Agents for Real Indonesian Business Workflows': 'Agen AI untuk Operasi Bisnis Indonesia',
    'We build supervised AI agents that execute repetitive workflows across WhatsApp, Excel, email, PDFs, CRM, ERP, HR, finance, and internal tools — with human approval, monitoring, and measurable ROI.': 'Kami membangun agen AI bersupervisi yang menjalankan workflow repetitif di WhatsApp, Excel, email, PDF, CRM, ERP, HR, keuangan, dan tools internal — dengan persetujuan manusia, monitoring, dan ROI yang terukur.',
    'Primary actions': 'Aksi utama',
    'Book an AI Workflow Audit': 'Pesan Audit Workflow AI',
    'See Example Agents': 'Lihat Contoh Agen',
    'Built for Indonesian businesses that want practical AI implementation, not vague AI hype.': 'Dibangun untuk bisnis Indonesia yang menginginkan implementasi AI praktis, bukan hype AI yang samar.',
    'Live Workflow Pilot': 'Pilot Workflow Langsung',
    'Human approved': 'Disetujui manusia',
    'Chat with AgentOps Indonesia on WhatsApp': 'Chat dengan AgentOps Indonesia di WhatsApp',
    'Incoming Request': 'Permintaan Masuk',
    '“Please summarize yesterday’s sales inquiries, extract invoice requests, and draft follow-ups for manager approval.”': '"Tolong rangkum pertanyaan sales kemarin, ekstrak permintaan invoice, dan buat draft follow-up untuk persetujuan manager."',
    'Agent workflow route': 'Alur workflow agen',
    'Approval': 'Persetujuan',
    'messages sorted': 'pesan disortir',
    'follow-ups drafted': 'draft follow-up dibuat',
    'exceptions routed': 'pengecualian diarahkan',
    'Manager Review Queue': 'Antrean Review Manager',
    'Agent output waits for sign-off before sending.': 'Output agen menunggu persetujuan sebelum dikirim.',
    'Approve draft': 'Setujui draft',
    'Finance': 'Keuangan',
    'Reports': 'Laporan',
    '01 / Manual drag': '01 / Beban manual',
    'Your Business Is Growing. Your Operations Are Still Too Manual.': 'Bisnis Anda Bertumbuh. Operasional Anda Masih Terlalu Manual.',
    'Customer inquiries are stuck in WhatsApp. Reports are built manually from spreadsheets. Invoices and documents are checked one by one. Sales follow-ups depend on memory. Managers wait for updates from different teams.': 'Pertanyaan pelanggan tertahan di WhatsApp. Laporan dibuat manual dari spreadsheet. Invoice dan dokumen dicek satu per satu. Follow-up sales bergantung pada ingatan. Manager menunggu update dari tim yang berbeda.',
    'Problem': 'Masalah',
    'Scattered chats, spreadsheets, email threads, and PDFs slow sales, increase mistakes, overload staff, and reduce visibility.': 'Chat, spreadsheet, thread email, dan PDF yang tersebar memperlambat sales, menambah kesalahan, membebani staf, dan mengurangi visibilitas.',
    'Hidden cost': 'Biaya tersembunyi',
    'Lost leads, delayed invoices, unanswered customer messages, and expensive human time spent on low-value admin work.': 'Lead hilang, invoice terlambat, pesan pelanggan tidak terjawab, dan waktu manusia yang mahal habis untuk pekerjaan admin bernilai rendah.',
    'Real need': 'Kebutuhan nyata',
    'AI that works inside your specific process — with workflow rules, approval steps, monitoring, and ROI tracking.': 'AI yang bekerja di dalam proses spesifik Anda — dengan aturan workflow, tahap persetujuan, monitoring, dan pelacakan ROI.',
    'New operating model': 'Model operasi baru',
    'What If One AI Agent Could Handle the Repetitive Part?': 'Bagaimana Jika Satu Agen AI Bisa Menangani Bagian yang Repetitif?',
    'Imagine a workflow where customer messages are categorized automatically, invoice data is extracted from PDFs, daily reports are prepared from spreadsheets, and your team only approves what matters.': 'Bayangkan workflow ketika pesan pelanggan dikategorikan otomatis, data invoice diekstrak dari PDF, laporan harian disiapkan dari spreadsheet, dan tim Anda hanya menyetujui hal yang penting.',
    'It does not replace your team. It gives your team leverage.': 'Ini tidak menggantikan tim Anda. Ini memberi tim Anda leverage.',
    'Supervised AI workflow diagram': 'Diagram workflow AI bersupervisi',
    'Trigger': 'Pemicu',
    'Chat, file, form': 'Chat, file, formulir',
    'Agent': 'Agen',
    'Read, draft, route': 'Baca, draft, arahkan',
    'Human': 'Manusia',
    'Review & approve': 'Tinjau & setujui',
    '02 / Positioning': '02 / Posisi',
    'We Do Not Sell Generic AI Automation. We Build Agentic AI Operations.': 'Kami Tidak Menjual Otomasi AI Generik. Kami Membangun Operasi AI Agentic.',
    'AgentOps Indonesia turns real business workflows into AI-powered systems. The output is not “AI for the sake of AI.” The output is a safer, faster, more measurable business process.': 'AgentOps Indonesia mengubah workflow bisnis nyata menjadi sistem bertenaga AI. Outputnya bukan "AI sekadar AI." Outputnya adalah proses bisnis yang lebih aman, lebih cepat, dan lebih terukur.',
    'Workflow mapping': 'Pemetaan workflow',
    'Business rules': 'Aturan bisnis',
    'Human approval': 'Persetujuan manusia',
    'Tool integration': 'Integrasi tools',
    'Risk control': 'Kontrol risiko',
    'Performance monitoring': 'Monitoring performa',
    'Continuous improvement': 'Perbaikan berkelanjutan',
    '03 / Example agents': '03 / Contoh agen',
    'Start With the Workflow That Wastes the Most Time': 'Mulai dari Workflow yang Paling Banyak Membuang Waktu',
    'WhatsApp Sales & Support Agent': 'Agen Sales & Support WhatsApp',
    'Answers repeated inquiries, summarizes customer needs, drafts responses, routes complex cases, and supports sales follow-up.': 'Menjawab pertanyaan berulang, merangkum kebutuhan pelanggan, membuat draft respons, mengarahkan kasus kompleks, dan mendukung follow-up sales.',
    'Sales': 'Sales',
    'Support': 'Support',
    'Follow-up': 'Follow-up',
    'Invoice & Document Processing Agent': 'Agen Pemrosesan Invoice & Dokumen',
    'Reads invoices, purchase orders, receipts, contracts, or PDFs, extracts key data, flags missing information, and prepares review queues.': 'Membaca invoice, purchase order, kuitansi, kontrak, atau PDF, mengekstrak data penting, menandai informasi yang kurang, dan menyiapkan antrean review.',
    'Daily Business Report Agent': 'Agen Laporan Bisnis Harian',
    'Collects data from spreadsheets, CRM, marketplace exports, POS systems, or accounting files and prepares daily management summaries.': 'Mengumpulkan data dari spreadsheet, CRM, export marketplace, sistem POS, atau file akuntansi dan menyiapkan ringkasan manajemen harian.',
    'Recruitment Screening Agent': 'Agen Screening Rekrutmen',
    'Screens CVs, summarizes candidates, ranks applicants based on criteria, and helps schedule interviews.': 'Menyaring CV, merangkum kandidat, memberi peringkat pelamar berdasarkan kriteria, dan membantu menjadwalkan interview.',
    'Finance & Admin Reconciliation Agent': 'Agen Rekonsiliasi Keuangan & Admin',
    'Matches payments, tracks invoice status, prepares reminders, categorizes expenses, and supports vendor follow-up.': 'Mencocokkan pembayaran, melacak status invoice, menyiapkan reminder, mengategorikan pengeluaran, dan mendukung follow-up vendor.',
    'Payments': 'Pembayaran',
    'Invoices': 'Invoice',
    'Admin visibility': 'Visibilitas admin',
    '04 / ROI sketch': '04 / Sketsa ROI',
    'Estimate the Admin Hours You Could Recover': 'Estimasi Jam Admin yang Bisa Anda Ambil Kembali',
    'Use this quick calculator to frame one pilot around time saved, not AI hype. Adjust the assumptions during the workflow audit.': 'Gunakan kalkulator singkat ini untuk membingkai satu pilot berdasarkan waktu yang dihemat, bukan hype AI. Sesuaikan asumsi saat audit workflow.',
    'Hours of repetitive work per week': 'Jam kerja repetitif per minggu',
    'Estimated loaded cost per hour': 'Estimasi biaya lengkap per jam',
    'Potential monthly time value': 'Nilai waktu potensial per bulan',
    '05 / Starting points': '05 / Titik awal',
    'Choose the Right Starting Point': 'Pilih Titik Awal yang Tepat',
    'Start with one workflow, prove ROI, then scale only after the pilot works.': 'Mulai dari satu workflow, buktikan ROI, lalu scale hanya setelah pilot berhasil.',
    'AI Workflow Audit': 'Audit Workflow AI',
    'For companies that know AI matters but are not sure where to begin.': 'Untuk perusahaan yang tahu AI penting tetapi belum yakin harus mulai dari mana.',
    'Workflow map': 'Peta workflow',
    'Automation opportunity list': 'Daftar peluang otomasi',
    'ROI estimate': 'Estimasi ROI',
    'Risk assessment': 'Penilaian risiko',
    'Data-readiness score': 'Skor kesiapan data',
    'Recommended first agent': 'Rekomendasi agen pertama',
    'From Rp 7.5-15 million': 'Mulai Rp 7,5-15 juta',
    '14-Day Agent Pilot': 'Pilot Agen 14 Hari',
    'For companies that want proof quickly.': 'Untuk perusahaan yang ingin bukti dengan cepat.',
    'One working AI agent prototype': 'Satu prototipe agen AI yang berjalan',
    'Admin dashboard': 'Dashboard admin',
    'Human approval flow': 'Alur persetujuan manusia',
    'Basic analytics': 'Analitik dasar',
    'Workflow documentation': 'Dokumentasi workflow',
    'Handover session': 'Sesi handover',
    'From Rp 25 million': 'Mulai Rp 25 juta',
    'Production Agent Deployment': 'Deployment Agen Produksi',
    'For companies ready to use the agent in daily operations.': 'Untuk perusahaan yang siap menggunakan agen dalam operasional harian.',
    'Role-based access': 'Akses berbasis role',
    'Audit logs': 'Audit log',
    'Tool integrations': 'Integrasi tools',
    'Error handling': 'Penanganan error',
    'Monitoring dashboard': 'Dashboard monitoring',
    'Staff training': 'Training staf',
    'Custom quote after pilot': 'Penawaran khusus setelah pilot',
    'Managed AgentOps Retainer': 'Retainer AgentOps Terkelola',
    'For companies that want reliable ongoing support.': 'Untuk perusahaan yang ingin dukungan berkelanjutan yang andal.',
    'Agent monitoring': 'Monitoring agen',
    'Workflow updates': 'Update workflow',
    'Monthly performance reports': 'Laporan performa bulanan',
    'Bug fixes': 'Perbaikan bug',
    'New mini-automations': 'Mini-otomasi baru',
    'Security review': 'Review keamanan',
    'From Rp 15 million / month': 'Mulai Rp 15 juta / bulan',
    '06 / Guardrails': '06 / Guardrail',
    'AI Should Be Useful, Auditable, and Controlled': 'AI Harus Berguna, Bisa Diaudit, dan Terkontrol',
    'We do not build uncontrolled AI systems. Every serious workflow should be human-in-the-loop, auditable, permissioned, monitored, reversible, limited in scope, and designed around real business risk.': 'Kami tidak membangun sistem AI tanpa kontrol. Setiap workflow serius harus human-in-the-loop, bisa diaudit, memiliki izin akses, dimonitor, bisa dibatalkan, dibatasi cakupannya, dan dirancang berdasarkan risiko bisnis nyata.',
    'AI safety guardrail checklist': 'Checklist guardrail keamanan AI',
    'pass': 'lolos',
    'hold': 'tahan',
    'Human approval before external action': 'Persetujuan manusia sebelum aksi eksternal',
    'Audit logs and evidence trail': 'Audit log dan jejak bukti',
    'Permissioned data access': 'Akses data dengan izin',
    'Fallback flow for uncertainty': 'Alur fallback untuk ketidakpastian',
    'Monitoring dashboard and eval tests': 'Dashboard monitoring dan tes evaluasi',
    'Risky outputs routed to people': 'Output berisiko diarahkan ke manusia',
    '07 / Method': '07 / Metode',
    'From Business Request to Managed AI Operation': 'Dari Permintaan Bisnis ke Operasi AI Terkelola',
    'Implementation process': 'Proses implementasi',
    'Request Intake': 'Intake Permintaan',
    'We identify the repetitive workflow, who handles it today, which tools are involved, what can go wrong, and what success looks like.': 'Kami mengidentifikasi workflow repetitif, siapa yang menanganinya hari ini, tools apa yang terlibat, apa yang bisa salah, dan seperti apa definisi suksesnya.',
    'Workflow Design': 'Desain Workflow',
    'We map the trigger, inputs, decisions, approvals, outputs, exceptions, and success metrics.': 'Kami memetakan pemicu, input, keputusan, persetujuan, output, pengecualian, dan metrik sukses.',
    'Agent Build': 'Build Agen',
    'We combine LLM, automation, document processing, database, approval queue, audit log, and monitoring.': 'Kami menggabungkan LLM, otomasi, pemrosesan dokumen, database, antrean persetujuan, audit log, dan monitoring.',
    'Evaluation': 'Evaluasi',
    'We test accuracy, edge cases, wrong inputs, permissions, latency, cost per run, and human override paths.': 'Kami menguji akurasi, edge case, input salah, permission, latensi, biaya per run, dan jalur override manusia.',
    'Managed Operation': 'Operasi Terkelola',
    'We monitor, fix, improve, report ROI, update workflows, add integrations, and train users.': 'Kami memonitor, memperbaiki, meningkatkan, melaporkan ROI, memperbarui workflow, menambah integrasi, dan melatih user.',
    '08 / Best fit': '08 / Paling cocok',
    'Built for Practical Indonesian Businesses': 'Dibangun untuk Bisnis Indonesia yang Praktis',
    'Ideal for companies with 50–1,000 employees, manual admin-heavy workflows, fragmented systems, no large internal AI team, and a COO, CFO, owner, or director who wants measurable efficiency.': 'Ideal untuk perusahaan dengan 50-1.000 karyawan, workflow admin-heavy yang manual, sistem yang terfragmentasi, tanpa tim AI internal besar, dan COO, CFO, owner, atau director yang menginginkan efisiensi terukur.',
    'Best fit industries': 'Industri yang paling cocok',
    'Retail': 'Ritel',
    'Distribution': 'Distribusi',
    'Logistics': 'Logistik',
    'Education': 'Edukasi',
    'Clinics': 'Klinik',
    'Property': 'Properti',
    'B2B Services': 'Layanan B2B',
    'Recruitment-heavy teams': 'Tim dengan banyak rekrutmen',
    'Family enterprise groups': 'Grup bisnis keluarga',
    '09 / Outcome': '09 / Hasil',
    'The Results We Aim to Create': 'Hasil yang Ingin Kami Ciptakan',
    'Every pilot should connect to a measurable business outcome. The first goal is simple: prove ROI on one workflow. Then we scale.': 'Setiap pilot harus terhubung dengan hasil bisnis yang terukur. Tujuan pertama sederhana: buktikan ROI pada satu workflow. Setelah itu baru scale.',
    'Save': 'Hemat',
    'Reduce': 'Kurangi',
    'Process': 'Proses',
    'Improve': 'Tingkatkan',
    'Shorten': 'Percepat',
    'Increase': 'Tingkatkan',
    'admin hours every week': 'jam admin setiap minggu',
    'customer response time': 'waktu respons pelanggan',
    'documents faster': 'dokumen lebih cepat',
    'daily reporting visibility': 'visibilitas laporan harian',
    'recruitment screening': 'screening rekrutmen',
    'sales follow-up consistency': 'konsistensi follow-up sales',
    '10 / First step': '10 / Langkah pertama',
    'Your First AI Agent Should Solve a Real Business Problem': 'Agen AI Pertama Anda Harus Menyelesaikan Masalah Bisnis Nyata',
    'Do not start with a massive AI transformation project. Start with one workflow that wastes time every week. We will help you map it, build it, test it, deploy it safely, and measure the result.': 'Jangan mulai dari proyek transformasi AI yang masif. Mulai dari satu workflow yang membuang waktu setiap minggu. Kami akan membantu memetakannya, membangunnya, mengujinya, mendeploy dengan aman, dan mengukur hasilnya.',
    'Book Your AI Workflow Audit': 'Pesan Audit Workflow AI Anda',
    'Discuss a 14-Day Agent Pilot': 'Diskusikan Pilot Agen 14 Hari',
    'Safe AI agents for the operational workflows Indonesian businesses already run every day.': 'Agen AI yang aman untuk workflow operasional yang sudah dijalankan bisnis Indonesia setiap hari.',
    'Language': 'Bahasa',
    'Select language': 'Pilih bahasa',
    'Chat on WhatsApp': 'Chat di WhatsApp',
    'Workflow audit request': 'Permintaan audit workflow',
    'Tell us the repetitive workflow you want to fix.': 'Ceritakan workflow repetitif yang ingin Anda perbaiki.',
    'Close modal': 'Tutup modal',
    'Your name': 'Nama Anda',
    'Work email': 'Email kerja',
    'Workflow to automate': 'Workflow yang ingin diotomasi',
    'e.g. Budi Santoso': 'mis. Budi Santoso',
    'Example: WhatsApp inquiries, invoice extraction, daily reports, payment reconciliation...': 'Contoh: pertanyaan WhatsApp, ekstraksi invoice, laporan harian, rekonsiliasi pembayaran...',
    'Prepare audit request': 'Siapkan permintaan audit',
    'This demo stores nothing. Connect it to your CRM or form backend before production launch.': 'Demo ini tidak menyimpan data. Hubungkan ke CRM atau backend form sebelum launch produksi.',
    'Audit request prepared. Connect this form to your CRM before launch.': 'Permintaan audit disiapkan. Hubungkan form ini ke CRM sebelum launch.',
  },
};

const whatsappMessages = {
  en: {
    audit: 'Hi AgentOps Indonesia, I want to discuss an AI workflow audit.',
    pilot: 'Hi AgentOps Indonesia, I want to discuss a 14-Day Agent Pilot.',
  },
  id: {
    audit: 'Halo AgentOps Indonesia, saya ingin diskusi audit workflow AI.',
    pilot: 'Halo AgentOps Indonesia, saya ingin diskusi Pilot Agen AI 14 Hari.',
  },
};

function getStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function getRequestedLanguage() {
  try {
    return new URLSearchParams(window.location.search).get('lang');
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Language selection still works for the current page if storage is blocked.
  }
}

function getInitialLanguage() {
  const requestedLanguage = getRequestedLanguage();
  if (supportedLanguages.has(requestedLanguage)) return requestedLanguage;

  const storedLanguage = getStoredLanguage();
  if (supportedLanguages.has(storedLanguage)) return storedLanguage;

  return 'en';
}

let currentLanguage = getInitialLanguage();

function preserveWhitespace(originalValue, translatedValue) {
  const leading = originalValue.match(/^\s*/)?.[0] || '';
  const trailing = originalValue.match(/\s*$/)?.[0] || '';
  return `${leading}${translatedValue}${trailing}`;
}

function getOriginalAttribute(element, attribute) {
  let originals = attributeOriginals.get(element);
  if (!originals) {
    originals = {};
    attributeOriginals.set(element, originals);
  }
  if (!(attribute in originals)) {
    originals[attribute] = element.getAttribute(attribute);
  }
  return originals[attribute];
}

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const copy = translations[language] || {};
  let node = walker.nextNode();
  while (node) {
    if (!textNodeOriginals.has(node)) {
      textNodeOriginals.set(node, node.nodeValue);
    }
    const original = textNodeOriginals.get(node);
    const originalText = original.trim();
    const translatedText = language === 'en' ? originalText : copy[originalText];
    if (translatedText) {
      node.nodeValue = preserveWhitespace(original, translatedText);
    }
    node = walker.nextNode();
  }
}

function translateAttributes(language) {
  const copy = translations[language] || {};
  const attributes = ['aria-label', 'title', 'placeholder', 'content'];
  const selector = attributes.map((attribute) => `[${attribute}]`).join(',');

  document.querySelectorAll(selector).forEach((element) => {
    attributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const original = getOriginalAttribute(element, attribute);
      const translatedText = language === 'en' ? original : copy[original];
      if (translatedText) {
        element.setAttribute(attribute, translatedText);
      }
    });
  });
}

function updateWhatsAppLinks(language) {
  document.querySelectorAll('[data-wa-message]').forEach((link) => {
    const messageKey = link.dataset.waMessage;
    const message = whatsappMessages[language]?.[messageKey] || whatsappMessages.en[messageKey];
    if (message) {
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }
  });
}

function applyLanguage(language) {
  const nextLanguage = supportedLanguages.has(language) ? language : 'en';
  currentLanguage = nextLanguage;
  document.documentElement.lang = nextLanguage;
  document.title = nextLanguage === 'en'
    ? 'AgentOps Indonesia — AI Agents for Real Indonesian Business Workflows'
    : translations.id['AgentOps Indonesia — AI Agents for Real Indonesian Business Workflows'];

  translateTextNodes(nextLanguage);
  translateAttributes(nextLanguage);
  updateWhatsAppLinks(nextLanguage);
  updateRoi();
  storeLanguage(nextLanguage);

  const languageSelect = document.querySelector('#language-select');
  if (languageSelect) languageSelect.value = nextLanguage;
}

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay;
        if (delay) entry.target.style.setProperty('--delay', `${delay}ms`);
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const formatRupiah = (value) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
}).format(value).replace('IDR', 'Rp');

const hoursRange = document.querySelector('#hours-range');
const rateRange = document.querySelector('#rate-range');
const hoursOutput = document.querySelector('#hours-output');
const rateOutput = document.querySelector('#rate-output');
const roiOutput = document.querySelector('#roi-output');

function updateRoi() {
  if (!hoursRange || !rateRange || !hoursOutput || !rateOutput || !roiOutput) return;
  const hours = Number(hoursRange.value);
  const rate = Number(rateRange.value);
  const monthly = hours * rate * 4;
  hoursOutput.textContent = currentLanguage === 'id' ? `${hours} jam` : `${hours} hours`;
  rateOutput.textContent = formatRupiah(rate);
  roiOutput.textContent = formatRupiah(monthly);
}

[hoursRange, rateRange].forEach((input) => input?.addEventListener('input', updateRoi));
updateRoi();

const modal = document.querySelector('#audit-modal');
const openModalButtons = document.querySelectorAll('[data-open-modal]');
const auditForm = document.querySelector('#audit-form');
const toast = document.querySelector('#toast');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (modal && typeof modal.showModal === 'function') {
      modal.showModal();
    }
  });
});

auditForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!auditForm.checkValidity()) {
    auditForm.reportValidity();
    return;
  }
  modal?.close();
  auditForm.reset();
  toast?.classList.add('show');
  window.setTimeout(() => toast?.classList.remove('show'), 4200);
});

const languageSelect = document.querySelector('#language-select');
languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));
applyLanguage(currentLanguage);
