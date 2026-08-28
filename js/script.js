/* ==========================================================================
   الشركة الألمانية المتقدمة لمكافحة الحشرات والقوارض
   Bilingual Client-Side Controller (translations.js must be loaded first)
   ========================================================================== */

// 1. أيقونات خطية هندسية احترافية لكل آفة (SVG)
const pestIcons = {
  bedbug: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M12 19v3M6 12h12M4.5 6.5l2 2M17.5 6.5l-2 2M4.5 17.5l2-2M17.5 17.5l-2-2"/><ellipse cx="12" cy="12" rx="6" ry="7"/><path d="M12 5a3 3 0 0 1 3 3v1H9V8a3 3 0 0 1 3-3z"/></svg>`,
  cockroach: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="4.5" ry="7"/><path d="M12 6c-2 0-3-2-4-4M12 6c2 0 3-2 4-4M6 10l-3-2M18 10l3-2M5 14l-3-1M19 14l3-1M6 18l-3 2M18 18l3 2"/></svg>`,
  ticks: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="5"/><circle cx="12" cy="7" r="2"/><path d="M6 10c-1-1-2.5-1-3.5 0M18 10c1-1 2.5-1 3.5 0M5 14H1M19 14h4M6 18c-1 1-2.5 1.5-3.5 1M18 18c1 1 2.5 1.5 3.5 1"/></svg>`,
  termite: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="3" ry="3"/><ellipse cx="12" cy="14" rx="4" ry="4"/><ellipse cx="12" cy="20" rx="3" ry="2"/><path d="M7 14l-3-2M17 14l3-2M8 17l-3 2M16 17l3 2"/></svg>`,
  rodents: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18a5 5 0 0 0 0-10H6a5 5 0 0 0 0 10z"/><circle cx="4" cy="11" r="1.5"/><circle cx="18" cy="11" r="1.5"/><path d="M21 16c2 1 2.5 2 2 3.5" stroke-linecap="round"/></svg>`,
  woodborer: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="2" rx="1"/><path d="M12 5v6M12 13v6M6 8l3 3M18 8l-3 3M6 16l3-3M18 16l-3-3"/></svg>`,
  geckos: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M8 6h8M6 11h12M7 17h10M12 2L8 4M12 2l4 2M8 22l2-3M16 22l-2-3" stroke-linecap="round"/></svg>`,
  moths: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18V6M12 6C8.5 3 4 5 4 10c0 4 4.5 6 8 8M12 6c3.5-3 8-1 8 4 0 4-4.5 6-8 8" stroke-linecap="round"/></svg>`,
  woodbeetle: `<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v4a4 4 0 0 0 8 0V3M12 7v14M5 11h14M6 16h12" stroke-linecap="round"/></svg>`
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
    woodbeetle: "images/woodbeetle.png"
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
  const icons = document.querySelectorAll(".faq-icon");
  const items = document.querySelectorAll(".faq-item");
  
  if (panels.length === 0) return;

  const activePanel = panels[idx];
  const activeIcon = icons[idx];
  const activeItem = items[idx];

  // هل اللوحة مفتوحة حالياً؟
  const isOpen = activeItem.classList.contains("open");

  // إغلاق جميع اللوحات الأخرى
  items.forEach((item, index) => {
    item.classList.remove("open");
    panels[index].style.maxHeight = null;
    icons[index].textContent = "+";
  });

  // فتح أو إغلاق اللوحة الحالية
  if (!isOpen) {
    activeItem.classList.add("open");
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
    activeIcon.textContent = "−";
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
    woodbeetle: "images/woodbeetle.png"
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

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    menuToggle.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
    }
  });

  // إغلاق القائمة عند النقر على أي رابط تنقل
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
    });
  });
}