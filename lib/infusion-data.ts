// Reference data for the Infusions section, organized by medical specialty
// and by individual therapy/order-form, mirroring the live site's structure.

export interface InfusionGuideItem {
  name: string;
  indication: string;
}

export interface InfusionGuideSection {
  specialty: string;
  items: InfusionGuideItem[];
}

export const infusionGuideSections: InfusionGuideSection[] = [
  {
    specialty: "Rheumatology",
    items: [
      { name: "Actemra", indication: "Rheumatoid arthritis and giant cell arteritis" },
      { name: "Benlysta", indication: "Systemic lupus erythematosus" },
      { name: "Cimzia", indication: "Rheumatoid arthritis and ankylosing spondylitis" },
      { name: "Crysvita", indication: "X-linked hypophosphatemia and tumor-induced osteomalacia" },
      { name: "Ilaris", indication: "Various autoinflammatory conditions" },
      { name: "Krystexxa", indication: "Chronic gout in adults" },
      { name: "Orencia", indication: "Rheumatoid arthritis and psoriatic arthritis" },
      { name: "Saphnelo", indication: "Moderate to severe systemic lupus erythematosus" },
      { name: "Simponi Aria", indication: "Rheumatoid, psoriatic, and ankylosing spondylitis-related arthritis" },
    ],
  },
  {
    specialty: "Immunology",
    items: [
      { name: "Asceniv", indication: "Immune globulin replacement therapy" },
      { name: "Gammagard", indication: "Primary immunodeficiency disorders" },
      { name: "Gamunex-C", indication: "Various immunodeficiency conditions" },
      { name: "Octagam 5%/10%", indication: "Immune globulin replacement for immune disorders" },
      { name: "Panzyga", indication: "Chronic inflammatory demyelinating polyneuropathy" },
      { name: "Privigen", indication: "Primary immunodeficiency and chronic immune thrombocytopenic purpura" },
    ],
  },
  {
    specialty: "Pulmonology",
    items: [
      { name: "Fasenra", indication: "Severe eosinophilic asthma" },
      { name: "Tezspire", indication: "Severe asthma" },
      { name: "Xolair", indication: "Allergic asthma and chronic idiopathic urticaria" },
    ],
  },
  {
    specialty: "Gastroenterology",
    items: [
      { name: "Cimzia", indication: "Crohn's disease" },
      { name: "Entyvio", indication: "Ulcerative colitis and Crohn's disease" },
      { name: "Omvoh", indication: "Inflammatory bowel disease" },
      { name: "Remicade", indication: "Crohn's disease, ulcerative colitis, and related inflammatory conditions" },
      { name: "Renflexis", indication: "Biosimilar to Remicade" },
      { name: "Simponi Aria", indication: "Ulcerative colitis" },
      { name: "Stelara (IV)", indication: "Crohn's disease and ulcerative colitis" },
      { name: "Skyrizi (IV)", indication: "Crohn's disease" },
      { name: "Zinplava", indication: "Reducing recurrence of C. difficile infection" },
    ],
  },
  {
    specialty: "Dermatology",
    items: [
      { name: "Cimzia", indication: "Plaque psoriasis" },
      { name: "Ilumya", indication: "Moderate to severe plaque psoriasis" },
      { name: "Remicade", indication: "Plaque psoriasis" },
      { name: "Spevigo", indication: "Generalized pustular psoriasis flares" },
    ],
  },
  {
    specialty: "Ophthalmology",
    items: [{ name: "Tepezza", indication: "Thyroid eye disease" }],
  },
  {
    specialty: "Cardiology",
    items: [
      { name: "Leqvio", indication: "High cholesterol" },
      { name: "Evkeeza", indication: "Homozygous familial hypercholesterolemia" },
    ],
  },
  {
    specialty: "Neurology",
    items: [
      { name: "Amvuttra", indication: "Hereditary transthyretin-mediated amyloidosis" },
      { name: "Briumvi", indication: "Relapsing forms of multiple sclerosis" },
      { name: "Leqembi", indication: "Alzheimer's disease" },
      { name: "Ocrevus", indication: "Relapsing and primary progressive multiple sclerosis" },
      { name: "Onpattro", indication: "Polyneuropathy from hereditary transthyretin-mediated amyloidosis" },
      { name: "Rituxan / Rituximab", indication: "Various neurological conditions" },
      { name: "Ruxience", indication: "Biosimilar to Rituxan" },
      { name: "Soliris", indication: "Neuromyelitis optica spectrum disorder" },
      { name: "Solu-Medrol", indication: "Acute exacerbations of multiple sclerosis" },
      { name: "Tysabri", indication: "Relapsing forms of multiple sclerosis" },
      { name: "Ultomiris", indication: "Neuromyelitis optica spectrum disorder" },
      { name: "Uplizna", indication: "Neuromyelitis optica spectrum disorder" },
      { name: "Vyepti", indication: "Migraine prevention" },
      { name: "Vyvgart / Vyvgart Hytrulo", indication: "Generalized myasthenia gravis" },
    ],
  },
  {
    specialty: "Hematology",
    items: [
      { name: "Adakveo", indication: "Sickle cell disease" },
      { name: "Fabrazyme", indication: "Fabry disease" },
      { name: "Cerezyme", indication: "Gaucher disease" },
      { name: "Givlaari", indication: "Acute hepatic porphyria" },
      { name: "Soliris / Ultomiris", indication: "Paroxysmal nocturnal hemoglobinuria and atypical hemolytic uremic syndrome" },
    ],
  },
  {
    specialty: "Endocrinology",
    items: [
      { name: "Crysvita", indication: "X-linked hypophosphatemia" },
      { name: "Evkeeza", indication: "Homozygous familial hypercholesterolemia" },
      { name: "Tepezza", indication: "Thyroid eye disease" },
    ],
  },
  {
    specialty: "Nephrology",
    items: [
      { name: "Benlysta", indication: "Lupus nephritis" },
      { name: "Nulojix", indication: "Preventing organ rejection after kidney transplant" },
      { name: "Oxlumo", indication: "Primary hyperoxaluria type 1" },
    ],
  },
  {
    specialty: "Bone Health",
    items: [
      { name: "Boniva (IV)", indication: "Treating and preventing osteoporosis" },
      { name: "Evenity", indication: "Osteoporosis in postmenopausal women at high fracture risk" },
      { name: "Prolia", indication: "Osteoporosis and increasing bone mass" },
      { name: "Reclast", indication: "Osteoporosis and Paget's disease of bone" },
      { name: "Xgeva", indication: "Preventing skeletal-related events from bone metastases" },
    ],
  },
  {
    specialty: "Iron Replacement",
    items: [
      { name: "Feraheme / Injectafer / Monoferric", indication: "Iron deficiency anemia" },
      { name: "Venofer", indication: "Iron deficiency anemia in chronic kidney disease patients" },
    ],
  },
];

export interface OrderFormTherapy {
  name: string;
  /** Link to the downloadable order form PDF, when one is on file. */
  pdf: string | null;
}

export const orderFormTherapies: OrderFormTherapy[] = [
  { name: "Actemra", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Actemra.pdf" },
  { name: "Adakveo", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Adakveo-Order.pdf" },
  { name: "Amvuttra", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Amvuttra-Order.pdf" },
  { name: "Asceniv", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Benlysta", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Benlysta-Order.pdf" },
  { name: "Boniva", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Boniva-Order.pdf" },
  { name: "Briumvi", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Briumvi-Order.pdf" },
  { name: "Cabenuva", pdf: null },
  { name: "Cerezyme", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Cerezyme-Order.pdf" },
  { name: "Cimzia", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Cimzia-Order.pdf" },
  { name: "Crysvita", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Crysvita-Order.pdf" },
  { name: "Entyvio", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Entyvio-Order.pdf" },
  { name: "Evenity", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Evenity-Order.pdf" },
  { name: "Evkeeza", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Evkeeza-Order.pdf" },
  { name: "Fabrazyme", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Fabrazyme-Order.pdf" },
  { name: "Fasenra", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Fasenra-Order.pdf" },
  { name: "Feraheme", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Iron-Order.pdf" },
  { name: "Gammagard Liquid", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Gamunex-C", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Givlaari", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Givlaari-Order.pdf" },
  { name: "Hydration", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Hydration.pdf" },
  { name: "Ilaris", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Ilaris-Order.pdf" },
  { name: "Ilumya", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Ilumya-Order.pdf" },
  { name: "Infliximab", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Infliximab-Order.pdf" },
  { name: "Iron", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Iron-Order.pdf" },
  { name: "IVIG", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Krystexxa", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Krystexxa-Order.pdf" },
  { name: "Leqembi", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Leqembi-Order.pdf" },
  { name: "Leqvio", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Leqvio-Order.pdf" },
  { name: "Monoferric", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Iron-Order.pdf" },
  { name: "Nexviazyme", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Nexviazyme-Order.pdf" },
  { name: "Nucala", pdf: null },
  { name: "Nulojix", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Nulojix-Order.pdf" },
  { name: "Octagam 5%", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Octagam 10%", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Ocrevus", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Ocrevus-Order.pdf" },
  { name: "Omvoh", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Omvoh-IV-Order.pdf" },
  { name: "Onpattro", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Onpattro-Order.pdf" },
  { name: "Orencia", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Orencia-Order.pdf" },
  { name: "Oxlumo", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Oxlumo-Order.pdf" },
  { name: "Panzyga", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Privigen", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/IVIG-Order.pdf" },
  { name: "Prolia", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Prolia-Order.pdf" },
  { name: "Reclast", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Reclast-Order.pdf" },
  { name: "Remicade", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Infliximab-Order.pdf" },
  { name: "Renflexis", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Infliximab-Order.pdf" },
  { name: "Rituxan", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Rituximab-Order.pdf" },
  { name: "Rituximab", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Rituximab-Order.pdf" },
  { name: "Ruxience", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Rituximab-Order.pdf" },
  { name: "Saphnelo", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Saphnelo-Order.pdf" },
  { name: "Simponi Aria", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Simponi-Aria-Order.pdf" },
  { name: "Skyrizi (IV Only)", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Skyrizi-order.pdf" },
  { name: "Solu-Medrol", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Solu-Medrol-Order.pdf" },
  { name: "Soliris", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Soliris-Order.pdf" },
  { name: "Spevigo", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Spevigo-Order.pdf" },
  { name: "Stelara", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Stelara-Order.pdf" },
  { name: "Tepezza", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Tepezza-Order.pdf" },
  { name: "Tezspire", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Tezspire-Order.pdf" },
  { name: "Tysabri", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Tysabri-Order.pdf" },
  { name: "Ultomiris", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Ultomiris-Order.pdf" },
  { name: "Uplizna", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Uplizna-Order.pdf" },
  { name: "Venofer", pdf: null },
  { name: "Vyepti", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Vyepti-Order.pdf" },
  { name: "Vyvgart", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Vyvgart-Order.pdf" },
  { name: "Vyvgart Hytrulo", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Vyvgart-Hytrulo-Order.pdf" },
  { name: "Xgeva", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Xgeva-Order.pdf" },
  { name: "Xolair", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Xolair-Order.pdf" },
  { name: "Zinplava", pdf: "https://impacthealthoh.com/wp-content/uploads/2024/10/Zinplava-Order.pdf" },
];
