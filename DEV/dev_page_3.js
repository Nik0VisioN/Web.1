// ============================================================
//  ChS-7 Guide — full translation dictionary (RU / UA / EN / NO)
//  Every visible string lives here, including SVG labels.
// ============================================================

const I18N = {
  // ---------- UI CHROME ----------
  ui: {
    subtitle: { ru: 'ЭЛЕКТРОВОЗ · ELECTRIC LOCOMOTIVE · ELEKTRISK LOKOMOTIV', ua: 'ЕЛЕКТРОВОЗ · ELECTRIC LOCOMOTIVE · ELEKTRISK LOKOMOTIV', en: 'ELECTRIC LOCOMOTIVE · ЕЛЕКТРОВОЗ · ELEKTRISK LOKOMOTIV', no: 'ELEKTRISK LOKOMOTIV · ELECTRIC LOCOMOTIVE · ЕЛЕКТРОВОЗ' },
    slavLabel: { ru: 'Славянский', ua: 'Слов’янська', en: 'Slavic', no: 'Slavisk' },
    germLabel: { ru: 'Германский', ua: 'Германська', en: 'Germanic', no: 'Germansk' },
    tabs: {
      overview: { ru: 'Обзор', ua: 'Огляд', en: 'Overview', no: 'Oversikt' },
      wheelset: { ru: 'Колёсная пара', ua: 'Колісна пара', en: 'Wheelset', no: 'Hjulsett' },
      aux: { ru: 'Вспом. машины', ua: 'Допом. машини', en: 'Aux. machines', no: 'Hjelpemaskiner' },
      motor: { ru: 'Тяговый двигатель', ua: 'Тяговий двигун', en: 'Traction motor', no: 'Trekkraftmotor' },
      braking: { ru: 'Торможение и сигналы', ua: 'Гальмування і сигнали', en: 'Braking & signals', no: 'Bremsing og signaler' },
      schema: { ru: 'Электросхема', ua: 'Електросхема', en: 'Wiring diagram', no: 'Koblingsskjema' },
      symbols: { ru: 'Обозначения', ua: 'Позначення', en: 'Symbols', no: 'Symboler' },
    },
    footer: { ru: 'ЧС-7 · ŠKODA · ЖД ТЕХНИЧЕСКИЙ СПРАВОЧНИК', ua: 'ЧС-7 · ŠKODA · ЗАЛІЗНИЧНИЙ ТЕХНІЧНИЙ ДОВІДНИК', en: 'ChS-7 · ŠKODA · RAILWAY TECHNICAL REFERENCE', no: 'ČS-7 · ŠKODA · JERNBANE TEKNISK OPPSLAGSVERK' },
  },

  // ---------- SECTION HEADERS ----------
  hdr: {
    general: { ru: 'Общие сведения', ua: 'Загальні відомості', en: 'General Info', no: 'Generell info' },
    sectionLayout: { ru: 'Схема секций', ua: 'Схема секцій', en: 'Section Layout', no: 'Seksjonsoppsett' },
    components: { ru: 'Составные части', ua: 'Складові частини', en: 'Components', no: 'Komponenter' },
    list: { ru: 'Перечень', ua: 'Перелік', en: 'List', no: 'Liste' },
    design: { ru: 'Конструкция', ua: 'Конструкція', en: 'Design', no: 'Konstruksjon' },
    rheostat: { ru: 'Реостат', ua: 'Реостат', en: 'Rheostat', no: 'Reostat' },
    rheoBrake: { ru: 'Реостатное торможение', ua: 'Реостатне гальмування', en: 'Rheostatic Braking', no: 'Reostatisk bremsing' },
    signals: { ru: 'Сигнализация движения', ua: 'Сигналізація руху', en: 'Movement Signalling', no: 'Bevegelsessignalering' },
    compare: { ru: 'ЧС-7 и современные аналоги', ua: 'ЧС-7 і сучасні аналоги', en: 'ChS-7 vs Modern Equivalents', no: 'ČS-7 mot moderne ekvivalenter' },
    powerEl: { ru: 'Силовые элементы', ua: 'Силові елементи', en: 'Power elements', no: 'Krafelementer' },
    switchEl: { ru: 'Коммутационные аппараты', ua: 'Комутаційні апарати', en: 'Switching devices', no: 'Koblingsutstyr' },
    protectEl: { ru: 'Защита и реле', ua: 'Захист і реле', en: 'Protection & relays', no: 'Vern og releer' },
    meterEl: { ru: 'Измерение и индикация', ua: 'Вимірювання та індикація', en: 'Metering & indication', no: 'Måling og indikasjon' },
    howRead: { ru: 'Как читать электрическую схему', ua: 'Як читати електричну схему', en: 'How to Read the Wiring Diagram', no: 'Slik leser du koblingsskjemaet' },
  },

  // ---------- OVERVIEW ----------
  spec: {
    th_param: { ru: 'Параметр', ua: 'Параметр', en: 'Parameter', no: 'Parameter' },
    th_value: { ru: 'Значение', ua: 'Значення', en: 'Value', no: 'Verdi' },
    type: { ru: 'Тип', ua: 'Тип', en: 'Type', no: 'Type' },
    type_v: { ru: 'Пассажирский электровоз переменного тока', ua: 'Пасажирський електровоз змінного струму', en: 'AC passenger electric locomotive', no: 'AC passasjerlokomotiv' },
    maker: { ru: 'Производитель', ua: 'Виробник', en: 'Manufacturer', no: 'Produsent' },
    maker_v: { ru: 'Škoda (Пльзень, Чехословакия)', ua: 'Škoda (Пльзень, Чехословаччина)', en: 'Škoda (Plzeň, Czechoslovakia)', no: 'Škoda (Plzeň, Tsjekkoslovakia)' },
    years: { ru: 'Годы выпуска', ua: 'Роки випуску', en: 'Production years', no: 'Produksjonsår' },
    axle: { ru: 'Осевая формула', ua: 'Осьова формула', en: 'Axle arrangement', no: 'Akselarrangement' },
    voltage: { ru: 'Напряжение', ua: 'Напруга', en: 'Voltage', no: 'Spenning' },
    power: { ru: 'Мощность', ua: 'Потужність', en: 'Power', no: 'Effekt' },
    speed: { ru: 'Скорость', ua: 'Швидкість', en: 'Max speed', no: 'Maks hastighet' },
    mass: { ru: 'Масса', ua: 'Маса', en: 'Mass', no: 'Masse' },
    motors: { ru: 'Число тяг. двигателей', ua: 'Кількість тягових двигунів', en: 'Traction motors', no: 'Trekkraftmotorer' },
    motors_v: { ru: '8 (по 4 на секцию)', ua: '8 (по 4 на секцію)', en: '8 (4 per section)', no: '8 (4 per seksjon)' },
    presGR: { ru: 'Давление ГР', ua: 'Тиск ГР', en: 'Main-reservoir pressure', no: 'Hovedtanktrykk' },
    presTM: { ru: 'Давление ТМ', ua: 'Тиск ГМ', en: 'Brake-pipe pressure', no: 'Bremseledningstrykk' },
  },
  ov_desc_title: { ru: 'Краткое описание', ua: 'Короткий опис', en: 'Brief Description', no: 'Kort beskrivelse' },
  ov_desc: {
    ru: 'ЧС-7 — двухсекционный пассажирский электровоз переменного тока, разработанный в Чехословакии и эксплуатирующийся на железных дорогах СССР и России. Состоит из двух одинаковых секций, соединённых автосцепкой. Каждая секция имеет две двухосные тележки с индивидуальным приводом. Оснащён кремниевыми выпрямителями, тяговыми двигателями постоянного тока и развитой системой вспомогательного оборудования.',
    ua: 'ЧС-7 — двосекційний пасажирський електровоз змінного струму, розроблений у Чехословаччині та експлуатований на залізницях СРСР і Росії. Складається з двох однакових секцій, з’єднаних автозчепленням. Кожна секція має два двовісні візки з індивідуальним приводом. Оснащений кремнієвими випрямлячами, тяговими двигунами постійного струму та розвиненою системою допоміжного обладнання.',
    en: 'The ChS-7 is a twin-section AC passenger electric locomotive designed in Czechoslovakia and operated on Soviet and Russian railways. It consists of two identical sections joined by an automatic coupler. Each section has two two-axle bogies with individual drive. It uses silicon rectifiers and DC traction motors, with an extensive auxiliary-equipment system.',
    no: 'ČS-7 er et tosesjoners AC-passasjerlokomotiv utviklet i Tsjekkoslovakia og brukt på sovjetiske og russiske jernbaner. Det består av to identiske seksjoner forbundet med en automatkobling. Hver seksjon har to to-akslede boggier med individuell drift. Det bruker silisiumlikerettere og DC-trekkraftmotorer, med et omfattende hjelpeutstyrssystem.',
  },
  ov_howread: {
    ru: 'Как читать схему: Ток идёт сверху вниз — от контактного провода (25 кВ) через токоприёмник (ТП), затем в трансформатор и выпрямитель (ТА·ВУ), оттуда на 4 тяговых двигателя каждой секции, и замыкается через колёса на рельс (−). Две секции соединены автосцепкой.',
    ua: 'Як читати схему: Струм іде згори вниз — від контактного дроту (25 кВ) через струмоприймач (ТП), потім у трансформатор і випрямляч (ТА·ВУ), звідти на 4 тягові двигуни кожної секції, і замикається через колеса на рейку (−). Дві секції з’єднані автозчепленням.',
    en: 'How to read it: Current flows top to bottom — from the contact wire (25 kV) through the pantograph (ТП), then into the transformer and rectifier (ТА·ВУ), out to the 4 traction motors of each section, and back through the wheels to the rail (−). The two sections are joined by an automatic coupler.',
    no: 'Slik leser du det: Strøm flyter ovenfra og ned — fra kontakttråden (25 kV) gjennom strømavtakeren (ТП), inn i transformator og likeretter (ТА·ВУ), ut til de 4 trekkraftmotorene i hver seksjon, og tilbake gjennom hjulene til skinnen (−). De to seksjonene er forbundet med en automatkobling.',
  },

  // ---------- WHEELSET ----------
  ws_intro_t: { ru: 'Что такое колёсная пара', ua: 'Що таке колісна пара', en: 'What is a wheelset', no: 'Hva er et hjulsett' },
  ws_intro: {
    ru: 'Колёсная пара — основная ходовая единица электровоза. Состоит из оси с запрессованными двумя цельнокатаными колёсами и зубчатым колесом редуктора. Диаметр колёс по кругу катания — 1250 мм. Каждая ось несёт тяговую шестерню, связанную с двигателем через косозубый редуктор.',
    ua: 'Колісна пара — основна ходова одиниця електровоза. Складається з осі із запресованими двома суцільнокатаними колесами та зубчастим колесом редуктора. Діаметр коліс по колу катання — 1250 мм. Кожна вісь несе тягову шестерню, пов’язану з двигуном через косозубий редуктор.',
    en: 'A wheelset is the primary running unit of the locomotive. It consists of an axle with two monoblock wheels pressed on, plus a gear wheel of the reducer. Wheel rolling-circle diameter is 1250 mm. Each axle carries a pinion gear connected to the motor via a helical gearbox.',
    no: 'Et hjulsett er den primære løpeenheten til lokomotivet. Det består av en aksel med to monoblokk-hjul presset på, samt et tannhjul i reduktoren. Hjulets rullesirkeldiameter er 1250 mm. Hver aksel bærer et pinjonghjul koblet til motoren via en helisk girkasse.',
  },
  ws_axle_t: { ru: '1. Ось', ua: '1. Вісь', en: '1. Axle', no: '1. Aksel' },
  ws_axle: {
    ru: 'Кованая стальная ось (сталь 45). Имеет подступичные части и шейки для буксовых подшипников. Шейки опираются в буксовые узлы тележки через цилиндрические роликовые подшипники.',
    ua: 'Кована сталева вісь (сталь 45). Має підматочинні частини та шийки для буксових підшипників. Шийки спираються в буксові вузли візка через циліндричні роликові підшипники.',
    en: 'Forged steel axle (steel grade 45). Has hub sections and journals for axlebox bearings. The journals ride in the bogie axleboxes through cylindrical roller bearings.',
    no: 'Smidd stålaksel (ståltype 45). Har navseksjoner og lagertapper for akselbokslagre. Tappene hviler i boggiens akselbokser gjennom sylindriske rullelager.',
  },
  ws_wheels_t: { ru: '2. Колёса', ua: '2. Колеса', en: '2. Wheels', no: '2. Hjul' },
  ws_wheels: {
    ru: 'Цельнокатаные стальные колёса. Профиль катания — конический с гребнем (ГОСТ). Гребень предотвращает сход с рельса. Колёса запрессовываются на ось с натягом 0,18–0,25 мм. При износе производится обточка на колёсотокарном станке.',
    ua: 'Суцільнокатані сталеві колеса. Профіль катання — конічний з гребенем (ГОСТ). Гребінь запобігає сходу з рейки. Колеса запресовуються на вісь з натягом 0,18–0,25 мм. При зносі виконується обточування на колесотокарному верстаті.',
    en: 'Monoblock rolled-steel wheels. Conical tread with a flange (GOST). The flange prevents derailment. Pressed onto the axle with an interference fit of 0.18–0.25 mm. When worn, the wheel is re-profiled on a wheel lathe.',
    no: 'Monoblokk valsede stålhjul. Konisk løpeflate med flens (GOST). Flensen hindrer avsporing. Presset på akselen med pasningstoleranse 0,18–0,25 mm. Ved slitasje dreies hjulet opp på en hjuldreiebenk.',
  },
  ws_gear_t: { ru: '3. Зубчатое колесо', ua: '3. Зубчасте колесо', en: '3. Gear wheel', no: '3. Tannhjul' },
  ws_gear: {
    ru: 'Большое зубчатое колесо редуктора закреплено на оси рядом с колесом. Передаточное число: i = 3,826. Косозубая передача снижает шум и повышает плавность хода.',
    ua: 'Велике зубчасте колесо редуктора закріплене на осі поруч з колесом. Передавальне число: i = 3,826. Косозуба передача знижує шум і підвищує плавність ходу.',
    en: 'The large gear of the reducer is fixed on the axle beside the wheel. Gear ratio: i = 3.826. Helical teeth reduce noise and improve smooth power transfer.',
    no: 'Det store tannhjulet i reduktoren er festet på akselen ved siden av hjulet. Girtall: i = 3,826. Skrå tenner reduserer støy og forbedrer jevn kraftoverføring.',
  },
  ws_box_t: { ru: '4. Букса', ua: '4. Букса', en: '4. Axlebox', no: '4. Akselboks' },
  ws_box: {
    ru: 'Букса — узел на конце оси, соединяющий колёсную пару с рамой тележки. Внутри — роликовые подшипники, позволяющие оси вращаться и передающие вес электровоза на колёса. Букса также воспринимает тяговые и тормозные усилия. На ЧС-7 параллельно пружинам буксового подвешивания установлены гидравлические гасители колебаний (демпферы).',
    ua: 'Букса — вузол на кінці осі, що з’єднує колісну пару з рамою візка. Усередині — роликові підшипники, що дозволяють осі обертатися й передають вагу електровоза на колеса. Букса також сприймає тягові й гальмівні зусилля. На ЧС-7 паралельно пружинам буксового підвішування встановлені гідравлічні гасителі коливань (демпфери).',
    en: 'The axlebox is the assembly at the end of the axle connecting the wheelset to the bogie frame. Inside are roller bearings that let the axle rotate and transfer the locomotive’s weight to the wheels. It also absorbs tractive and braking forces. On the ChS-7, hydraulic dampers are fitted in parallel with the axlebox suspension springs.',
    no: 'Akselboksen er enheten på enden av akselen som forbinder hjulsettet med boggirammen. Inni er rullelager som lar akselen rotere og overfører lokomotivets vekt til hjulene. Den absorberer også trekk- og bremsekrefter. På ČS-7 er hydrauliske dempere montert parallelt med akselbokens fjærer.',
  },

  // ---------- AUX ----------
  aux_intro_t: { ru: 'Общий принцип', ua: 'Загальний принцип', en: 'General principle', no: 'Generelt prinsipp' },
  aux_intro: {
    ru: 'Вспомогательные машины обеспечивают охлаждение, вентиляцию, компрессию воздуха и работу другого оборудования. Питаются от расщепителя фаз (РФ) или вспомогательного трансформатора, получая трёхфазный ток 380 В.',
    ua: 'Допоміжні машини забезпечують охолодження, вентиляцію, компресію повітря та роботу іншого обладнання. Живляться від розщеплювача фаз (РФ) або допоміжного трансформатора, отримуючи трифазний струм 380 В.',
    en: 'Auxiliary machines provide cooling, ventilation, air compression and other systems. They are powered by a phase splitter (РФ) or auxiliary transformer, receiving 3-phase 380 V.',
    no: 'Hjelpemaskiner gir kjøling, ventilasjon, luftkompresjon og andre systemer. De forsynes av en fasesplitter (РФ) eller hjelpetransformator, og mottar 3-fase 380 V.',
  },
  aux_fan_t: { ru: '1. Мотор-вентиляторы (МВ1–МВ4)', ua: '1. Мотор-вентилятори (МВ1–МВ4)', en: '1. Motor-fans (MV1–MV4)', no: '1. Motor-vifter (MV1–MV4)' },
  aux_fan: {
    ru: 'Четыре мотор-вентилятора обеспечивают принудительную вентиляцию тяговых двигателей и выпрямителей. Асинхронные двигатели ~17 кВт. При недостаточной вентиляции тепловая защита отключает двигатели.',
    ua: 'Чотири мотор-вентилятори забезпечують примусову вентиляцію тягових двигунів і випрямлячів. Асинхронні двигуни ~17 кВт. При недостатній вентиляції теплове реле вимикає двигуни.',
    en: 'Four motor-fans force-ventilate the traction motors and rectifiers. Induction motors ~17 kW. If airflow is insufficient, thermal protection trips the motors.',
    no: 'Fire motor-vifter tvangsventilerer trekkraftmotorer og likerettere. Induksjonsmotorer ~17 kW. Ved utilstrekkelig luftstrøm kobler termisk vern ut motorene.',
  },
  aux_comp_t: { ru: '2. Мотор-компрессоры (МК1, МК2)', ua: '2. Мотор-компресори (МК1, МК2)', en: '2. Motor-compressors (MK1, MK2)', no: '2. Motor-kompressorer (MK1, MK2)' },
  aux_comp: {
    ru: 'Два компрессора питают пневматическую систему тормозов. Поддерживают давление в главных резервуарах 7,5–9,2 кгс/см² (≈7,3–8,9 атм). Запуск автоматический по реле давления.',
    ua: 'Два компресори живлять пневматичну систему гальм. Підтримують тиск у головних резервуарах 7,5–9,2 кгс/см² (≈7,3–8,9 атм). Запуск автоматичний за реле тиску.',
    en: 'Two compressors supply the pneumatic brake system. They maintain main-reservoir pressure of 7.5–9.2 kgf/cm² (≈7.3–8.9 atm). Start-up is automatic via a pressure governor.',
    no: 'To kompressorer forsyner det pneumatiske bremsesystemet. De holder hovedtanktrykk på 7,5–9,2 kgf/cm² (≈7,3–8,9 atm). Oppstart er automatisk via en trykkregulator.',
  },
  aux_ps_t: { ru: '3. Расщепитель фаз (РФ)', ua: '3. Розщеплювач фаз (РФ)', en: '3. Phase splitter (РФ)', no: '3. Fasesplitter (РФ)' },
  aux_ps: {
    ru: 'Асинхронный двигатель-генератор, преобразующий однофазное питание в трёхфазное 380 В. Ключевой узел: при отказе останавливаются вентиляторы и компрессоры. Запускается первым.',
    ua: 'Асинхронний двигун-генератор, що перетворює однофазне живлення на трифазне 380 В. Ключовий вузол: при відмові зупиняються вентилятори й компресори. Запускається першим.',
    en: 'An induction motor-generator converting single-phase power into 3-phase 380 V. A critical unit: if it fails, fans and compressors stop. It starts first.',
    no: 'En induksjonsmotor-generator som omformer enfaset effekt til 3-fase 380 V. En kritisk enhet: svikter den, stopper vifter og kompressorer. Den starter først.',
  },
  aux_pump_t: { ru: '4. Мотор-насос (МН)', ua: '4. Мотор-насос (МН)', en: '4. Oil pump motor (MN)', no: '4. Oljepumpe-motor (MN)' },
  aux_pump: {
    ru: 'Прокачивает масло через систему охлаждения тягового трансформатора. Масло охлаждается в радиаторах с обдувом. При перегреве выше 95 °С срабатывает защита.',
    ua: 'Прокачує оливу через систему охолодження тягового трансформатора. Олива охолоджується в радіаторах з обдувом. При перегріві понад 95 °С спрацьовує захист.',
    en: 'Circulates oil through the traction transformer cooling system. Oil is cooled in blown radiators. If it exceeds 95 °C, protection trips.',
    no: 'Sirkulerer olje gjennom kjølesystemet til trekkrafttransformatoren. Olje kjøles i radiatorer med vifteblåsing. Overstiger den 95 °C, utløser vernet.',
  },

  // ---------- MOTOR ----------
  mo_type_t: { ru: 'Тип: AL-4846eT (Škoda)', ua: 'Тип: AL-4846eT (Škoda)', en: 'Type: AL-4846eT (Škoda)', no: 'Type: AL-4846eT (Škoda)' },
  mo_type: {
    ru: 'Коллекторный двигатель постоянного тока с последовательным возбуждением. Питается выпрямленным током от кремниевых выпрямителей. Часовая мощность одного ТЭД ~700 кВт; всего 8 двигателей.',
    ua: 'Колекторний двигун постійного струму з послідовним збудженням. Живиться випрямленим струмом від кремнієвих випрямлячів. Годинна потужність одного ТЕД ~700 кВт; усього 8 двигунів.',
    en: 'A series-wound DC commutator motor. Powered by rectified current from silicon rectifiers. Hourly power per motor ~700 kW; 8 motors total.',
    no: 'En serieviklet DC-kommutatormotor. Drives av likerettet strøm fra silisiumlikerettere. Timeeffekt per motor ~700 kW; 8 motorer totalt.',
  },
  mo_poles_t: { ru: 'Главные и дополнительные полюса', ua: 'Головні та додаткові полюси', en: 'Main poles & interpoles', no: 'Hovedpoler og tilleggpoler' },
  mo_poles: {
    ru: 'Главные полюса (4): создают основной магнитный поток. Дополнительные полюса (4): между главными, компенсируют реакцию якоря и улучшают коммутацию, уменьшая искрение.',
    ua: 'Головні полюси (4): створюють основний магнітний потік. Додаткові полюси (4): між головними, компенсують реакцію якоря та поліпшують комутацію, зменшуючи іскріння.',
    en: 'Main poles (4): create the main magnetic flux. Interpoles (4): between the main poles, they compensate for armature reaction and improve commutation, reducing sparking.',
    no: 'Hovedpoler (4): skaper hovedmagnetfluksen. Tilleggpoler (4): mellom hovedpolene, kompenserer for ankerreaksjon og forbedrer kommutering, og reduserer gnistdannelse.',
  },
  mo_arm_t: { ru: 'Якорь и коллектор', ua: 'Якір і колектор', en: 'Armature & commutator', no: 'Anker og kommutator' },
  mo_arm: {
    ru: 'Якорь — вращающаяся часть, набран из листов электротехнической стали. Коллектор — медные пластины со слюдяной изоляцией; электрографитовые щётки снимают ток с якоря. Охлаждается принудительной вентиляцией.',
    ua: 'Якір — обертова частина, набраний з листів електротехнічної сталі. Колектор — мідні пластини зі слюдяною ізоляцією; електрографітові щітки знімають струм з якоря. Охолоджується примусовою вентиляцією.',
    en: 'Armature — the rotating part, laminated from electrical-grade steel. Commutator — copper segments with mica insulation; carbon brushes collect current from the armature. Cooled by forced ventilation.',
    no: 'Anker — den roterende delen, laminert av elektrisk stål. Kommutator — kobbersegmenter med glimmer-isolasjon; karbonbørster samler strøm fra ankeret. Kjøles med tvungen ventilasjon.',
  },
  mo_susp_t: { ru: 'Подвеска двигателя', ua: 'Підвішування двигуна', en: 'Motor suspension', no: 'Motoroppheng' },
  mo_susp: {
    ru: 'Опорно-осевое подвешивание («трамвайный тип»): одна сторона опирается на ось через моторно-осевые подшипники, другая — на раму тележки через упругие элементы. Просто, но увеличивает неподрессоренную массу.',
    ua: 'Опорно-осьове підвішування («трамвайний тип»): одна сторона спирається на вісь через моторно-осьові підшипники, інша — на раму візка через пружні елементи. Просто, але збільшує непідресорену масу.',
    en: 'Axle-hung (nose-suspended) mounting: one side rests on the axle via axle bearings, the other on the bogie frame via elastic elements. Simple, but increases unsprung mass.',
    no: 'Akselhengt (neseoppheng): den ene siden hviler på akselen via aksellager, den andre på boggirammen via elastiske elementer. Enkelt, men øker ufjæret masse.',
  },

  // ---------- BRAKING & SIGNALS ----------
  rh_t: { ru: 'Что такое реостат', ua: 'Що таке реостат', en: 'What is a rheostat', no: 'Hva er en reostat' },
  rh: {
    ru: 'Реостат — регулируемый резистор (сопротивление), которым управляют силой тока в цепи (закон Ома: I = U/R). На ЧС-7 реостаты («пуско-тормозные резисторы») при пуске ограничивают пусковой ток двигателей, а при торможении принимают энергию двигателей-генераторов и превращают её в тепло. Физически это блоки металлических лент из высокоомного сплава (фехраль), охлаждаемые обдувом.',
    ua: 'Реостат — регульований резистор (опір), яким керують силою струму в колі (закон Ома: I = U/R). На ЧС-7 реостати («пуско-гальмівні резистори») при пуску обмежують пусковий струм двигунів, а при гальмуванні приймають енергію двигунів-генераторів і перетворюють її на тепло. Фізично це блоки металевих стрічок із високоомного сплаву (фехраль), охолоджувані обдувом.',
    en: 'A rheostat is an adjustable resistor controlling the current in a circuit (Ohm’s law: I = U/R). On the ChS-7 the rheostats (“starting-braking resistors”) limit the inrush current to the motors during start-up, and during braking absorb the energy from the motors acting as generators, turning it into heat. Physically they are banks of metal ribbons of high-resistance alloy (fechral), cooled by forced air.',
    no: 'En reostat er en justerbar motstand som styrer strømmen i en krets (Ohms lov: I = U/R). På ČS-7 begrenser reostatene («start-bremsemotstander») innkoblingsstrømmen til motorene ved oppstart, og under bremsing absorberer de energien fra motorene som virker som generatorer, og gjør den til varme. Fysisk er de blokker av metallbånd i høymotstandslegering (fechral), kjølt av tvungen luft.',
  },
  rb_t: { ru: 'Как работает реостатное торможение', ua: 'Як працює реостатне гальмування', en: 'How rheostatic braking works', no: 'Hvordan reostatisk bremsing virker' },
  rb: {
    ru: '1) Двигатели отключаются от питания и переходят в режим генераторов. 2) Колёса крутят якоря, и те вырабатывают ток. 3) Ток направляется на реостаты и превращается в тепло. 4) Двигатель-генератор сопротивляется вращению — возникает тормозной момент, поезд замедляется без износа колодок. Главное отличие ЧС-7: энергия «сжигается» на резисторах (в отличие от рекуперации, где она возвращается в сеть).',
    ua: '1) Двигуни відключаються від живлення й переходять у режим генераторів. 2) Колеса крутять якорі, і ті виробляють струм. 3) Струм направляється на реостати й перетворюється на тепло. 4) Двигун-генератор чинить опір обертанню — виникає гальмівний момент, поїзд сповільнюється без зносу колодок. Головна відмінність ЧС-7: енергія «спалюється» на резисторах (на відміну від рекуперації, де вона повертається в мережу).',
    en: '1) The motors are disconnected from power and switch to generator mode. 2) The wheels spin the armatures, which produce current. 3) The current is routed to the rheostats and turned into heat. 4) The motor-generator resists rotation — a braking torque arises and the train slows without shoe wear. Key ChS-7 difference: the energy is “burned off” on the resistors (unlike regeneration, where it is returned to the grid).',
    no: '1) Motorene kobles fra strøm og går over i generatormodus. 2) Hjulene spinner ankrene, som produserer strøm. 3) Strømmen ledes til reostatene og blir til varme. 4) Motor-generatoren motsetter seg rotasjon — et bremsemoment oppstår og toget bremser uten skoslitasje. Viktig ČS-7-forskjell: energien «brennes av» på motstandene (i motsetning til regenerering, der den føres tilbake til nettet).',
  },
  rb_speed: {
    ru: 'По данным: каждая секция имеет независимый реостатный тормоз, используемый до 20 км/ч при исправной защите от боксования/юза или до 50 км/ч при отключённой защите. При давлении в тормозных цилиндрах более ~0,8 кгс/см² реле давления разбирает схему реостатного тормоза. На практике применяется редко.',
    ua: 'За даними: кожна секція має незалежний реостатний гальм, що використовується до 20 км/год при справному захисті від боксування/юза або до 50 км/год при відключеному захисті. При тиску в гальмівних циліндрах понад ~0,8 кгс/см² реле тиску розбирає схему реостатного гальма. На практиці застосовується рідко.',
    en: 'Per sources: each section has an independent rheostatic brake, usable up to 20 km/h with working anti-slip/anti-skid protection or up to 50 km/h with it disabled. When brake-cylinder pressure exceeds ~0.8 kgf/cm², a pressure relay disassembles the rheostatic-brake circuit. In practice it is rarely used.',
    no: 'Ifølge kilder: hver seksjon har en uavhengig reostatisk brems, brukbar opptil 20 km/t med fungerende anti-skli/anti-glid-vern eller opptil 50 km/t uten. Når bremsesylindertrykket overstiger ~0,8 kgf/cm², kobler et trykkrelé ut den reostatiske bremsekretsen. I praksis brukes den sjelden.',
  },
  sig_intro: {
    ru: 'Железнодорожный светофор сообщает машинисту о состоянии пути на несколько блок-участков вперёд (до 1–1,5 км). Основные значения огней:',
    ua: 'Залізничний світлофор повідомляє машиніста про стан колії на кілька блок-ділянок уперед (до 1–1,5 км). Основні значення вогнів:',
    en: 'A railway signal tells the driver about track conditions several block sections ahead (up to 1–1.5 km). Main aspect meanings:',
    no: 'Et jernbanesignal forteller føreren om sportilstand flere blokkstrekninger fremover (opptil 1–1,5 km). Hovedbetydninger:',
  },
  sig_green: { ru: 'Один зелёный — движение с установленной скоростью, путь свободен.', ua: 'Один зелений — рух із встановленою швидкістю, шлях вільний.', en: 'One green — proceed at the established speed, line clear.', no: 'Ett grønt — kjør i fastsatt hastighet, fri linje.' },
  sig_yflash: { ru: 'Один жёлтый мигающий — установленная скорость; следующий светофор открыт, но потребует снижения.', ua: 'Один жовтий миготливий — встановлена швидкість; наступний світлофор відкритий, але вимагатиме зниження.', en: 'One flashing yellow — established speed; next signal open but will require slowing.', no: 'Ett blinkende gult — fastsatt hastighet; neste signal åpent men krever nedbremsing.' },
  sig_yellow: { ru: 'Один жёлтый — движение с готовностью остановиться; следующий светофор закрыт.', ua: 'Один жовтий — рух із готовністю зупинитися; наступний світлофор закритий.', en: 'One yellow — proceed prepared to stop; next signal is closed.', no: 'Ett gult — kjør forberedt på å stoppe; neste signal er stengt.' },
  sig_2yellow: { ru: 'Два жёлтых — сниженная скорость, движение по боковому пути с готовностью остановиться.', ua: 'Два жовтих — знижена швидкість, рух по боковій колії з готовністю зупинитися.', en: 'Two yellow — reduced speed, diverging onto a side track prepared to stop.', no: 'To gule — redusert hastighet, avvik til sidespor forberedt på å stoppe.' },
  sig_red: { ru: 'Один красный — «Стой!» Проезд запрещён.', ua: 'Один червоний — «Стій!» Проїзд заборонений.', en: 'One red — “Stop!” Passage forbidden.', no: 'Ett rødt — «Stopp!» Passering forbudt.' },
  sig_alsn_t: { ru: 'АЛСН — локомотивная сигнализация', ua: 'АЛСН — локомотивна сигналізація', en: 'ALSN — cab signalling', no: 'ALSN — hyttesignalering' },
  sig_alsn: {
    ru: 'Показание путевого светофора передаётся на пульт в кабине через рельсовую цепь. Система контролирует превышение скорости и проверяет бдительность машиниста; если он не реагирует, срабатывает автостоп и поезд тормозится автоматически.',
    ua: 'Показання колійного світлофора передається на пульт у кабіні через рейкове коло. Система контролює перевищення швидкості й перевіряє пильність машиніста; якщо він не реагує, спрацьовує автостоп і поїзд гальмується автоматично.',
    en: 'The wayside signal’s aspect is transmitted to a cab display via the track circuit. The system monitors overspeed and checks driver vigilance; if the driver does not respond, an autostop triggers and the train brakes automatically.',
    no: 'Det utvendige signalets aspekt overføres til en hyttedisplay via sporkretsen. Systemet overvåker overhastighet og sjekker førerens årvåkenhet; reagerer ikke føreren, utløses autostopp og toget bremser automatisk.',
  },
  cmp: {
    th_param: { ru: 'Параметр', ua: 'Параметр', en: 'Parameter', no: 'Parameter' },
    motors_l: { ru: 'Тяговые двигатели', ua: 'Тягові двигуни', en: 'Traction motors', no: 'Trekkraftmotorer' },
    motors_a: { ru: 'Коллекторные постоянного тока', ua: 'Колекторні постійного струму', en: 'DC commutator', no: 'DC-kommutator' },
    motors_b: { ru: 'Асинхронные (без коллектора)', ua: 'Асинхронні (без колектора)', en: 'Asynchronous (no commutator)', no: 'Asynkrone (uten kommutator)' },
    brake_l: { ru: 'Электрический тормоз', ua: 'Електричне гальмо', en: 'Electric brake', no: 'Elektrisk brems' },
    brake_a: { ru: 'Только реостатный (энергия в тепло)', ua: 'Тільки реостатний (енергія в тепло)', en: 'Rheostatic only (energy → heat)', no: 'Kun reostatisk (energi → varme)' },
    brake_b: { ru: 'Рекуперативный + реостатный', ua: 'Рекуперативний + реостатний', en: 'Regenerative + rheostatic', no: 'Regenerativ + reostatisk' },
    susp_l: { ru: 'Подвешивание ТЭД', ua: 'Підвішування ТЕД', en: 'Motor suspension', no: 'Motoroppheng' },
    susp_a: { ru: 'Опорно-осевое', ua: 'Опорно-осьове', en: 'Axle-hung', no: 'Akselhengt' },
    susp_b: { ru: 'Опорно-рамное (меньше неподрес. массы)', ua: 'Опорно-рамне (менше непідрес. маси)', en: 'Frame-mounted (less unsprung mass)', no: 'Rammemontert (mindre ufjæret masse)' },
    sys_l: { ru: 'Система питания', ua: 'Система живлення', en: 'Power system', no: 'Strømsystem' },
    sys_a: { ru: 'Только 25 кВ AC', ua: 'Тільки 25 кВ AC', en: '25 kV AC only', no: 'Kun 25 kV AC' },
    sys_b: { ru: 'Двухсистемная: 25 кВ AC + 3 кВ DC', ua: 'Двосистемна: 25 кВ AC + 3 кВ DC', en: 'Dual-system: 25 kV AC + 3 kV DC', no: 'Tosystem: 25 kV AC + 3 kV DC' },
    ctrl_l: { ru: 'Управление', ua: 'Керування', en: 'Control', no: 'Styring' },
    ctrl_a: { ru: 'Релейно-контакторное', ua: 'Релейно-контакторне', en: 'Relay-contactor', no: 'Relé-kontaktor' },
    ctrl_b: { ru: 'Микропроцессорное', ua: 'Мікропроцесорне', en: 'Microprocessor', no: 'Mikroprosessor' },
    spd_l: { ru: 'Скорость', ua: 'Швидкість', en: 'Speed', no: 'Hastighet' },
  },
  cmp_note: {
    ru: 'Главный современный аналог-замена ЧС-7 — ЭП20 (Новочеркасск, с 2011 г.), частично ЭП2К. ЭП20 заменяет ЧС7 и ЧС8, применяет асинхронные двигатели и рекуперативное торможение, возвращающее энергию в сеть вместо сжигания на резисторах.',
    ua: 'Головний сучасний аналог-заміна ЧС-7 — ЕП20 (Новочеркаськ, з 2011 р.), частково ЕП2К. ЕП20 замінює ЧС7 і ЧС8, застосовує асинхронні двигуни й рекуперативне гальмування, що повертає енергію в мережу замість спалювання на резисторах.',
    en: 'The main modern replacement for the ChS-7 is the EP20 (Novocherkassk, since 2011), partly the EP2K. The EP20 replaces the ChS7 and ChS8, using asynchronous motors and regenerative braking that returns energy to the grid instead of burning it on resistors.',
    no: 'Den viktigste moderne erstatningen for ČS-7 er EP20 (Novotsjerkassk, fra 2011), delvis EP2K. EP20 erstatter ČS7 og ČS8, bruker asynkrone motorer og regenerativ bremsing som fører energi tilbake til nettet i stedet for å brenne den på motstander.',
  },

  // ---------- SCHEMA STEPS ----------
  sc_intro: {
    ru: 'Схема ЧС-7 состоит из силовой цепи (высокое напряжение, тяга) и цепей управления (низкое напряжение, автоматика). Читайте их отдельно.',
    ua: 'Схема ЧС-7 складається з силового кола (висока напруга, тяга) і кіл керування (низька напруга, автоматика). Читайте їх окремо.',
    en: 'The ChS-7 diagram comprises a power circuit (high voltage, traction) and control circuits (low voltage, automation). Read them separately.',
    no: 'ČS-7-skjemaet består av en kraftkrets (høyspenning, trekkraft) og styrekretser (lavspenning, automatikk). Les dem hver for seg.',
  },
  sc1_t: { ru: 'Найдите токоприёмник', ua: 'Знайдіть струмоприймач', en: 'Find the pantograph', no: 'Finn strømavtakeren' },
  sc1: {
    ru: 'Схема начинается с токоприёмника (ТП) — он всегда вверху. От него ток идёт вниз: ГВ → трансформатор → выпрямитель → тяговые двигатели → рельс. Ищи путь тока от «+» до рельса «−».',
    ua: 'Схема починається зі струмоприймача (ТП) — він завжди вгорі. Від нього струм іде вниз: ГВ → трансформатор → випрямляч → тягові двигуни → рейка. Шукай шлях струму від «+» до рейки «−».',
    en: 'The diagram starts with the pantograph (ТП) — always at the top. Current flows down: breaker → transformer → rectifier → motors → rail. Trace the path from “+” to the “−” rail.',
    no: 'Skjemaet starter med strømavtakeren (ТП) — alltid øverst. Strøm flyter ned: bryter → transformator → likeretter → motorer → skinne. Spor veien fra «+» til «−»-skinnen.',
  },
  sc2_t: { ru: 'Силовая цепь — жирные линии', ua: 'Силове коло — жирні лінії', en: 'Power circuit — thick lines', no: 'Kraftkrets — tykke linjer' },
  sc2: {
    ru: 'Жирные линии = силовая цепь: ТП → ГВ → ТА → ВУ → ТД → рельс. 25 кВ на первичной стороне трансформатора, до ~1500 В на двигателях.',
    ua: 'Жирні лінії = силове коло: ТП → ГВ → ТА → ВУ → ТД → рейка. 25 кВ на первинній стороні трансформатора, до ~1500 В на двигунах.',
    en: 'Thick lines = power circuit: Panto → breaker → transformer → rectifier → motors → rail. 25 kV at transformer primary, down to ~1500 V at motors.',
    no: 'Tykke linjer = kraftkrets: Panto → bryter → transformator → likeretter → motorer → skinne. 25 kV på transformatorprimær, ned til ~1500 V ved motorer.',
  },
  sc3_t: { ru: 'Цепи управления — тонкие линии', ua: 'Кола керування — тонкі лінії', en: 'Control circuits — thin lines', no: 'Styrekretser — tynne linjer' },
  sc3: {
    ru: 'Тонкие линии = цепи управления (50 или 110 В от аккумулятора): контакторы (КМ), реле (РД, РТ, РМ), кнопки (КН). Контакты реле показаны вдали от аппарата — ищи по имени.',
    ua: 'Тонкі лінії = кола керування (50 або 110 В від акумулятора): контактори (КМ), реле (РД, РТ, РМ), кнопки (КН). Контакти реле показані осторонь від апарата — шукай за іменем.',
    en: 'Thin lines = control circuits (50 or 110 V from battery): contactors (КМ), relays (РД, РТ, РМ), pushbuttons (КН). Relay contacts appear away from the device — find them by name.',
    no: 'Tynne linjer = styrekretser (50 eller 110 V fra batteri): kontaktorer (КМ), releer (РД, РТ, РМ), trykknapper (КН). Relékontakter vises adskilt fra enheten — finn dem etter navn.',
  },
  sc4_t: { ru: 'Контакты НР / НЗ — NO / NC', ua: 'Контакти НР / НЗ — NO / NC', en: 'NO / NC contacts', no: 'NO / NC-kontakter' },
  sc4: {
    ru: 'НР (нормально разомкнутый) — разомкнут в покое, замыкается при срабатывании. НЗ (нормально замкнутый) — замкнут в покое, размыкается при срабатывании.',
    ua: 'НР (нормально розімкнений) — розімкнений у спокої, замикається при спрацюванні. НЗ (нормально замкнений) — замкнений у спокої, розмикається при спрацюванні.',
    en: 'NO (normally open) — open at rest, closes when energized. NC (normally closed) — closed at rest, opens when energized.',
    no: 'NO (normalt åpen) — åpen i hvile, lukkes ved aktivering. NC (normalt lukket) — lukket i hvile, åpnes ved aktivering.',
  },
  sc5_t: { ru: 'Читай пошагово', ua: 'Читай покроково', en: 'Read step by step', no: 'Les trinn for trinn' },
  sc5: {
    ru: '(1) Найди «+». (2) Иди по замкнутым контактам. (3) Найди потребитель (катушку, двигатель). (4) Убедись, что цепь замкнута до «−». (5) Проверь условия замыкания каждого контакта.',
    ua: '(1) Знайди «+». (2) Іди по замкнених контактах. (3) Знайди споживач (котушку, двигун). (4) Переконайся, що коло замкнене до «−». (5) Перевір умови замикання кожного контакту.',
    en: '(1) Find “+”. (2) Trace through closed contacts. (3) Find the load (coil, motor). (4) Verify the circuit reaches “−”. (5) Check each contact’s closing conditions.',
    no: '(1) Finn «+». (2) Spor gjennom lukkede kontakter. (3) Finn belastningen (spole, motor). (4) Bekreft at kretsen når «−». (5) Sjekk hver kontakts lukkebetingelser.',
  },
  sc_warn: {
    ru: 'Схема ЧС-7 многолистовая. Если цепь обрывается на одном листе, ищи продолжение на другом по адресу перехода. Одно реле может иметь катушку на одном листе, а контакты — на нескольких других.',
    ua: 'Схема ЧС-7 багатоаркушева. Якщо коло обривається на одному аркуші, шукай продовження на іншому за адресою переходу. Одне реле може мати котушку на одному аркуші, а контакти — на кількох інших.',
    en: 'The ChS-7 diagram spans multiple sheets. If a circuit breaks off on one sheet, find its continuation on another via the cross-reference. One relay may have its coil on one sheet and contacts on several others.',
    no: 'ČS-7-skjemaet går over flere ark. Brytes en krets på ett ark, finn fortsettelsen på et annet via kryssreferansen. Ett relé kan ha spolen på ett ark og kontakter på flere andre.',
  },
  sym_note: {
    ru: 'Система ГОСТ 2.721 / IEC 60617 с локальными адаптациями. Колонки переключаются языковыми кнопками вверху.',
    ua: 'Система ГОСТ 2.721 / IEC 60617 з локальними адаптаціями. Колонки перемикаються мовними кнопками вгорі.',
    en: 'GOST 2.721 / IEC 60617 system with local adaptations. Columns switch via the language buttons at the top.',
    no: 'GOST 2.721 / IEC 60617-system med lokale tilpasninger. Kolonner byttes via språkknappene øverst.',
  },
  th_symbol: { ru: 'Символ', ua: 'Символ', en: 'Symbol', no: 'Symbol' },

  // ---------- SVG LABELS ----------
  svg: {
    sectionA: { ru: 'СЕКЦИЯ А', ua: 'СЕКЦІЯ А', en: 'SECTION A', no: 'SEKSJON A' },
    sectionB: { ru: 'СЕКЦИЯ Б', ua: 'СЕКЦІЯ Б', en: 'SECTION B', no: 'SEKSJON B' },
    panto: { ru: 'ТП / Токопр.', ua: 'ТП / Струмопр.', en: 'Panto', no: 'Strømavt.' },
    transfRect: { ru: 'ТА·ВУ трансф.+выпр.', ua: 'ТА·ВУ трансф.+випр.', en: 'Transf+Rect', no: 'Transf+Likeretter' },
    bogie: { ru: 'ТЕЛЕЖКА', ua: 'ВІЗОК', en: 'BOGIE', no: 'BOGGI' },
    coupler: { ru: 'автосцепка СА-3', ua: 'автозчеплення СА-3', en: 'coupler SA-3', no: 'kobling SA-3' },
    rail: { ru: 'РЕЛЬС (−)', ua: 'РЕЙКА (−)', en: 'RAIL (−)', no: 'SKINNE (−)' },
    axleFormula: { ru: 'Осевая формула: 2(2о–2о) · Bo-Bo + Bo-Bo', ua: 'Осьова формула: 2(2о–2о) · Bo-Bo + Bo-Bo', en: 'Axle arrangement: 2(2о–2о) · Bo-Bo + Bo-Bo', no: 'Akselarrangement: 2(2о–2о) · Bo-Bo + Bo-Bo' },
    wheelset: { ru: 'КОЛЁСНАЯ ПАРА', ua: 'КОЛІСНА ПАРА', en: 'WHEELSET', no: 'HJULSETT' },
    axle: { ru: 'ОСЬ', ua: 'ВІСЬ', en: 'AXLE', no: 'AKSEL' },
    wheel: { ru: 'КОЛЕСО', ua: 'КОЛЕСО', en: 'WHEEL', no: 'HJUL' },
    gearWheel: { ru: 'ЗУБЧАТОЕ КОЛЕСО', ua: 'ЗУБЧАСТЕ КОЛЕСО', en: 'GEAR WHEEL', no: 'TANNHJUL' },
    pinion: { ru: 'ШЕСТЕРНЯ', ua: 'ШЕСТЕРНЯ', en: 'PINION', no: 'PINJONG' },
    motor: { ru: 'ТЭД / ДВИГ.', ua: 'ТЕД / ДВИГ.', en: 'MOTOR', no: 'MOTOR' },
    axlebox: { ru: 'БУКСА', ua: 'БУКСА', en: 'AXLEBOX', no: 'AKSELBOKS' },
    tractionMotor: { ru: 'ТЯГОВЫЙ ДВИГАТЕЛЬ', ua: 'ТЯГОВИЙ ДВИГУН', en: 'TRACTION MOTOR', no: 'TREKKRAFTMOTOR' },
    mainPoles: { ru: 'ГЛАВНЫЕ ПОЛЮСА', ua: 'ГОЛОВНІ ПОЛЮСИ', en: 'MAIN POLES', no: 'HOVEDPOLER' },
    interpoles: { ru: 'ДОП. ПОЛЮСА', ua: 'ДОД. ПОЛЮСИ', en: 'INTERPOLES', no: 'TILLEGGPOLER' },
    armature: { ru: 'ЯКОРЬ', ua: 'ЯКІР', en: 'ARMATURE', no: 'ANKER' },
    commutator: { ru: 'КОЛЛЕКТОР + ЩЁТКИ', ua: 'КОЛЕКТОР + ЩІТКИ', en: 'COMMUTATOR + BRUSHES', no: 'KOMMUTATOR + BØRSTER' },
    gearbox: { ru: 'РЕДУКТОР', ua: 'РЕДУКТОР', en: 'GEARBOX', no: 'GIRKASSE' },
    // braking diagram
    rbMotor: { ru: 'ДВИГАТЕЛЬ→ГЕНЕРАТОР', ua: 'ДВИГУН→ГЕНЕРАТОР', en: 'MOTOR→GENERATOR', no: 'MOTOR→GENERATOR' },
    rbResistor: { ru: 'РЕОСТАТ (резисторы)', ua: 'РЕОСТАТ (резистори)', en: 'RHEOSTAT (resistors)', no: 'REOSTAT (motstander)' },
    rbHeat: { ru: 'ТЕПЛО → воздух', ua: 'ТЕПЛО → повітря', en: 'HEAT → air', no: 'VARME → luft' },
    rbWheel: { ru: 'колесо вращает якорь', ua: 'колесо обертає якір', en: 'wheel spins armature', no: 'hjul spinner anker' },
    rbCurrent: { ru: 'ток', ua: 'струм', en: 'current', no: 'strøm' },
    rbFan: { ru: 'вентилятор', ua: 'вентилятор', en: 'fan', no: 'vifte' },
    // signal diagram
    sigGreen: { ru: 'ЗЕЛЁНЫЙ: полный ход', ua: 'ЗЕЛЕНИЙ: повний хід', en: 'GREEN: proceed', no: 'GRØNT: kjør' },
    sigYellow: { ru: 'ЖЁЛТЫЙ: готовься стоять', ua: 'ЖОВТИЙ: готуйся стати', en: 'YELLOW: prepare to stop', no: 'GULT: forbered stopp' },
    sigRed: { ru: 'КРАСНЫЙ: СТОЙ!', ua: 'ЧЕРВОНИЙ: СТІЙ!', en: 'RED: STOP!', no: 'RØDT: STOPP!' },
  },
};

// flatten helper: I18N.get('hdr.general', lang)
function t(path, lang) {
  const parts = path.split('.');
  let node = I18N;
  for (const p of parts) { node = node && node[p]; }
  if (node && typeof node === 'object' && node[lang] != null) return node[lang];
  return (node == null) ? path : node;
}