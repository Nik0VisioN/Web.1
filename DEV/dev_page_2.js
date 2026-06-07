// ============================================================
//  ChS-7 — electrical symbol dictionary (RU / UA / EN / NO)
//  Rendered into the Symbols tab; reacts to language switcher
// ============================================================

const SYMBOLS = {
  power: [
    { s: 'ТП', ru: 'Токоприёмник (пантограф)', ua: 'Струмоприймач (пантограф)', en: 'Pantograph / current collector', no: 'Strømavtaker (pantograf)' },
    { s: 'ГВ', ru: 'Главный воздушный выключатель', ua: 'Головний повітряний вимикач', en: 'Main circuit breaker', no: 'Hovedluftbryter' },
    { s: 'ТА', ru: 'Тяговый трансформатор', ua: 'Тяговий трансформатор', en: 'Traction transformer', no: 'Trekkrafttransformator' },
    { s: 'ВУ', ru: 'Выпрямительная установка', ua: 'Випрямна установка', en: 'Rectifier unit (silicon)', no: 'Likeretterenhet (silisium)' },
    { s: 'ТД', ru: 'Тяговый двигатель (ТД1–ТД8)', ua: 'Тяговий двигун (ТД1–ТД8)', en: 'Traction motor (TM1–TM8)', no: 'Trekkraftmotor (TM1–TM8)' },
    { s: 'ОВ', ru: 'Обмотка возбуждения', ua: 'Обмотка збудження', en: 'Field winding', no: 'Feltvikling' },
    { s: 'РФ', ru: 'Расщепитель фаз', ua: 'Розщеплювач фаз', en: 'Phase splitter', no: 'Fasesplitter' },
    { s: 'МВ', ru: 'Мотор-вентилятор', ua: 'Мотор-вентилятор', en: 'Motor-fan', no: 'Motor-vifte' },
    { s: 'МК', ru: 'Мотор-компрессор', ua: 'Мотор-компресор', en: 'Motor-compressor', no: 'Motor-kompressor' },
    { s: 'МН', ru: 'Мотор-насос (масляный)', ua: 'Мотор-насос (оливний)', en: 'Oil pump motor', no: 'Oljepumpe-motor' },
  ],
  switch: [
    { s: 'КМ', ru: 'Контактор электромагнитный', ua: 'Контактор електромагнітний', en: 'Electromagnetic contactor', no: 'Elektromagnetisk kontaktor' },
    { s: 'ЛК', ru: 'Линейный контактор (тяга)', ua: 'Лінійний контактор (тяга)', en: 'Line contactor (traction)', no: 'Linjekontaktor (trekkraft)' },
    { s: 'КШ', ru: 'Контактор шунтирования', ua: 'Контактор шунтування', en: 'Shunting contactor', no: 'Shuntkontaktor' },
    { s: 'ВК', ru: 'Выключатель кнопочный / клавишный', ua: 'Вимикач кнопковий / клавішний', en: 'Toggle / pushbutton switch', no: 'Trykknapp / vippebryter' },
    { s: 'КН', ru: 'Кнопка управления', ua: 'Кнопка керування', en: 'Control pushbutton', no: 'Styrings-trykknapp' },
    { s: 'НР', ru: 'Контакт нормально разомкнутый', ua: 'Контакт нормально розімкнений', en: 'Normally open (NO) contact', no: 'Normalt åpen (NO) kontakt' },
    { s: 'НЗ', ru: 'Контакт нормально замкнутый', ua: 'Контакт нормально замкнений', en: 'Normally closed (NC) contact', no: 'Normalt lukket (NC) kontakt' },
    { s: 'ТК', ru: 'Тормозной контактор (рекуперация)', ua: 'Гальмівний контактор (рекуперація)', en: 'Braking contactor (regen.)', no: 'Bremsekontaktor (regen.)' },
  ],
  protect: [
    { s: 'РД', ru: 'Реле давления воздуха', ua: 'Реле тиску повітря', en: 'Air pressure relay', no: 'Lufttrykksrelé' },
    { s: 'РТ', ru: 'Реле температуры (масла/воздуха)', ua: 'Реле температури (оливи/повітря)', en: 'Temperature relay (oil/air)', no: 'Temperaturrelé (olje/luft)' },
    { s: 'РМ', ru: 'Реле максимального тока', ua: 'Реле максимального струму', en: 'Overcurrent relay', no: 'Overstrømsrelé' },
    { s: 'РЗ', ru: 'Реле заземления (утечка на корпус)', ua: 'Реле заземлення (витік на корпус)', en: 'Earth-fault relay', no: 'Jordfeilrelé' },
    { s: 'ПА', ru: 'Предохранитель (плавкий)', ua: 'Запобіжник (плавкий)', en: 'Fuse', no: 'Sikring (smelte)' },
    { s: 'АВ', ru: 'Автоматический выключатель', ua: 'Автоматичний вимикач', en: 'Automatic circuit breaker (MCB)', no: 'Automatsikring (MCB)' },
  ],
  meter: [
    { s: 'А', ru: 'Амперметр', ua: 'Амперметр', en: 'Ammeter', no: 'Amperemeter' },
    { s: 'V', ru: 'Вольтметр', ua: 'Вольтметр', en: 'Voltmeter', no: 'Voltmeter' },
    { s: 'Л', ru: 'Сигнальная лампа', ua: 'Сигнальна лампа', en: 'Signal / indicator lamp', no: 'Signal- / indikatorlampe' },
    { s: 'ТТ', ru: 'Трансформатор тока', ua: 'Трансформатор струму', en: 'Current transformer (CT)', no: 'Strømtransformator (CT)' },
    { s: '⏚', ru: 'Корпус (земля, «−»)', ua: 'Корпус (земля, «−»)', en: 'Chassis ground / earth (−)', no: 'Ramme / jord (−)' },
    { s: '⊣⊢', ru: 'Аккумуляторная батарея', ua: 'Акумуляторна батарея', en: 'Battery', no: 'Batteri' },
  ],
};

function renderSymbols() {
  const slav = state.slavic;   // 'ru' | 'ua'
  const germ = state.germanic; // 'no' | 'en'
  const map = { power: 'sym-power', switch: 'sym-switch', protect: 'sym-protect', meter: 'sym-meter' };

  for (const [group, tbodyId] of Object.entries(map)) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) continue;
    tbody.innerHTML = SYMBOLS[group].map(row => `
      <tr>
        <td><div class="sym-cell">${row.s}</div></td>
        <td>${row[slav]}</td>
        <td>${row[germ]}</td>
      </tr>`).join('');
  }
}

// register symbol re-render as a language-change hook, and render once on load
window.onLanguageChange = renderSymbols;
document.addEventListener('DOMContentLoaded', renderSymbols);