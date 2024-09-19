function upgradeLinks() {
    const elements = document.querySelectorAll('[src^="http://www.thegoodscentscompany.com"], [href^="http://www.thegoodscentscompany.com"]');
    elements.forEach(el => {
      if (el.src) el.src = el.src.replace('http://', 'https://');
      if (el.href) el.href = el.href.replace('http://', 'https://');
    });
  }

  upgradeLinks();
  document.addEventListener('DOMContentLoaded', upgradeLinks);
  new MutationObserver(upgradeLinks).observe(document.documentElement, { childList: true, subtree: true });

  console.log('TGSC Mixed Content Fixer: Content script loaded');