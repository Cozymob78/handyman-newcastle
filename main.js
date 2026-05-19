// Main Interactivity Hub
document.addEventListener('DOMContentLoaded', () => {
  // Sticky header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if(hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetHash = this.getAttribute('href');
      if (targetHash.startsWith('#') && targetHash.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetHash);
        if(targetElement) {
            navLinks.classList.remove('active');
            const icon = hamburger?.querySelector('i');
            if(icon) {
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
      }
    });
  });

  const COOKIE_CONSENT_NAME = 'fastfixes_cookie_consent';
  const COOKIE_CONSENT_VALUE = 'accepted';
  const COOKIE_CONSENT_DAYS = 365;

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      return key === name ? decodeURIComponent(value) : acc;
    }, '');
  }

  function hasCookieConsent() {
    return getCookie(COOKIE_CONSENT_NAME) === COOKIE_CONSENT_VALUE;
  }

  function createCookieBanner() {
    if (document.getElementById('cookie-consent')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-consent';
    banner.className = 'cookie-consent';
    banner.innerHTML = `
      <div class="cookie-message">
        <p>This site uses cookies for performance and improved navigation. Click "Accept" to continue.</p>
      </div>
      <div class="cookie-actions">
        <button id="cookie-accept" type="button" class="btn">Acceptă</button>
      </div>
    `;
    document.body.appendChild(banner);

    const acceptButton = document.getElementById('cookie-accept');
    if (acceptButton) {
      acceptButton.addEventListener('click', () => {
        setCookie(COOKIE_CONSENT_NAME, COOKIE_CONSENT_VALUE, COOKIE_CONSENT_DAYS);
        banner.classList.add('cookie-consent-hidden');
      });
    }
  }

  if (!hasCookieConsent()) {
    createCookieBanner();
  }

  // Facebook share setup: set dynamic share URL and open in popup
  function setupFacebookShare() {
    const elems = document.querySelectorAll('.fb-share-float, .fb-share');
    if (!elems || elems.length === 0) return;
    const pageUrl = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    elems.forEach(el => {
      el.setAttribute('href', shareUrl);
      el.setAttribute('target', '_blank');
      el.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(shareUrl, 'fbshare', 'width=600,height=500,noopener');
      });
    });
  }

  setupFacebookShare();
});
