/* ═══════════════════════════════════════════════════════════════════════════
   STORM BOOSTS — App Config & Utilities
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── CONFIGURAÇÃO DA API ─────────────────────────────────────────────────────
// Altere para a URL pública do seu bot no Railway.
// Após o deploy no Railway, você receberá uma URL como:
//   https://storm-boosts-production.up.railway.app
//
// Cole essa URL aqui (SEM barra no final):
//
const API_BASE = window.STORM_API_BASE || 'https://storm-boosts-bot-production.up.railway.app';

// ─── Partículas ──────────────────────────────────────────────────────────────
function initParticles() {
  const pts = document.getElementById('pts');
  if (!pts) return;
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    const s = Math.random() * 1.5 + 0.5;
    p.style.width = p.style.height = s + 'px';
    p.style.animationDuration = (Math.random() * 18 + 12) + 's';
    p.style.animationDelay = (Math.random() * 14) + 's';
    pts.appendChild(p);
  }
}

// ─── API Helper ──────────────────────────────────────────────────────────────
async function apiCall(endpoint, options = {}) {
  const url = API_BASE + endpoint;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  return { response: res, data: await res.json() };
}

// ─── URL Params ──────────────────────────────────────────────────────────────
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', initParticles);
