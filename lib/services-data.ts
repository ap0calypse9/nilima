export type Service = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  applications?: string[];
  scope: string[];
  standard?: string;
  note?: string;
  accent: "blueprint" | "green";
};

export const services: Service[] = [
  {
    id: "rebound-hammer-test",
    number: "01",
    title: "Rebound Hammer Test",
    subtitle: "Concrete Surface Hardness & Strength Assessment",
    description:
      "A non-destructive method used to assess the surface hardness and uniformity of concrete and to obtain an indicative assessment of concrete compressive strength.",
    applications: ["Columns", "Beams", "Slabs", "Shear walls", "RCC foundations", "Retaining structures"],
    scope: [
      "Site inspection and test-point selection",
      "Surface preparation where required",
      "Rebound hammer testing and recording of values",
      "Identification of variations in concrete quality",
      "Technical interpretation and professional test report",
    ],
    standard: "IS 13311 (Part 2)",
    note: "Rebound hammer results are generally interpreted along with other investigations and should not be treated as a standalone determination of in-situ compressive strength.",
    accent: "blueprint",
  },
  {
    id: "upv-test",
    number: "02",
    title: "Ultrasonic Pulse Velocity (UPV) Test",
    subtitle: "Assessment of Concrete Quality & Uniformity",
    description:
      "A non-destructive technique used to evaluate the quality, uniformity, continuity, and internal condition of concrete — helping identify areas that may require further investigation.",
    applications: ["Voids", "Cracks", "Honeycombing", "Poor-quality concrete", "Internal discontinuities", "Possible deterioration"],
    scope: [
      "Direct, semi-direct, or indirect testing as applicable",
      "Measurement of ultrasonic pulse velocity",
      "Test location mapping",
      "Identification of anomalous areas",
      "Comprehensive test documentation and reporting",
    ],
    standard: "IS 13311 (Part 1)",
    note: "UPV results are commonly considered together with rebound hammer testing, core testing, visual inspection, and other structural investigations where required.",
    accent: "green",
  },
  {
    id: "rebar-scanning",
    number: "03",
    title: "Rebar Scanning / Reinforcement Detection",
    subtitle: "Reinforcement Location, Cover & Structural Investigation",
    description:
      "Identifies the location and approximate depth of reinforcement embedded within RCC structural elements — useful before core cutting, drilling, anchoring, retrofitting or structural modification.",
    scope: [
      "Reinforcement location",
      "Approximate concrete cover",
      "Reinforcement spacing",
      "Possible reinforcement arrangement",
      "Suitable locations for drilling or core extraction",
    ],
    note: "Rebar scanning helps minimize the risk of accidentally damaging reinforcement during structural modification and investigation works.",
    accent: "blueprint",
  },
  {
    id: "pile-integrity-test",
    number: "04",
    title: "Pile Integrity Test (PIT)",
    subtitle: "Integrity Assessment of Deep Foundations",
    description:
      "A non-destructive test used to assess the continuity and integrity of cast-in-situ and other suitable deep foundation piles.",
    applications: ["Necking", "Bulging", "Cracks or discontinuities", "Cross-section changes", "Concrete quality variations", "Construction-related defects"],
    scope: [
      "Pile identification and test preparation",
      "Pile-head surface preparation",
      "Low-strain impact testing",
      "Signal acquisition and analysis",
      "Pile response interpretation and professional test report",
    ],
    standard: "ASTM D5882 and applicable Indian standards/guidelines",
    note: "Pile integrity testing is an important investigation tool but should be interpreted by qualified personnel and, where necessary, correlated with construction records and other pile investigation methods.",
    accent: "green",
  },
  {
    id: "corrosion-assessment",
    number: "05",
    title: "Corrosion Assessment",
    subtitle: "RCC Reinforcement Corrosion Investigation",
    description:
      "Corrosion of reinforcement is one of the major causes of deterioration in reinforced concrete structures. We identify areas potentially affected by reinforcement corrosion and concrete deterioration.",
    applications: ["Old residential buildings", "Industrial structures", "Bridges", "Parking structures", "Water-retaining structures", "Marine/coastal structures"],
    scope: [
      "Half-cell potential assessment",
      "Concrete cover measurement",
      "Visual inspection & reinforcement scanning",
      "Concrete resistivity assessment, where applicable",
      "Carbonation and chloride-related investigation, where applicable",
      "Crack and spalling assessment",
    ],
    accent: "blueprint",
  },
  {
    id: "structural-health-assessment",
    number: "06",
    title: "Structural Health Assessment",
    subtitle: "Comprehensive Structural Investigation",
    description:
      "A full assessment for existing RCC and steel structures: visual inspection → NDT → structural measurements → material assessment → defect mapping → engineering evaluation → recommendations.",
    scope: [
      "Structural cracks & concrete deterioration",
      "Honeycombing, spalling & corrosion",
      "Deflection & settlement-related distress",
      "Structural alterations & water leakage-related deterioration",
      "Foundation-related concerns",
      "General structural condition",
    ],
    note: "Where required, NDT results can be combined with structural analysis and engineering evaluation.",
    accent: "green",
  },
  {
    id: "engineering-survey",
    number: "07",
    title: "Engineering Survey Services",
    subtitle: "Accurate Survey & Site Data Collection",
    description:
      "Professional engineering and construction survey services for building, infrastructure, foundation, and structural projects.",
    scope: [
      "Topographical Survey — mapping of site conditions, levels, features, roads and drainage",
      "Total Station Survey — high-accuracy layout, dimensional verification and site documentation",
      "DGPS Survey — coordinate-based survey for accurate positioning and geospatial control",
      "Pile Point Layout — marking and verification of pile locations per approved drawings",
      "Building & Structural Measurement — for assessment, renovation, alteration and retrofit projects",
      "Level & Alignment Survey — floor levels, structural alignment, verticality, settlement checks",
    ],
    accent: "blueprint",
  },
  {
    id: "pile-testing-services",
    number: "08",
    title: "Pile Testing Services",
    subtitle: "Foundation Load & Integrity Investigation",
    description:
      "A range of professional pile testing and foundation investigation services, carried out using appropriate equipment, procedures and project-specific requirements.",
    scope: [
      "Pile Integrity Test (PIT)",
      "Pile Dynamic Load Test",
      "High-Strain Dynamic Testing",
      "PDA Testing",
      "CAPWAP Analysis",
      "Vertical Load Test",
      "Lateral Load Test",
    ],
    accent: "green",
  },
];

export const whyChooseUs = [
  {
    title: "ISO 9001:2015 Certified",
    description: "Our quality management system follows the requirements of ISO 9001:2015.",
  },
  {
    title: "Engineering Expertise",
    description: "Our services are supported by experienced structural, civil, geotechnical and testing professionals.",
  },
  {
    title: "Professional Testing & Reporting",
    description: "Systematic field data collection, technical analysis and professionally documented reports.",
  },
  {
    title: "Integrated Engineering Services",
    description: "NDT, survey, structural consultancy, pile testing and investigation coordinated under a single team.",
  },
  {
    title: "Project-Specific Approach",
    description: "Testing locations, methodology and requirements selected according to the structure and applicable standards.",
  },
  {
    title: "Pan-India Service",
    description: "Engineering testing, investigation, survey and structural consultancy services for projects across India.",
  },
];

export const keyServiceGroups = [
  {
    title: "NDT & Structural Testing",
    items: ["Rebound Hammer", "UPV", "Rebar Scanning", "Corrosion Assessment", "Concrete Investigation"],
  },
  {
    title: "Pile & Foundation Testing",
    items: ["Pile Integrity Test", "Dynamic Load Test", "PDA", "CAPWAP", "Vertical Load Test", "Lateral Load Test"],
  },
  {
    title: "Engineering Survey",
    items: ["Total Station", "DGPS", "Topographical Survey", "Pile Layout", "Level & Alignment Survey", "Structural Measurement"],
  },
  {
    title: "Structural Consultancy",
    items: ["Structural Assessment", "Structural Design", "Structural Audit", "Retrofitting", "Rehabilitation", "Structural Health Assessment"],
  },
];