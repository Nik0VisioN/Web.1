// ============================================================
//  ChS-7 Technical Guide — language switching + tab navigation
// ============================================================

// Current selected languages: one Slavic, one Germanic
const state = {
    slavic: 'ru',   // 'ru' | 'ua'
    germanic: 'no', // 'no' | 'en'
};

// ---- TAB NAVIGATION ----
function showTab(name, btn) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    const pane = document.getElementById('tab-' + name);
    if (pane) pane.classList.add('active');
    if (btn) btn.classList.add('active');
}

// ---- LANGUAGE VISIBILITY ----
// Every translated line has class lang-row + a data-lang attribute.
// We show only the two selected languages, hide the others.
function applyLanguages() {
    const visible = [state.slavic, state.germanic];
    document.querySelectorAll('.lang-row[data-lang]').forEach(row => {
        row.hidden = !visible.includes(row.dataset.lang);
    });
    // update toggle button states
    document.querySelectorAll('.lang-btn').forEach(b => {
        const grp = b.dataset.group;
        b.classList.toggle('active', state[grp] === b.dataset.lang);
    });
    // let other modules (e.g. symbols.js) react to a language change
    if (typeof window.onLanguageChange === 'function') window.onLanguageChange();
}

function setLanguage(group, lang) {
    state[group] = lang;
    applyLanguages();
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
    // tab buttons
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => showTab(tab.dataset.tab, tab));
    });

    // language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.group, btn.dataset.lang));
    });

    applyLanguages();
});