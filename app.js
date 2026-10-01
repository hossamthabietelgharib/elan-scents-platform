const BRANDS = [
  { id: 'amouage', name: 'AMOUAGE', logo: 'AMOUAGE' },
  { id: 'armaf', name: 'ARMAF', logo: 'ARMAF' },
  { id: 'afnan', name: 'AFNAN', logo: 'AFNAN' },
  { id: 'asaf', name: 'ASAF', logo: 'ASAF' },
  { id: 'rasasi', name: 'RASASI', logo: 'RASASI' },
  { id: 'french-avenue', name: 'FRENCH AVENUE', logo: 'FRENCH\nAVENUE' },
  { id: 'arabiyat', name: 'ARABIYAT PRESTIGE', logo: 'ARABIYAT\nPRESTIGE' },
  { id: 'lattafa', name: 'LATTAFA', logo: 'LATTAFA' },
  { id: 'maison-alhambra', name: 'Maison Alhambra', logo: 'MAISON\nALHAMBRA' }
];

const PERFUMES = [
  { id: 1, name: 'Interlude Man', brand: 'AMOUAGE', brandId: 'amouage', price: 4200, oldPrice: null, store: 'emarati', category: 'men', isNew: false, isOffer: false, isMaster: true, isComing: false, img: '🖤' },
  { id: 2, name: 'Club de Nuit Intense', brand: 'ARMAF', brandId: 'armaf', price: 850, oldPrice: 1100, store: 'afnan', category: 'men', isNew: false, isOffer: true, isMaster: true, isComing: false, img: '🌑' },
  { id: 3, name: '9PM', brand: 'AFNAN', brandId: 'afnan', price: 720, oldPrice: null, store: 'afnan', category: 'men', isNew: true, isOffer: false, isMaster: true, isComing: false, img: '🌙' },
  { id: 4, name: 'Hawas for Him', brand: 'RASASI', brandId: 'rasasi', price: 950, oldPrice: 1200, store: 'emarati', category: 'men', isNew: false, isOffer: true, isMaster: true, isComing: false, img: '🌊' },
  { id: 5, name: 'Khamrah', brand: 'LATTAFA', brandId: 'lattafa', price: 680, oldPrice: null, store: 'emarati', category: 'unisex', isNew: false, isOffer: false, isMaster: true, isComing: false, img: '🥃' },
  { id: 6, name: 'Supremacy Not Only Intense', brand: 'AFNAN', brandId: 'afnan', price: 980, oldPrice: 1250, store: 'afnan', category: 'men', isNew: true, isOffer: true, isMaster: false, isComing: false, img: '✨' },
  { id: 7, name: 'Reflection Man', brand: 'AMOUAGE', brandId: 'amouage', price: 3800, oldPrice: null, store: 'emarati', category: 'men', isNew: false, isOffer: false, isMaster: true, isComing: false, img: '💎' },
  { id: 8, name: 'Asad', brand: 'LATTAFA', brandId: 'lattafa', price: 620, oldPrice: 780, store: 'emarati', category: 'men', isNew: false, isOffer: true, isMaster: false, isComing: false, img: '🦁' },
  { id: 9, name: 'Oud for Glory', brand: 'LATTAFA', brandId: 'lattafa', price: 750, oldPrice: null, store: 'emarati', category: 'unisex', isNew: true, isOffer: false, isMaster: true, isComing: false, img: '🪵' },
  { id: 10, name: 'Yara', brand: 'LATTAFA', brandId: 'lattafa', price: 580, oldPrice: 700, store: 'emarati', category: 'women', isNew: false, isOffer: true, isMaster: false, isComing: false, img: '🌸' },
  { id: 11, name: '9AM Dive', brand: 'AFNAN', brandId: 'afnan', price: 690, oldPrice: null, store: 'afnan', category: 'men', isNew: true, isOffer: false, isMaster: false, isComing: false, img: '🌊' },
  { id: 12, name: 'Hayaati', brand: 'LATTAFA', brandId: 'lattafa', price: 590, oldPrice: 720, store: 'emarati', category: 'women', isNew: false, isOffer: true, isMaster: false, isComing: false, img: '🌹' },
  { id: 13, name: 'Upcoming Oud Royal', brand: 'AMOUAGE', brandId: 'amouage', price: 0, oldPrice: null, store: 'emarati', category: 'unisex', isNew: false, isOffer: false, isMaster: false, isComing: true, img: '⏳' },
  { id: 14, name: 'French Avenue Preview', brand: 'FRENCH AVENUE', brandId: 'french-avenue', price: 0, oldPrice: null, store: 'afnan', category: 'men', isNew: false, isOffer: false, isMaster: false, isComing: true, img: '⏳' }
];

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMenu();
  initSearch();
  initLang();
  populateBrandFilter();
  renderBrands();
  renderCarousel('offersCarousel', PERFUMES.filter(p => p.isOffer).slice(0, 6));
  renderCarousel('newCarousel', PERFUMES.filter(p => p.isNew).slice(0, 6));
  renderCarousel('masterpiecesCarousel', PERFUMES.filter(p => p.isMaster).slice(0, 6));
  renderCarousel('comingCarousel', PERFUMES.filter(p => p.isComing).slice(0, 6));
  updateStats();
  initSmoothScroll();
  initContactForm();
  initMagicExplore();
});

function initHeader() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40));
}

function initMenu() {
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('closeMenu');
  const menu = document.getElementById('sideMenu');
  const backdrop = document.getElementById('menuBackdrop');
  const open = () => { menu.classList.add('open'); backdrop.classList.add('active'); document.body.style.overflow = 'hidden'; };
  const closeM = () => { menu.classList.remove('open'); backdrop.classList.remove('active'); document.body.style.overflow = ''; };
  toggle.addEventListener('click', open);
  close.addEventListener('click', closeM);
  backdrop.addEventListener('click', closeM);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeM));
}

function initSearch() {
  const toggle = document.getElementById('searchToggle');
  const overlay = document.getElementById('searchOverlay');
  const close = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');
  toggle.addEventListener('click', () => {
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) input.focus();
  });
  close.addEventListener('click', () => overlay.classList.remove('active'));
  document.getElementById('applyFilters')?.addEventListener('click', () => {
    alert('الفلاتر جاهزة للربط بقاعدة البيانات المركزية');
  });
}

function initLang() {
  const btn = document.getElementById('langToggle');
  let isAr = true;
  btn.addEventListener('click', () => {
    isAr = !isAr;
    btn.querySelector('.lang-label').textContent = isAr ? 'EN' : 'ع';
    document.documentElement.lang = isAr ? 'ar' : 'en';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  });
}

function populateBrandFilter() {
  const sel = document.getElementById('filterBrand');
  if (!sel) return;
  BRANDS.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    sel.appendChild(opt);
  });
}

function renderBrands() {
  const container = document.getElementById('brandsCarousel');
  if (!container) return;
  BRANDS.forEach(b => {
    const card = document.createElement('div');
    card.className = 'brand-card card-3d';
    card.innerHTML = `<div class="brand-logo">${b.logo}</div><span class="brand-name">${b.name}</span>`;
    card.addEventListener('click', () => alert(`براند: ${b.name}`));
    container.appendChild(card);
  });
}

function createPerfumeCard(p) {
  const card = document.createElement('div');
  card.className = 'perfume-card card-3d';
  const priceHtml = p.price > 0
    ? `EGP ${p.price.toLocaleString()}${p.oldPrice ? ` <span class="old">EGP ${p.oldPrice.toLocaleString()}</span>` : ''}`
    : 'قريباً';
  card.innerHTML = `
    <div class="perfume-img">${p.img}</div>
    <span class="perfume-brand">${p.brand}</span>
    <span class="perfume-name">${p.name}</span>
    <div class="perfume-price">${priceHtml}</div>
    <span class="perfume-store">${p.store === 'afnan' ? 'Afnan Egypt' : 'Emarati Scents'}</span>
  `;
  card.addEventListener('click', () => {
    if (p.isComing) alert(`${p.name} — مرتقب الوصول`);
    else alert(`${p.name} — ${p.brand}\nالسعر: EGP ${p.price}`);
  });
  return card;
}

function renderCarousel(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  items.forEach(p => container.appendChild(createPerfumeCard(p)));
}

function updateStats() {
  const available = PERFUMES.filter(p => !p.isComing && p.price > 0);
  document.getElementById('brandCount').textContent = String(BRANDS.length).padStart(2, '0');
  document.getElementById('storeCount').textContent = '02';
  document.getElementById('perfumeCount').textContent = String(available.length).padStart(3, '0');
}

function initMagicExplore() {
  const btn = document.getElementById('btnMagicExplore');
  const section = document.getElementById('magic');
  const grid = document.getElementById('allPerfumesGrid');
  if (!btn || !section || !grid) return;
  btn.addEventListener('click', () => {
    section.hidden = false;
    grid.innerHTML = '';
    PERFUMES.filter(p => !p.isComing && p.price > 0).forEach(p => grid.appendChild(createPerfumeCard(p)));
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 95;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('شكراً لتواصلك. الرسالة جاهزة للمعالجة.');
    form.reset();
  });
}

document.getElementById('whatsappFloat')?.addEventListener('click', e => {
  e.preventDefault();
  alert('رقم واتساب المنصة سيُضاف لاحقاً.');
});
