const products = [
    {
        id: 1,
        name: "Whey Protein Isolate 1Kg",
        category: "Proteine",
        price:129,
        description: "True Whey este un concentrat proteic din zer...",
        image: "https://www.suplimente-vitabolic.ro/public/data_files/product-images/image-23-4598-368x368.jpg",
        flavors: ["Vanilie", "Căpșuni", "Ciocolată"],
        rating: 4,
    },
    {
        id: 2,
        name: "Vitamina C 1000 mg/60 caps",
        category: "Vitamine",
        price: 32.95,
        description: "Vitamina C 1000 mg ajută la menținerea funcționării...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fv%2Fi%2Fvitaminc_30_1.jpg&w=828&q=75",
    },
    {
        id: 3,
        name: "100% Whey Gold Standard",
        category: "Proteine",
        price: 160,
        description: "Gold Standard 100% Proteine din zer conțin o combinație...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fe%2Fu%2Feu_gsw_2lb_drc_6063135_fr.png&w=1920&q=75",
        flavors: ["Caramel", "Trufe"],
    },
    {
        id: 4,
        name: "Creatină Monohidrată 100%",
        category: "Creatina",
        price: 89.9,
        description: "Creatina monohidrată 100% este deosebit de populară...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fc%2Fr%2Fcreatine_monohydrate_unflavoured_500_g_gymbeam_2_.png&w=1920&q=75",
        flavors: ["Ananas", "Mar verde", "Lamaie"],
    },
    {
        id: 5,
        name: "Tricou Basic Black",
        category: "Haine",
        price: 49.9,
        description: "Tricoul Basic Black exprimă perfect determinarea...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2F1%2F-%2F1-basic-black-tee.jpg&w=1920&q=75",
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: 6,
        name: "Yum Yum Whey - BeastPink",
        category: "Proteine",
        price: 110,
        description: "Yum Yum Whey este un concentrat unic de proteine...",
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fy%2Fu%2Fyum_yum_white_chocolate_coconut_1000_g_beastpink_wb.png&w=1920&q=75",
    },

    {   id: 7,
        name: "Pantalon scurt cu buzunare",
        category: "Haine",
        price: 46,
        description: "Daca esti in cautarea uni șort confortabil care să fie adecvat pentru sport, incearcă acești pantaloni scurți excelenți pentru bărbați, " +
            "care dispun de o croială lejeră.!",
        image: "https://www.suplimente-vitabolic.ro/public/data_files/product-images/image-288-2048-368x368.jpg"},

    {   id: 8,
        name: "Thor Fuel + Vitargo",
        category: "Stimulente",
        price: 84.94,
        description: "Thor Fuel + Vitargo este un pre-antrenament complet pentru oricine dorește să " +
            "aibă grijă la maximum de performanța sa. Conține substanțe atent selecționate" +
            "asociate cu performanța sportivă și alimentarea cu sânge a mușchilor. Formula" +
            "include, de asemenea, cofeină, unul dintre cei mai cunoscuți stimulenți, și" +
            "carbohidratul brevetat Vitargo, care servește ca sursă de energie." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Ft%2Fh%2Fthor_vitargo_watermelon_600_g_gymbeam_1.png&w=828&q=75"},

    {   id: 9,
        name: "Serious Mass - Optimum Nutrition",
        category: "Gainere",
        price: 177.95,
        description: "Serious Mass este un gainer de calitate pentru dezvoltarea masei musculare, " +
            "volumului şi a forţei.  Fiecare doză de Serious Mass conţine mai mult de 1260 de" +
            "calorii și mai mult de 250 g de carbohidraţi complecşi și 50 g de proteine de" +
            "calitate – concentrat proteic din zer, cazeinat de calciu şi ovalbumină. Produsul" +
            "conţine şi glutamină, creatină, inositol, plus un complex de 25 de vitamine şi" +
            "minerale." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fu%2Fn%2Funtitled_design_-_2020-07-15t113726.125.png&w=828&q=75",
    },

    {   id: 10,
        name: "Omega 3",
        category: "Vitamine",
        price: 41.95,
        description: "Omega-3, include acidul eicosapentaenoic (EPA) și acidul docosahexaenoic" +
            "(DHA), sunt acizi grași benefici care se găsesc în uleiul de pește. Aceștia contribuie" +
            "la buna funcționare a inimii, în timp ce DHA însuși contribuie la menținerea unei" +
            "vederi bune și la buna funcționare a creierului. Acizii grași Omega-3 sunt, prin" +
            "urmare, ideali pentru îngrijirea sănătății." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fo%2Fm%2Fomega_3_240_saftgels_gymbeam_2.png&w=828&q=75"},

    {   id: 11,
        name: "Gainer Giant Mega Mass 4000",
        category: "Gainere",
        price: 299.95,
        description: "Giant Mega Mass 4000 este un gainer de calitate pentru construirea masei" +
            "musculare, a forței și creșterii în greutate. Aceasta va ajuta să obțineți" +
            "performanțe prin antrenamente de maximă intensitate, datorită combinației de" +
            "creatină și aportul mare de glucide. Are un conținut ridicat de aminoacizi BCAA," +
            "fiind îmbogățit cu vitamine și minerale." ,
        image: "https://gymbeam.ro/_next/image?url=https%3A%2F%2Fgymbeam.ro%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fw%2Fe%2Fweider_32545_mm4000_3kg_schoko_xii-mmxxii-1_0074_vs.jpg&w=828&q=75"},

    {   id: 12,
        name: "Blood & Guts Pre-Workout",
        category: "Stimulente",
        price: 127.54,
        description: "Pre-workoutul nostru Blood & Guts este numit după" +
            "metoda de antrenament al lui Dorian și este un produs" +
            "care vă ajută să vă intrați în mână și să vă depășiți" +
            "limitele la antrenamente!" ,
        image: "https://dynutrition.ro/cdn/shop/files/Photo_01_08c6cb1a-ec71-4e65-8422-1389c862660b_1800x1800.png?v=1731495594"},

    {   id: 13,
        name: "Vitamina E",
        category: "Vitamine",
        price: 24.9,
        description: "Vitamina E (Tocoferol) este un supliment alimentar care contribuie la protejarea" +
            "celulelor împotriva stresului oxidativ. Acest tip de stres este provocat" +
            "de dezechilibrul dintre radicalii liberi și antioxidanții din organism, care sunt o" +
            "parte naturală a acestuia. Vitamina E poate ajuta la reducerea efectelor acestui" +
            "dezechilibru. În plus, acest supliment este ușor de folosit și va fi apreciat de toți cei" +
            "care își doresc să-și susțină mai bine sănătatea și vitalitatea." ,
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/v/i/vitamin_e_60_caps_gymbeam_1.png ",
    },
    {
        id: 14,
        name: "Creatine Monohydrate - Amix",
        category: "Creatina",
        price: 69.9,
        description: "Creatine Monohydrate este o creatină monohidrată ultra-micronizată, ceea ce îi garantează puritatea și absorbția excelentă. Ajută la formarea masei musculare" +
            " și contribuie la regenerarea rapidă a mușchilor. Este eficientă deoarece oferă mai multă energie, îmbunătățește performanțele fizice și crește forța fizică.",
        image: "https://gymbeam.ro/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/a/x/ax_creatine-monohydrate_500g.png",
    },

    {
        id: 15,
        name: "Pro Whey - Concentrat proteic",
        category:"Proteine",
        price:59,
        description:"Pro Whey este un concentrat proteic din zer, creat pentru a sprijini dezvoltarea, definirea și recuperarea musculaturii în urma antrenamentelor." +
            " Contribuie la volumizarea fibrelor și celulelor musculare și la îmbunătățirea performanțelor, alimentând țesuturile musculare cu substanțe nutritive necesare pentru o dezvoltare sănătoasă.",
        image:"https://www.pronutrition.ro/media/bss/webp/media/catalog/product/cache/38dfb2ebfb185cfefa9428c12d33fbe2/p/r/pro-whey-450g-fata-white-ciocolata-raspberry-current-view.webp",
        flavors: ["Vanilie","Capsuni","Ciocolata"],
    },

    {
        id: 16,
        name: "Iso Whey Gold - concentrat, izolat, hidrolizat",
        category:"Proteine",
        price:165,
        description:"Formula produsului îmbină proprietățile izolatului proteic din zer cu cele ale concentratului pentru a crește rata de absorbție a proteinelor în țesutul muscular, maximizând rezultatele antrenamentelor tale. " +
            "În plus, compoziția produsului a fost îmbunătățită prin adăugarea hidroizolatului enzimatic precum și a unei game diversificate de aminoacizi esențiali și neesențiali.",
        image:"https://www.pronutrition.ro/media/bss/webp/media/catalog/product/cache/38dfb2ebfb185cfefa9428c12d33fbe2/i/s/iso-whey-gold-900g-ciocolata-current-view.webp",
        flavors: ["Ciocolata menta","White chocolate strawberry"],
    },

    {
        id: 17,
        name: "Creatine monohidrata powder",
        category: "Creatina",
        price: 85,
        description: "Creatina monohidrată joacă un rol foarte important în suplinirea rezervelor de ATP (adenozintrifosfat) din organism, principala sursă de energie folosită de celulele musculare." +
            " Creatine Powder va contribui la creșterea acestor rezerve, ajutându-te astfel să îți menții nivelul de forță și energie pe tot parcursul antrenamentelor, bucurându-te de o îmbunătățire radicală a rezultatelor tale.",
        image: "https://www.pronutrition.ro/media/bss/webp/media/catalog/product/cache/38dfb2ebfb185cfefa9428c12d33fbe2/c/r/creatina-pudra-china_-_copy_-_copy.webp",
        flavors: ["Ananas", "Mar verde", "Lamaie"],
    },

    {
        id: 18,
        name:"Creatine Powder Super - ActivLab",
        category:"Creatina",
        price: 113.9,
        description:"Creatine Powder Super conține creatină monohidrată pură sub formă de pulbere. " +
            "Creatina este potrivită atât pentru sportivi, cât și pentru persoanele active care caută un " +
            "supliment care să le susțină performanța sportivă. Creatina este o alegere perfectă, deoarece dă un boost de energie în timpul antrenamentelor intense.",
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/c/r/creatine_powder_super_blackcurrant-view-1-min.png",
        flavors: ["Mango","Capsuni","Lime"],
    },

    {   id: 19,
        name: "Critical Mass - Applied Nutrition",
        category: "Gainere",
        price: 166.9,
        description: "Critical Mass este un amestec all-in-one de proteine, carbohidrați și alte substanțe funcționale pentru sportivi" +
            " și persoane active. Datorită conținutului său de proteine, acesta va susține creșterea și menținerea masei musculare. " +
            "Carbohidrații vor avea grijă de refacerea energiei înainte și după antrenament. Pentru un efect maxim, acest gainer conține și aminoacizi, creatină, enzime digestive și probiotice." ,
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/c/r/critical_mass_2.4kg_professional_-_chocolate.png",
        flavors:["Ciocolata", "Banane", "Capsuni"],
    },

    {
        id: 20,
        name:"Whey Mass Gain - Megabol",
        category: "Gainere",
        price: 83.9,
        description: "Whey Mass Gain este un gainer de calitate, ce furnizează energie şi material de construcţie pentru dezvoltarea musculară. " +
            "Conţine un amestec de carbohidraţi cu grade de absorbţie diferite, ceea ce oferă posibilitatea furnizării rapide a glicogenului muscular, " +
            "precum şi concentrat proteic din zer (WPC), care ajută la o regenerare mai bună. Este destinat mai ales persoanelor care au probleme " +
            "de a pune masa musculară şi volum, dar şi pentru persoane cu un metabolism rapid.",
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/i/m/image_20_.png",
        flavors:["Caramel", "Capsuni", "Vanilie"],
    },

    {
        id: 21,
        name: "Mutant Mass - PVL",
        category: "Gainere",
        price: 114.9,
        description: "Mutant Mass este unul dintre amestecurile complexe care conține o proporție ridicată de carbohidrați" +
            " cu absorbție rapidă și proteine din concentrat de proteine din zer și matrice proteică (concentrat de proteine din lapte, " +
            "cazeină micelară și izolat de proteine din zer). Acesta ssprijină creșterea și menținerea mușchilor, precum și sănătatea oaselor. " +
            "Conține 1100 kcal per porție și are atât un gust deosebit, cât și o solubilitate fiabilă.",
        image:"https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/2/1/21502ex_mutant_mass_triple_chocolate_flavour_2.27_kg_5_lb_v2.00-r-l3.png",
        flavors:["Caramel", "Capsuni-Banane", "Inghetata de Vanilie"],
    },

    {   id: 22,
        name: "Beta Caroten ",
        category: "Vitamine",
        price: 19.9,
        description: "Beta-Caroten este un carotenoid care funcționează și ca precursor al vitaminei A, care are efect asupra menținerii sănătății pielii." +
            " De exemplu, se găsește în mod natural în morcovi. Această substanță este adesea recomandată persoanelor care caută un bronz natural perfect. " +
            "Acest lucru face ca Beta-Carotenul să fie ideal pentru îngrijirea unei pieli frumoase și sănătoase." ,
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/b/e/beta_carotene_provitamin_a_60_caps_gymbeam.png",
    },

    {   id: 23,
        name: "BOOM! 2.0 Stimulent de pre-antrenament",
        category: "Stimulente",
        price: 99.9,
        description: "BOOM! 2.0 este un supliment complet de pre-antrenament, creat în colaborare cu Marius Mitrache. " +
            "Acesta conține un amestec atent selecționat de 13 ingrediente, inclusiv citrulină, creatină, beta-alanină și " +
            "alte componente eficiente. În plus, datorită unei doze funcționale de cafeină, vă va oferi cu siguranță un boost" +
            "de energie înainte de antrenamente. BOOM! 2.0 Stimulent de pre-antrenament este aici pentru toți cei care doresc " +
            "să-și depășească limitele la maximum, în timpul fiecărei sesiuni de antrenament!   " ,
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/b/o/boom_2.0_preworkout_forest_fruit_400_g_gymbeam.png",
        falvors:["Fructe de padure"],
    },

    {   id: 24,
        name: "The Curse - JNX Sports",
        category: "Stimulente",
        price: 142.9,
        description: "The Curse este un supliment pre-antrenament supraîncărcat conceput atât pentru începători, " +
            "cât și pentru sportivii avansați care doresc să aibă grijă la maximum de performanța lor și să-și depășească limitele. " +
            "Formula sa este împărțită în trei componente distincte, fiecare concentrându-se pe energie, pompare și concentrare mentală." +
            " Dintre ingrediente se remarcă cafeina, care este un stimulent bine-cunoscut și creatina monohidrată. " ,
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/t/h/the-curse-watermelon-50-serve-drop-shadow.png",
        falvors:["Blue raspberry","Mar verde","Pepene rosu"],
    },

    {
        id: 25,
        name: "Salopetă pentru femei FIT Black",
        category: "Haine",
        price: 197.9,
        description: "Salopeta pentru femei FIT este o piesă de lux concepută pentru toate femeile care vor să iasă în evidență. " +
            "Este o combinație din colanți funcționali cu un top, care modelează perfect formele și accentuează curbele feminine. " +
            "Materialul din care este confecționat îndepărtează în mod eficeint transpirația, făcând-o perfectă chiar și pentru " +
            "cele mai intense antrenamente.",
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/w/o/women_s_fit_bodysuit_black_-_gymbeam_01.jpg",
        sizes: ["S", "XS", "M"],
    },

    {
        id: 26,
        name: "Hanorac Athlete Black White",
        category: "Haine",
        price: 197.9,
        description: "Hanoracul Athlete este un hanorac unic pentru bărbați cu glugă, conceput să vă însoțească în timpul celor mai intense antrenamente. " +
            "Datorită materialului confortabil și de înaltă calitate, îl veți purta cu plăcere în timpul antrenamentelor. În schimb, designul simplu " +
            "și modern vă va face să îl purtați chiar și în ținuta casual.",
        image: "https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/m/i/mikina-athlete-black-white-gymbeam_1_.png",
        sizes: ["M", "X", "XL"],
    },

    {
        id:27,
        name:"Shaker Steel 750 ml",
        category: "Accesorii",
        price: 37.9,
        description: "Shakerul Steel cu o capacitate de 750 ml este fabricat din oțel inoxidabil. " +
            "Comparativ cu un shaker din plastic este mai rezistent și mai igienic. În plus, " +
            "nu menține mirosul neplăcut și are o greutate mică. Shakerul are un capac cu filet ș" +
            "i este ideal pentru dizolvarea suplimentelor voastre nutritive.",
        image:"https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/k/l/kl-7068-1.jpg",
    },

    {
        id:28,
        name:"Bandaj pentru încheietura mâinii",
        category: "Accesorii",
        price: 32.9,
        description: "Bandajul pentru încheietura mâinii ajută la stabilizarea articulațiilor încheieturii mâinii pentru" +
            " a ajuta la protejarea acestora de suprasolicitare sau de leziuni. Ele sunt fabricate din material elastic și moale," +
            " ceea ce sporește confortul lor. Cu ajutorul închizătoarei puternice Velcro, le puteți strânge după preferințele voastre. " +
            "Sunt utile pentru antrenamentul de forță, precum și pentru purtare ocazională dacă încheieturile voastre au nevoie " +
            "de suport suplimentar.",
        image:"https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/z/a/zapastia1_1.jpg",
    },

    {
        id:29,
        name:"Bandaj din neopren pentru genunchi Conquer ",
        category: "Accesorii",
        price: 87.9,
        description: "Bandajul din neopren pentru genunchi Conquer este un accesoriu practic pentru stabilizarea genunchilor" +
            " în timpul sportului și a altor activități în timpul liber. Se mândrește cu un material plăcut și flexibil care " +
            "se mulează cu ușurință pe piciorul vostru și permite o gamă optimă de mișcare din orice poziție. Este ușor de întreținut și," +
            " prin urmare, vă va însoți cu siguranță la toate activitățile voastre pentru o perioadă lungă de timp. Pachetul conține 2 bucăți. ",
        image:"https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/n/e/neoprene_knee_bandage_conquer_neopr_nov_band_na_koleno_conquer_2_.jpg",
    },

    {
        id:30,
        name:"Minge fitness FitBall 85 cm ",
        category: "Accesorii",
        price: 53.9,
        description: "Fitball este o minge și un accesoriu fitness care ajută la îmbunătățirea echilibrului general și a posturii corecte a corpului. " +
            "Datorită formei instabile, veți fi nevoiți să mențineți o poziție corectă a bazinului. " +
            "Profitați la maxim de avantajele acestei mingi de fitness!   ",
        image:"https://gymbeam.ro/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/f/i/fitlopta_fitball_85_cm_gymbeam_3_.png",
    },
];