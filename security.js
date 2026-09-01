/* Shared browser-side safety helpers for the standalone tools.
 * This file deliberately contains no user data and may be loaded by every page. */
(() => {
  'use strict';

  const MAX_TEXT_LENGTH = 10_000;

  function asBoundedString(value, maxLength = MAX_TEXT_LENGTH) {
    return String(value ?? '').slice(0, maxLength);
  }

  function isPrivateHost(hostname) {
    const host = String(hostname || '').toLowerCase().replace(/^\[|\]$/g, '');
    if (!host || host === 'localhost' || host.endsWith('.localhost') || host === '::1' || host === '0.0.0.0') return true;
    if (/^(127|10)\./.test(host) || /^192\.168\./.test(host) || /^169\.254\./.test(host)) return true;
    const match = host.match(/^172\.(\d{1,3})\./);
    if (match && Number(match[1]) >= 16 && Number(match[1]) <= 31) return true;
    return /^(fc|fd|fe80):/i.test(host);
  }

  function safeExternalUrl(value) {
    try {
      const url = new URL(String(value ?? ''));
      return url.protocol === 'https:' && !isPrivateHost(url.hostname) ? url.href : '';
    } catch {
      return '';
    }
  }

  function safeMediaUrl(value) {
    const external = safeExternalUrl(value);
    if (external) return external;
    const raw = String(value ?? '');
    return raw.startsWith('blob:') ? raw : '';
  }

  function safeFilename(value, fallback = 'download') {
    const name = asBoundedString(value, 180)
      .replace(/[\\/:*?"<>|\u0000-\u001F]/g, '_')
      .replace(/^\.+$/, '')
      .trim();
    return name || fallback;
  }

  window.safeText = (value, maxLength) => {
    const node = document.createElement('span');
    node.textContent = asBoundedString(value, maxLength);
    return node.innerHTML;
  };
  window.safeExternalUrl = safeExternalUrl;
  window.safeMediaUrl = safeMediaUrl;
  window.safeFilename = safeFilename;
  window.isPrivateHost = isPrivateHost;
})();
