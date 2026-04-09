(function () {
  const site = {
    clinicName: "The Child & Neuro-Spine Care",
    doctorName: "Dr. Priya Shivalli",
    designation: "Consultant Neonatologist & Pediatrician",
    experience: "22+ Years Experience",
    phoneDisplay: "+91 94830 42740",
    phoneHref: "tel:+919483042740",
    email: "childandneurospinecare@gmail.com",
    emailHref: "mailto:childandneurospinecare@gmail.com",
    whatsappHref:
      "https://api.whatsapp.com/send/?phone=%2B919483042740&text=Hello%21+I+would+like+to+book+an+appointment+with+Dr.+Priya+Shivalli.&type=phone_number&app_absent=0",
    videoHref:
      "https://priyashivalli.exlyapp.com/049aae21-1f39-4c8d-b54e-3b586f53eaff",
    address: "No. 139, 16th Cross, 1st Block, RT Nagar, Bengaluru - 560032",
    timings: "10:00 AM - 1:00 PM",
    eveningTimings: "7:00 PM - 8:00 PM",
    mapEmbed:
      "https://www.google.com/maps?q=" +
      encodeURIComponent("The Child and Neuro Spine Care, RT Nagar, Bengaluru 560032") +
      "&output=embed",
    images: {
      logo: "assets/img/logo/drpriya/clinic-logo.png",
      navChild: "assets/img/logo/drpriya/nav-child-care.png",
      navNeuro: "assets/img/logo/drpriya/nav-neuro-spine.png",
      portrait: "assets/img/all-images/drpriya/dr-priya-portrait.jpeg",
      poster: "assets/img/all-images/drpriya/clinic-poster.jpeg",
      fiap: "assets/img/all-images/drpriya/fiap-award.jpeg",
      achiever: "assets/img/all-images/drpriya/women-achiever-award.jpeg",
    },
    copy: {
      shortIntro:
        "Consult with Dr. Priya Shivalli, an experienced Neonatologist and Pediatrician with over 22 years of expertise in newborn, child & adolescent health. She provides compassionate, evidence-based guidance for newborn care, vaccination, growth and development concerns, high-risk newborn follow-up, infections, allergies, and baby care.",
      reassurance:
        "Known for her clear explanations and reassuring approach, she helps parents make confident decisions for their child’s health. She offers quick consultations, follow-ups, and trusted second opinions from the comfort of home.",
      about:
        "With over 22 years of experience, Dr Priya Shivalli is a Consultant Neonatologist and Pediatrician dedicated to advancing child health through evidence-based care and parent education. Her expertise spans neonatal care, vaccination, growth and development, high-risk newborn follow-up, infections, allergies, and comprehensive baby care guidance.",
      honour:
        "She has been honoured with the prestigious Fellowship of the Indian Academy of Pediatrics (FIAP) in recognition of her contributions to academics, clinical excellence, and child health advocacy.",
    },
  };

  const credentials = [
    "MBBS, DCH, Diplomate of National Board - DNB Pediatrics",
    "Fellowship in Neonatology - IAP",
    "Fellow of Indian Academy of Paediatrics",
    "Certified in Maternal, Infant & Young Child Nutrition - IIT Bombay",
    "Certified in Vaccinology and Bioethics - IAP & ICP",
  ];

  const recognitions = [
    "22+ years of experience in newborn, child, and adolescent health",
    "FIAP honour for academic, clinical, and child health contribution",
    "Trusted for clear explanations, reassurance, and evidence-based care",
    "Available for in-clinic consultations, follow-ups, and video reviews",
  ];

  const routes = {
    home: "index.html",
    about: "about.html",
    services: "services.html",
    highlights: "testimonial.html",
    gallery: "gallery.html",
    faq: "faq.html",
    contact: "contact.html",
  };

  const services = [
    {
      title: "Newborn & Baby Care",
      text: "Guidance for feeding patterns, jaundice checks, sleep concerns, early neonatal review, and first-month reassurance.",
      icon: "fa-baby",
      accent: "linear-gradient(135deg, #fff2dc 0%, #ffe6ef 100%)",
      label: "Neonatal Focus",
    },
    {
      title: "Vaccination & Immunization",
      text: "Clear, evidence-based counseling on vaccine schedules, timing, safety, and preventive child health planning.",
      icon: "fa-syringe",
      accent: "linear-gradient(135deg, #e8f7ff 0%, #eef4ff 100%)",
      label: "Preventive Care",
    },
    {
      title: "Growth & Development Monitoring",
      text: "Milestone checks, growth review, nutritional tracking, and structured follow-up when development needs attention.",
      icon: "fa-chart-line",
      accent: "linear-gradient(135deg, #eff8ef 0%, #e7fff7 100%)",
      label: "Long-Term Review",
    },
    {
      title: "High-Risk Newborn Follow-up",
      text: "Focused review for NICU graduates, preterm babies, and infants who need close developmental observation.",
      icon: "fa-heart-pulse",
      accent: "linear-gradient(135deg, #fff0f4 0%, #fff8e7 100%)",
      label: "Close Monitoring",
    },
    {
      title: "Allergy & Asthma Care",
      text: "Assessment and guidance for wheeze, allergies, trigger patterns, recurrent cough, and preventive strategies.",
      icon: "fa-lungs",
      accent: "linear-gradient(135deg, #edf7ff 0%, #f2fbff 100%)",
      label: "Respiratory Care",
    },
    {
      title: "Infections & Fever Care",
      text: "Consultation for common childhood infections, recurrent fever, viral illness, recovery concerns, and warning signs.",
      icon: "fa-notes-medical",
      accent: "linear-gradient(135deg, #fff7e8 0%, #fff2f2 100%)",
      label: "Acute Review",
    },
    {
      title: "Nutrition & Feeding Support",
      text: "Breastfeeding help, infant feeding advice, toddler nutrition support, and growth-linked diet planning.",
      icon: "fa-apple-whole",
      accent: "linear-gradient(135deg, #eefdf3 0%, #f7fff2 100%)",
      label: "Healthy Growth",
    },
    {
      title: "Adolescent Care & Second Opinions",
      text: "Practical support for older children and adolescents, including follow-up visits and trusted second opinions.",
      icon: "fa-user-doctor",
      accent: "linear-gradient(135deg, #eef4ff 0%, #f7f0ff 100%)",
      label: "Expert Guidance",
    },
  ];

  const galleryItems = [
    [site.images.portrait, "Doctor Portrait", "Formal portrait used for the clinic’s professional digital presence."],
    [site.images.poster, "Clinic Care Poster", "Service overview for comprehensive newborn, child, and adolescent care."],
    [site.images.fiap, "FIAP Recognition", "Stage moment from Dr. Priya’s Fellowship of the Indian Academy of Pediatrics recognition."],
    [site.images.achiever, "Women Achiever Award", "Professional honour reflecting leadership and contribution in child healthcare."],
    [site.images.logo, "Clinic Brand Identity", "Visual identity for The Child & Neuro-Spine Care."],
  ];

  const faqsLeft = [
    [
      "What conditions does Dr. Priya Shivalli commonly see?",
      "She consults for newborn care, vaccinations, feeding issues, growth and development concerns, infections, allergies, asthma, high-risk newborn follow-up, and general pediatric illnesses.",
    ],
    [
      "When should I bring my baby for a newborn consultation?",
      "A newborn review is useful for feeding difficulties, jaundice, weight gain concerns, sleep issues, excessive crying, or simply to get early guidance and reassurance.",
    ],
    [
      "Does the clinic offer vaccination counseling?",
      "Yes. Vaccine schedules, benefits, timing, and common parent questions are discussed clearly so families can make informed decisions with confidence.",
    ],
    [
      "Can I consult for growth or milestone concerns?",
      "Yes. Growth charts, milestones, behavior patterns, and development-related worries are assessed carefully, with follow-up planning when needed.",
    ],
    [
      "Is allergy and asthma care available?",
      "Yes. Recurrent cough, wheeze, allergic symptoms, trigger patterns, and preventive care can be reviewed during consultation.",
    ],
    [
      "Does Dr. Priya provide second opinions?",
      "Yes. She offers second opinions for newborn, child, and adolescent health concerns, especially when parents want extra clarity before proceeding further.",
    ],
    [
      "Can I consult online?",
      "Yes. Video consultations are available for quick reviews, follow-ups, guidance, and second opinions through the consultation link on the website.",
    ],
    [
      "What should I carry for the visit?",
      "Bring previous prescriptions, vaccination records, discharge summaries, growth charts, and any recent lab or scan reports relevant to your child’s concern.",
    ],
    [
      "Do you offer nutrition advice for infants and children?",
      "Yes. Feeding guidance, weaning support, diet correction, and nutrition planning are provided based on age, growth, and clinical needs.",
    ],
    [
      "Can parents ask questions beyond illness?",
      "Absolutely. Consultations also cover sleep, behavior, feeding habits, growth expectations, school-age concerns, and routine child care advice.",
    ],
  ];

  const faqsRight = [
    [
      "Is high-risk newborn follow-up available?",
      "Yes. Preterm babies, NICU graduates, and newborns who need closer developmental monitoring can be followed up systematically.",
    ],
    [
      "Can I consult for repeated infections or frequent fever?",
      "Yes. Recurrent fever, throat or chest infections, tummy issues, and recovery patterns can be evaluated and managed with an evidence-based approach.",
    ],
    [
      "Does Dr. Priya guide parents on breastfeeding and baby feeding?",
      "Yes. Mothers can discuss latch issues, feeding frequency, weight gain, milk concerns, and practical strategies for comfortable feeding.",
    ],
    [
      "Are adolescent health concerns also seen?",
      "Yes. Older children and adolescents can be reviewed for nutrition, growth, recurrent illness, school-related health concerns, and preventive guidance.",
    ],
    [
      "How long is a follow-up usually needed for growth concerns?",
      "It depends on the child’s age and concern. Some children need short-term review, while others benefit from periodic monitoring over a longer period.",
    ],
    [
      "Do you explain treatment plans in simple language?",
      "Yes. Dr. Priya is known for calm, clear explanations that help parents understand what is happening, what needs attention, and what can be observed safely.",
    ],
    [
      "Can I visit only for reassurance as a new parent?",
      "Yes. Many consultations are for reassurance, routine review, or preventive guidance when parents want clarity about what is normal and what is not.",
    ],
    [
      "How often should I review my child’s growth and development?",
      "Regular review is useful during infancy, vaccination visits, and whenever parents notice changes in appetite, weight gain, milestones, or activity levels.",
    ],
    [
      "Are clinic timings fixed every day?",
      "Regular consultation hours are 10:00 AM to 1:00 PM and 7:00 PM to 8:00 PM. Calling ahead is the best way to confirm availability.",
    ],
    [
      "What makes Dr. Priya’s approach different?",
      "Her practice combines strong neonatology and pediatric experience with evidence-based care, parent education, and a reassuring consultation style that families trust.",
    ],
  ];

  function pageName() {
    const raw = window.location.pathname.split("/").pop() || routes.home;
    return raw.toLowerCase() === "gallery.html" ? routes.gallery : raw;
  }

  function isActive(current, route) {
    return current === route ? "nav-link active" : "";
  }

  function iconArrow() {
    return '<span class="arrow-size"><i class="fa-solid fa-angle-down d-lg-inline d-none"></i></span>';
  }

  function brandMarkup(isFooter) {
    return `
      <span class="priya-brand${isFooter ? " priya-brand-footer" : ""}">
        <img src="${site.images.logo}" alt="${site.clinicName}" class="priya-brand-logo">
        <span class="priya-brand-text">
          <span class="priya-brand-title">${site.clinicName}</span>
          <span class="priya-brand-subtitle">${site.doctorName}</span>
        </span>
      </span>
    `;
  }

  function navBadgeMarkup(imageSrc, alt, imageClass, label) {
    return `
      <span class="priya-nav-badge">
        <span class="priya-nav-badge-visual">
          <img src="${imageSrc}" alt="${alt}" class="priya-nav-badge-image ${imageClass}">
        </span>
        <span class="priya-nav-badge-copy">
          <span class="priya-nav-badge-label">${label}</span>
        </span>
      </span>
    `;
  }

  function desktopMenu(current) {
    return `
      <ul>
        <li class="has-dropdown">
          <a href="${routes.home}" class="${isActive(current, routes.home)}">Home</a>
        </li>
        <li class="has-dropdown">
          <a href="#">Explore ${iconArrow()}</a>
          <ul class="sub-menu">
            <li><a class="${isActive(current, routes.about)}" href="${routes.about}">About Us</a></li>
            <li><a class="${isActive(current, routes.highlights)}" href="${routes.highlights}">Testimonials</a></li>
            <li><a class="${isActive(current, routes.gallery)}" href="${routes.gallery}">Gallery</a></li>
            <li><a class="${isActive(current, routes.faq)}" href="${routes.faq}">FAQs</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="${routes.services}" class="${isActive(current, routes.services)}">Services</a>
        </li>
        <li class="has-dropdown">
          <a href="${routes.contact}" class="${isActive(current, routes.contact)}">Contact Us</a>
        </li>
      </ul>
    `;
  }

  function mobileMenu(current) {
    return `
      <ul>
        <li><a href="${routes.home}" class="${isActive(current, routes.home)}">Home</a></li>
        <li><a class="${isActive(current, routes.about)}" href="${routes.about}">About Us</a></li>
        <li><a class="${isActive(current, routes.highlights)}" href="${routes.highlights}">Testimonials</a></li>
        <li><a class="${isActive(current, routes.gallery)}" href="${routes.gallery}">Gallery</a></li>
        <li><a class="${isActive(current, routes.faq)}" href="${routes.faq}">FAQs</a></li>
        <li><a href="${routes.services}" class="${isActive(current, routes.services)}">Services</a></li>
        <li><a href="${routes.contact}" class="${isActive(current, routes.contact)}">Contact Us</a></li>
      </ul>
    `;
  }

  function phoneButton() {
    return `
      <a href="${site.phoneHref}" class="phone">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clip-path="url(#clip0_5825_4343)">
            <path d="M4.32688 1.17598C4.79912 1.27359 5.1752 1.59087 5.40887 2.01006L6.15321 3.34544C6.42738 3.83727 6.65811 4.25117 6.80878 4.61098C6.96862 4.99266 7.06355 5.36904 7.02016 5.78518C6.97676 6.20131 6.80622 6.55001 6.57107 6.8905C6.3494 7.21148 6.03823 7.56888 5.66848 7.99356L4.57431 9.25038C4.37824 9.47563 4.2802 9.58821 4.27124 9.72896C4.26228 9.86971 4.34263 9.98996 4.50333 10.2304C5.87299 12.2796 7.71894 14.1262 9.76983 15.497C10.0103 15.6577 10.1305 15.738 10.2712 15.7291C10.412 15.7201 10.5247 15.6221 10.7498 15.426L12.0067 14.3318C12.4314 13.962 12.7888 13.6509 13.1098 13.4292C13.4502 13.194 13.799 13.0235 14.2151 12.9801C14.6312 12.9367 15.0077 13.0317 15.3893 13.1915C15.7491 13.3422 16.163 13.5729 16.6547 13.847L17.9902 14.5915C18.4094 14.8251 18.7267 15.2012 18.8243 15.6734C18.9229 16.1505 18.7775 16.6302 18.4562 17.0244C17.2904 18.4547 15.4227 19.3654 13.4633 18.9701C12.259 18.7272 11.0707 18.3225 9.63342 17.4982C6.74558 15.842 4.15636 13.2514 2.50212 10.367C1.67786 8.92963 1.2731 7.74134 1.03015 6.53696C0.634898 4.5776 1.54559 2.70987 2.9759 1.54412C3.37009 1.22284 3.84971 1.07736 4.32688 1.17598Z" fill="#f49ac1"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3062 1.54C11.4337 1.0978 11.8957 0.842779 12.3379 0.970388C15.5607 1.90041 18.099 4.43862 19.0292 7.66132C19.1567 8.1035 18.9017 8.56545 18.4596 8.69304C18.0174 8.8207 17.5554 8.5657 17.4278 8.1235C16.6565 5.45101 14.5483 3.34295 11.8757 2.57171C11.4336 2.4441 11.1786 1.98219 11.3062 1.54ZM10.7947 5.47187C10.9747 5.04825 11.4639 4.85066 11.8876 5.03055C13.2723 5.6186 14.381 6.72725 14.969 8.11199C15.1489 8.53562 14.9513 9.02487 14.5277 9.20479C14.1041 9.38462 13.6148 9.18704 13.4349 8.76345C13.0157 7.77614 12.2234 6.9839 11.2361 6.56463C10.8125 6.38474 10.6149 5.8955 10.7947 5.47187Z" fill="#f49ac1"></path>
          </g>
          <defs>
            <clipPath id="clip0_5825_4343">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        ${site.phoneDisplay}
      </a>
    `;
  }

  function consultButton(label) {
    return `
      <a href="${site.videoHref}" class="vl-btn4">
        ${label}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM10 7C9.5955 7 9.2309 7.24364 9.0761 7.61732C8.92134 7.99099 9.0069 8.42111 9.2929 8.70711L10.5858 10L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L12 11.4142L13.2929 12.7071C13.5789 12.9931 14.009 13.0787 14.3827 12.9239C14.7564 12.7691 15 12.4045 15 12V8C15 7.44772 14.5523 7 14 7H10Z" fill="white"></path>
          </svg>
        </span>
      </a>
    `;
  }

  function headerMarkup(current) {
    return `
      <header class="homepage4-body">
        <div id="vl-header-sticky" class="vl-header-area vl-transparent-header">
          <div class="container">
            <div class="row align-items-center row-bg1 priya-nav-shell">
              <div class="col-lg-3 col-md-6 col-6">
                <div class="vl-logo">
                  <a href="${routes.home}" aria-label="Child Care">
                    ${navBadgeMarkup(site.images.navChild, "Child Care", "priya-nav-badge-image--child", "Child Care")}
                  </a>
                </div>
              </div>
              <div class="col-lg-6 d-none d-lg-block">
                <div class="vl-main-menu text-center">
                  <nav class="vl-mobile-menu-active">${desktopMenu(current)}</nav>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-6">
                <div class="priya-nav-side">
                  <a href="${routes.home}" class="d-none d-lg-inline-flex" aria-label="Neuro-Spine Care">
                    ${navBadgeMarkup(site.images.navNeuro, "Neuro-Spine Care", "priya-nav-badge-image--neuro", "Neuro-Spine Care")}
                  </a>
                </div>
                <div class="vl-header-action-item d-block d-lg-none">
                  <button type="button" class="vl-offcanvas-toggle">
                    <i class="fa-solid fa-bars-staggered"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function mobileHeaderMarkup(current) {
    return `
      <div class="homepage4-body">
        <div class="vl-offcanvas">
          <div class="vl-offcanvas-wrapper">
            <div class="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
              <div class="vl-offcanvas-logo">
                <a href="${routes.home}" aria-label="${site.clinicName}">${brandMarkup(false)}</a>
              </div>
              <div class="vl-offcanvas-close">
                <button class="vl-offcanvas-close-toggle" type="button">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            <div class="vl-offcanvas-menu d-lg-none mb-40">
              <nav>${mobileMenu(current)}</nav>
            </div>
            <div class="space20"></div>
            <div class="vl-offcanvas-info">
              <div class="space20"></div>
              <span><a href="${site.emailHref}"><i class="fa-regular fa-envelope"></i>${site.email}</a></span>
              <span><a href="${site.phoneHref}"><i class="fa-solid fa-phone"></i>${site.phoneDisplay}</a></span>
              <span><a href="${site.whatsappHref}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>WhatsApp Appointment</a></span>
              <span><a href="${site.videoHref}" target="_blank" rel="noopener"><i class="fa-solid fa-video"></i>Video Consultation</a></span>
              <span><a href="#"><i class="fa-solid fa-clock"></i>${site.timings}<br>${site.eveningTimings}</a></span>
              <span><a href="#"><i class="fa-solid fa-location-dot"></i>${site.address}</a></span>
            </div>
          </div>
        </div>
        <div class="vl-offcanvas-overlay"></div>
      </div>
    `;
  }

  function ctaMarkup() {
    return `
      <div class="cta4-section-area" style="background-image: url(assets/img/all-images/bg/bg5.avif); background-position: center; background-size: cover; background-repeat: no-repeat;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="cta-content-area heading1">
                <span class="priya-subtitle-badge">Consultation Available</span>
                <div class="space24"></div>
                <h2 class="text-anime-style-3">Book a consultation with ${site.doctorName} for newborn, child, and adolescent care.</h2>
                <div class="space18"></div>
                <p>${site.copy.reassurance}</p>
                <div class="space24"></div>
                <div class="btn-area1">
                  ${consultButton("Schedule Video Consultation")}
                  <a href="${site.whatsappHref}" class="phone" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>WhatsApp Appointment</a>
                </div>
              </div>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-4">
              <div class="cta-circle-area">
                <div class="img1">
                  <img src="${site.images.logo}" alt="${site.clinicName}" class="priya-media-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function footerMarkup(current) {
    return `
      <div class="vl-footer4-section-area" style="background-image: url(assets/img/all-images/bg/bg4.avif); background-position: center; background-repeat: no-repeat; background-size: cover;">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-description-area priya-footer-panel">
                <div class="space24"></div>
                ${brandMarkup(true)}
                <div class="space24"></div>
                <p>Compassionate newborn, child, and adolescent care rooted in evidence-based pediatrics, parent education, and long-term follow-up.</p>
                <div class="space24"></div>
                <div class="priya-tag-list">
                  <span class="priya-tag">${site.experience}</span>
                  <span class="priya-tag">FIAP Honoured</span>
                  <span class="priya-tag">Online Consults</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="space30 d-md-none d-block"></div>
              <div class="footer-widget-area foot-padding1">
                <h3>Quick Links</h3>
                <ul>
                  <li><a class="${isActive(current, routes.about)}" href="${routes.about}">About Us</a></li>
                  <li><a class="${isActive(current, routes.highlights)}" href="${routes.highlights}">Testimonials</a></li>
                  <li><a class="${isActive(current, routes.gallery)}" href="${routes.gallery}">Gallery</a></li>
                  <li><a class="${isActive(current, routes.faq)}" href="${routes.faq}">FAQs</a></li>
                  <li><a class="${isActive(current, routes.contact)}" href="${routes.contact}">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="space30 d-lg-none d-block"></div>
              <div class="footer-widget-area">
                <h3>Care Areas</h3>
                <ul>
                  <li><a href="${routes.services}">Newborn Care</a></li>
                  <li><a href="${routes.services}">Vaccination</a></li>
                  <li><a href="${routes.services}">Growth Review</a></li>
                  <li><a href="${routes.services}">Allergy & Asthma</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="space30 d-lg-none d-block"></div>
              <div class="footer-widget-area priya-footer-contact">
                <h3>Contact Us</h3>
                <ul>
                  <li><a href="${site.phoneHref}"><i class="fa-solid fa-phone"></i> ${site.phoneDisplay}</a></li>
                  <li><a href="${site.emailHref}"><i class="fa-regular fa-envelope"></i> ${site.email}</a></li>
                  <li><a href="#"><i class="fa-solid fa-clock"></i> ${site.timings}<br>${site.eveningTimings}</a></li>
                  <li><a href="#"><i class="fa-solid fa-location-dot"></i> ${site.address}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="space100"></div>
          <div class="col-lg-12">
            <div class="copyright-area">
              <a href="#">© Copyright 2026 ${site.clinicName}. All Rights Reserved</a>
              <ul>
                <li><a href="${routes.services}">Services</a><span> | </span></li>
                <li><a href="${routes.contact}">Appointments</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function replaceBand(startSelector, endSelector, html) {
    const start = document.querySelector(startSelector);
    const end = document.querySelector(endSelector);
    if (!start || !end || !start.parentNode) return;
    start.insertAdjacentHTML("beforebegin", html);
    let node = start;
    while (node && node !== end) {
      const next = node.nextSibling;
      node.remove();
      node = next;
    }
  }

  function popupMarkup() {
    return `
      <div class="priya-popup" id="priyaMediaPopup" aria-hidden="true">
        <div class="priya-popup-inner">
          <button class="priya-popup-close" type="button" aria-label="Close media popup">×</button>
          <img class="priya-popup-image" src="" alt="">
        </div>
      </div>
    `;
  }

  function innerHeader(title, crumb) {
    return `
      <div class="inner-header-section-area" style="background-image: url(assets/img/all-images/bg/bg5.avif); background-position: center; background-repeat: no-repeat; background-size: cover;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="hero-header">
                <h1 class="text-anime-style-1">${title}</h1>
                <div class="space28"></div>
                <a href="${routes.home}" class="bradecrumb">Home <i class="fa-solid fa-angle-right"></i> ${crumb}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeHero() {
    return `
      <div class="hero4-section-area" style="background-image: url(assets/img/all-images/bg/bg3.avif); background-position: center; background-repeat: no-repeat; background-size: cover;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="hero-header heading4">
                <span class="priya-kicker">${site.clinicName}</span>
                <div class="space20"></div>
                <h1 class="text-anime-style-3" style="max-width: 92%;">Comprehensive Newborn, Child & Adolescent Care</h1>
                <div class="space20"></div>
                <p style="max-width: 90%;">${site.copy.shortIntro}</p>
                <div class="space24"></div>
                <div class="priya-chip-list">
                  <span class="priya-chip">Newborn Care</span>
                  <span class="priya-chip">Vaccination</span>
                  <span class="priya-chip">Growth & Development</span>
                  <span class="priya-chip">Allergy & Asthma Care</span>
                </div>
                <div class="space32"></div>
                <div class="btn-area1" style="display:flex; gap:20px; flex-wrap:wrap;">
                  <a href="${site.whatsappHref}" target="_blank" rel="noopener" class="vl-btn4">Appointment on WhatsApp<span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM10 7C9.5955 7 9.2309 7.24364 9.0761 7.61732C8.92134 7.99099 9.0069 8.42111 9.2929 8.70711L10.5858 10L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L12 11.4142L13.2929 12.7071C13.5789 12.9931 14.009 13.0787 14.3827 12.9239C14.7564 12.7691 15 12.4045 15 12V8C15 7.44772 14.5523 7 14 7H10Z" fill="white"></path></svg></span></a>
                  ${consultButton("Schedule Video Consultation")}
                </div>
                <div class="space24"></div>
                <div class="priya-card" style="max-width: 92%;">
                  <div class="priya-tag-list">
                    <span class="priya-tag">${site.timings}</span>
                    <span class="priya-tag">${site.eveningTimings}</span>
                    <span class="priya-tag">${site.experience}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="hero4-images-area">
                <div class="bg-area priya-photo-stack">
                  <img src="${site.images.portrait}" alt="${site.doctorName}" class="priya-hero-portrait">
                  <div class="priya-hero-stat stat-top">
                    <span class="priya-stat-label">Doctor</span>
                    <strong class="priya-stat-value">${site.doctorName}</strong>
                  </div>
                  <div class="priya-hero-stat stat-mid">
                    <span class="priya-stat-label">Recognition</span>
                    <strong class="priya-stat-value">FIAP Honoured</strong>
                  </div>
                  <div class="priya-hero-stat stat-bottom">
                    <span class="priya-stat-label">Consultation</span>
                    <strong class="priya-stat-value">Evidence-Based Guidance</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeAbout() {
    return `
      <div class="about4-section-area sp1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="priya-photo-stack">
                <img src="${site.images.fiap}" alt="FIAP recognition" class="priya-photo-frame">
                <div class="priya-floating-note note-top"><span>Recognition</span><strong>FIAP Award</strong></div>
                <div class="priya-floating-note note-bottom"><span>Approach</span><strong>Parent Education First</strong></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about4-heading heading4">
                <h5 class="vl-section-subtitle">About ${site.doctorName}<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">Trusted neonatology and pediatric care, shaped by experience and compassion.</h2>
                <div class="space24"></div>
                <p>${site.copy.about}</p>
                <div class="space20"></div>
                <p>${site.copy.reassurance}</p>
                <div class="space20"></div>
                <p>${site.copy.honour}</p>
                <div class="space24"></div>
                <ul class="priya-list">
                  ${credentials.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="space32"></div>
                <div class="priya-mini-grid">
                  <div class="priya-mini-stat"><h3>22+</h3><p>Years of pediatric and neonatal practice</p></div>
                  <div class="priya-mini-stat"><h3>DNB</h3><p>Advanced pediatric qualification with clinical depth</p></div>
                  <div class="priya-mini-stat"><h3>FIAP</h3><p>Recognised for academics and child health advocacy</p></div>
                  <div class="priya-mini-stat"><h3>IAP</h3><p>Fellowship-backed neonatal and pediatric expertise</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeCredibilitySection() {
    const cards = [
      ["Parent-Friendly Consultations", "Clear explanations, practical guidance, and calm communication at every review."],
      ["High-Risk Follow-up", "Structured follow-up for NICU graduates, preterm babies, and infants needing closer monitoring."],
      ["Vaccination & Prevention", "Preventive pediatrics, schedule review, and age-appropriate child wellness planning."],
      ["Second Opinions", "Useful for families who want clarity before the next step in treatment or follow-up."],
    ];
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Why Parents Choose The Clinic<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">Professional pediatric care that still feels warm, patient, and reassuring.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            ${cards
              .map(
                (item, index) => `
              <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="${900 + index * 100}">
                <div class="priya-focus-card">
                  <h4>${item[0]}</h4>
                  <div class="space12"></div>
                  <p>${item[1]}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function homeMarquee() {
    const items = [
      "Newborn Care",
      "Vaccination Guidance",
      "Growth & Development",
      "High-Risk Follow-up",
      "Allergy & Asthma Care",
      "Infections & Fever Care",
      "Nutrition Counseling",
      "Adolescent Health",
      "Trusted Second Opinions",
      "Parent Education",
    ];
    return `
      <div class="slider4-section-area">
        <div class="marquee-wrap">
          <div class="marquee-text">
            ${items
              .map(
                (item) => `
              <div class="brand-single-box">
                <h3><img src="assets/img/elements/elements1.png" alt=""> ${item}</h3>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function servicesCarousel(sectionTitle) {
    return `
      <div class="service4-section-area sp1">
        <img src="assets/img/elements/elements12.png" alt="" class="elements12 keyframe5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Our Services<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">${sectionTitle}</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="service4-slider-area owl-carousel">
                ${services
                  .map(
                    (service) => `
                  <div class="service4-boxarea">
                    <div class="content-area">
                      <a class="title">${service.title}</a>
                      <div class="space16"></div>
                      <p>${service.text}</p>
                      <div class="space24"></div>
                    </div>
                    <div class="priya-service-visual" style="background:${service.accent};">
                      <div class="priya-service-icon"><i class="fa-solid ${service.icon}"></i></div>
                      <span class="priya-service-label">${service.label}</span>
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeBenefits() {
    const benefits = [
      ["Evidence-Based Care", "Every recommendation is grounded in pediatric best practice and tailored to the child’s age, symptoms, and follow-up needs."],
      ["Clear Parent Guidance", "Parents receive practical explanations that reduce confusion and help them make informed decisions with confidence."],
      ["Continuity from Birth Onward", "Support spans newborn care, preventive pediatrics, childhood illness management, and adolescent follow-up."],
      ["Convenient Review & Second Opinions", "Families can book quick reviews or second opinions when they need clarity without delaying care."],
    ];
    return `
      <div class="service-benefites-section-area sp2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Why Choose ${site.doctorName}<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 m-auto">
              <div class="heading4 text-center space-margin60">
                <h2 class="vl-section-title text-anime-style-3">Child health support that balances medical expertise with calm, practical communication.</h2>
                <div class="space24"></div>
                <p>${site.copy.reassurance}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="benefites-box">
                <div class="row">
                  ${benefits
                    .map(
                      (item, index) => `
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="${900 + index * 100}">
                      <div class="benefites-widget-boxarea">
                        <div class="icons">
                          <img src="assets/img/icons/hero-icon${(index % 4) + 1}.svg" alt="">
                        </div>
                        <div class="content-area">
                          <a class="title">${item[0]}</a>
                          <div class="space16"></div>
                          <p>${item[1]}</p>
                        </div>
                      </div>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeHowItWorks() {
    const steps = [
      ["Book an Appointment", "Choose a convenient clinic visit, WhatsApp appointment, or video consultation slot depending on your requirement.", "fa-calendar-check"],
      ["Share Your Child’s Concern", "Bring reports, vaccine records, discharge notes, or growth charts so the consultation starts with the right clinical context.", "fa-file-medical"],
      ["Receive a Clear Care Plan", "Get diagnosis-based guidance covering treatment, home care, warning signs, nutrition advice, and preventive planning.", "fa-stethoscope"],
      ["Follow Up with Confidence", "Review progress for vaccinations, growth, development, allergies, infections, or high-risk newborn care when needed.", "fa-heart-circle-check"],
    ];
    return `
      <div class="works4-section-area sp6">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">How It Works<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">A simple consultation flow built for parents who want clarity without delay.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="cs_case_study_1_list">
                ${steps
                  .map(
                    (step, index) => `
                  <div class="cs_case_study cs_style_1${index === 0 ? " active" : ""}">
                    <div class="content-area1">
                      <div class="arrow"><a href="#">${index + 1}</a></div>
                      <div class="text"><a href="#">${step[0]}</a></div>
                    </div>
                    <div class="content-area">
                      <div class="arrow2"><a href="#">${index + 1}</a></div>
                      <div class="space32"></div>
                      <a class="head">${step[0]}</a>
                      <div class="space16"></div>
                      <p>${step[1]}</p>
                      <div class="space30"></div>
                      <div class="priya-work-visual">
                        <div class="priya-work-icon">
                          <i class="fa-solid ${step[2]}"></i>
                        </div>
                        <span>${step[0]}</span>
                      </div>
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeDoctorCard() {
    return `
      <div class="team4-section-area sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Meet Our Doctor<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">${site.doctorName}</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-10 m-auto">
            <div class="priya-card priya-doctor-panel">
              <div class="row align-items-center">
                <div class="col-lg-7">
                  <span class="priya-subtitle-badge">Lead Consultant</span>
                  <div class="space20"></div>
                  <h3>${site.doctorName}</h3>
                  <div class="space12"></div>
                  <p><strong>${site.designation}</strong></p>
                  <div class="space20"></div>
                  <ul class="priya-list">
                    <li>MBBS, DCH, Diplomate of National Board - DNB Pediatrics</li>
                    <li>Fellowship in Neonatology - IAP</li>
                    <li>Fellow of Indian Academy of Paediatrics</li>
                    <li>Certified in Maternal, Infant & Young Child Nutrition - IIT Bombay</li>
                  </ul>
                  <div class="space24"></div>
                  <div class="btn-area1" style="display:flex; gap:16px; flex-wrap:wrap;">
                    <a href="${site.whatsappHref}" class="vl-btn4" target="_blank" rel="noopener">Ask on WhatsApp<span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM10 7C9.5955 7 9.2309 7.24364 9.0761 7.61732C8.92134 7.99099 9.0069 8.42111 9.2929 8.70711L10.5858 10L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L12 11.4142L13.2929 12.7071C13.5789 12.9931 14.009 13.0787 14.3827 12.9239C14.7564 12.7691 15 12.4045 15 12V8C15 7.44772 14.5523 7 14 7H10Z" fill="white"></path></svg></span></a>
                    <a href="${routes.contact}" class="phone"><i class="fa-solid fa-phone"></i> Contact Clinic</a>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="priya-doctor-badges">
                    <div class="priya-mini-stat"><h3>22+</h3><p>Years supporting newborn, child, and adolescent health</p></div>
                    <div class="priya-mini-stat"><h3>FIAP</h3><p>Recognised for clinical excellence, academics, and advocacy</p></div>
                    <div class="priya-mini-stat"><h3>IAP</h3><p>Advanced neonatal and pediatric fellowship exposure</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function homeHighlights() {
    const items = [
      [site.images.fiap, "FIAP Recognition", "Recognised with the Fellowship of the Indian Academy of Pediatrics for academic and clinical contribution."],
      [site.images.achiever, "Women Achiever Award", "Professional recognition that reflects leadership, dedication, and long-standing impact in child health."],
      [site.images.logo, "Clinic Identity", "The Child & Neuro-Spine Care combines child-focused consultation with a calm, family-friendly experience."],
      [site.images.poster, "Care Communication", "The clinic’s parent-facing communication focuses on newborn, child, and adolescent care in a direct, reassuring format."],
    ];
    return `
      <div class="testimonial4-section-area sp1" style="background-image: url(assets/img/all-images/bg/bg6.png); background-position: center; background-repeat: no-repeat; background-size: cover;">
        <img src="assets/img/elements/elements12.png" alt="" class="elements12 keyframe5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Clinic Highlights<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">A closer look at Dr. Priya’s recognitions, clinic identity, and consultation experience.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="testimonial4-slider-area owl-carousel">
                ${items
                  .map(
                    (item) => `
                  <div class="testimonial4-boxarea">
                    <div style="cursor:pointer;" onclick="openMediaPopup('${item[0]}', '${item[1]}')">
                      <img src="${item[0]}" alt="${item[1]}" class="priya-highlight-image">
                    </div>
                    <div class="space16"></div>
                    <h4>${item[1]}</h4>
                    <div class="space12"></div>
                    <p style="text-align:left;">${item[2]}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function aboutSection() {
    return `
      <div class="about-inner-section-area sp1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="priya-photo-stack" style="cursor:pointer;" onclick="openMediaPopup('${site.images.portrait}', '${site.doctorName}')">
                <img src="${site.images.portrait}" alt="${site.doctorName}" class="priya-photo-frame">
                <div class="priya-floating-note note-top"><span>Doctor</span><strong>${site.doctorName}</strong></div>
                <div class="priya-floating-note note-bottom"><span>Experience</span><strong>${site.experience}</strong></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="heading4">
                <h5 class="vl-section-subtitle">About ${site.doctorName}<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f59ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space20"></div>
                <h2 class="text-anime-style-3">Compassionate pediatric guidance for newborns, children, and adolescents.</h2>
                <div class="space18"></div>
                <p style="text-align: justify;">${site.copy.about}</p>
                <div class="space20"></div>
                <p style="text-align: justify;">${site.copy.reassurance}</p>
                <div class="space20"></div>
                <p style="text-align: justify;">${site.copy.honour}</p>
                <div class="space24"></div>
                <ul class="priya-list">
                  ${credentials.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function aboutRecognitionSection() {
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="priya-award-grid">
                <div class="priya-highlight-card" style="cursor:pointer;" onclick="openMediaPopup('${site.images.fiap}', 'FIAP Recognition')">
                  <img src="${site.images.fiap}" alt="FIAP Recognition" class="priya-highlight-image">
                  <h4>FIAP Recognition</h4>
                  <div class="space12"></div>
                  <p>${site.copy.honour}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="priya-award-grid">
                <div class="priya-highlight-card" style="cursor:pointer;" onclick="openMediaPopup('${site.images.achiever}', 'Women Achiever Award')">
                  <img src="${site.images.achiever}" alt="Women Achiever Award" class="priya-highlight-image">
                  <h4>Women Achiever Award</h4>
                  <div class="space12"></div>
                  <p>Recognition that reflects professional dedication, leadership, and long-term contribution to child-focused healthcare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function aboutFocusSection() {
    const cards = [
      ["Newborn to Adolescent Care", "Consultations span the entire child-health journey, from neonatal guidance to adolescent follow-up."],
      ["Vaccination & Prevention", "Families receive clear vaccine guidance and practical prevention advice based on the child’s age and history."],
      ["Growth & Development", "Milestones, nutrition, weight gain, and developmental concerns are reviewed with a long-term lens."],
      ["High-Risk Follow-up", "Useful for NICU graduates, preterm babies, and infants who need closer progress review."],
      ["Allergy, Asthma & Infections", "Parents can consult for recurrent fever, wheeze, allergic symptoms, cough, and common child illnesses."],
      ["Second Opinions & Reassurance", "Thoughtful reviews help parents move forward with clarity when a child’s care plan feels uncertain."],
    ];
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Clinical Focus<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">Areas where families most often seek Dr. Priya’s guidance.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            ${cards
              .map(
                (item, index) => `
              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="${900 + index * 80}">
                <div class="priya-focus-card">
                  <h4>${item[0]}</h4>
                  <div class="space12"></div>
                  <p>${item[1]}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function aboutPracticeSection() {
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="priya-card">
                <span class="priya-subtitle-badge">Practice Style</span>
                <div class="space20"></div>
                <h3>Consultations built around clarity, continuity, and parent confidence.</h3>
                <div class="space18"></div>
                <p>${site.doctorName} is known for explaining diagnosis, home care, red flags, and follow-up in practical language that parents can act on.</p>
                <div class="space20"></div>
                <p>Her clinic approach balances newborn expertise, preventive pediatrics, growth review, and common childhood illness management in one coordinated care journey.</p>
                <div class="space24"></div>
                <div class="priya-quote">${site.copy.honour}</div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="priya-card">
                <h4>Consultation Highlights</h4>
                <div class="space18"></div>
                <ul class="priya-detail-list">
                  <li>Detailed newborn, infant, and child assessments</li>
                  <li>Preventive advice matched to age and growth stage</li>
                  <li>Review of previous records, reports, and vaccine history</li>
                  <li>Clear follow-up planning for ongoing concerns</li>
                  <li>Second opinions when families want more confidence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function servicesMainSection() {
    return `
      <div class="service-all-details-area sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="service-main-content-details heading1 padding-right">
                <div class="img1">
                  <img src="${site.images.poster}" alt="${site.clinicName}">
                </div>
                <div class="space32"></div>
                <h2>Comprehensive Pediatric & Neonatal Services</h2>
                <div class="space16"></div>
                <p>${site.copy.about} ${site.copy.reassurance}</p>
                <div class="space24"></div>
                <div class="m-list-area">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <ul class="priya-detail-list">
                        <li>Newborn and infant care</li>
                        <li>Vaccination and preventive pediatrics</li>
                        <li>Growth and developmental monitoring</li>
                        <li>Nutrition and feeding support</li>
                      </ul>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <ul class="priya-detail-list">
                        <li>High-risk newborn follow-up</li>
                        <li>Allergy and asthma care</li>
                        <li>Infections and fever care</li>
                        <li>Adolescent care and second opinions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="space48"></div>
                <h2>How care is planned</h2>
                <div class="space18"></div>
                <p>Each consultation begins with a careful history, review of symptoms, growth pattern, and previous records. The plan then focuses on diagnosis, parent counseling, nutrition guidance, immunization advice, and a clear follow-up roadmap when monitoring is important.</p>
                <div class="space32"></div>
                <div class="row align-items-center">
                  <div class="col-lg-6 col-md-6">
                    <img src="${site.images.portrait}" alt="${site.doctorName}" class="priya-photo-frame">
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <ul class="priya-detail-list">
                      <li>Book clinic or video consultation</li>
                      <li>Share symptoms, records, and vaccination history</li>
                      <li>Get a child-specific care plan</li>
                      <li>Review growth, recovery, and follow-up when needed</li>
                    </ul>
                  </div>
                </div>
                <div class="space48"></div>
                <h3>Quick questions parents ask</h3>
                <div class="space18"></div>
                <div class="accordion-area">
                  <div class="accordion" id="servicesAccordion">
                    ${[
                      ["What problems can be reviewed online?", "Follow-ups, second opinions, feeding concerns, fever guidance, vaccination counseling, and growth-related questions can often be discussed through video consultation."],
                      ["When should I consult for allergies or wheeze?", "Consult if your child has repeated cough, wheezing, sneezing, rashes, or symptoms that seem to recur with seasons, food, or environmental triggers."],
                      ["Do you review high-risk newborns after discharge?", "Yes. High-risk babies can be followed up for feeding, growth, development, and early warning signs after NICU or hospital discharge."],
                      ["Will I get guidance on what to monitor at home?", "Yes. Parents are told what is reassuring, what needs watchful observation, and which red flags should prompt urgent review."],
                    ]
                      .map(
                        (item, index) => `
                      <div class="accordion-item">
                        <h4 class="accordion-header">
                          <button class="accordion-button${index === 0 ? "" : " collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#servicesCollapse${index}" aria-expanded="${index === 0 ? "true" : "false"}">
                            ${item[0]}
                          </button>
                        </h4>
                        <div id="servicesCollapse${index}" class="accordion-collapse collapse${index === 0 ? " show" : ""}" data-bs-parent="#servicesAccordion">
                          <div class="accordion-body"><p>${item[1]}</p></div>
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="service-main-siderbar-area">
                <div class="space30"></div>
                <div class="priya-hours-card">
                  <h4>Clinic Hours</h4>
                  <div class="space24"></div>
                  <div class="priya-hours-list">
                    <div class="priya-hours-row"><span>Morning</span><span>${site.timings}</span></div>
                    <div class="priya-hours-row"><span>Evening</span><span>${site.eveningTimings}</span></div>
                    <div class="priya-hours-row"><span>Appointments</span><span>Phone / WhatsApp</span></div>
                  </div>
                </div>
                <div class="space24"></div>
                <div class="priya-card">
                  <h4>Best for</h4>
                  <div class="space18"></div>
                  <ul class="priya-detail-list">
                    <li>Newborn reviews and feeding questions</li>
                    <li>Vaccination counseling and child wellness checks</li>
                    <li>Repeated infections, allergy, and asthma concerns</li>
                    <li>Parents who need reassurance or a second opinion</li>
                  </ul>
                </div>
                <div class="space24"></div>
                <div class="priya-card">
                  <h4>Contact</h4>
                  <div class="space18"></div>
                  <p><strong>Phone:</strong> ${site.phoneDisplay}</p>
                  <div class="space10"></div>
                  <p><strong>Email:</strong> ${site.email}</p>
                  <div class="space18"></div>
                  <div class="btn-area1">
                    <a href="${site.whatsappHref}" class="vl-btn4" target="_blank" rel="noopener">Book on WhatsApp<span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM10 7C9.5955 7 9.2309 7.24364 9.0761 7.61732C8.92134 7.99099 9.0069 8.42111 9.2929 8.70711L10.5858 10L7.29289 13.2929C6.90237 13.6834 6.90237 14.3166 7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L12 11.4142L13.2929 12.7071C13.5789 12.9931 14.009 13.0787 14.3827 12.9239C14.7564 12.7691 15 12.4045 15 12V8C15 7.44772 14.5523 7 14 7H10Z" fill="white"></path></svg></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function servicesFocusSection() {
    const cards = [
      ["Best for New Parents", "Feeding concerns, jaundice questions, weight gain, sleep, crying patterns, and early newborn review."],
      ["Preventive Visits", "Vaccination planning, routine wellness review, growth checks, and anticipatory guidance for each age group."],
      ["When Symptoms Repeat", "Recurrent fever, cough, wheeze, allergy, or infection patterns that need more than a one-time visit."],
      ["When Parents Need Clarity", "Second opinions, follow-up guidance, report review, and support for deciding the next best step."],
    ];
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row">
            ${cards
              .map(
                (item, index) => `
              <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="${900 + index * 100}">
                <div class="priya-focus-card">
                  <h4>${item[0]}</h4>
                  <div class="space12"></div>
                  <p>${item[1]}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function doctorSection() {
    return `
      <div class="team-all-details-area sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="team-single-boxarea2">
                <div class="img1">
                  <img src="${site.images.portrait}" alt="${site.doctorName}" class="team-img10">
                  <img src="assets/img/elements/elements14.png" alt="" class="elements13 keyframe5">
                </div>
                <div class="content-area">
                  <a href="${routes.contact}" class="title">${site.doctorName}</a>
                  <div class="space16"></div>
                  <p><strong>${site.designation}</strong><br><br>MBBS, DCH, DNB Pediatrics<br>Fellowship in Neonatology - IAP<br>Fellow of Indian Academy of Paediatrics<br><br>Experience: <strong>${site.experience}</strong></p>
                  <ul>
                    <li><a href="${site.emailHref}"><i class="fa-regular fa-envelope"></i> ${site.email}</a></li>
                    <li><a href="${site.phoneHref}"><i class="fa-solid fa-phone"></i> ${site.phoneDisplay}</a></li>
                  </ul>
                  <div class="space32"></div>
                  <div class="btn-area1">${consultButton("Get Video Consultation")}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="doctor-deatisl-content-area heading4 padding-left">
                <h2>${site.doctorName}</h2>
                <div class="space20"></div>
                <p class="pera" style="text-align: justify;">${site.copy.about} ${site.copy.reassurance}</p>
                <div class="space40"></div>
                <h3>About Doctor</h3>
                <div class="space20"></div>
                <p style="text-align: justify;">${site.doctorName} is a consultant neonatologist and pediatrician who combines strong clinical judgment with parent education. Her work focuses on newborn care, vaccination, growth and development, high-risk newborn follow-up, allergies, infections, and everyday pediatric concerns that require a calm but evidence-based approach.</p>
                <div class="space20"></div>
                <p style="text-align: justify;">She is especially known for the clarity of her consultations. Parents value the way she explains the likely cause of a problem, what can be managed at home, when urgent review is needed, and how follow-up should be planned.</p>
                <div class="space20"></div>
                <p style="text-align: justify;">${site.copy.honour}</p>
                <div class="space40"></div>
                <h3>Qualifications & Certifications</h3>
                <div class="space20"></div>
                <ul class="d-list">
                  <li><img src="assets/img/icons/service1.svg" alt=""> MBBS, DCH, Diplomate of National Board - DNB Pediatrics</li>
                  <li><img src="assets/img/icons/service2.svg" alt=""> Fellowship in Neonatology - IAP</li>
                  <li><img src="assets/img/icons/service3.svg" alt=""> Fellow of Indian Academy of Paediatrics</li>
                  <li><img src="assets/img/icons/service4.svg" alt=""> Certified in Maternal, Infant & Young Child Nutrition - IIT Bombay</li>
                  <li><img src="assets/img/icons/service30.svg" alt=""> Certified in Vaccinology and Bioethics - IAP & ICP</li>
                </ul>
                <div class="space40"></div>
                <h3>Clinical Expertise</h3>
                <div class="space20"></div>
                <ul class="d-list">
                  <li><img src="assets/img/icons/service31.svg" alt=""> Newborn, infant, child, and adolescent health</li>
                  <li><img src="assets/img/icons/service34.svg" alt=""> Vaccination and preventive pediatrics</li>
                  <li><img src="assets/img/icons/service16.svg" alt=""> Growth, development, and nutrition monitoring</li>
                  <li><img src="assets/img/icons/service17.svg" alt=""> High-risk newborn follow-up</li>
                  <li><img src="assets/img/icons/service18.svg" alt=""> Allergy, asthma, and recurrent infection care</li>
                  <li><img src="assets/img/icons/service19.svg" alt=""> Parent counseling, follow-up, and second opinions</li>
                </ul>
                <div class="space40"></div>
                <h3>Care Philosophy</h3>
                <div class="space20"></div>
                <p style="text-align: justify;">Her care philosophy is simple: explain clearly, intervene appropriately, and support parents with practical next steps. That balance of medical rigor and reassurance is what makes families return for follow-up and refer others.</p>
                <div class="space28"></div>
                <div class="bg-progress">
                  <div class="progress-bar">
                    <label>Evidence-Based Pediatric Care <span>Core Focus</span></label>
                    <div class="progress"><div class="progress-inner" style="width:100%;"></div></div>
                  </div>
                  <div class="progress-bar">
                    <label>Parent Communication & Counseling <span>Daily Practice</span></label>
                    <div class="progress"><div class="progress-inner" style="width:100%;"></div></div>
                  </div>
                  <div class="progress-bar" style="margin:0;">
                    <label>Continuity of Follow-up <span>Long-Term Care</span></label>
                    <div class="progress"><div class="progress-inner" style="width:100%;"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function doctorRecognitionSection() {
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="priya-card">
                <h4>Why Families Return to Dr. Priya</h4>
                <div class="space18"></div>
                <div class="priya-mini-grid">
                  ${recognitions
                    .map(
                      (item) => `
                    <div class="priya-mini-stat">
                      <p>${item}</p>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="priya-highlight-card" style="cursor:pointer;" onclick="openMediaPopup('${site.images.achiever}', 'Women Achiever Award')">
                <img src="${site.images.achiever}" alt="Women Achiever Award" class="priya-highlight-image">
                <h4>Professional Recognition</h4>
                <div class="space12"></div>
                <p>Clinical depth, parent trust, and academic contribution are reflected in the recognitions Dr. Priya has received over her career.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function doctorPracticeSection() {
    return `
      <div class="priya-section-shell sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Care Experience<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">What families can expect during a consultation.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="priya-focus-card">
                <h4>Thorough Review</h4>
                <div class="space12"></div>
                <p>Symptoms, records, discharge summaries, vaccine history, and growth trends are reviewed before advice is finalised.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="priya-focus-card">
                <h4>Simple Explanations</h4>
                <div class="space12"></div>
                <p>Parents receive direct answers about what is expected, what needs treatment, and what should be monitored at home.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="priya-focus-card">
                <h4>Evidence-Based Planning</h4>
                <div class="space12"></div>
                <p>Recommendations are built around sound pediatric practice rather than over-treatment or vague reassurance.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="priya-focus-card">
                <h4>Follow-up Continuity</h4>
                <div class="space12"></div>
                <p>Families know when to review again, which warning signs matter, and how ongoing care should be structured.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function faqSection() {
    function accordionColumn(items, parentId, offset) {
      return `
        <div class="accordian-area">
          <div class="accordion" id="${parentId}">
            ${items
              .map(
                (item, index) => `
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button${index === 0 ? "" : " collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${parentId}${index + offset}" aria-expanded="${index === 0 ? "true" : "false"}">
                    ${item[0]}
                  </button>
                </h2>
                <div id="${parentId}${index + offset}" class="accordion-collapse collapse${index === 0 ? " show" : ""}" data-bs-parent="#${parentId}">
                  <div class="accordion-body"><p>${item[1]}</p></div>
                </div>
              </div>
              <div class="space20"></div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }
    return `
      <div class="faq-inner-section-area sp1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-widget-area">
                <div class="space48"></div>
                <div class="faq-section-area">
                  <div class="row">
                    <div class="col-lg-6">${accordionColumn(faqsLeft, "faqLeft", 1)}</div>
                    <div class="col-lg-6">${accordionColumn(faqsRight, "faqRight", 21)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function highlightsSection() {
    const cards = [
      `<div class="col-lg-4 col-md-6"><div class="priya-highlight-card"><img src="${site.images.fiap}" alt="FIAP recognition" class="priya-highlight-image"><h4>FIAP Recognition</h4><div class="space12"></div><p>${site.copy.honour}</p></div></div>`,
      `<div class="col-lg-4 col-md-6"><div class="priya-highlight-card"><img src="${site.images.achiever}" alt="Women Achiever Award" class="priya-highlight-image"><h4>Women Achiever Award</h4><div class="space12"></div><p>Professional recognition that reflects sustained impact, dedication, and leadership in child-focused healthcare practice.</p></div></div>`,
      `<div class="col-lg-4 col-md-6"><div class="priya-highlight-card"><img src="${site.images.logo}" alt="Clinic logo" class="priya-highlight-image"><h4>Clinic Identity</h4><div class="space12"></div><p>${site.clinicName} presents a child-friendly identity with a clear focus on newborn, child, and adolescent care.</p></div></div>`,
      `<div class="col-lg-4 col-md-6"><div class="priya-info-card"><h4>${site.experience}</h4><div class="space12"></div><p>Years of experience dedicated to newborn care, vaccinations, growth and development concerns, infections, allergies, and parent counseling.</p></div></div>`,
      `<div class="col-lg-4 col-md-6"><div class="priya-highlight-card"><img src="${site.images.poster}" alt="Clinic poster" class="priya-highlight-image"><h4>Care Communication</h4><div class="space12"></div><p>Clear, parent-friendly communication is central to the clinic’s approach, from awareness material to consultation advice.</p></div></div>`,
      `<div class="col-lg-4 col-md-6"><div class="priya-info-card"><h4>Online Consultations</h4><div class="space12"></div><p>Perfect for follow-ups, quick reviews, and second opinions when families need clarity without waiting.</p><div class="space20"></div><div class="btn-area1">${consultButton("Book Video Consultation")}</div></div></div>`,
      `<div class="col-lg-6 col-md-6"><div class="priya-info-card"><h4>Parent-Centered Care</h4><div class="space12"></div><p>Every consultation is built to reduce anxiety, answer questions clearly, and give families a practical plan for what to do next.</p></div></div>`,
      `<div class="col-lg-6 col-md-6"><div class="priya-info-card"><h4>Clinic Timings</h4><div class="space12"></div><p><strong>Morning:</strong> ${site.timings}<br><strong>Evening:</strong> ${site.eveningTimings}</p><div class="space16"></div><p><strong>Appointments:</strong> ${site.phoneDisplay}</p></div></div>`,
    ];
    return `
      <div class="testimonial-inner-area sp1">
        <div class="container">
          <div class="row">${cards.join("")}</div>
        </div>
      </div>
    `;
  }

  function gallerySection() {
    return `
      <div class="vl-blog-4-area-inner sp2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Clinic Gallery<svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#f49ac1" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">A curated visual overview of the doctor, clinic identity, and professional recognitions.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            ${galleryItems
              .map(
                (item) => `
              <div class="col-lg-4 col-md-6">
                <div class="priya-gallery-card" style="cursor:pointer;" onclick="openMediaPopup('${item[0]}', '${item[1]}')">
                  <img src="${item[0]}" alt="${item[1]}" class="priya-gallery-image">
                  <h4>${item[1]}</h4>
                  <div class="space12"></div>
                  <p>${item[2]}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function contactSection() {
    return `
      <div class="contact-inner-section-area sp2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto">
              <div class="heading4 text-center space-margin60">
                <h5 class="vl-section-subtitle">Connect With The Clinic <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0.667969 4.00033H11.049M8.00137 7.33366L11.3346 4.00033L8.0013 0.666992" stroke="#02015A" stroke-width="1.5"></path></svg></h5>
                <div class="space24"></div>
                <h2 class="vl-section-title text-anime-style-3">Appointments, timings, and clinic contact in one place.</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="contact-single-boxarea2">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-box">
                      <div class="text">
                        <h4>Phone & WhatsApp</h4>
                        <div class="space14"></div>
                        <a href="${site.phoneHref}">${site.phoneDisplay}</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-box">
                      <div class="text">
                        <h4>Our Email</h4>
                        <div class="space14"></div>
                        <a href="${site.emailHref}">${site.email}</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-box">
                      <div class="text">
                        <h4>Consultation Hours</h4>
                        <div class="space14"></div>
                        <a href="#">Morning: ${site.timings}<br>Evening: ${site.eveningTimings}</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-box">
                      <div class="text">
                        <h4>Clinic Location</h4>
                        <div class="space14"></div>
                        <a href="#">${site.address}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space60"></div>
            <div class="row">
              <div class="col-lg-6">
                <div class="priya-card">
                  <h4>Best Ways to Reach the Clinic</h4>
                  <div class="space18"></div>
                  <ul class="priya-detail-list">
                    <li>Call or WhatsApp for appointment coordination</li>
                    <li>Use video consultation for quick reviews and second opinions</li>
                    <li>Carry vaccination cards, prescriptions, and previous reports</li>
                    <li>Reach out early for newborn and post-discharge follow-up</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="priya-card">
                  <h4>Clinic Snapshot</h4>
                  <div class="space18"></div>
                  <div class="priya-mini-grid">
                    <div class="priya-mini-stat"><h3>22+</h3><p>Years of pediatric and neonatal experience</p></div>
                    <div class="priya-mini-stat"><h3>FIAP</h3><p>Professional recognition in pediatrics</p></div>
                    <div class="priya-mini-stat"><h3>Video</h3><p>Convenient follow-up and second-opinion access</p></div>
                    <div class="priya-mini-stat"><h3>IAP</h3><p>Fellowship-backed neonatal training</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space60"></div>
            <div class="row">
              <div class="col-lg-12">
                <div style="width:100%;height:450px;overflow:hidden;border-radius:18px;box-shadow:0 18px 40px rgba(23,63,122,0.12);">
                  <iframe src="${site.mapEmbed}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" style="width:100%;height:100%;border:0;display:block;"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function setFaviconAndTitle(current) {
    const titleMap = {
      [routes.home]: `${site.clinicName} | ${site.doctorName}`,
      [routes.about]: `${site.doctorName} | About`,
      [routes.services]: `${site.clinicName} | Services`,
      [routes.highlights]: `${site.clinicName} | Testimonials`,
      [routes.gallery]: `${site.clinicName} | Gallery`,
      [routes.faq]: `${site.clinicName} | FAQs`,
      [routes.contact]: `${site.clinicName} | Contact`,
    };
    document.title = titleMap[current] || `${site.clinicName} | ${site.doctorName}`;
    let favicon = document.querySelector("link[rel='shortcut icon'], link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "shortcut icon";
      document.head.appendChild(favicon);
    }
    favicon.href = site.images.logo;

    /* ── SEO: Meta Description ── */
    const descMap = {
      [routes.home]: `Consult ${site.doctorName}, experienced Neonatologist & Pediatrician with 22+ years expertise. Compassionate newborn, child & adolescent care at ${site.clinicName}, Bengaluru.`,
      [routes.about]: `Learn about ${site.doctorName}, Consultant Neonatologist & Pediatrician with 22+ years of experience. MBBS, DCH, DNB Pediatrics, FIAP honoured. Trusted child care in Bengaluru.`,
      [routes.services]: `Pediatric & neonatal services including newborn care, vaccination, growth monitoring, allergy care, high-risk follow-up, and adolescent health at ${site.clinicName}.`,
      [routes.highlights]: `Read patient testimonials and review highlights for ${site.doctorName} at ${site.clinicName}, Bengaluru.`,
      [routes.gallery]: `Photo gallery of ${site.clinicName} – clinic identity, doctor portrait, and professional recognitions of ${site.doctorName}.`,
      [routes.faq]: `Frequently asked questions about pediatric care, vaccination, newborn concerns, growth monitoring, and consultations with ${site.doctorName}.`,
      [routes.contact]: `Contact ${site.clinicName}. Phone: ${site.phoneDisplay}. Location: ${site.address}. Timings: ${site.timings} & ${site.eveningTimings}.`,
    };
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = descMap[current] || descMap[routes.home];
  }

  function addWhatsAppFloat() {
    if (document.querySelector(".priya-whatsapp-float")) return;
    var btn = document.createElement("a");
    btn.href = site.whatsappHref;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.className = "priya-whatsapp-float";
    btn.setAttribute("aria-label", "Chat on WhatsApp");
    btn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    document.body.appendChild(btn);
  }

  function replace(selector, html) {
    const node = document.querySelector(selector);
    if (node) node.outerHTML = html;
  }

  function ensurePopup() {
    if (!document.getElementById("priyaMediaPopup")) {
      document.body.insertAdjacentHTML("beforeend", popupMarkup());
      const popup = document.getElementById("priyaMediaPopup");
      popup.addEventListener("click", function (event) {
        if (event.target === popup || event.target.classList.contains("priya-popup-close")) {
          closeMediaPopup();
        }
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMediaPopup();
      });
    }
  }

  function openMediaPopup(src, alt) {
    const popup = document.getElementById("priyaMediaPopup");
    if (!popup) return;
    const image = popup.querySelector(".priya-popup-image");
    image.src = src;
    image.alt = alt || "";
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMediaPopup() {
    const popup = document.getElementById("priyaMediaPopup");
    if (!popup) return;
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initHeaderInteractions() {
    const toggle = document.querySelector(".vl-offcanvas-toggle");
    const close = document.querySelector(".vl-offcanvas-close-toggle");
    const overlay = document.querySelector(".vl-offcanvas-overlay");
    const offcanvas = document.querySelector(".vl-offcanvas");
    const header = document.querySelector(".vl-header-area");
    if (toggle && offcanvas && overlay) {
      toggle.addEventListener("click", function () {
        offcanvas.classList.add("vl-offcanvas-open");
        overlay.classList.add("vl-offcanvas-overlay-open");
      });
    }
    function closeOffcanvas() {
      if (!offcanvas || !overlay) return;
      offcanvas.classList.remove("vl-offcanvas-open");
      overlay.classList.remove("vl-offcanvas-overlay-open");
    }
    if (close) close.addEventListener("click", closeOffcanvas);
    if (overlay) overlay.addEventListener("click", closeOffcanvas);
    window.addEventListener("scroll", function () {
      if (!header) return;
      if (window.scrollY > 100) header.classList.add("header-sticky");
      else header.classList.remove("header-sticky");
    });
  }

  function initCarousels() {
    if (!(window.jQuery && jQuery.fn && jQuery.fn.owlCarousel)) return;
    const service = jQuery(".service4-slider-area");
    const testimonial = jQuery(".testimonial4-slider-area");
    if (service.length && !service.hasClass("owl-loaded")) {
      service.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 10,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 4 },
        },
      });
    }
    if (testimonial.length && !testimonial.hasClass("owl-loaded")) {
      testimonial.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 10,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      });
    }
  }

  function refreshAnimation() {
    if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }

  function rewriteSharedShell(current) {
    document.body.classList.add("priya-theme");
    setFaviconAndTitle(current);
    replace("header.homepage4-body", headerMarkup(current));
    const mobileShell = document.querySelector("div.homepage4-body .vl-offcanvas");
    if (mobileShell) {
      const wrapper = mobileShell.closest(".homepage4-body");
      if (wrapper) wrapper.outerHTML = mobileHeaderMarkup(current);
    }
    replace(".cta4-section-area", ctaMarkup());
    replace(".vl-footer4-section-area", footerMarkup(current));
    const preloaderImage = document.querySelector(".cs_preloader img");
    if (preloaderImage) {
      preloaderImage.src = site.images.logo;
      preloaderImage.alt = site.clinicName;
    }
  }

  function rewriteHome() {
    replaceBand(
      ".hero4-section-area",
      ".cta4-section-area",
      [
        homeHero(),
        homeMarquee(),
        homeAbout(),
        homeCredibilitySection(),
        servicesCarousel("Care that supports children from the newborn phase through adolescence."),
        homeBenefits(),
        homeHowItWorks(),
        homeHighlights(),
      ].join("")
    );
  }

  function rewriteAbout() {
    replace(".inner-header-section-area", innerHeader(`About ${site.doctorName}`, `About ${site.doctorName}`));
    replaceBand(
      ".about-inner-section-area",
      ".cta4-section-area",
      [aboutSection(), aboutRecognitionSection(), aboutFocusSection(), aboutPracticeSection()].join("")
    );
  }

  function rewriteServices() {
    replace(".inner-header-section-area", innerHeader("Services", "Services"));
    replaceBand(
      ".service-all-details-area",
      ".cta4-section-area",
      [
        servicesMainSection(),
        servicesFocusSection(),
        servicesCarousel("Core services at The Child & Neuro-Spine Care"),
        homeBenefits(),
      ].join("")
    );
  }

  function rewriteFaq() {
    replace(".inner-header-section-area", innerHeader("Frequently Asked Questions", "FAQs"));
    replace(".faq-inner-section-area", faqSection());
  }

  function rewriteHighlights() {
    replace(".inner-header-section-area", innerHeader("Testimonials", "Testimonials"));
  }

  function rewriteGallery() {
    replace(".inner-header-section-area", innerHeader("Gallery", "Gallery"));
    replaceBand(".vl-blog-4-area-inner", ".cta4-section-area", gallerySection());
  }

  function rewriteContact() {
    replace(".inner-header-section-area", innerHeader("Contact Us", "Contact Us"));
    replaceBand(".contact-inner-section-area", ".cta4-section-area", contactSection());
  }

  function init() {
    const current = pageName();
    rewriteSharedShell(current);
    ensurePopup();
    window.openMediaPopup = openMediaPopup;
    window.closeMediaPopup = closeMediaPopup;

    if (current === routes.home) rewriteHome();
    if (current === routes.about) rewriteAbout();
    if (current === routes.services) rewriteServices();
    if (current === routes.faq) rewriteFaq();
    if (current === routes.highlights) rewriteHighlights();
    if (current === routes.gallery) rewriteGallery();
    if (current === routes.contact) rewriteContact();

    initHeaderInteractions();
    initCarousels();
    addWhatsAppFloat();
    refreshAnimation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
