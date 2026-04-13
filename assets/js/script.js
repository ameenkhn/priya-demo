const siteConfig = {
  clinicName: "THE CHILD & NEURO-SPINE CARE",
  clinicTagline: "Child-friendly pediatrics, development, and neuro-spine support in RT Nagar",
  phoneDisplay: "+91 94830 42740",
  phoneHref: "tel:+919483042740",
  email: "childandneurospinecare@gmail.com",
  emailHref: "mailto:childandneurospinecare@gmail.com",
  address: "No. 139, 16th Cross, 1st Block, RT Nagar, Bengaluru - 560032",
  mapLink: "https://www.google.com/maps?q=The+Child+and+Neuro+Spine+Care,+RT+Nagar,+Bengaluru+560032",
  mapEmbed:
    "https://www.google.com/maps?q=The+Child+and+Neuro+Spine+Care,+RT+Nagar,+Bengaluru+560032&output=embed",
  appointmentLink: "https://priyashivalli.exlyapp.com/049aae21-1f39-4c8d-b54e-3b586f53eaff",
  whatsappLink:
    "https://api.whatsapp.com/send/?phone=%2B919483042740&text=Hello%21+I+would+like+to+book+an+appointment+for+my+child.&type=phone_number&app_absent=0",
  childLogo: "assets/img/logo/drpriya/nav-child-care.png",
  neuroLogo: "assets/img/logo/drpriya/nav-neuro-spine.png",
  clinicLogo: "assets/img/logo/drpriya/clinic-logo.png",
  nav: [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "services", label: "Services", href: "services.html" },
    { id: "gallery", label: "Gallery", href: "gallery.html" },
    { id: "testimonials", label: "Testimonials", href: "testimonial.html" },
    { id: "faq", label: "FAQ", href: "faq.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ],
  footerServices: [
    "Newborn care and feeding support",
    "Vaccination and preventive planning",
    "Growth and milestone tracking",
    "Pediatric neurology review",
    "Spine and posture concerns",
    "Developmental follow-up"
  ]
};

function currentPage() {
  return document.body.dataset.page || "home";
}

function navLinksMarkup(pageId) {
  return siteConfig.nav
    .map((item) => {
      const activeClass = item.id === pageId ? "is-active" : "";
      return `<a href="${item.href}" class="${activeClass}">${item.label}</a>`;
    })
    .join("");
}

function mobileLinksMarkup(pageId) {
  return siteConfig.nav
    .map((item) => {
      const activeClass = item.id === pageId ? "is-active" : "";
      return `<a href="${item.href}" class="${activeClass}"><span>${item.label}</span><i class="fa-solid fa-arrow-right"></i></a>`;
    })
    .join("");
}

function headerMarkup(pageId) {
  return `
    <div class="container">
      <div class="nav-shell">
        <a class="brand-link" href="index.html" aria-label="${siteConfig.clinicName}">
          <div class="brand-icons">
            <span class="brand-icon"><img src="${siteConfig.childLogo}" alt="Child care logo" width="34" height="34"></span>
            <span class="brand-icon"><img src="${siteConfig.neuroLogo}" alt="Neuro-spine logo" width="34" height="34"></span>
          </div>
          <div class="brand-copy">
            <span class="brand-title">${siteConfig.clinicName}</span>
          </div>
        </a>

        <nav class="nav-links" aria-label="Primary navigation">
          ${navLinksMarkup(pageId)}
        </nav>

        <div class="nav-actions">
          <a class="nav-pill" href="${siteConfig.phoneHref}">
            <i class="fa-solid fa-phone"></i>
            <span>Call</span>
          </a>
          <a class="btn btn-primary nav-cta" href="${siteConfig.appointmentLink}" target="_blank" rel="noopener">
            <i class="fa-solid fa-calendar-check"></i>
            <span>Schedule Online Consultation</span>
          </a>
          <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-mobile-menu" data-nav-toggle>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="mobile-menu" id="site-mobile-menu" data-mobile-menu aria-hidden="true">
      <div class="mobile-menu__backdrop" data-mobile-close></div>
      <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div class="mobile-menu__head">
          <div class="mobile-menu__brand">
            <img src="${siteConfig.clinicLogo}" alt="${siteConfig.clinicName}" width="54" height="54">
            <div>
              <div class="mobile-menu__title">${siteConfig.clinicName}</div>
              <p>${siteConfig.clinicTagline}</p>
            </div>
          </div>
          <button class="mobile-menu__close" type="button" aria-label="Close menu" data-mobile-close>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav class="mobile-menu__nav" aria-label="Mobile navigation">
          ${mobileLinksMarkup(pageId)}
        </nav>

        <div class="mobile-menu__meta">
          <a href="${siteConfig.phoneHref}"><i class="fa-solid fa-phone"></i><span>${siteConfig.phoneDisplay}</span></a>
          <a href="${siteConfig.emailHref}"><i class="fa-regular fa-envelope"></i><span>${siteConfig.email}</span></a>
          <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span>WhatsApp Booking</span></a>
        </div>
      </div>
    </div>
  `;
}

function footerMarkup() {
  const serviceLinks = siteConfig.footerServices
    .map((item) => `<li><span class="footer-dot"></span>${item}</li>`)
    .join("");

  const pageLinks = siteConfig.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <div class="container footer-shell">
      <div class="footer-panel">
        <div class="footer-grid">
          <div class="footer-brand-block">
            <div class="footer-brand">
              <img src="${siteConfig.clinicLogo}" alt="${siteConfig.clinicName}" width="70" height="70">
              <div>
                <h3>${siteConfig.clinicName}</h3>
              </div>
            </div>
            <div class="footer-community footer-community--contact">
              <div class="footer-community__copy">
                <h3>Stay Updated</h3>
                <p>Join our parent community for child health tips, clinic updates, and practical guidance you can trust.</p>
              </div>
              <a class="footer-community__cta" href="https://priyashivalli.exlyapp.com/40e94ae4-bfb9-4264-b06f-310f7bd6140c" target="_blank" rel="noopener">Join Our Parent Community</a>
            </div>
          </div>

          <div>
            <h3 class="footer-title">Explore</h3>
            <div class="footer-links">${pageLinks}</div>
          </div>

          <div>
            <h3 class="footer-title">Care Highlights</h3>
            <ul class="footer-services">${serviceLinks}</ul>
          </div>

          <div>
            <h3 class="footer-title">Contact</h3>
            <div class="footer-contact">
              <a href="${siteConfig.phoneHref}"><i class="fa-solid fa-phone"></i><span>${siteConfig.phoneDisplay}</span></a>
              <a href="${siteConfig.emailHref}"><i class="fa-regular fa-envelope"></i><span>${siteConfig.email}</span></a>
              <a href="${siteConfig.mapLink}" target="_blank" rel="noopener"><i class="fa-solid fa-location-dot"></i><span>${siteConfig.address}</span></a>
              <a href="${siteConfig.appointmentLink}" target="_blank" rel="noopener"><i class="fa-solid fa-calendar-check"></i><span>Book Online Consultaion</span></a>
            </div>
            <div class="footer-social" aria-label="Clinic links">
              <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="${siteConfig.phoneHref}" aria-label="Call"><i class="fa-solid fa-phone"></i></a>
              <a href="${siteConfig.emailHref}" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
              <a href="${siteConfig.mapLink}" target="_blank" rel="noopener" aria-label="Map"><i class="fa-solid fa-location-dot"></i></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; <span data-current-year></span> ${siteConfig.clinicName}. All rights reserved.</span>
          <span>Designed for a warm, child-friendly, professional clinic experience.</span>
        </div>
      </div>
    </div>
  `;
}

function preloaderMarkup() {
  return `
    <div class="site-preloader__panel">
      <div class="site-preloader__scene" aria-hidden="true">
        <div class="site-preloader__tile site-preloader__tile--rattle">
          <svg viewBox="0 0 84 84" role="presentation">
            <circle cx="44" cy="28" r="18" fill="#ffffff" stroke="#ff8ba7" stroke-width="6"></circle>
            <circle cx="44" cy="28" r="8" fill="#ffd66b"></circle>
            <rect x="23" y="43" width="13" height="22" rx="6.5" fill="#56c1ff"></rect>
            <circle cx="30" cy="68" r="8" fill="#1f84e7"></circle>
          </svg>
        </div>
        <div class="site-preloader__tile site-preloader__tile--rainbow">
          <svg viewBox="0 0 140 110" role="presentation">
            <path d="M25 78a45 45 0 0 1 90 0" fill="none" stroke="#ff8ba7" stroke-width="12" stroke-linecap="round"></path>
            <path d="M39 78a31 31 0 0 1 62 0" fill="none" stroke="#ffcb65" stroke-width="12" stroke-linecap="round"></path>
            <path d="M53 78a17 17 0 0 1 34 0" fill="none" stroke="#56c1ff" stroke-width="12" stroke-linecap="round"></path>
            <path class="site-preloader__star" d="M70 6l6 12 13 2-9.5 9.2 2.2 13-11.7-6.3-11.7 6.3 2.2-13L51 20l13-2z" fill="#ffd66b"></path>
            <circle cx="25" cy="78" r="12" fill="#ffffff"></circle>
            <circle cx="115" cy="78" r="12" fill="#ffffff"></circle>
          </svg>
        </div>
        <div class="site-preloader__tile site-preloader__tile--block">
          <svg viewBox="0 0 84 84" role="presentation">
            <rect x="14" y="14" width="56" height="56" rx="16" fill="#ffffff" stroke="#56c1ff" stroke-width="6"></rect>
            <path d="M31 54V31h8.5c7 0 11.5 3.8 11.5 11.2 0 7.4-4.7 11.8-12 11.8H31zm8-6.6h.8c3.4 0 5.8-1.6 5.8-5.2 0-3.8-2.5-5-5.8-5H39v10.2z" fill="#ff8ba7"></path>
            <circle cx="26" cy="24" r="5" fill="#ffd66b"></circle>
            <circle cx="58" cy="60" r="5" fill="#bdf0de"></circle>
          </svg>
        </div>
      </div>
      <div class="site-preloader__copy">
        <strong>${siteConfig.clinicName}</strong>
        <span>Preparing a warm, child-friendly space for your family...</span>
      </div>
      <div class="site-preloader__progress" aria-hidden="true">
        <span></span>
      </div>
    </div>
  `;
}

function setupPreloader() {
  if (!document.body || document.querySelector("[data-preloader]")) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "site-preloader";
  overlay.setAttribute("data-preloader", "");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = preloaderMarkup();
  document.body.prepend(overlay);
  document.body.classList.add("is-loading");

  const mountedAt = Date.now();
  let hidden = false;

  const hidePreloader = () => {
    if (hidden) {
      return;
    }

    hidden = true;
    const elapsed = Date.now() - mountedAt;
    const wait = Math.max(0, 900 - elapsed);

    window.setTimeout(() => {
      overlay.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      window.setTimeout(() => overlay.remove(), 520);
    }, wait);
  };

  if (document.readyState === "complete") {
    hidePreloader();
  } else {
    window.addEventListener("load", hidePreloader, { once: true });
    window.setTimeout(hidePreloader, 3600);
  }
}

function setupInjectedShell() {
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  const pageId = currentPage();

  if (header) {
    header.innerHTML = headerMarkup(pageId);
  }

  if (footer) {
    footer.innerHTML = footerMarkup();
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function setupHeaderScrollState() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const sync = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function setupMobileMenu() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const closeButtons = document.querySelectorAll("[data-mobile-close]");

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeMenu));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function setupReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");

  if (!nodes.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  nodes.forEach((node) => observer.observe(node));
}

function setupAccordion() {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");

    if (!trigger || !panel) {
      return;
    }

    const setOpen = (open) => {
      item.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      panel.style.maxHeight = open ? `${panel.scrollHeight}px` : "0px";
    };

    setOpen(item.classList.contains("is-open"));

    trigger.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");

      const group = item.closest(".accordion");
      if (group) {
        group.querySelectorAll(".accordion-item").forEach((sibling) => {
          if (sibling === item) {
            return;
          }

          sibling.classList.remove("is-open");

          const siblingTrigger = sibling.querySelector(".accordion-trigger");
          const siblingPanel = sibling.querySelector(".accordion-panel");

          if (siblingTrigger) {
            siblingTrigger.setAttribute("aria-expanded", "false");
          }

          if (siblingPanel) {
            siblingPanel.style.maxHeight = "0px";
          }
        });
      }

      setOpen(shouldOpen);
    });
  });

  window.addEventListener("resize", () => {
    document.querySelectorAll(".accordion-item.is-open .accordion-panel").forEach((panel) => {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    });
  });
}

function buildLightbox() {
  const wrapper = document.createElement("div");
  wrapper.className = "lightbox";
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.innerHTML = `
    <div class="lightbox__backdrop" data-lightbox-close></div>
    <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-label="Image preview">
      <button class="lightbox__close" type="button" aria-label="Close image" data-lightbox-close>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <img class="lightbox__image" src="" alt="">
      <div class="lightbox__caption"></div>
    </div>
  `;
  document.body.appendChild(wrapper);
  return wrapper;
}

function setupLightbox() {
  const triggers = document.querySelectorAll("[data-lightbox]");

  if (!triggers.length) {
    return;
  }

  const lightbox = buildLightbox();
  const image = lightbox.querySelector(".lightbox__image");
  const caption = lightbox.querySelector(".lightbox__caption");

  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    image.src = "";
    image.alt = "";
    caption.textContent = "";
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-lightbox");
      const title = trigger.getAttribute("data-lightbox-title") || "";

      if (!src) {
        return;
      }

      image.src = src;
      image.alt = title;
      caption.textContent = title;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
    });
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach((node) => {
    node.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  const note = form.querySelector("[data-form-note]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const childAge = String(formData.get("childAge") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Consultation enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Parent/Guardian: ${name || "-"}`,
        `Phone: ${phone || "-"}`,
        `Email: ${email || "-"}`,
        `Child Age: ${childAge || "-"}`,
        `Preferred Service: ${service || "-"}`,
        "",
        "Concern:",
        message || "-"
      ].join("\n")
    );

    if (note) {
      note.textContent = "Opening your email app with the enquiry details filled in.";
    }

    window.location.href = `${siteConfig.emailHref}?subject=${subject}&body=${body}`;
  });
}

function setupBackToTop() {
  const btn = document.querySelector("[data-back-to-top]");

  if (!btn) {
    return;
  }

  const sync = () => {
    btn.classList.toggle("is-visible", window.scrollY > 320);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");

  if (!counters.length || !("IntersectionObserver" in window)) {
    return;
  }

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    if (Number.isNaN(target)) {
      return;
    }

    const originalText = el.getAttribute("data-count-label") || el.textContent;
    const suffix = originalText.replace(/[\d,]/g, "").trim();
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = `${current.toLocaleString()}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((el) => observer.observe(el));
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupSectionScrollStates() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-process-journey]").forEach((journey) => {
    const steps = Array.from(journey.querySelectorAll("[data-process-step]"));
    const progress = journey.querySelector("[data-process-progress]");

    if (!steps.length) {
      return;
    }

    const setActiveStep = (index) => {
      steps.forEach((step, stepIndex) => {
        step.classList.toggle("is-active", stepIndex === index);
      });

      if (progress) {
        const ratio = steps.length === 1 ? 1 : index / (steps.length - 1);
        progress.style.height = `${14 + ratio * 86}%`;
      }
    };

    setActiveStep(0);

    if (!("IntersectionObserver" in window) || reduceMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = steps.indexOf(entry.target);
          if (index >= 0) {
            setActiveStep(index);
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-10% 0px -18% 0px"
      }
    );

    steps.forEach((step) => observer.observe(step));
  });

  document.querySelectorAll("[data-trust-ladder]").forEach((ladder) => {
    const panels = Array.from(ladder.querySelectorAll("[data-trust-panel]"));

    if (!panels.length) {
      return;
    }

    const setActivePanel = (index) => {
      panels.forEach((panel, panelIndex) => {
        panel.classList.toggle("is-active", panelIndex === index);
      });
    };

    setActivePanel(0);

    if (!("IntersectionObserver" in window) || reduceMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const index = panels.indexOf(visible.target);
        if (index >= 0) {
          setActivePanel(index);
        }
      },
      {
        threshold: [0.3, 0.55, 0.8],
        rootMargin: "-12% 0px -18% 0px"
      }
    );

    panels.forEach((panel) => observer.observe(panel));
  });
}

function setupTiltCards() {
  const cards = document.querySelectorAll("[data-tilt]");

  cards.forEach((card) => {
    const reset = () => {
      card.style.transform = "";
    };

    card.addEventListener("pointermove", (event) => {
      if (window.innerWidth < 960) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 10;
      const rotateX = (0.5 - py) * 10;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", reset);
    card.addEventListener("blur", reset, true);
  });
}

function setupParallaxShapes() {
  const nodes = document.querySelectorAll("[data-parallax]");

  if (!nodes.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  window.addEventListener(
    "mousemove",
    (event) => {
      const xRatio = event.clientX / window.innerWidth - 0.5;
      const yRatio = event.clientY / window.innerHeight - 0.5;

      nodes.forEach((node) => {
        const speed = Number(node.getAttribute("data-parallax")) || 12;
        node.style.transform = `translate3d(${xRatio * speed}px, ${yRatio * speed}px, 0)`;
      });
    },
    { passive: true }
  );
}

setupPreloader();

document.addEventListener("DOMContentLoaded", () => {
  setupInjectedShell();
  setupHeaderScrollState();
  setupMobileMenu();
  setupReveal();
  setupAccordion();
  setupLightbox();
  setupContactForm();
  setupBackToTop();
  setupCounters();
  setupSmoothAnchors();
  setupSectionScrollStates();
  setupTiltCards();
  setupParallaxShapes();
});
