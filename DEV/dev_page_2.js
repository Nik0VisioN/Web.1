// ============================================================
//  ChS-7 Guide — render engine + language switching
//  Default languages: UA (slavic) + EN (germanic)
// ============================================================

const state = { slavic: 'ua', germanic: 'en' };

// helper: pull both active-language strings for a key, render two rows
function bilingual(key) {
  const s = t(key, state.slavic);
  const g = t(key, state.germanic);
  const flag = { ru: 'RU', ua: 'UA', en: 'EN', no: 'NO' };
  return `
    <div class="lang-row"><span class="lang-flag ${state.slavic}">${flag[state.slavic]}</span><span class="lang-text ${state.slavic}">${s}</span></div>
    <div class="lang-row"><span class="lang-flag ${state.germanic}">${flag[state.germanic]}</span><span class="lang-text ${state.germanic}">${g}</span></div>`;
}

// single active-language string in slavic (used for short labels) — prefers slavic
function L(key) { return t(key, state.slavic); }
function Lg(key) { return t(key, state.germanic); }

function card(titleKey, bodyKey) {
  return `<div class="tricard">
    <div class="tricard-title">${L(titleKey)} / ${Lg(titleKey)}</div>
    <div class="tricard-body">${bilingual(bodyKey)}</div>
  </div>`;
}

function header(key) {
  return `<div class="section-header">${L('hdr.' + key)} · ${Lg('hdr.' + key)}</div>`;
}

// ============================================================
//  SVG BUILDERS (labels pulled live from i18n)
// ============================================================
function svgSections() {
  const S = k => t('svg.' + k, state.slavic);
  const G = k => t('svg.' + k, state.germanic);
  return `
  <svg viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="28" x2="900" y2="28" class="svg-rail" stroke-dasharray="2 6"/>
    <text x="30" y="20" class="svg-label-sm">25 кВ / 25 kV · 50 Hz</text>
    <!-- Section A -->
    <path d="M 200 28 L 215 55 M 250 28 L 235 55 M 215 55 L 235 55 L 225 70" class="svg-panto"/>
    <text x="178" y="48" class="svg-label-sm">${S('panto')}</text>
    <rect x="60" y="70" width="380" height="120" rx="10" class="svg-body"/>
    <text x="250" y="100" text-anchor="middle" class="svg-label-accent">${S('sectionA')} / ${G('sectionA')}</text>
    <rect x="200" y="112" width="100" height="40" rx="4" fill="rgba(0,170,255,0.12)" stroke="#00aaff" stroke-width="1"/>
    <text x="250" y="130" text-anchor="middle" class="svg-label-sm">ТА·ВУ</text>
    <text x="250" y="143" text-anchor="middle" class="svg-label-sm">${G('transfRect')}</text>
    <rect x="80" y="195" width="150" height="50" rx="6" class="svg-bogie"/>
    <text x="155" y="214" text-anchor="middle" class="svg-label-sm">${S('bogie')} 1 / ${G('bogie')} 1</text>
    <rect x="92" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="117" y="235" text-anchor="middle" class="svg-label-sm">ТД1</text>
    <rect x="168" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="193" y="235" text-anchor="middle" class="svg-label-sm">ТД2</text>
    <circle cx="105" cy="265" r="18" class="svg-wheel"/><circle cx="205" cy="265" r="18" class="svg-wheel"/>
    <rect x="270" y="195" width="150" height="50" rx="6" class="svg-bogie"/>
    <text x="345" y="214" text-anchor="middle" class="svg-label-sm">${S('bogie')} 2 / ${G('bogie')} 2</text>
    <rect x="282" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="307" y="235" text-anchor="middle" class="svg-label-sm">ТД3</text>
    <rect x="358" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="383" y="235" text-anchor="middle" class="svg-label-sm">ТД4</text>
    <circle cx="295" cy="265" r="18" class="svg-wheel"/><circle cx="395" cy="265" r="18" class="svg-wheel"/>
    <path d="M 225 70 L 225 112" class="svg-wire"/>
    <!-- coupler -->
    <line x1="440" y1="130" x2="480" y2="130" class="svg-rail"/>
    <rect x="450" y="122" width="20" height="16" rx="3" fill="rgba(255,107,0,0.2)" stroke="#ff6b00"/>
    <text x="460" y="160" text-anchor="middle" class="svg-label-sm">${S('coupler')}</text>
    <!-- Section B -->
    <path d="M 670 28 L 685 55 M 720 28 L 705 55 M 685 55 L 705 55 L 695 70" class="svg-panto"/>
    <text x="648" y="48" class="svg-label-sm">${S('panto')}</text>
    <rect x="480" y="70" width="380" height="120" rx="10" class="svg-body"/>
    <text x="670" y="100" text-anchor="middle" class="svg-label-accent">${S('sectionB')} / ${G('sectionB')}</text>
    <rect x="620" y="112" width="100" height="40" rx="4" fill="rgba(0,170,255,0.12)" stroke="#00aaff" stroke-width="1"/>
    <text x="670" y="130" text-anchor="middle" class="svg-label-sm">ТА·ВУ</text>
    <text x="670" y="143" text-anchor="middle" class="svg-label-sm">${G('transfRect')}</text>
    <rect x="500" y="195" width="150" height="50" rx="6" class="svg-bogie"/>
    <text x="575" y="214" text-anchor="middle" class="svg-label-sm">${S('bogie')} 3 / ${G('bogie')} 3</text>
    <rect x="512" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="537" y="235" text-anchor="middle" class="svg-label-sm">ТД5</text>
    <rect x="588" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="613" y="235" text-anchor="middle" class="svg-label-sm">ТД6</text>
    <circle cx="525" cy="265" r="18" class="svg-wheel"/><circle cx="625" cy="265" r="18" class="svg-wheel"/>
    <rect x="690" y="195" width="150" height="50" rx="6" class="svg-bogie"/>
    <text x="765" y="214" text-anchor="middle" class="svg-label-sm">${S('bogie')} 4 / ${G('bogie')} 4</text>
    <rect x="702" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="727" y="235" text-anchor="middle" class="svg-label-sm">ТД7</text>
    <rect x="778" y="222" width="50" height="18" rx="3" class="svg-motor"/><text x="803" y="235" text-anchor="middle" class="svg-label-sm">ТД8</text>
    <circle cx="715" cy="265" r="18" class="svg-wheel"/><circle cx="815" cy="265" r="18" class="svg-wheel"/>
    <path d="M 695 70 L 695 112" class="svg-wire"/>
    <line x1="20" y1="290" x2="900" y2="290" class="svg-rail"/>
    <text x="30" y="308" class="svg-label-sm">${S('rail')} / ${G('rail')}</text>
    <text x="460" y="335" text-anchor="middle" class="svg-label">${S('axleFormula')}</text>
  </svg>`;
}

function svgWheelset() {
  const S = k => t('svg.' + k, state.slavic);
  const G = k => t('svg.' + k, state.germanic);
  return `
  <svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg">
    <text x="350" y="24" text-anchor="middle" class="svg-label-accent">${S('wheelset')} / ${G('wheelset')}</text>
    <rect x="120" y="120" width="460" height="14" rx="3" fill="#1a2838" stroke="#5a7a99" stroke-width="1.5"/>
    <text x="350" y="160" text-anchor="middle" class="svg-label-sm">${S('axle')} / ${G('axle')}</text>
    <circle cx="150" cy="127" r="48" class="svg-wheel"/><circle cx="150" cy="127" r="20" fill="#0d1622" stroke="#5a7a99"/>
    <text x="150" y="196" text-anchor="middle" class="svg-label-sm">${S('wheel')} Ø1250</text>
    <circle cx="550" cy="127" r="48" class="svg-wheel"/><circle cx="550" cy="127" r="20" fill="#0d1622" stroke="#5a7a99"/>
    <text x="550" y="196" text-anchor="middle" class="svg-label-sm">${G('wheel')} Ø1250</text>
    <circle cx="380" cy="127" r="40" fill="rgba(0,255,136,0.12)" stroke="#00ff88" stroke-width="2" stroke-dasharray="4 4"/>
    <text x="380" y="124" text-anchor="middle" class="svg-label-sm">${S('gearWheel')}</text>
    <text x="380" y="137" text-anchor="middle" class="svg-label-sm">${G('gearWheel')}</text>
    <circle cx="380" cy="210" r="18" fill="rgba(255,107,0,0.15)" stroke="#ff6b00"/>
    <text x="432" y="208" class="svg-label-sm">${S('pinion')} i=3.826</text>
    <line x1="380" y1="167" x2="380" y2="192" class="svg-wire" stroke="#ff6b00"/>
    <rect x="330" y="232" width="100" height="34" rx="4" class="svg-motor"/>
    <text x="380" y="253" text-anchor="middle" class="svg-label-sm">${S('motor')} / ${G('motor')}</text>
    <rect x="110" y="100" width="20" height="54" rx="3" fill="rgba(0,170,255,0.12)" stroke="#00aaff"/>
    <rect x="570" y="100" width="20" height="54" rx="3" fill="rgba(0,170,255,0.12)" stroke="#00aaff"/>
    <text x="120" y="92" text-anchor="middle" class="svg-label-sm">${S('axlebox')}</text>
    <text x="580" y="92" text-anchor="middle" class="svg-label-sm">${G('axlebox')}</text>
  </svg>`;
}

function svgMotor() {
  const S = k => t('svg.' + k, state.slavic);
  const G = k => t('svg.' + k, state.germanic);
  return `
  <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
    <text x="300" y="24" text-anchor="middle" class="svg-label-accent">${S('tractionMotor')} / ${G('tractionMotor')}</text>
    <rect x="80" y="50" width="440" height="200" rx="14" class="svg-body"/>
    <rect x="120" y="80" width="40" height="40" rx="4" class="svg-motor"/><text x="140" y="104" text-anchor="middle" class="svg-label-sm">N</text>
    <rect x="440" y="80" width="40" height="40" rx="4" class="svg-motor"/><text x="460" y="104" text-anchor="middle" class="svg-label-sm">S</text>
    <text x="300" y="72" text-anchor="middle" class="svg-label-sm">${S('mainPoles')} / ${G('mainPoles')}</text>
    <rect x="120" y="180" width="40" height="40" rx="4" fill="rgba(0,170,255,0.12)" stroke="#00aaff"/>
    <rect x="440" y="180" width="40" height="40" rx="4" fill="rgba(0,170,255,0.12)" stroke="#00aaff"/>
    <text x="300" y="240" text-anchor="middle" class="svg-label-sm">${S('interpoles')} / ${G('interpoles')}</text>
    <circle cx="300" cy="150" r="55" fill="#16202e" stroke="#00ff88" stroke-width="2"/>
    <circle cx="300" cy="150" r="22" fill="#0d1622" stroke="#5a7a99"/>
    <text x="300" y="127" text-anchor="middle" class="svg-label-sm">${S('armature')}</text>
    <text x="300" y="178" text-anchor="middle" class="svg-label-sm">${G('armature')}</text>
    <rect x="240" y="265" width="120" height="22" rx="3" fill="rgba(0,255,136,0.15)" stroke="#00ff88"/>
    <text x="300" y="280" text-anchor="middle" class="svg-label-sm">${S('commutator')}</text>
    <line x1="300" y1="205" x2="300" y2="265" class="svg-wire"/>
    <text x="95" y="44" class="svg-label-sm" fill="#00ff88">[+]</text>
    <text x="490" y="44" class="svg-label-sm" fill="#ff6b00">[−]</text>
    <line x1="300" y1="287" x2="300" y2="315" class="svg-rail"/>
    <rect x="245" y="315" width="110" height="28" rx="4" class="svg-motor"/>
    <text x="300" y="333" text-anchor="middle" class="svg-label-sm">${S('gearbox')} i=3.826</text>
  </svg>`;
}

function svgBraking() {
  const S = k => t('svg.' + k, state.slavic);
  const G = k => t('svg.' + k, state.germanic);
  return `
  <svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg">
    <text x="310" y="24" text-anchor="middle" class="svg-label-accent">${L('hdr.rheoBrake')} / ${Lg('hdr.rheoBrake')}</text>
    <!-- wheel -->
    <circle cx="90" cy="150" r="44" class="svg-wheel"/><circle cx="90" cy="150" r="18" fill="#0d1622" stroke="#5a7a99"/>
    <text x="90" y="210" text-anchor="middle" class="svg-label-sm">${S('wheel')}</text>
    <path d="M 60 110 A 50 50 0 0 1 120 110" fill="none" stroke="#ff6b00" stroke-width="1.5" marker-end="url(#arr)"/>
    <text x="90" y="95" text-anchor="middle" class="svg-label-sm">${S('rbWheel')}</text>
    <!-- motor as generator -->
    <line x1="134" y1="150" x2="200" y2="150" class="svg-rail"/>
    <rect x="200" y="115" width="130" height="70" rx="8" fill="rgba(255,107,0,0.12)" stroke="#ff6b00" stroke-width="1.5"/>
    <text x="265" y="145" text-anchor="middle" class="svg-label-sm">${S('rbMotor')}</text>
    <text x="265" y="162" text-anchor="middle" class="svg-label-sm">${G('rbMotor')}</text>
    <!-- current arrow to rheostat -->
    <line x1="330" y1="150" x2="410" y2="150" class="svg-wire" marker-end="url(#arr2)"/>
    <text x="370" y="140" text-anchor="middle" class="svg-label-sm">${S('rbCurrent')} / ${G('rbCurrent')}</text>
    <!-- rheostat -->
    <rect x="410" y="110" width="150" height="80" rx="8" fill="rgba(0,255,136,0.1)" stroke="#00ff88" stroke-width="1.5"/>
    <path d="M 425 150 h12 l5 -12 l8 24 l8 -24 l8 24 l8 -24 l5 12 h12" fill="none" stroke="#00ff88" stroke-width="1.5"/>
    <text x="485" y="135" text-anchor="middle" class="svg-label-sm">${S('rbResistor')}</text>
    <text x="485" y="180" text-anchor="middle" class="svg-label-sm">${G('rbResistor')}</text>
    <!-- heat up -->
    <path d="M 485 110 V 70" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#arr)"/>
    <text x="485" y="60" text-anchor="middle" class="svg-label-sm" fill="#ff6b00">${S('rbHeat')} / ${G('rbHeat')}</text>
    <defs>
      <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#ff6b00"/></marker>
      <marker id="arr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#00ff88"/></marker>
    </defs>
  </svg>`;
}

function svgSignals() {
  const S = k => t('svg.' + k, state.slavic);
  const G = k => t('svg.' + k, state.germanic);
  const lamp = (cx, on, color) => `<circle cx="${cx}" cy="60" r="22" fill="${on}" stroke="${color}" stroke-width="2"/>`;
  return `
  <svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg">
    <!-- three signal masts -->
    <g>
      <rect x="60" y="30" width="60" height="120" rx="8" fill="#0d1622" stroke="#1e3a5f"/>
      <circle cx="90" cy="60" r="20" fill="#00ff88" stroke="#00ff88"/>
      <circle cx="90" cy="105" r="20" fill="#16202e" stroke="#5a7a99"/>
      <line x1="90" y1="150" x2="90" y2="195" class="svg-rail"/>
      <text x="90" y="215" text-anchor="middle" class="svg-label-sm">${S('sigGreen')}</text>
    </g>
    <g>
      <rect x="280" y="30" width="60" height="120" rx="8" fill="#0d1622" stroke="#1e3a5f"/>
      <circle cx="310" cy="60" r="20" fill="#16202e" stroke="#5a7a99"/>
      <circle cx="310" cy="105" r="20" fill="#ffcc00" stroke="#ffcc00"/>
      <line x1="310" y1="150" x2="310" y2="195" class="svg-rail"/>
      <text x="310" y="215" text-anchor="middle" class="svg-label-sm">${S('sigYellow')}</text>
    </g>
    <g>
      <rect x="500" y="30" width="60" height="120" rx="8" fill="#0d1622" stroke="#1e3a5f"/>
      <circle cx="530" cy="60" r="20" fill="#cc2222" stroke="#ff4444"/>
      <circle cx="530" cy="105" r="20" fill="#16202e" stroke="#5a7a99"/>
      <line x1="530" y1="150" x2="530" y2="195" class="svg-rail"/>
      <text x="530" y="215" text-anchor="middle" class="svg-label-sm">${S('sigRed')}</text>
    </g>
  </svg>`;
}

// ============================================================
//  TAB CONTENT BUILDERS
// ============================================================
function legend(items) {
  return `<div class="diagram-legend">${items.map(i => `<div class="legend-item"><span class="legend-swatch" style="${i.sw}"></span> ${i.tx}</div>`).join('')}</div>`;
}

function buildOverview() {
  const S = state.slavic, G = state.germanic;
  const rows = [
    ['type', 'type_v'], ['maker', 'maker_v'], ['years', null, '1983–1999'],
    ['axle', null, '2(2о–2о) / Bo-Bo+Bo-Bo'], ['voltage', null, '25 кВ / 25 kV, 50 Hz AC'],
    ['power', null, '5 640 кВт / 7 560 hp'], ['speed', null, '160 км/ч'], ['mass', null, '~172 т'],
    ['motors', 'motors_v'], ['presGR', null, '7,5–9,2 кгс/см² (≈7,3–8,9 atm)'], ['presTM', null, '5,0 кгс/см² (≈4,8 atm)'],
  ];
  const tbody = rows.map(r => {
    const label = `${t('spec.' + r[0], S)} / ${t('spec.' + r[0], G)}`;
    const val = r[2] != null ? r[2] : `${t('spec.' + r[1], S)} · ${t('spec.' + r[1], G)}`;
    return `<tr><td>${label}</td><td>${val}</td></tr>`;
  }).join('');

  return header('general') + `
    <table class="specs-table"><thead><tr>
      <th>${t('spec.th_param', S)} / ${t('spec.th_param', G)}</th>
      <th>${t('spec.th_value', S)} / ${t('spec.th_value', G)}</th>
    </tr></thead><tbody>${tbody}</tbody></table>
    ${card('ov_desc_title', 'ov_desc')}
    ${header('sectionLayout')}
    <div class="svg-diagram">${svgSections()}${legend([
    { sw: 'background:rgba(255,107,0,0.4);border:1px solid #ff6b00', tx: 'ТД — ' + t('svg.motor', S) + ' / ' + t('svg.motor', G) },
    { sw: 'background:rgba(0,170,255,0.4);border:1px solid #00aaff', tx: 'ТА·ВУ' },
    { sw: 'background:#1a2838;border:1px solid #5a7a99', tx: t('svg.wheel', S) + ' / ' + t('svg.wheel', G) },
    { sw: 'background:none;border:1px solid #00ff88', tx: 'ТП — ' + t('svg.panto', S) },
  ])}</div>
    <div class="info-box">${bilingual('ov_howread')}</div>`;
}

function buildWheelset() {
  const S = state.slavic, G = state.germanic;
  return header('components') +
    card('ws_intro_t', 'ws_intro') +
    card('ws_axle_t', 'ws_axle') +
    card('ws_wheels_t', 'ws_wheels') +
    card('ws_gear_t', 'ws_gear') +
    card('ws_box_t', 'ws_box') +
    `<div class="svg-diagram">${svgWheelset()}${legend([
      { sw: 'background:#1a2838;border:1px solid #5a7a99', tx: t('svg.wheel', S) + ' / ' + t('svg.axle', S) },
      { sw: 'background:rgba(0,255,136,0.3);border:1px dashed #00ff88', tx: t('svg.gearWheel', S) },
      { sw: 'background:rgba(255,107,0,0.4);border:1px solid #ff6b00', tx: t('svg.motor', S) + ' + ' + t('svg.pinion', S) },
      { sw: 'background:rgba(0,170,255,0.4);border:1px solid #00aaff', tx: t('svg.axlebox', S) + ' / ' + t('svg.axlebox', G) },
    ])}</div>`;
}

function buildAux() {
  return header('list').replace(t('hdr.list', state.slavic), t('hdr.list', state.slavic)) +
    card('aux_intro_t', 'aux_intro') +
    card('aux_fan_t', 'aux_fan') +
    card('aux_comp_t', 'aux_comp') +
    card('aux_ps_t', 'aux_ps') +
    card('aux_pump_t', 'aux_pump');
}

function buildMotor() {
  const S = state.slavic;
  return header('design') +
    card('mo_type_t', 'mo_type') +
    card('mo_poles_t', 'mo_poles') +
    card('mo_arm_t', 'mo_arm') +
    card('mo_susp_t', 'mo_susp') +
    `<div class="svg-diagram">${svgMotor()}${legend([
      { sw: 'background:rgba(255,107,0,0.4);border:1px solid #ff6b00', tx: t('svg.mainPoles', S) },
      { sw: 'background:rgba(0,170,255,0.4);border:1px solid #00aaff', tx: t('svg.interpoles', S) },
      { sw: 'background:rgba(0,255,136,0.4);border:1px solid #00ff88', tx: t('svg.armature', S) + ' · ' + t('svg.commutator', S) },
    ])}</div>`;
}

function buildBraking() {
  return header('rheostat') +
    card('rh_t', 'rh') +
    header('rheoBrake') +
    card('rb_t', 'rb') +
    `<div class="svg-diagram">${svgBraking()}</div>` +
    `<div class="warn-box">${bilingual('rb_speed')}</div>` +
    header('signals') +
    `<div class="info-box">${bilingual('sig_intro')}</div>` +
    `<div class="svg-diagram">${svgSignals()}</div>` +
    `<div class="tricard"><div class="tricard-body">
       ${bilingual('sig_green')}${bilingual('sig_yflash')}${bilingual('sig_yellow')}${bilingual('sig_2yellow')}${bilingual('sig_red')}
     </div></div>` +
    card('sig_alsn_t', 'sig_alsn') +
    header('compare') +
    buildCompareTable() +
    `<div class="info-box">${bilingual('cmp_note')}</div>`;
}

function buildCompareTable() {
  const S = state.slavic, G = state.germanic;
  const c = k => `${t('cmp.' + k, S)} / ${t('cmp.' + k, G)}`;
  const rows = [
    ['motors_l', 'motors_a', 'motors_b'],
    ['brake_l', 'brake_a', 'brake_b'],
    ['susp_l', 'susp_a', 'susp_b'],
    ['sys_l', 'sys_a', 'sys_b'],
    ['ctrl_l', 'ctrl_a', 'ctrl_b'],
    ['spd_l', null, null],
  ];
  const body = rows.map(r => {
    const a = r[1] ? c(r[1]) : '160 км/ч';
    const b = r[2] ? c(r[2]) : '160–200 км/ч';
    return `<tr><td>${c(r[0])}</td><td>${a}</td><td>${b}</td></tr>`;
  }).join('');
  return `<table class="specs-table"><thead><tr>
    <th>${c('th_param')}</th><th>ЧС-7 (1983)</th><th>ЭП20 / EP20 (2011+)</th>
  </tr></thead><tbody>${body}</tbody></table>`;
}

function buildSchema() {
  return header('howRead') +
    `<div class="info-box">${bilingual('sc_intro')}</div>` +
    [1, 2, 3, 4, 5].map(n => `<div class="step"><div class="step-num">${n}</div><div class="step-content">${card('sc' + n + '_t', 'sc' + n)}</div></div>`).join('') +
    `<div class="warn-box">${bilingual('sc_warn')}</div>`;
}

function buildSymbols() {
  const S = state.slavic, G = state.germanic;
  const tbl = (groupKey, dataKey) => {
    const rows = SYMBOLS[dataKey].map(r =>
      `<tr><td><div class="sym-cell">${r.s}</div></td><td>${r[S]}</td><td>${r[G]}</td></tr>`).join('');
    return header(groupKey) + `<table class="sym-table"><thead><tr>
      <th class="col-sym">${t('th_symbol', S)}</th>
      <th class="col-slav">${({ ru: 'Русский', ua: 'Українська', en: 'English', no: 'Norsk' })[S]}</th>
      <th class="col-germ">${({ ru: 'Русский', ua: 'Українська', en: 'English', no: 'Norsk' })[G]}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  };
  return `<div class="info-box">${bilingual('sym_note')}</div>` +
    tbl('powerEl', 'power') + tbl('switchEl', 'switch') + tbl('protectEl', 'protect') + tbl('meterEl', 'meter');
}

const BUILDERS = {
  overview: buildOverview, wheelset: buildWheelset, aux: buildAux,
  motor: buildMotor, braking: buildBraking, schema: buildSchema, symbols: buildSymbols,
};

// ============================================================
//  RENDER + EVENTS
// ============================================================
let activeTab = 'overview';

function renderChrome() {
  const S = state.slavic, G = state.germanic;
  document.getElementById('subtitle').textContent = t('ui.subtitle', S);
  document.getElementById('slavLabel').textContent = t('ui.slavLabel', S) + ' / ' + t('ui.slavLabel', G);
  document.getElementById('germLabel').textContent = t('ui.germLabel', S) + ' / ' + t('ui.germLabel', G);
  document.getElementById('footer').textContent = t('ui.footer', S) + ' · RU / UA / EN / NO · 2026';
  // tab labels
  document.querySelectorAll('.nav-tab').forEach(tab => {
    const k = tab.dataset.tab;
    tab.textContent = t('ui.tabs.' + k, S) + ' / ' + t('ui.tabs.' + k, G);
  });
  // language buttons active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', state[b.dataset.group] === b.dataset.lang);
  });
}

function renderActiveTab() {
  const host = document.getElementById('content');
  host.innerHTML = BUILDERS[activeTab]();
  // retrigger fade
  host.style.animation = 'none';
  void host.offsetWidth;
  host.style.animation = '';
}

function renderAll() { renderChrome(); renderActiveTab(); }

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeTab = tab.dataset.tab;
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderActiveTab();
    });
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state[btn.dataset.group] = btn.dataset.lang;
      renderAll();
    });
  });
  renderAll();
});