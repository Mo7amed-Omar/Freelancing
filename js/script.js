/* ==========================================================================
   الشركة الألمانية المتقدمة لمكافحة الحشرات والقوارض
   Bilingual Client-Side Controller (translations.js must be loaded first)
   ========================================================================== */

const pestIcons = {
  bedbug: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M12 19v3M6 12h12M4.5 6.5l2 2M17.5 6.5l-2 2M4.5 17.5l2-2M17.5 17.5l-2-2"/><ellipse cx="12" cy="12" rx="6" ry="7"/><path d="M12 5a3 3 0 0 1 3 3v1H9V8a3 3 0 0 1 3-3z"/></svg>`,
  cockroach: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="4.5" ry="7"/><path d="M12 6c-2 0-3-2-4-4M12 6c2 0 3-2 4-4M6 10l-3-2M18 10l3-2M5 14l-3-1M19 14l3-1M6 18l-3 2M18 18l3 2"/></svg>`,
  ticks: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="5"/><circle cx="12" cy="7" r="2"/><path d="M6 10c-1-1-2.5-1-3.5 0M18 10c1-1 2.5-1 3.5 0M5 14H1M19 14h4M6 18c-1 1-2.5 1.5-3.5 1M18 18c1 1 2.5 1.5 3.5 1"/></svg>`,
  termite: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="3" ry="3"/><ellipse cx="12" cy="14" rx="4" ry="4"/><ellipse cx="12" cy="20" rx="3" ry="2"/><path d="M7 14l-3-2M17 14l3-2M8 17l-3 2M16 17l3 2"/></svg>`,
  rodents: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18a5 5 0 0 0 0-10H6a5 5 0 0 0 0 10z"/><circle cx="4" cy="11" r="1.5"/><circle cx="18" cy="11" r="1.5"/><path d="M21 16c2 1 2.5 2 2 3.5" stroke-linecap="round"/></svg>`,
  woodborer: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="2" rx="1"/><path d="M12 5v6M12 13v6M6 8l3 3M18 8l-3 3M6 16l3-3M18 16l-3-3"/></svg>`,
  geckos: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M8 6h8M6 11h12M7 17h10M12 2L8 4M12 2l4 2M8 22l2-3M16 22l-2-3" stroke-linecap="round"/></svg>`,
  moths: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18V6M12 6C8.5 3 4 5 4 10c0 4 4.5 6 8 8M12 6c3.5-3 8-1 8 4 0 4-4.5 6-8 8" stroke-linecap="round"/></svg>`,
  woodbeetle: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v4a4 4 0 0 0 8 0V3M12 7v14M5 11h14M6 16h12" stroke-linecap="round"/></svg>`,
  flies: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="3" ry="4"/><path d="M9 10C7 7 3 6 2 8M15 10c2-3 6-4 7-2M9 12c-2 1-5 0-6-2M15 12c2 1 5 0 6-2M12 9V5"/><circle cx="11" cy="5" r="1"/><circle cx="13" cy="5" r="1"/></svg>`,
  mosquito: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="2.5" ry="5"/><path d="M8 9C5 7 2 8 2 10M16 9c3-2 6-1 6 1M8 14c-3 1-5 3-4 5M16 14c3 1 5 3 4 5M12 7V3M11 3h2"/></svg>`,
  scorpion: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8c0-2 2-3 4-2l6 4c2 1 3 3 2 5l-2 3c-1 2-3 2-4 1"/><path d="M14 15c1 2 3 4 5 3M19 18c1 0 2-1 2-2M4 8L2 6M4 8L3 10"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/></svg>`,
  mosquitohawk: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10v10M10 20l2 2 2-2M8 8C5 5 2 6 2 9M16 8c3-3 6-2 6 1M8 11c-3 0-5 2-4 4M16 11c3 0 5 2 4 4"/><circle cx="12" cy="8" r="2"/></svg>`,
  bees: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="4" ry="5"/><path d="M8 10C6 7 3 7 3 9M16 10c2-3 5-3 5-1M9 13H7M15 13h2M12 8V5M10 4h4M12 18l-1 3M12 18l1 3"/></svg>`,
  spider: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8V3M8.5 9.5L5 6M5 12H2M5 17l-2 3M8.5 14.5L5 18M12 16v5M15.5 14.5L19 18M19 12h3M19 7l-3.5 3.5M15.5 9.5L19 6"/></svg>`,
  fleas: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="4"/><path d="M7 13c-2 2-3 5-1 7M17 13c2 2 3 5 1 7M8 10l-3-3M16 10l3-3M7 8l-4-1M17 8l4-1"/><circle cx="10" cy="9" r="1" fill="currentColor"/><circle cx="14" cy="9" r="1" fill="currentColor"/></svg>`,
  woodlice: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="6" ry="4"/><path d="M8 13l-3-2M16 13l3-2M7 15l-3 2M17 15l3 2M9 10l-2-3M15 10l2-3M6 13H4M18 13h2"/><path d="M8 9c2-3 6-3 8 0"/></svg>`
};

// 2. إدارة اللغات والترجمة (Localization Manager)
let currentLang = localStorage.getItem("pest_control_lang") || "ar";

document.addEventListener("DOMContentLoaded", () => {
  // تفعيل القائمة المنسدلة للهاتف
  initMobileMenu();

  // تفعيل التوطين الأساسي
  initTranslations();
  
  // بناء كروت الآفات إذا كنا بالرئيسية
  renderPestGrid();
  
  // تفعيل السلايدر إذا كان متواجداً
  initHeroSlider();
  
  // تفعيل تأثير رذاذ الرش البصري في الهيرو
  initHeroMist();

  // حساب مسافة الحركة الفعلية لكاروسيل الميزات
  initFeatureCarousel();

  // تشغيل عدادات الإحصائيات عند ظهورها
  initStatsCounter();

  // تفعيل صفحة التفاصيل الديناميكية إذا كنا بها
  initPestDetailPage();

  // تفعيل نموذج تواصل صفحة الاتصال
  initContactForm();

  // ===== NEW: Premium UI Enhancements =====
  // Scroll reveal animations
  initScrollReveal();

  // Navbar scroll state
  initNavbarScroll();

  // Active nav link highlighting
  initActiveNavLink();

  // تحديث سنة حقوق الفوتر تلقائياً
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});


function initFeatureCarousel() {
  const carousel = document.querySelector(".why-marquee-container");
  const track = carousel?.querySelector(".marquee-track");
  const cards = carousel?.querySelectorAll(".carousel-item");
  if (!carousel || !track || !cards || cards.length < 2) return;

  const updateDistance = () => {
    const firstCard = cards[0].getBoundingClientRect();
    const secondCard = cards[1].getBoundingClientRect();
    const step = secondCard.left - firstCard.left;
    track.style.setProperty("--carousel-distance", `${step * (cards.length - 1)}px`);
  };

  updateDistance();
  window.addEventListener("resize", updateDistance);
}

function initStatsCounter() {
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection || typeof IntersectionObserver === "undefined") return;

  const statNumbers = statsSection.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries, statsObserver) => {
    if (!entries.some(entry => entry.isIntersecting)) return;

    statNumbers.forEach(animateCounter);
    statsObserver.unobserve(statsSection);
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}

function animateCounter(element) {
  const target = Number(element.dataset.target);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";
  const duration = 1500;
  const startTime = performance.now();

  const update = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = progress * (2 - progress);
    const value = Math.floor(easedProgress * target).toLocaleString();
    element.innerHTML = `${prefix ? `<span class="stat-prefix">${prefix}</span>` : ""}${value}${suffix ? `<span class="stat-suffix">${suffix}</span>` : ""}`;

    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

// تفعيل وتغيير اللغة
function initTranslations() {
  applyLanguage(currentLang);

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("pest_control_lang", currentLang);
      applyLanguage(currentLang);
      
      // تحديث الشبكة والشرائح الأخرى تلقائياً عند تغيير اللغة
      renderPestGrid();
      initPestDetailPage();
    });
  }
}

// تطبيق تغيير اللغة وتحديث نصوص الـ HTML
function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.innerHTML = lang === "ar" ? "English 🌐" : "العربية 🌐";
  }
}

// 3. بناء شبكة الآفات الـ 9 في الصفحة الرئيسية مع صور Unsplash نظيفة ومكبرة
function renderPestGrid() {
  const grid = document.getElementById("pestGrid");
  if (!grid) return;

  grid.innerHTML = "";
  
  const unsplashImages = {
    bedbug: "images/bedbug.jpg",
    cockroach: "images/cockroach.jpg",
    ticks: "images/ticks.png",
    termite: "images/termite.png",
    rodents: "images/rodents.png",
    woodborer: "images/woodborer.png",
    geckos: "images/geckos.png",
    moths: "images/moths.png",
    woodbeetle: "images/woodbeetle.png",
    flies: "images/flies.jpg",
    mosquito: "images/mosquito.jpg",
    scorpion: "images/scorpion.jpg",
    mosquitohawk: "images/mosquitohawk.jpg",
    bees: "images/bees.jpg",
    spider: "images/spider.jpg",
    fleas: "images/fleas.jpg",
    woodlice: "images/woodlice.jpg"
  };

  pestsData.forEach(pest => {
    const name = currentLang === "ar" ? pest.nameAr : pest.nameEn;
    const imgUrl = unsplashImages[pest.id] || "images/logo.png";

    const card = document.createElement("a");
    card.href = `pest.html?id=${pest.id}`;
    card.className = "pest-card-premium";
    card.innerHTML = `
      <div class="speech-bubble-wrapper">
        <div class="bubble-frame">
          <img src="${imgUrl}" alt="${name}" loading="lazy">
        </div>
        <div class="bubble-tail"></div>
      </div>
      <div class="pest-title-pill">
        <span>${name}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 4. سلايدر الهيرو التلقائي واليدوي
let slideIndex = 0;
let sliderInterval = null;

function initHeroSlider() {
  const slides = document.querySelectorAll(".slide-item");
  const dotsContainer = document.getElementById("sliderDots");
  
  if (slides.length === 0 || !dotsContainer) return;

  dotsContainer.innerHTML = "";
  slides.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  startSliderTimer();
}

function startSliderTimer() {
  stopSliderTimer();
  sliderInterval = setInterval(() => {
    const slides = document.querySelectorAll(".slide-item");
    if (slides.length === 0) return;
    let nextIdx = (slideIndex + 1) % slides.length;
    goToSlide(nextIdx);
  }, 5000);
}

function stopSliderTimer() {
  if (sliderInterval) clearInterval(sliderInterval);
}

function goToSlide(idx) {
  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".dot");
  if (slides.length === 0) return;

  slides[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("active");

  slideIndex = idx;

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
  
  startSliderTimer();
}

// 5. تأثير رذاذ الرش الجزيئي المتحرك في الهيرو (Spray Mist Particles)
function initHeroMist() {
  const container = document.getElementById("heroMistOverlay");
  if (!container) return;

  container.innerHTML = "";
  const numParticles = 15;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.className = "mist-particle";
    
    // إحداثيات ونسب حجم عشوائية لتبدو طبيعية
    const size = Math.random() * 90 + 35; // بين 35px و 125px
    const left = Math.random() * 100; // نسبة عشوائية أفقياً
    const top = Math.random() * 80 + 10; // نسبة عشوائية عمودياً
    const delay = Math.random() * 10; // تأخير تشغيل الحركة لضمان استمرارية الرش
    const duration = Math.random() * 8 + 6; // مدة الصعود والتلاشي

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    container.appendChild(particle);
  }
}

// 6. الأسئلة الشائعة الأكورديون (FAQ Accordion)
function toggleFaq(idx) {
  const panels = document.querySelectorAll(".faq-answer-panel");
  const items = document.querySelectorAll(".faq-item");
  
  if (panels.length === 0) return;

  const activePanel = panels[idx];
  const activeItem = items[idx];

  // هل اللوحة مفتوحة حالياً؟
  const isOpen = activeItem.classList.contains("open");

  // إغلاق جميع اللوحات الأخرى (CSS handles icon rotation via .faq-item.open .faq-icon)
  items.forEach((item, index) => {
    item.classList.remove("open");
    panels[index].style.maxHeight = null;
  });

  // فتح أو إغلاق اللوحة الحالية
  if (!isOpen) {
    activeItem.classList.add("open");
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  }
}

// جعل دالة الأكورديون متاحة عالمياً
window.toggleFaq = toggleFaq;

// 7. صفحة تفاصيل الحشرة المستقلة الديناميكية المثرية والمحسنة (pest.html)
function initPestDetailPage() {
  const detailTitle = document.getElementById("pestDetailName");
  if (!detailTitle) return;

  const params = new URLSearchParams(window.location.search);
  const pestId = params.get("id");
  const pest = pestsData.find(p => p.id === pestId);

  if (!pest) {
    window.location.href = "index.html";
    return;
  }

  const unsplashImagesLarge = {
    bedbug: "images/bedbug.jpg",
    cockroach: "images/cockroach.jpg",
    ticks: "images/ticks.png",
    termite: "images/termite.png",
    rodents: "images/rodents.png",
    woodborer: "images/woodborer.png",
    geckos: "images/geckos.png",
    moths: "images/moths.png",
    woodbeetle: "images/woodbeetle.png",
    flies: "images/flies.jpg",
    mosquito: "images/mosquito.jpg",
    scorpion: "images/scorpion.jpg",
    mosquitohawk: "images/mosquitohawk.jpg",
    bees: "images/bees.jpg",
    spider: "images/spider.jpg",
    fleas: "images/fleas.jpg",
    woodlice: "images/woodlice.jpg"
  };

  const name = currentLang === "ar" ? pest.nameAr : pest.nameEn;
  const cause = currentLang === "ar" ? pest.causeAr : pest.causeEn;
  const treatment = currentLang === "ar" ? pest.treatmentAr : pest.treatmentEn;
  const imgUrl = unsplashImagesLarge[pest.id] || "images/logo.png";

  detailTitle.textContent = name;
  
  const pestBreadcrumb = document.getElementById("pestBreadcrumb");
  if (pestBreadcrumb) pestBreadcrumb.textContent = name;

  const pestImg = document.getElementById("pestDetailImg");
  if (pestImg) {
    pestImg.src = imgUrl;
    pestImg.alt = name;
  }

  const warningSignsAr = {
    bedbug: [
      "ظهور بقع دم صغيرة داكنة على الملاءات أو الوسائد.",
      "وجود لدغات حمراء متكررة ومسببة للحكة الشديدة على الجسم صباحاً.",
      "رؤية حشرات دقيقة بنية اللون في ثنايا المراتب والشقوق.",
      "انبعاث رائحة رطبة غير مألوفة في الغرفة."
    ],
    cockroach: [
      "رؤية صراصير صغيرة تنشط ليلاً في المطبخ أو الحمام.",
      "ظهور فضلات صغيرة تشبه حبيبات الفلفل الأسود في الأدراج.",
      "وجود أكياس بيض صراصير كامنة خلف الأجهزة والشقوق.",
      "انتشار روائح غير مستحبة في الخزائن والأماكن المغلقة."
    ],
    ticks: [
      "ملاحظة لدغات مفاجئة مسببة للتهيج الجلدي الشديد.",
      "التصاق حشرات صغيرة داكنة بجلد الحيوانات الأليفة.",
      "ظهور أعراض الإرثيميا الحلقية حول موضع اللدغات.",
      "نشاط زائد للقراد في السجاد أو ثنايا الأثاث."
    ],
    termite: [
      "ظهور أنفاق طينية دقيقة على الجدران والأخشاب.",
      "وجود برادة خشب ناعمة متراكمة أسفل الأثاث والباركيه.",
      "سماع صوت تجويف أو طقطقة عند النقر على الهياكل الخشبية.",
      "تلف الأبواب الخشبية وصعوبة فتحها بسبب انتفاخ الخشب."
    ],
    rodents: [
      "سماع أصوات خربشة في الأسقف أو الجدران ليلاً.",
      "رؤية فضلات داكنة صغيرة مبعثرة قرب مصادر الغذاء.",
      "وجود آثار قضم على الأسلاك الكهربائية أو الأكياس والكرتون.",
      "انبعاث روائح كريهة جداً من خلف الجدران والأماكن المهجورة."
    ],
    woodborer: [
      "رؤية ثقوب دقيقة جداً منتشرة على أسطح الأثاث الخشبي.",
      "تساقط مستمر لغبار الخشب الناعم (النشارة) أسفل القطع المصابة.",
      "سماع صوت نخر طفيف جداً في الأخشاب وقت السكون.",
      "ضعف وتهشم مفاجئ في الهياكل الخشبية."
    ],
    geckos: [
      "رؤية أبراص تتجول على الجدران والأسقف قرب الإضاءة.",
      "وجود فضلات داكنة بنهاية بيضاء على الجدران والأرضيات.",
      "سماع أصوات تكتكة طفيفة في الأسقف والشقوق.",
      "زيادة مفاجئة في عدد الحشرات الطائرة بالمكان (طعام الأبراص)."
    ],
    moths: [
      "ظهور ثقوب دقيقة غير مبررة في الملابس الصوفية والمنسوجات.",
      "رؤية يرقات زاحفة دقيقة بيضاء في الخزائن المظلمة.",
      "تطاير فراشات صغيرة باهتة اللون داخل الغرف عند الإضاءة.",
      "تلف وتآكل ألياف السجاد الفاخر والمفروشات المخزنة."
    ],
    woodbeetle: [
      "تلف واضح ونخر عميق في الهياكل الخشبية الصلبة.",
      "ظهور يرقات نشطة تنخر داخل قطع الأثاث الكلاسيكي.",
      "وجود فتحات دائرية الشكل يخرج منها غبار الخشب.",
      "تدهور جودة الأبواب والباركيه المعرض للرطوبة."
    ],
    flies: [
      "ازدحام ملحوظ للذباب حول مصادر الغذاء أو القمامة.",
      "تلوث الأطعمة المكشوفة بالبيض أو اليرقات.",
      "ظهور ذباب صغير يطير داخل المطبخ أو حول الفاكهة.",
      "وجود روائح تدل على مصدر تكاثر مخفي قريب."
    ],
    mosquito: [
      "ظهور لدغات حمراء منتفخة متعددة عند الاستيقاظ صباحاً.",
      "سماع أصوات أجنحة الناموس الرفيعة ليلاً في الغرفة.",
      "وجود مياه راكدة قريبة تُشكّل بيئة تكاثر مثالية.",
      "ازدياد مفاجئ في أعداد الناموس خلال أيام قليلة."
    ],
    scorpion: [
      "رؤية عقارب في أركان الغرف أو تحت الأثاث الثقيل.",
      "ظهور عقارب في الأحذية أو الملابس المطوية.",
      "وجود شقوق أو ثقوب في الجدران والأرضيات توفر مأوى لها.",
      "رصد نشاطها في الليل خاصة بالقرب من مصادر الرطوبة."
    ],
    mosquitohawk: [
      "رؤية أعداد كبيرة من الهاموش تحوم حول الإضاءة ليلاً.",
      "التصاق الهاموش بالجدران والأسقف بكثرة.",
      "وجود بيئة رطبة أو حدائق مجاورة مصدر للتكاثر.",
      "نشاط مرتفع في فصل الصيف والمواسم الدافئة."
    ],
    bees: [
      "سماع أصوات طنين قوية من داخل الجدران أو الأسقف.",
      "رؤية أعداد كبيرة من النحل تتجمع على نافذة أو فتحة.",
      "ظهور خلية نحل في أماكن غير متوقعة داخل المبنى.",
      "تزايد لسعات النحل للمقيمين دون مبرر واضح."
    ],
    spider: [
      "انتشار خيوط العنكبوت الكثيفة في أركان الغرف والسقف.",
      "رؤية عناكب كبيرة تتنقل على الجدران أو الأرضيات.",
      "وجود بيض عنكبوت دقيق معلق داخل الخزائن والشقوق.",
      "تزايد ملحوظ في عدد الحشرات الصغيرة (مصدر غذاء العنكبوت)."
    ],
    fleas: [
      "ظهور لدغات صغيرة حمراء في الساقين والكاحلين.",
      "ملاحظة حيوانات أليفة تحك جسمها بشكل متكرر ومتواصل.",
      "رؤية حشرات صغيرة سوداء تقفز بسرعة على الأثاث أو السجاد.",
      "وجود بيض أبيض دقيق جداً في شعر الحيوانات أو الفراش."
    ],
    woodlice: [
      "رؤية حشرات رمادية صغيرة تشبه الكبسولات في الأماكن الرطبة.",
      "تجمع قمل الخشب تحت الأحجار والحطب والأواني الخارجية.",
      "وجودها بكثرة في المخازن والأقبية ذات الرطوبة العالية.",
      "انتشارها عند وجود خشب متعفن أو جدران رطبة دائماً."
    ]
  };

  const warningSignsEn = {
    bedbug: [
      "Appearance of small dark blood spots on sheets or pillows.",
      "Frequent red itchy bites on the body in the morning.",
      "Seeing tiny brown insects in mattress folds and cracks.",
      "Unfamiliar musty smell emanating in the room."
    ],
    cockroach: [
      "Seeing small cockroaches active at night in the kitchen or bathroom.",
      "Appearance of tiny pepper-like droppings in drawers.",
      "Presence of cockroach egg cases behind appliances.",
      "Unpleasant odors in closed cabinets and cupboards."
    ],
    ticks: [
      "Sudden bites causing severe skin irritation.",
      "Small dark insects attached to pets' skin.",
      "Red rings appearing around bite sites.",
      "Increased tick activity in carpets or upholstery."
    ],
    termite: [
      "Tiny mud tubes appearing on walls and wooden structures.",
      "Fine wood dust accumulating below furniture and parquet.",
      "Hollow sounds when tapping wooden doors or frames.",
      "Difficulty opening wooden doors due to wood swelling."
    ],
    rodents: [
      "Scratching sounds in ceilings or walls at night.",
      "Scattered tiny dark droppings near food sources.",
      "Gnaw marks on electric wires, bags, or cardboard boxes.",
      "Foul odors coming from behind walls."
    ],
    woodborer: [
      "Tiny holes spread on wooden furniture surfaces.",
      "Fine wood dust falling continuously below infected parts.",
      "Faint wood-chewing sounds during quiet hours.",
      "Sudden weakening of wooden structures."
    ],
    geckos: [
      "Seeing geckos roaming on walls near lights.",
      "Dark droppings with white tips on walls and floors.",
      "Faint clicking noises in ceilings and cracks.",
      "Sudden increase in flying insects (geckos' food source)."
    ],
    moths: [
      "Unexplained tiny holes in woolen clothes and textiles.",
      "Tiny white crawling larvae inside dark wardrobes.",
      "Small pale moths flying inside rooms when lights are on.",
      "Frayed fibers on luxury rugs and carpets."
    ],
    woodbeetle: [
      "Deep wood decay in solid hardwood frames.",
      "Active larvae burrowing inside classic furniture pieces.",
      "Round exit holes showing fine wood dust.",
      "Deterioration of parquet floors exposed to humidity."
    ],
    flies: [
      "Large clusters of flies swarming near food or garbage.",
      "Visible larvae or eggs on uncovered food surfaces.",
      "Small flies appearing inside the kitchen or around fruit.",
      "Persistent foul odors indicating a nearby hidden breeding source."
    ],
    mosquito: [
      "Multiple red swollen bite marks upon waking in the morning.",
      "High-pitched wing buzz heard in the room at night.",
      "Stagnant water nearby forming an ideal breeding ground.",
      "A sudden sharp increase in mosquito numbers within days."
    ],
    scorpion: [
      "Seeing scorpions in room corners or under heavy furniture.",
      "Scorpions found inside shoes or folded clothing.",
      "Wall and floor cracks providing ideal shelters for them.",
      "Nocturnal activity observed especially near moisture sources."
    ],
    mosquitohawk: [
      "Large numbers of crane flies hovering around lights at night.",
      "Crane flies clinging to walls and ceilings in clusters.",
      "Nearby moist gardens or lawns acting as breeding grounds.",
      "High activity during summer and warm seasons."
    ],
    bees: [
      "Loud buzzing sounds coming from inside walls or ceilings.",
      "Large groups of bees gathering around windows or openings.",
      "A bee hive spotted in unexpected spots inside the building.",
      "Increasing sting incidents among residents without apparent reason."
    ],
    spider: [
      "Dense webs spreading across room corners and ceiling angles.",
      "Large spiders moving on walls or floors.",
      "Tiny spider egg sacs hanging inside closets and crevices.",
      "Noticeable increase in small insects (spiders' food source)."
    ],
    fleas: [
      "Small red bite marks on ankles and lower legs.",
      "Pets scratching themselves repeatedly and persistently.",
      "Tiny black insects jumping quickly on furniture or carpet.",
      "Fine white specks found in pet fur or bedding."
    ],
    woodlice: [
      "Small gray pill-shaped bugs found in damp areas.",
      "Woodlice gathering under stones, wood piles, or plant pots.",
      "Heavy presence in damp basements and storerooms.",
      "Spread correlating with rotting wood or constantly wet walls."
    ]
  };

  const pestFaqsAr = {
    bedbug: [
      { q: "هل يمكن القضاء على بق الفراش نهائيًا؟", a: "نعم، بروتوكول الرش الكيميائي المزدوج وتتبع الجحور يقضي عليه نهائياً مع تقديم ضمان مكتوب للمتابعة." },
      { q: "هل يجب التخلص من المراتب المصابة؟", a: "بالتأكيد لا. مبيداتنا قادرة على التغلغل لعمق المراتب وقتل الأطوار بالكامل دون الحاجة لإتلافها." },
      { q: "كم زيارة يتطلبها العلاج؟", a: "يحتاج بق الفراش عادةً إلى زيارة معالجة تليها زيارة متابعة بعد 14 يوماً لقطع دورة حياة البيض الجديد." }
    ],
    cockroach: [
      { q: "هل الرش آمن على الأطفال والحيوانات الأليفة؟", a: "نعم، نستخدم مبيدات صحة عامة مسجلة بوزارة الصحة بدون رائحة أو غازات سامة، ولا تتطلب مغادرة المنزل." },
      { q: "لماذا تظهر الصراصير بعد الرش بأيام؟", a: "هذا طبيعي ويسمى بنشاط الخروج، حيث يدفعها المبيد لمغادرة جحورها والموت سريعاً خلال 48 ساعة." },
      { q: "كيف نمنع عودتها للمطبخ؟", a: "ننصح بسد شقوق السيراميك، وإصلاح تسريبات المياه تحت الحوض، وعدم ترك القمامة مكشوفة ليلاً." }
    ],
    ticks: [
      { q: "هل يعالج القراد في المنزل والحديقة معاً؟", a: "نعم، نقوم برش المسطحات الخضراء والحديقة بمواد متخصصة بالإضافة لمعالجة أركان المنزل الداخلية." },
      { q: "هل الرش آمن على الكلاب والقطط؟", a: "نعم، لكن يجب إبعاد الحيوانات وقت الرش حتى يجف تماماً لضمان سلامتها الكاملة." },
      { q: "كم يستغرق ظهور النتيجة؟", a: "يموت القراد النشط فوراً بعد الرش، وتظهر الفعالية الكاملة في القضاء التام خلال 24 إلى 48 ساعة." }
    ],
    termite: [
      { q: "كم تصل مدة ضمان النمل الأبيض؟", a: "نوفر ضماناً رسمياً مكتوباً يصل إلى 10 سنوات للشقق المعالجة و15 سنة للتربة والمنشآت تحت الإنشاء." },
      { q: "هل يحتاج العلاج إلى تكسير الباركيه؟", a: "لا، نستخدم تقنية الحقن الدقيق بفتحات مخفية لحقن المبيد مباشرة تحت الأرضيات دون إتلافها." },
      { q: "ما هي المواد المستخدمة؟", a: "نستخدم مبيدات مخصصة لمقاومة النمل الأبيض ذات أثر باقٍ طويل الأمد ومقاومة لغسيل المياه." }
    ],
    rodents: [
      { q: "هل تستخدمون سموماً تشكل خطراً على الأطفال؟", a: "لا، نضع الطعوم والسموم في محطات مغلقة وآمنة (bait stations) لا يمكن للأطفال أو الحيوانات العبث بها." },
      { q: "هل تموت الفئران داخل المنزل وتسبب روائح؟", a: "نستخدم طعوماً حديثة تجفف السوائل بجسم الفأر وتدفعه للبحث عن الهواء الخارجي والموت خارج المنزل تماماً." },
      { q: "كيف نضمن عدم دخول فئران جديدة؟", a: "يقوم فريقنا بتشخيص فتحات الدخول ووضع حواجز معدنية (سد المنافذ) لمنعها من التسلل مجدداً." }
    ],
    woodborer: [
      { q: "هل السوس ينتقل لبقية الأثاث؟", a: "نعم، الحشرات البالغة تطير وتضع بيضها في الأخشاب المجاورة، لذا يجب معالجة الإصابة سريعاً." },
      { q: "كيف تتم معالجة الأخشاب المصابة؟", a: "عن طريق الحقن المباشر للثقوب بمواد بترولية تغلغلية تقتل اليرقات في عمق الخشب." },
      { q: "هل يجب دهان الخشب بعد المعالجة؟", a: "نعم، ننصح بدهان مادة واقية عازلة لمنع الخنافس من وضع بيض جديد في مسام الخشب." }
    ],
    geckos: [
      { q: "هل يمكن القضاء على الأبراص نهائياً؟", a: "نعم، برشنا للمواد الطاردة ومكافحة الحشرات الطائرة (غذاء البرص) يجبر الأبراص على الرحيل فوراً." },
      { q: "هل الرش آمن للأطفال؟", a: "يتم استخدام مبيدات صحة عامة معتمدة وآمنة تماماً عند تطبيقها من قبل فريقنا المختص." },
      { q: "كم يستغرق القضاء عليها؟", a: "تظهر النتيجة في انخفاض فوري وملاحظ خلال أيام قليلة من المعالجة الأولى." }
    ],
    moths: [
      { q: "هل يجب غسل الملابس بعد المعالجة؟", a: "مبيداتنا لا تترك بقعاً أو روائح، ولكن غسل الملابس المصابة بالماء الساخن يدعم قتل بيض العتة تماماً." },
      { q: "كيف تقضون على بيض العتة؟", a: "نستخدم التبخير والرش الدقيق المعقم للخزائن لقطع السلسلة البيولوجية لليرقات." },
      { q: "ما هي طرق الوقاية منها؟", a: "التهوية الدورية للخزائن، تعريض المفروشات للشمس، ووضع مصائد الفيرمونات الواقية." }
    ],
    woodbeetle: [
      { q: "كيف يتم اكتشاف حفار الخشب؟", a: "عن طريق سماع أصوات نخر خفيفة ليلاً ورؤية نشارة ناعمة جداً تسقط من قطع الأثاث." },
      { q: "هل علاج حفار الخشب فعال بنسبة 100%؟", a: "نعم، بروتوكول الحقن والدهان يقضي على الأطوار داخل الخشب ويسد ثقوب الخروج تماماً." },
      { q: "هل يؤثر العلاج على لون الخشب؟", a: "لا، المواد المستخدمة زيتية شفافة لا تغير لون الدهان أو مظهر الخشب على الإطلاق." }
    ],
    flies: [
      { q: "هل الذباب ينقل أمراضاً خطيرة؟", a: "نعم، الذباب ناقل رئيسي لأمراض التيفوئيد والكوليرا والتسمم الغذائي عبر ملامسة الأطعمة." },
      { q: "كيف يتم القضاء على الذباب داخل المطبخ؟", a: "نستخدم مبيدات رذاذ خاصة وطُعوم مسمومة مع إزالة مصادر التكاثر كالقمامة والفضلات." },
      { q: "هل يمكن منع الذباب من العودة؟", a: "نعم، بإزالة مصادر التكاثر وسد الفتحات وتركيب مصائد الضوء الإلكترونية." }
    ],
    mosquito: [
      { q: "هل الناموس ينقل الملاريا في مصر؟", a: "نعم، بعض أنواع الناموس في مصر قد ينقل الملاريا وحمى الضنك وفيروس النيل الغربي." },
      { q: "كيف يتم القضاء على الناموس نهائياً؟", a: "بمعالجة مصادر الرطوبة والمياه الراكدة ورش مبيدات حيوية وكيميائية مخصصة." },
      { q: "هل رش الناموس آمن على الأطفال؟", a: "نعم، نستخدم مبيدات صحة عامة آمنة معتمدة لا تضر بالأطفال أو الحيوانات الأليفة." }
    ],
    scorpion: [
      { q: "هل لسعة العقرب خطيرة على الإنسان؟", a: "نعم، بعض أنواع العقارب يمكن أن يكون سمها خطيراً وقد يستلزم تدخلاً طبياً فورياً." },
      { q: "كيف تتخلصون من العقارب بأمان؟", a: "نستخدم مواد كيميائية طاردة ومبيدات متخصصة مع سد الشقوق التي تختبئ بها." },
      { q: "هل يمكن منع دخول العقارب للمنزل؟", a: "نعم، بسد الفتحات في الجدران والأرضيات واستخدام مواد طاردة حول أسس المبنى." }
    ],
    mosquitohawk: [
      { q: "هل الهاموش يؤذي الإنسان؟", a: "لا، الهاموش لا يعض ولا يؤذي مباشرة لكنه مصدر إزعاج شديد ومؤشر على وجود رطوبة." },
      { q: "لماذا يتجمع الهاموش عند الإضاءة؟", a: "لأن الهاموش ينجذب للضوء بشكل طبيعي، وتكاثره يرتبط بالمناطق الرطبة المحيطة." },
      { q: "كيف تتخلصون من الهاموش؟", a: "بمكافحة مصادر الرطوبة والمياه الراكدة ورش مبيدات مخصصة للحشرات الطائرة." }
    ],
    bees: [
      { q: "هل تقتلون النحل أثناء المكافحة؟", a: "نحاول دائماً تهجير الخلايا بشكل آمن قبل اللجوء للمواد الكيميائية حفاظاً على البيئة." },
      { q: "هل يمكن نقل خلية النحل بأمان؟", a: "نعم، نمتلك فريقاً متخصصاً لنقل الخلايا بأمان للأماكن المناسبة بعيداً عن التجمعات." },
      { q: "هل لسعات النحل خطيرة؟", a: "لسعة النحل مؤلمة وقد تكون خطرة على من يعانون من حساسية، ولذا يجب التدخل الفوري." }
    ],
    spider: [
      { q: "هل العناكب في المنازل المصرية سامة؟", a: "معظم العناكب الشائعة غير خطيرة، لكن بعض الأنواع قد تسبب ردود فعل تحسسية." },
      { q: "كيف تتخلصون من العناكب دون إيذاء الأطفال؟", a: "نستخدم مبيدات صحة عامة آمنة مع إزالة الخيوط وسد الشقوق ومصادر الغذاء." },
      { q: "هل ظهور العناكب يعني وجود حشرات أخرى؟", a: "نعم، وجود العناكب عادةً يدل على وفرة في حشرات أصغر تشكل غذاءها الرئيسي." }
    ],
    fleas: [
      { q: "هل البراغيث تنقل الأمراض؟", a: "نعم، تنقل البراغيث أمراضاً خطيرة كالطاعون والتيفوس عبر لدغاتها وفضلاتها." },
      { q: "هل يجب معالجة الحيوانات الأليفة أيضاً؟", a: "بالضرورة، يجب تنسيق العلاج البيطري للحيوان مع الرش المنزلي لضمان النتيجة الكاملة." },
      { q: "كم يستغرق القضاء على البراغيث؟", a: "بروتوكولنا يشمل زيارتين: الأولى للبالغين والثانية بعد أسبوعين للقضاء على البيض الفاقس." }
    ],
    woodlice: [
      { q: "هل قمل الخشب يؤذي الأثاث؟", a: "قمل الخشب لا يتلف الأثاث مباشرة لكنه مؤشر على ارتفاع الرطوبة التي تضر بالأخشاب." },
      { q: "لماذا يظهر قمل الخشب داخل المنزل؟", a: "يدخل عادةً من الحديقة أو الجدران الرطبة بحثاً عن مواد عضوية متعفنة." },
      { q: "كيف يتم التخلص منه نهائياً؟", a: "بمعالجة مصادر الرطوبة وإزالة الخشب المتعفن ورش مبيدات ذات أثر متبقٍ في الأماكن الرطبة." }
    ]
  };

  const pestFaqsEn = {
    bedbug: [
      { q: "Can bedbugs be eliminated permanently?", a: "Yes, our double chemical treatment protocol targets nesting sites to eliminate them fully with a written warranty." },
      { q: "Should I throw away infected mattresses?", a: "Absolutely not. Our specialized pesticides penetrate deep inside mattresses to kill all stages without damage." },
      { q: "How many visits are required?", a: "Bedbugs usually require a treatment visit followed by a follow-up visit after 14 days to break the egg cycle." }
    ],
    cockroach: [
      { q: "Is the spraying safe for children and pets?", a: "Yes, we use odorless public health pesticides registered with the Ministry of Health that don't require leaving the house." },
      { q: "Why do cockroaches appear after spraying?", a: "This is normal flushing activity. The pesticide forces them to leave nests and die within 48 hours." },
      { q: "How do we prevent their return?", a: "We advise sealing ceramic gaps, fixing water leaks, and keeping garbage bins tightly closed." }
    ],
    ticks: [
      { q: "Do you treat ticks in both home and garden?", a: "Yes, we spray lawns with targeted products and treat internal home corners." },
      { q: "Is the spray safe for dogs and cats?", a: "Yes, but pets must be kept away during spraying until it dries completely." },
      { q: "How long does it take to see results?", a: "Active ticks die instantly, and full elimination is achieved within 24 to 48 hours." }
    ],
    termite: [
      { q: "How long is the termite warranty?", a: "We offer an official written warranty up to 10 years for treated apartments and 15 years for pre-construction soil." },
      { q: "Does the treatment require damaging parquet?", a: "No, we use precision injection through hidden holes to inject pesticide beneath flooring without damage." },
      { q: "What materials are used?", a: "We use long-lasting termiticides resistant to water leaching." }
    ],
    rodents: [
      { q: "Do you use poisons that threaten children?", a: "No, bait stations are locked and secure, preventing child or pet tampering." },
      { q: "Will rodents die inside and cause bad odors?", a: "We use modern bait that dehydrates rodents and drives them to seek outdoor air, dying outside." },
      { q: "How do we prevent new rodents from entering?", a: "Our team seals entry points with wire mesh to prevent them from crawling back." }
    ],
    woodborer: [
      { q: "Does woodborer spread to other furniture?", a: "Yes, adult beetles fly and lay eggs in nearby wood, so early treatment is crucial." },
      { q: "How is infected wood treated?", a: "By direct injection into exit holes with highly penetrative petroleum-based products." },
      { q: "Should wood be painted after treatment?", a: "Yes, we recommend applying a sealant to prevent beetles from laying new eggs in wood pores." }
    ],
    geckos: [
      { q: "Can geckos be eliminated permanently?", a: "Yes, spraying repellents and controlling flying insects (their food source) forces geckos to leave." },
      { q: "Is the spraying safe for kids?", a: "Yes, we apply approved public health pesticides that are safe under professional execution." },
      { q: "How fast will geckos disappear?", a: "A noticeable decrease is seen within a few days of the initial treatment." }
    ],
    moths: [
      { q: "Should clothes be washed after treatment?", a: "Our pesticides are clean and stainless, but washing infected clothes in hot water supports killing eggs." },
      { q: "How do you destroy moth eggs?", a: "We use precision steaming and wardrobe sterilization to break the lifecycle." },
      { q: "What are the best prevention tips?", a: "Periodic wardrobe airing, sun exposure for carpets, and using pheromone traps." }
    ],
    woodbeetle: [
      { q: "How do we detect wood boring beetles?", a: "By hearing chewing noises at night and seeing fine wood dust falling from furniture." },
      { q: "Is the treatment 100% effective?", a: "Yes, our injection and coating protocol eliminates larvae and seals exit holes fully." },
      { q: "Does treatment affect wood color?", a: "No, our transparent oil-based products preserve wood finish completely." }
    ],
    flies: [
      { q: "Do flies transmit dangerous diseases?", a: "Yes, flies are primary vectors for typhoid, cholera, and food poisoning through contact with food." },
      { q: "How do you eliminate flies from the kitchen?", a: "We use specialized spray pesticides and toxic baits alongside removing breeding sources like garbage." },
      { q: "Can we prevent flies from returning?", a: "Yes, by eliminating breeding sources, sealing openings, and installing electronic light traps." }
    ],
    mosquito: [
      { q: "Do mosquitoes carry malaria in Egypt?", a: "Some mosquito species in Egypt may transmit malaria, dengue fever, and West Nile virus." },
      { q: "How do you fully eliminate mosquitoes?", a: "By treating stagnant water sources and spraying specialized biological and chemical pesticides." },
      { q: "Is mosquito spraying safe for children?", a: "Yes, we use approved safe public health pesticides that do not harm children or pets." }
    ],
    scorpion: [
      { q: "Is a scorpion sting dangerous to humans?", a: "Yes, some species carry potent venom that may require immediate medical attention." },
      { q: "How do you safely eliminate scorpions?", a: "We use specialized repellent chemicals and seal cracks and crevices where they hide." },
      { q: "Can we prevent scorpions from entering?", a: "Yes, by sealing wall and floor openings and applying repellent materials around the building base." }
    ],
    mosquitohawk: [
      { q: "Do crane flies harm humans?", a: "No, crane flies don't bite or harm directly, but they are a major nuisance and signal moisture issues." },
      { q: "Why do they gather around lights?", a: "Crane flies are naturally attracted to light, and their breeding is linked to nearby wet areas." },
      { q: "How do you eliminate them?", a: "By addressing moisture sources, stagnant water, and applying targeted flying insect pesticides." }
    ],
    bees: [
      { q: "Do you kill bees during treatment?", a: "We always try to safely relocate hives before resorting to chemicals, preserving environmental balance." },
      { q: "Can a bee hive be safely relocated?", a: "Yes, our specialized team can safely relocate hives to suitable locations away from residential areas." },
      { q: "Are bee stings dangerous?", a: "Bee stings are painful and potentially dangerous for those with allergies, requiring immediate intervention." }
    ],
    spider: [
      { q: "Are spiders in Egyptian homes venomous?", a: "Most common house spiders are harmless, but some species may cause allergic reactions." },
      { q: "How do you remove spiders safely around children?", a: "We use safe public health pesticides, remove webs, seal crevices, and eliminate their food sources." },
      { q: "Does spider presence indicate other pests?", a: "Yes, spiders typically indicate an abundance of smaller insects forming their primary food supply." }
    ],
    fleas: [
      { q: "Do fleas transmit diseases?", a: "Yes, fleas transmit serious diseases like plague and typhus through their bites and droppings." },
      { q: "Must pets be treated too?", a: "Absolutely. Veterinary pet treatment must be coordinated with home spraying to ensure full elimination." },
      { q: "How long does flea elimination take?", a: "Our protocol includes two visits: the first for adults and the second after two weeks for newly hatched eggs." }
    ],
    woodlice: [
      { q: "Do woodlice damage furniture?", a: "Woodlice don't directly damage furniture, but they indicate high moisture levels that harm wood." },
      { q: "Why do woodlice appear inside homes?", a: "They usually enter from gardens or damp walls seeking decaying organic material." },
      { q: "How do you permanently eliminate them?", a: "By treating moisture sources, removing rotting wood, and spraying residual pesticides in damp areas." }
    ]
  };

  const pestWarning = (currentLang === "ar" ? warningSignsAr[pest.id] : warningSignsEn[pest.id]) || [];
  const pestFaq = (currentLang === "ar" ? pestFaqsAr[pest.id] : pestFaqsEn[pest.id]) || [];

  const infoContainer = document.querySelector(".pest-detail-info");
  if (infoContainer) {
    let warningItemsHtml = pestWarning.map(item => `<li><span class="warning-bullet">!</span> <span>${item}</span></li>`).join("");
    
    let faqItemsHtml = pestFaq.map((faq, idx) => `
      <div class="pest-faq-item">
        <button class="pest-faq-btn" onclick="togglePestFaq(${idx})">
          <span>${faq.q}</span>
          <span class="faq-icon-arrow">+</span>
        </button>
        <div class="pest-faq-panel" id="pestFaqPanel-${idx}">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join("");

    const isAr = currentLang === "ar";

    infoContainer.innerHTML = `
      <!-- 1. أسباب الظهور -->
      <div class="detail-block">
        <div class="detail-heading">
          <div class="detail-icon" id="pestDetailIconBox" aria-hidden="true">${pestIcons[pest.id] || ''}</div>
          <div>
            <span class="detail-kicker">${isAr ? "افهم المشكلة" : "Understand the Issue"}</span>
            <h2>${isAr ? "أسباب ظهور وانتشار الحشرة" : "Causes of Pest Spread"}</h2>
          </div>
        </div>
        <div id="pestDetailCause" class="detail-copy">${cause.split(/\.\s+/).filter(Boolean).map(paragraph => `<p>${paragraph.replace(/[.]$/, ".")}</p>`).join("")}</div>
      </div>

      <!-- 2. أعراض تستدعي التدخل الفوري -->
      <div class="detail-block warning-block">
        <div class="detail-heading">
          <div class="detail-icon warning-icon" aria-hidden="true">⚠</div>
          <div>
            <span class="detail-kicker">${isAr ? "انتبه للعلامات" : "Watch for Signs"}</span>
            <h2>${isAr ? "أعراض تستدعي التدخل الفوري" : "Signs Requesting Immediate Intervention"}</h2>
          </div>
        </div>
        <ul class="warning-signs-list">
          ${warningItemsHtml}
        </ul>
        <p class="warning-alert-text">${isAr ? "التأخير في هذه الحالات قد يؤدي إلى انتشار أوسع يصعب السيطرة عليه بسرعة." : "Delay in these cases may lead to a wider infestation that is difficult to control quickly."}</p>
      </div>

      <!-- 3. دور الشركة الألمانية المتقدمة في الحل المتكامل -->
      <div class="detail-block">
        <div class="detail-heading">
          <div class="detail-icon detail-icon-treatment" aria-hidden="true">✓</div>
          <div>
            <span class="detail-kicker">${isAr ? "بروتوكول المكافحة" : "Control Protocol"}</span>
            <h2>${isAr ? "دور الشركة الألمانية المتقدمة في الحل المتكامل" : "German Company's Role in the Integrated Solution"}</h2>
          </div>
        </div>
        <p>${isAr ? "عند الحاجة إلى تدخل احترافي، تقدم الشركة الألمانية المتقدمة لمكافحة الحشرات خطة عملية مبنية على تقييم ميداني دقيق." : "When professional intervention is needed, the Advanced German Pest Control Company offers a practical plan based on accurate field assessment."}</p>
        
        <div class="treatment-features-grid">
          <div class="feat-card">
            <span class="feat-num">01</span>
            <h4>${isAr ? "فحص شامل للموقع" : "Thorough Inspection"}</h4>
            <p>${isAr ? "معاينة الجحور والمنافذ التي تتسلل منها الحشرات." : "Inspecting entry points where pests infiltrate."}</p>
          </div>
          <div class="feat-card">
            <span class="feat-num">02</span>
            <h4>${isAr ? "تحديد مصادر التكاثر" : "Breeding Source Elimination"}</h4>
            <p>${isAr ? "القضاء على بؤر وضع البيض واليرقات لضمان عدم عودتها." : "Eliminating egg-laying sites and larvae to prevent return."}</p>
          </div>
          <div class="feat-card">
            <span class="feat-num">03</span>
            <h4>${isAr ? "مواد معتمدة وآمنة" : "Safe & Certified Materials"}</h4>
            <p>${isAr ? "مبيدات صحة عامة مسجلة بالكامل وبدون روائح كريهة." : "Fully registered public health pesticides with no bad odors."}</p>
          </div>
          <div class="feat-card">
            <span class="feat-num">04</span>
            <h4>${isAr ? "خطة وقائية مستمرة" : "Preventive Maintenance"}</h4>
            <p>${isAr ? "برنامج متابعة دوري وضمان مكتوب حسب طبيعة العقار." : "Periodic follow-up program and written warranty."}</p>
          </div>
        </div>
      </div>

      <!-- 4. نداء اتخاذ القرار والاتصال الفوري -->
      <div class="detail-actions-box">
        <p>${isAr ? "يتم تحديد موعد سريع للمعاينة ووضع خطة مناسبة لطبيعة المنزل أو الفيلا." : "A quick inspection appointment is set to establish a plan suitable for your home or villa."}</p>
        <div class="hero-actions" style="margin-bottom: 0;">
          <a href="https://wa.me/201150087555?text=مرحباً، أريد الاستفسار عن خدمة مكافحة الحشرات" target="_blank" rel="noopener" class="btn btn-whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C10 9.8 9.4 8.4 9.1 7.8c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 14.7 3.3 13.4 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z"/></svg>
            <span>${isAr ? "واتساب فوري" : "Instant WhatsApp"}</span>
          </a>
          <a href="tel:01150087555" class="btn btn-call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${isAr ? "اتصل الآن: 01150087555" : "Call Now: 01150087555"}</span>
          </a>
        </div>
      </div>

      <!-- 5. الأسئلة الشائعة الخاصة بالحشرة -->
      <div class="detail-block">
        <div class="detail-heading">
          <div class="detail-icon" aria-hidden="true">?</div>
          <div>
            <span class="detail-kicker">${isAr ? "إجابات سريعة" : "Quick Answers"}</span>
            <h2>${isAr ? `أسئلة شائعة حول مكافحة ${name}` : `FAQs about ${name} Control`}</h2>
          </div>
        </div>
        <div class="pest-faq-accordion">
          ${faqItemsHtml}
        </div>
      </div>

      <!-- 6. الخاتمة ونصيحة الخبير -->
      <div class="detail-block conclusion-block">
        <h3>${isAr ? "نصيحة الخبير للوقاية المستمرة" : "Expert Advice for Ongoing Prevention"}</h3>
        <p>${isAr ? "إزعاج الحشرات ليس أمراً بسيطاً يمكن تجاهله، بل مؤشر على خلل بيئي صغير قد يتطور سريعاً. الحل الفعلي يبدأ بتحديد المصدر، ثم المعالجة الصحيحة، وأخيراً الوقاية المستمرة." : "Pest annoyance is not a simple matter to ignore; it is an indicator of a small environmental imbalance that can develop rapidly. The actual solution starts with identifying the source, then correct treatment, and finally continuous prevention."}</p>
        <p>${isAr ? "إذا كنت تبحث عن راحة نوم حقيقية وبيئة آمنة لأسرتك داخل المنزل والحديقة، فالتواصل مع فريق متخصص هو الخطوة العملية التي تحميك من تكرار المشكلة." : "If you are looking for true sleeping comfort and a safe environment for your family in your home and garden, contacting a specialized team is the practical step that protects you from recurrence."}</p>
      </div>

      <!-- 7. مقر الشركة -->
      <div class="pest-location-info">
        <p>📍 <strong>${isAr ? "مقر الشركة الأساسي:" : "Main Company Office:"}</strong> ${isAr ? "مصر الجديدة، القاهرة، مصر" : "Heliopolis, Cairo, Egypt"}</p>
      </div>
    `;
  }
}

// دالة التحكم في الأكورديون للآفات
function togglePestFaq(idx) {
  const panel = document.getElementById(`pestFaqPanel-${idx}`);
  const btn = panel.previousElementSibling;
  const arrow = btn.querySelector(".faq-icon-arrow");
  
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    arrow.textContent = "+";
    btn.classList.remove("active");
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    arrow.textContent = "-";
    btn.classList.add("active");
  }
}
window.togglePestFaq = togglePestFaq;

// 8. تفعيل نموذج التواصل في صفحة اتصل بنا
function initContactForm() {
  const form = document.getElementById("contactUsForm");
  const successAlert = document.getElementById("contactSuccessAlert");
  
  if (!form || !successAlert) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successAlert.style.display = "block";
    form.reset();
    successAlert.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      successAlert.style.display = "none";
    }, 6000);
  });
}

// 9. تشغيل قائمة الجوال المتجاوبة (Responsive Mobile Hamburger Menu)
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggleBtn");
  const mainNav = document.querySelector(".main-nav");
  if (!menuToggle || !mainNav) return;

  // Simple backdrop — no backdrop-filter (causes blur bug on iOS/Chrome)
  let backdrop = document.querySelector(".nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
  }

  // ⚠️ NO injected close button — hamburger toggle already becomes X via CSS
  // Adding a second button was causing duplicate X bug

  function openMenu() {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.classList.add("active");
    mainNav.classList.add("active");
    backdrop.classList.add("active");
    document.body.classList.add("nav-open");
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.classList.remove("active");
    mainNav.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.classList.remove("nav-open");
  }

  menuToggle.addEventListener("click", () => {
    mainNav.classList.contains("active") ? closeMenu() : openMenu();
  });

  // Close on backdrop click
  backdrop.addEventListener("click", closeMenu);

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Close on nav link click
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}



/* ==========================================================================
   NEW: Premium UI Enhancement Functions
   ========================================================================== */

// Scroll Reveal — IntersectionObserver, fires once per element
function initScrollReveal() {
  if (typeof IntersectionObserver === "undefined") {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // fire once only — better performance
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(el => observer.observe(el));
}

// Navbar Scroll State — smooth visual change on scroll
function initNavbarScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // check on initial load
}

// Active Nav Link — marks current page link as active
function initActiveNavLink() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const currentHash = window.location.hash;

  document.querySelectorAll(".main-nav a").forEach(link => {
    const href = link.getAttribute("href") || "";
    const linkFile = href.split("#")[0].split("/").pop();

    if (linkFile === currentFile && !currentHash) {
      link.classList.add("active");
    } else if (currentHash && href === currentHash) {
      link.classList.add("active");
    }
  });
}