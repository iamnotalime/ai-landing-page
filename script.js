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
  hoursOutput.textContent = `${hours} hours`;
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
