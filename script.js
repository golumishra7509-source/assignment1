/**
 * ============================================================================
 * PERSONAL PORTFOLIO INTERACTIVITY (VANILLA JAVASCRIPT)
 * Candidate: Shivam Mishra
 * Description: Lightweight, dependency-free scripts for mobile menu toggle,
 *              scrollspy, smooth scrolling, dynamic footer year, and
 *              accessible demo form validation with a safe mailto fallback.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. DYNAMIC COPYRIGHT YEAR
     -------------------------------------------------------------------------- */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION MENU TOGGLE
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && siteNav) {
    const toggleMenu = (open) => {
      const isCurrentlyOpen = navToggle.getAttribute('aria-expanded') === 'true';
      const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;

      navToggle.setAttribute('aria-expanded', String(shouldOpen));
      siteNav.classList.toggle('is-open', shouldOpen);

      // Prevent background scrolling when menu is open on mobile devices
      if (shouldOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    navToggle.addEventListener('click', () => {
      toggleMenu();
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (siteNav.classList.contains('is-open')) {
          toggleMenu(false);
        }
      });
    });

    // Close menu on pressing the Escape key for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });

    // Reset overflow when resizing beyond mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && siteNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  /* --------------------------------------------------------------------------
     3. STICKY HEADER SCROLL SHADOW
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  if (header) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  /* --------------------------------------------------------------------------
     4. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHTING)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* --------------------------------------------------------------------------
     5. SMOOTH SCROLL FOR ANCHOR LINKS (OFFSET AWARE)
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set keyboard focus to target element for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  /* --------------------------------------------------------------------------
     6. CONTACT FORM VALIDATION & DEMO SUBMISSION
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');
  const mailtoBtn = document.getElementById('mailto-fallback-btn');

  if (contactForm) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const fields = [
      {
        input: nameInput,
        errorId: 'name-error',
        validate: (val) => {
          if (!val.trim()) return 'Please enter your name.';
          if (val.trim().length < 2) return 'Name must be at least 2 characters.';
          return '';
        }
      },
      {
        input: emailInput,
        errorId: 'email-error',
        validate: (val) => {
          if (!val.trim()) return 'Please enter your email address.';
          // Standard RFC 5322 compatible practical email regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(val.trim())) return 'Please enter a valid email address (e.g. name@example.com).';
          return '';
        }
      },
      {
        input: subjectInput,
        errorId: 'subject-error',
        validate: (val) => {
          if (!val.trim()) return 'Please provide a subject.';
          if (val.trim().length < 3) return 'Subject must be at least 3 characters.';
          return '';
        }
      },
      {
        input: messageInput,
        errorId: 'message-error',
        validate: (val) => {
          if (!val.trim()) return 'Please enter your message.';
          if (val.trim().length < 10) return 'Message must be at least 10 characters long.';
          return '';
        }
      }
    ];

    // Helper: Display field error
    const setFieldError = (fieldObj, errorMsg) => {
      const errorSpan = document.getElementById(fieldObj.errorId);
      if (errorMsg) {
        fieldObj.input.classList.add('is-invalid');
        fieldObj.input.setAttribute('aria-invalid', 'true');
        if (errorSpan) errorSpan.textContent = errorMsg;
      } else {
        fieldObj.input.classList.remove('is-invalid');
        fieldObj.input.removeAttribute('aria-invalid');
        if (errorSpan) errorSpan.textContent = '';
      }
    };

    // Live validation clearing on input
    fields.forEach((fieldObj) => {
      if (fieldObj.input) {
        fieldObj.input.addEventListener('input', () => {
          if (fieldObj.input.classList.contains('is-invalid')) {
            const error = fieldObj.validate(fieldObj.input.value);
            setFieldError(fieldObj, error);
          }
        });
      }
    });

    // Form submit handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;
      let firstInvalidInput = null;

      // Validate all fields
      fields.forEach((fieldObj) => {
        if (fieldObj.input) {
          const errorMsg = fieldObj.validate(fieldObj.input.value);
          setFieldError(fieldObj, errorMsg);
          if (errorMsg) {
            hasErrors = true;
            if (!firstInvalidInput) {
              firstInvalidInput = fieldObj.input;
            }
          }
        }
      });

      if (hasErrors) {
        if (firstInvalidInput) firstInvalidInput.focus();
        if (formAlert) {
          formAlert.className = 'form-alert alert-error';
          formAlert.textContent = 'Please correct the highlighted fields before submitting.';
          formAlert.hidden = false;
        }
        return;
      }

      // Safe Demo Success State (Truthful front-end demonstration)
      const senderName = nameInput.value.trim();
      if (formAlert) {
        formAlert.className = 'form-alert alert-success';
        formAlert.innerHTML = `<strong>Demo Success:</strong> Thank you, ${escapeHtml(senderName)}! All fields passed client-side validation. Since this is a static showcase portfolio without a backend server, your message was not transmitted to a mail server. For real inquiries, please click the <em>Direct Email</em> link or the <em>Open in Mail Client</em> button below.`;
        formAlert.hidden = false;
      }

      // Reset form fields after successful demo submission
      contactForm.reset();
      fields.forEach((fieldObj) => setFieldError(fieldObj, ''));
    });

    // Mailto fallback button handler
    if (mailtoBtn) {
      mailtoBtn.addEventListener('click', () => {
        const nameVal = nameInput ? nameInput.value.trim() : '';
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const subjectVal = subjectInput ? subjectInput.value.trim() : '';
        const messageVal = messageInput ? messageInput.value.trim() : '';

        const recipient = 'your.email@example.com';
        const subjectLine = subjectVal ? encodeURIComponent(subjectVal) : encodeURIComponent('Internship Inquiry for Shivam Mishra');
        const bodyContent = encodeURIComponent(
          `Hello Shivam,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}\n`
        );

        const mailtoUrl = `mailto:${recipient}?subject=${subjectLine}&body=${bodyContent}`;
        window.location.href = mailtoUrl;
      });
    }
  }

  // Basic HTML entity escaper to prevent XSS in alert feedback
  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
});
