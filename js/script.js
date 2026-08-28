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
  // تفعيل التوطين الأساسي
  initTranslations();
  
  // بناء كروت الآفات إذا كنا بالرئيسية
  renderPestGrid();
  
  // تفعيل السلايدر إذا كان متواجداً
  initHeroSlider();
  
  // تفعيل تأثير رذاذ الرش البصري في الهيرو
  initHeroMist();

  // تفعيل عداد الإحصائيات التفاعلي عند التمرير
  initStatsCounter();

  // تفعيل صفحة التفاصيل الديناميكية إذا كنا بها
  initPestDetailPage();

  // تفعيل نموذج تواصل صفحة الاتصال
  initContactForm();

  // تحديث سنة حقوق الفوتر تلقائياً
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

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
    cockroach: "images/cockroach.png",
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
    const teaser = currentLang === "ar" ? pest.teaserAr : pest.teaserEn;
    const btnText = currentLang === "ar" ? translations.ar.btnMore : translations.en.btnMore;
    const imgUrl = unsplashImages[pest.id] || "images/logo.png";

    const card = document.createElement("article");
    card.className = "pest-card";
    card.innerHTML = `
      <div class="pest-image-container">
        <img src="${imgUrl}" alt="${name}" loading="lazy">
        <div class="pest-icon-badge">
          ${pestIcons[pest.id] || ''}
        </div>
      </div>
      <div class="pest-card-body">
        <h3>${name}</h3>
        <p>${teaser}</p>
        <a href="pest.html?id=${pest.id}" class="pest-card-btn">
          <span>${btnText}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
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

// 6. عداد الإحصائيات التفاعلي عند التمرير (Animated Stats Counter)
function initStatsCounter() {
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;

  const statNumbers = document.querySelectorAll(".stat-number");
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(numEl => {
          animateCounter(numEl);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10);
  const prefix = el.getAttribute("data-prefix") || "";
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 1500; // 1.5 ثانية للتحريك السلس والسريع
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing: easeOutQuad للتأثير المريح للعين والتبطؤ في النهاية
    const easeProgress = progress * (2 - progress);
    const currentValue = easeProgress * target;
    
    // تنسيق الأرقام بـ commas للقيم الكبيرة (مثل 25,000)
    const formatted = Math.floor(currentValue).toLocaleString();
    
    el.innerHTML = `${prefix ? `<span class="stat-prefix">${prefix}</span>` : ""}${formatted}${suffix ? `<span class="stat-suffix">${suffix}</span>` : ""}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.innerHTML = `${prefix ? `<span class="stat-prefix">${prefix}</span>` : ""}${target.toLocaleString()}${suffix ? `<span class="stat-suffix">${suffix}</span>` : ""}`;
    }
  }

  requestAnimationFrame(update);
}

// 7. الأسئلة الشائعة الأكورديون (FAQ Accordion)
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

// 8. صفحة تفاصيل الحشرة المستقلة الديناميكية المثرية والمحسنة (pest.html)
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
    cockroach: "images/cockroach.png",
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

  const pestCauseText = document.getElementById("pestDetailCause");
  if (pestCauseText) {
    // تنسيق النص بنقاط أو فقرات تفصيلية مريحة
    pestCauseText.innerHTML = cause.split(". ").map(p => `<p style="margin-bottom: 12px;">${p}.</p>`).join("");
  }

  const pestTreatmentText = document.getElementById("pestDetailTreatment");
  if (pestTreatmentText) {
    // تنسيق خطوات المعالجة لتظهر بشكل بروتوكول هندسي مرقم وواضح
    const steps = treatment.split(": ");
    if (steps.length > 1) {
      let formattedText = "";
      steps.forEach((step, i) => {
        if (i === 0) {
          formattedText += `<p style="font-weight: 700; margin-bottom: 16px; color: var(--primary);">${step}:</p><ol class="detail-steps-list">`;
        } else {
          // جلب النص الفعلي للخطوة
          const cleanStep = step.replace(/ثانياً،|ثالثاً،|رابعاً،|أولاً،/g, "").trim();
          formattedText += `<li style="margin-bottom: 14px; padding-inline-start: 10px; list-style-position: inside;">${cleanStep}</li>`;
        }
      });
      formattedText += "</ol>";
      pestTreatmentText.innerHTML = formattedText;
    } else {
      pestTreatmentText.innerHTML = treatment.split(". ").map(p => `<p style="margin-bottom: 12px;">${p}.</p>`).join("");
    }
  }

  const pestIconBox = document.getElementById("pestDetailIconBox");
  if (pestIconBox) {
    pestIconBox.innerHTML = pestIcons[pest.id] || "";
    pestIconBox.style.color = "var(--brand-green)";
  }
}

// 9. تفعيل نموذج التواصل في صفحة اتصل بنا
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