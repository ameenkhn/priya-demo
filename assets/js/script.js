const siteConfig = {
  clinicName: "THE CHILD & NEURO-SPINE CARE",
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
    { id: "faq", label: "FAQ", href: "faq.html" },
    { id: "contact", label: "Contact", href: "contact.html" }
  ],
  footerServices: [
    "Newborn Care",
    "Vaccination",
    "Growth Monitoring",
    "Pediatric Neurology",
    "Spine Disorders",
    "Neuro Rehabilitation"
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
        <a class="nav-emblem" href="index.html" aria-label="Child Care">
          <img src="${siteConfig.childLogo}" alt="Child Care logo">
          <span>Child Care</span>
        </a>
        <div class="nav-center">
          <a class="brand-link" href="index.html" aria-label="${siteConfig.clinicName}">
            <span class="brand-title">${siteConfig.clinicName}</span>
          </a>
          <nav class="nav-links" aria-label="Primary navigation">
            ${navLinksMarkup(pageId)}
          </nav>
        </div>
        <div class="nav-actions">
          <a class="nav-emblem" href="index.html" aria-label="Neuro-Spine Care">
            <img src="${siteConfig.neuroLogo}" alt="Neuro-Spine logo">
            <span>Neuro-Spine</span>
          </a>
          <a class="btn btn-primary nav-cta" href="${siteConfig.appointmentLink}" target="_blank" rel="noopener">Book Appointment</a>
          <button class="nav-toggle" type="button" aria-label="Open menu" data-nav-toggle>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="mobile-menu" data-mobile-menu aria-hidden="true">
      <div class="mobile-menu__backdrop" data-mobile-close></div>
      <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div class="mobile-menu__head">
          <div class="mobile-menu__brand">
            <img src="${siteConfig.clinicLogo}" alt="${siteConfig.clinicName}">
            <div class="mobile-menu__title">${siteConfig.clinicName}</div>
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
    .map((item) => `<li><a href="services.html">${item}</a></li>`)
    .join("");

  return `
    <div class="container footer-shell">
      <div class="footer-panel">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              <img src="${siteConfig.clinicLogo}" alt="${siteConfig.clinicName}">
              <div>
                <h3>${siteConfig.clinicName}</h3>
                <p>Premium pediatric and neuro-spine care with family-first communication, evidence-based treatment, and a reassuring clinic experience.</p>
              </div>
            </div>
            <div class="footer-social" aria-label="Clinic links">
              <a href="${siteConfig.whatsappLink}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="${siteConfig.phoneHref}" aria-label="Call"><i class="fa-solid fa-phone"></i></a>
              <a href="${siteConfig.emailHref}" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
              <a href="${siteConfig.mapLink}" target="_blank" rel="noopener" aria-label="Map"><i class="fa-solid fa-location-dot"></i></a>
            </div>
          </div>
          <div>
            <h3 class="footer-title">Quick Links</h3>
            <div class="footer-links">
              ${siteConfig.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
              <a href="testimonial.html">Testimonials</a>
            </div>
          </div>
          <div>
            <h3 class="footer-title">Services</h3>
            <ul class="footer-links">
              ${serviceLinks}
            </ul>
          </div>
          <div>
            <h3 class="footer-title">Contact</h3>
            <div class="footer-contact">
              <a href="${siteConfig.phoneHref}"><i class="fa-solid fa-phone"></i><span>${siteConfig.phoneDisplay}</span></a>
              <a href="${siteConfig.emailHref}"><i class="fa-regular fa-envelope"></i><span>${siteConfig.email}</span></a>
              <a href="${siteConfig.mapLink}" target="_blank" rel="noopener"><i class="fa-solid fa-location-dot"></i><span>${siteConfig.address}</span></a>
              <a href="${siteConfig.appointmentLink}" target="_blank" rel="noopener"><i class="fa-solid fa-calendar-check"></i><span>Book a consultation</span></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; <span data-current-year></span> ${siteConfig.clinicName}. All rights reserved.</span>
          <span>Designed for a calm, premium, client-review-ready healthcare presentation.</span>
        </div>
      </div>
    </div>
  `;
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
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
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
      threshold: 0.16,
      rootMargin: "0px 0px -60px 0px"
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

    if (item.classList.contains("is-open")) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    trigger.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");

      const group = item.closest(".accordion");
      if (group) {
        group.querySelectorAll(".accordion-item").forEach((sibling) => {
          if (sibling !== item) {
            sibling.classList.remove("is-open");
            const siblingTrigger = sibling.querySelector(".accordion-trigger");
            const siblingPanel = sibling.querySelector(".accordion-panel");

            if (siblingTrigger) {
              siblingTrigger.setAttribute("aria-expanded", "false");
            }
            if (siblingPanel) {
              siblingPanel.style.maxHeight = "0px";
            }
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
      note.textContent = "Opening your email app with the appointment details.";
    }

    window.location.href = `${siteConfig.emailHref}?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupInjectedShell();
  setupMobileMenu();
  setupReveal();
  setupAccordion();
  setupLightbox();
  setupContactForm();
});
