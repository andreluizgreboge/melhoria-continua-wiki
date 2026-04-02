/* ═══════════════════════════════════════════════════════════════
   main.js — Lógica de renderização para index.html
   Depende de: dados.js (METODOLOGIAS, CASOS_PRATICOS, AUTOR, THEME)
═══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// ESTADO
// ─────────────────────────────────────────────────────────────
let currentFilter  = 'all';
let currentSection = 'metodologias';
let activeStepMap  = {};   // { casoId: stepIndex | -1 }

// ─────────────────────────────────────────────────────────────
// UTILITÁRIO: popula o card de Autor na sidebar
// ─────────────────────────────────────────────────────────────
function populateAuthor() {
  document.getElementById('author-name').textContent = AUTOR.nome;
  document.getElementById('author-role').textContent = AUTOR.cargo;
  document.getElementById('author-bio').textContent  = AUTOR.bio;
  document.getElementById('author-linkedin').href    = AUTOR.linkedin;
  document.getElementById('author-github').href      = AUTOR.github;
  const av = document.getElementById('author-avatar');
  if (AUTOR.emoji && !AUTOR.emoji.startsWith('http')) {
    av.textContent = AUTOR.emoji;
  } else if (AUTOR.emoji.startsWith('http')) {
    av.innerHTML = `<img src="${AUTOR.emoji}" style="width:100%;height:100%;border-radius:50%;object-fit:cover"/>`;
  }
}

// ─────────────────────────────────────────────────────────────
// SEÇÃO: troca entre Metodologias e Casos Práticos
// ─────────────────────────────────────────────────────────────
function showSection(name, btn) {
  currentSection = name;
  document.querySelectorAll('.nav-btn[id^="nav-"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.getElementById('section-metodologias').style.display = name === 'metodologias' ? '' : 'none';
  document.getElementById('section-casos').style.display        = name === 'casos'         ? '' : 'none';
  document.getElementById('cat-filters').style.display          = name === 'metodologias' ? '' : 'none';

  if (name === 'casos') renderCasos();
}

// ─────────────────────────────────────────────────────────────
// METODOLOGIAS — renderiza grid de cards
// ─────────────────────────────────────────────────────────────
function renderCards() {
  const grid    = document.getElementById('cards-grid');
  const empty   = document.getElementById('empty-state');
  const counter = document.getElementById('counter');
  const search  = document.getElementById('search-input').value.toLowerCase().trim();

  const filtered = METODOLOGIAS.filter(m => {
    const matchCat    = currentFilter === 'all' || m.categoria === currentFilter;
    const matchSearch = !search ||
      m.titulo.toLowerCase().includes(search) ||
      m.tldr.toLowerCase().includes(search) ||
      m.categoria.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  grid.innerHTML = '';

  if (!filtered.length) {
    grid.style.display  = 'none';
    empty.style.display = 'flex';
    counter.textContent = '';
    return;
  }

  grid.style.display  = 'grid';
  empty.style.display = 'none';
  counter.textContent = `${filtered.length} metodologia${filtered.length !== 1 ? 's' : ''}`;

  filtered.forEach((m, i) => {
    const t    = THEME[m.cor_tema] || THEME.slate;
    const card = document.createElement('div');
    card.className = 'met-card';
    card.style.cssText = `--card-accent:${t.accent};animation-delay:${i * 40}ms`;
    card.onclick = () => openModal(m);
    card.innerHTML = `
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:12px">
        <span class="badge" style="background:${t.bg};color:${t.text}">
          <span style="width:6px;height:6px;border-radius:50%;background:${t.accent};flex-shrink:0"></span>
          ${m.categoria}
        </span>
        <svg style="flex-shrink:0;color:#d1d5db;margin-top:2px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
      <h3 style="font-size:1rem;font-weight:700;margin:0 0 8px;color:#1c1c1e;line-height:1.3">${m.titulo}</h3>
      <p style="font-size:0.85rem;line-height:1.65;color:#6b7280;margin:0">${m.tldr}</p>
    `;
    grid.appendChild(card);
  });
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}

// ─────────────────────────────────────────────────────────────
// MODAL — abre detalhes de uma metodologia
// ─────────────────────────────────────────────────────────────
function openModal(m) {
  const t = THEME[m.cor_tema] || THEME.slate;

  document.getElementById('modal-title').textContent       = m.titulo;
  document.getElementById('modal-tldr').textContent        = `"${m.tldr}"`;
  document.getElementById('modal-o_que_e').textContent     = m.o_que_e;
  document.getElementById('modal-explicacao').textContent  = m.explicacao;
  document.getElementById('modal-exemplo').textContent     = m.exemplo_generico;
  document.getElementById('modal-exemplo').style.borderLeftColor = t.accent;

  const badge = document.getElementById('modal-badge');
  badge.textContent       = m.categoria;
  badge.style.background  = t.bg;
  badge.style.color       = t.text;

  document.getElementById('modal-pros').innerHTML = (m.pros || []).map(p =>
    `<div class="pro-item">
      <span style="color:#22c55e;line-height:1.2;flex-shrink:0">✓</span>
      <span>${p}</span>
    </div>`).join('');

  document.getElementById('modal-cons').innerHTML = (m.cons || []).map(c =>
    `<div class="con-item">
      <span style="color:#ef4444;line-height:1.2;flex-shrink:0">✕</span>
      <span>${c}</span>
    </div>`).join('');

  document.getElementById('modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-backdrop')) return;
  forceCloseModal();
}

function forceCloseModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') forceCloseModal(); });

// ─────────────────────────────────────────────────────────────
// CASOS PRÁTICOS — renderiza lista de casos
// ─────────────────────────────────────────────────────────────
function renderCasos() {
  const grid = document.getElementById('casos-grid');
  document.getElementById('casos-count').textContent = CASOS_PRATICOS.length;
  grid.innerHTML = '';
  CASOS_PRATICOS.forEach((caso, ci) => {
    if (activeStepMap[caso.id] === undefined) activeStepMap[caso.id] = -1;
    grid.appendChild(buildCasoCard(caso, ci));
  });
}

function buildCasoCard(caso, ci) {
  const wrap = document.createElement('div');
  wrap.className = 'caso-card';
  wrap.id        = `caso-${caso.id}`;
  wrap.style.animationDelay = `${ci * 80}ms`;

  // Header
  wrap.innerHTML = `
    <div class="caso-header">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap">
        <div>
          <span style="font-size:0.68rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#9ca3af;display:block;margin-bottom:5px">${caso.setor}</span>
          <h2 style="font-size:1.2rem;font-weight:700;margin:0 0 10px;color:#1c1c1e">${caso.titulo}</h2>
          <div style="display:flex;align-items:flex-start;gap:8px">
            <span style="font-size:0.9rem;flex-shrink:0;line-height:1.6">⚠️</span>
            <p style="font-size:0.875rem;color:#6b7280;margin:0;line-height:1.6">${caso.problema}</p>
          </div>
        </div>
        <span class="impact-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          Ponta a ponta
        </span>
      </div>
    </div>
  `;

  const body = document.createElement('div');
  body.className = 'caso-body';

  // Stepper label
  const stepLabel = document.createElement('p');
  stepLabel.className = 'section-label';
  stepLabel.style.marginBottom = '1rem';
  stepLabel.innerHTML = `<span style="color:#9ca3af">◆</span>&nbsp; Jornada de Solução — ${caso.jornada.length} etapas &nbsp;<span style="font-weight:400;text-transform:none;letter-spacing:0;color:#b0b7c0">(clique numa etapa para detalhar)</span>`;
  body.appendChild(stepLabel);

  // Stepper
  const stepper = document.createElement('div');
  stepper.className = 'stepper';
  stepper.id = `stepper-${caso.id}`;

  caso.jornada.forEach((step, si) => {
    const t     = THEME[step.cor] || THEME.slate;
    const nextT = caso.jornada[si + 1] ? (THEME[caso.jornada[si + 1].cor] || THEME.slate) : null;
    const item  = document.createElement('div');
    item.className = 'step-item';
    item.id        = `step-${caso.id}-${si}`;
    item.style.setProperty('--step-color', t.accent);
    if (nextT) item.style.setProperty('--next-color', nextT.accent);
    if (activeStepMap[caso.id] === si) item.classList.add('active-step');
    item.innerHTML = `
      <div class="step-node" style="background:linear-gradient(135deg,${t.accent},${t.accent}dd)">${step.icone}</div>
      <div class="step-label" style="color:${t.accent}">${step.metodologia}</div>
      <div class="step-action">${step.acao}</div>
    `;
    item.addEventListener('click', () => toggleStep(caso.id, si, caso.jornada.length, caso));
    stepper.appendChild(item);
  });
  body.appendChild(stepper);

  // Detail panel
  const detail = document.createElement('div');
  detail.className = 'step-detail';
  detail.id        = `detail-${caso.id}`;
  if (activeStepMap[caso.id] >= 0) {
    updateDetailPanel(detail, caso, activeStepMap[caso.id]);
    detail.classList.add('visible');
  }
  body.appendChild(detail);

  // AS-IS / TO-BE
  const mapLabel = document.createElement('p');
  mapLabel.className = 'section-label';
  mapLabel.style.cssText = 'margin-top:2rem;margin-bottom:1rem';
  mapLabel.innerHTML = `<span style="color:#9ca3af">◆</span>&nbsp; Mapeamento Visual — AS-IS vs TO-BE`;
  body.appendChild(mapLabel);

  const mapGrid = document.createElement('div');
  mapGrid.style.cssText = 'display:grid;grid-template-columns:1fr;gap:1rem';

  const asisDiv = document.createElement('div');
  asisDiv.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span style="font-size:0.65rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#b91c1c;background:#fef2f2;border:1px solid #fecaca;padding:2px 8px;border-radius:4px">AS-IS</span>
      <span style="font-size:0.75rem;color:#9ca3af">Fluxo atual — com gargalos</span>
    </div>
    <div class="flow-diagram">${caso.as_is.map(b => `<div class="flow-block as-is">${b}</div>`).join('')}</div>
  `;

  const tobeDiv = document.createElement('div');
  tobeDiv.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span style="font-size:0.65rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#065f46;background:#ecfdf5;border:1px solid #6ee7b7;padding:2px 8px;border-radius:4px">TO-BE</span>
      <span style="font-size:0.75rem;color:#9ca3af">Fluxo após melhoria</span>
    </div>
    <div class="flow-diagram">${caso.to_be.map(b => `<div class="flow-block to-be">${b}</div>`).join('')}</div>
  `;

  mapGrid.appendChild(asisDiv);
  mapGrid.appendChild(tobeDiv);
  body.appendChild(mapGrid);

  // Impact
  const impact = document.createElement('div');
  impact.style.cssText = 'margin-top:1.75rem;padding:1.25rem 1.5rem;background:linear-gradient(135deg,#f0fdf4,#ecfdf5);border:1px solid #6ee7b7;border-radius:12px;display:flex;align-items:flex-start;gap:14px';
  impact.innerHTML = `
    <div style="width:36px;height:36px;background:#065f46;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    </div>
    <div>
      <p style="font-size:0.68rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#065f46;margin:0 0 4px">Impacto Final</p>
      <p style="font-size:0.9rem;font-weight:600;color:#064e3b;margin:0;line-height:1.5">${caso.impacto_final}</p>
    </div>
  `;
  body.appendChild(impact);
  wrap.appendChild(body);
  return wrap;
}

function toggleStep(casoId, stepIndex, total, caso) {
  const panel  = document.getElementById(`detail-${casoId}`);
  const isOpen = panel.classList.contains('visible');
  const isSame = activeStepMap[casoId] === stepIndex;

  for (let i = 0; i < total; i++) {
    const el = document.getElementById(`step-${casoId}-${i}`);
    if (el) el.classList.remove('active-step');
  }

  if (isOpen && isSame) {
    panel.classList.remove('visible');
    activeStepMap[casoId] = -1;
    return;
  }

  activeStepMap[casoId] = stepIndex;
  const node = document.getElementById(`step-${casoId}-${stepIndex}`);
  if (node) node.classList.add('active-step');

  updateDetailPanel(panel, caso, stepIndex);
  panel.classList.add('visible');
}

function updateDetailPanel(panel, caso, idx) {
  if (idx < 0 || !caso || idx >= caso.jornada.length) return;
  const step = caso.jornada[idx];
  const t    = THEME[step.cor] || THEME.slate;

  panel.style.borderLeftColor = t.accent;
  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,${t.accent},${t.accent}cc);color:#fff;display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;font-family:'DM Mono',monospace;flex-shrink:0;box-shadow:0 4px 12px ${t.accent}44">${step.icone}</div>
      <div>
        <p style="margin:0;font-weight:700;font-size:0.95rem;color:#1c1c1e">Etapa ${step.ordem} — ${step.metodologia}</p>
        <p style="margin:0;font-size:0.78rem;color:${t.accent};font-weight:600">${step.acao}</p>
      </div>
      <span style="margin-left:auto;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;background:${t.bg};color:${t.text};padding:3px 10px;border-radius:99px;flex-shrink:0">${step.ordem} de ${caso.jornada.length}</span>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:1rem 1.25rem">
      <p style="font-size:0.65rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;margin:0 0 6px">Resultado desta etapa</p>
      <p style="font-size:0.875rem;line-height:1.75;color:#374151;margin:0">${step.resultado}</p>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
populateAuthor();
renderCards();
document.getElementById('casos-count').textContent = CASOS_PRATICOS.length;
