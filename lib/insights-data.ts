export type InsightSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  excerpt: string;
  standard: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "garden-reach-rebound-hammer-assessment",
    title: "Structural Condition Assessment Using Rebound Hammer Test",
    subtitle: "G+2 Residential Building — Garden Reach, Kolkata",
    category: "Case Study — NDT",
    date: "2025",
    excerpt:
      "A structural condition assessment and Non-Destructive Testing of a G+2 residential building, evaluating concrete surface hardness across columns, beams and the lift wall without damaging any structural members.",
    standard: "IS 516 (Part 5/Sec 4):2020",
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "Nilima Design Associates was engaged to carry out a structural condition assessment and Non-Destructive Testing (NDT) of a G+2 residential building at Garden Reach, Kolkata.",
          "The assessment focused on accessible columns, beams and lift wall, with the objective of evaluating the surface hardness, relative uniformity and indicative concrete strength characteristics without damaging the structural members.",
        ],
      },
      {
        heading: "Testing Method",
        paragraphs: [
          "A Rebound Hammer Test was conducted on selected structural members. The investigation was performed using a LANGRY HT225-N Rebound Hammer, Instrument ID 240708013, with calibration recorded on 14 November 2025.",
          "The testing procedure followed the requirements of IS 516 (Part 5/Sec 4):2020 — Non-destructive Testing of Concrete — Method of Test Rebound Hammer.",
        ],
        list: [
          "Ground-floor columns and beams",
          "First-floor columns and beams",
          "Second-floor columns and beams",
          "Lift wall",
        ],
      },
      {
        heading: "Key Findings",
        paragraphs: [
          "The tested locations showed estimated compressive-strength values ranging approximately from 21 N/mm² to 39 N/mm². The results demonstrated variation in surface hardness between individual structural members, while the overall rebound response did not indicate a generalized abnormality in the tested areas.",
          "The assessment indicated generally acceptable surface-hardness characteristics at the investigated locations. The report also notes that Rebound Hammer results are indicative and can be influenced by factors such as surface condition, moisture, concrete age, carbonation and aggregate characteristics.",
        ],
      },
      {
        heading: "Professional Assessment",
        paragraphs: [
          "Based on the accessible areas investigated, the tested concrete members exhibited generally acceptable surface-hardness characteristics. No generalized indication of significantly poor concrete surface quality was identified from the Rebound Hammer results alone.",
          "For areas requiring further structural evaluation, the report recommends supplementary investigation such as UPV testing and/or core testing, together with verification of structural drawings, reinforcement details, member dimensions and loading conditions.",
        ],
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "Nilima Design Associates combines field inspection, calibrated NDT equipment and engineering assessment to provide practical information for structural condition evaluation.",
        ],
        list: [
          "Structural condition assessment",
          "Rebound Hammer Testing",
          "Non-Destructive Testing of RCC members",
          "Concrete surface-hardness assessment",
          "Technical reporting",
          "Recommendations for further investigation where required",
        ],
      },
      {
        heading: "Project Outcome",
        paragraphs: [
          "The investigation provided the client with a documented assessment of the tested structural members and indicative concrete-strength characteristics, helping establish a technical basis for deciding whether additional investigation was required.",
        ],
      },
    ],
  },
    {
    slug: "g7-structural-design-agartala-infrastructure-project",

    title: "G+7 Structural Design – Infrastructure Project, Agartala",

    subtitle: "G+7 Infrastructure Building — Agartala, Tripura",

    category: "Case Study — Structural Design",

    date: "2026",

    excerpt:
      "Structural engineering and design services for a G+7 RCC framed infrastructure project in Agartala, Tripura, designed considering Seismic Zone V requirements.",

    standard: "Seismic Zone V",

    sections: [
      {
        heading: "Project Overview",

        paragraphs: [
          "Nilima Design Associates successfully provided structural engineering and design services for a G+7 infrastructure project in Agartala, Tripura.",

          "The project was designed considering the Seismic Zone V requirements, with particular attention to structural stability, seismic response, load distribution and serviceability.",
        ],
      },

      {
        heading: "Project Details",

        paragraphs: [
          "The project involved the structural design and analysis of a G+7 infrastructure building with an RCC framed structural system.",
        ],

        list: [
          "Project: G+7 Infrastructure Building",
          "Location: Agartala, Tripura",
          "Structural System: RCC Framed Structure",
          "Seismic Zone: Zone V",
          "Structural Design: Nilima Design Associates",
          "Analysis Software: STAAD.Pro",
          "Supporting Calculations: Excel-based engineering calculations",
          "Foundation Analysis: STAAD Foundation and supporting design calculations",
        ],
      },

      {
        heading: "Structural Engineering Scope",

        paragraphs: [
          "The structural engineering scope covered the analysis, design and documentation of the major structural components of the project.",
        ],

        list: [
          "Structural framing and planning",
          "Dead load and live load assessment",
          "Seismic load analysis",
          "Load combinations and structural modelling",
          "Beam and column design",
          "Slab design",
          "Foundation analysis and design",
          "Reinforcement requirements and detailing",
          "Structural stability and serviceability checks",
          "Preparation of structural design documentation",
        ],
      },

      {
        heading: "Design & Analysis Methodology",

        paragraphs: [
          "The building was modelled and analysed using STAAD.Pro to evaluate the structural response under gravity and seismic loading.",

          "Additional Excel-based engineering calculations were used for design checks and verification of structural elements. Foundation analysis and design were also carried out using STAAD Foundation, supported by relevant engineering calculations.",

          "The design approach focused on achieving an efficient load-transfer system from the superstructure to the foundation while considering the seismic demands applicable to the project location.",
        ],
      },

      {
        heading: "Engineering Challenge",

        paragraphs: [
          "The major engineering consideration was the project's location in Seismic Zone V. The structural system therefore required careful consideration of lateral loads, load paths, member forces, structural stability and foundation behaviour.",
        ],
      },

      {
        heading: "Project Outcome",

        paragraphs: [
          "Nilima Design Associates delivered a practical, structurally efficient and construction-oriented design solution for the G+7 infrastructure project, integrating structural analysis, detailed engineering calculations and foundation design.",
        ],
      },

      {
        heading: "Software Used",

        paragraphs: [
          "The project utilised STAAD.Pro, STAAD Foundation and Microsoft Excel as part of the structural analysis, design and engineering calculation workflow.",
        ],

        list: [
          "STAAD.Pro",
          "STAAD Foundation",
          "Microsoft Excel",
        ],
      },

      {
        heading: "Engineering Focus",

        paragraphs: [
          "Engineering structures designed for safety, stability and long-term performance.",
        ],

        list: [
          "Structural Design",
          "Seismic Analysis",
          "Foundation Design",
          "Structural Engineering",
        ],
      },
    ],
  },
];