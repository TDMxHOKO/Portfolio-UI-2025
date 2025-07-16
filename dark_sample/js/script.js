  function switchLanguage(lang) {
    document.body.className = lang;
    localStorage.setItem('siteLanguage', lang);
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
        btn.textContent = lang === 'fa' ? 'English' : 'Persian';
    }
  }

  function toggleLanguage() {
    const currentLang = document.body.className === 'en' ? 'fa' : 'en';
    switchLanguage(currentLang);
  }

  // وقتی صفحه باز میشه، زبان ذخیره‌شده رو لود کنه
  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('siteLanguage') || 'fa';
    switchLanguage(savedLang);
  });
  function switchLanguage(lang) {
    document.body.className = lang;
    localStorage.setItem('siteLanguage', lang);
    
    const flag = document.getElementById('flagIcon');
    if (flag) {
      flag.src = lang === 'fa'
        ? 'https://flagcdn.com/w40/gb.png' 
        : 'https://flagcdn.com/w40/ir.png'; 
    }
  }