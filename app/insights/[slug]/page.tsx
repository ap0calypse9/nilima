import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";

// Keep this array in sync with app/insights/page.tsx — add the same
// entry to both files when you add a new case study.
const insights = [
  {
    slug: "garden-reach-rebound-hammer-assessment",
    title: "Structural Condition Assessment Using Rebound Hammer Test",
    subtitle: "G+2 Residential Building — Garden Reach, Kolkata",
    category: "Case Study — NDT",
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
          "Our scope included the structural analysis, design and documentation of the major structural components of the project.",
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
  {
    slug: "naihati-railway-roh-shed-structural-health-assessment",
    title: "Naihati Railway ROH Shed Structural Health Assessment",
    subtitle: "Structural Health Assessment & NDT of Railway ROH Shed, Naihati",
    category: "Case Study — Structural Health Assessment",
    date: "2025",
    excerpt:
      "An integrated structural health assessment of a Railway ROH Shed PEB structure at Naihati, combining steel inspection, non-destructive testing and concrete assessment to identify areas requiring rehabilitation.",
    standard: "Structural Assessment & Non-Destructive Testing",
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "Nilima Design Associates was engaged to conduct a structural health and stability assessment of an existing Railway ROH Shed PEB structure at Negel Nagar, Katpol, Naihati – 743165.",
          "Client: SSE(C&W)/IC/NH. Testing Agency: Nilima Design Associates. The testing period extended from December 2024 to February 2025.",
          "The assessment focused on the condition of steel structural members, concrete pedestals and associated structural elements. Visual inspection and Non-Destructive Testing (NDT) were combined to evaluate the existing condition without damaging the structure.",
        ],
      },
      {
        heading: "Our Scope of Work",
        paragraphs: [
          "The investigation covered visual inspection of steel and concrete elements, selected welding-joint examinations, ultrasonic thickness measurements, ultrasonic flaw detection and concrete NDT. The findings were assessed to identify defects and provide technical recommendations.",
        ],
        list: [
          "Visual inspection of ISMB columns, beams and truss members",
          "Dry penetration testing of selected steel welding joints",
          "Ultrasonic thickness measurement of steel members",
          "Ultrasonic flaw detection for possible internal discontinuities",
          "Visual inspection of concrete pedestals",
          "Rebound Hammer testing of concrete",
          "Ultrasonic Pulse Velocity (UPV) testing",
          "Assessment of observed defects and structural condition",
          "Technical recommendations based on NDT findings",
        ],
      },
      {
        heading: "Steel Structure Assessment",
        paragraphs: [
          "The ISMB columns, beams and truss members were visually inspected. The report recorded adequate thickness in the inspected steel members, no visible cracks in the inspected areas, satisfactory welding conditions in the examined locations, and minimal corrosion or rust on steel and truss elements.",
          "Ultrasonic thickness measurements were performed on steel columns. Recorded east-side column thicknesses ranged approximately from 12.15 mm to 13.60 mm, while west-side measurements were also documented in the report. The report concluded that the tested steel elements had adequate measured thickness.",
          "Dry/visible penetrant examination was carried out on selected welding joints from the east, middle and west sides of the shed. The reported observations indicated no recordable discontinuities, apart from minor spot indications below the registration level. The tested locations were reported as acceptable under the stated acceptance criteria.",
          "Ultrasonic flaw detection was also performed on selected welding joints using a pulse-echo contact method. The report documented the equipment, probe, calibration and stated test and acceptance standards used for the examination.",
        ],
      },
      {
        heading: "Concrete Structural Assessment",
        paragraphs: [
          "A concrete-focused investigation was carried out using Rebound Hammer and Ultrasonic Pulse Velocity testing, together with visual inspection of the structural elements. These complementary methods were used to investigate surface hardness, concrete uniformity and areas potentially affected by defects.",
        ],
      },
      {
        heading: "Rebound Hammer Test",
        paragraphs: [
          "The Rebound Hammer investigation recorded estimated surface compressive-strength values at selected locations in the approximate range of 26–34 N/mm², with variations between individual structural elements. The report described a combination of poor-quality and good-quality concrete areas.",
        ],
      },
      {
        heading: "Ultrasonic Pulse Velocity Testing",
        paragraphs: [
          "UPV testing was performed to investigate concrete uniformity and identify locations potentially affected by internal cracks, voids or discontinuities. The report classified concrete quality across the tested locations from medium to excellent, while also identifying doubtful areas requiring attention.",
        ],
      },
      {
        heading: "Visual Inspection of Concrete Pedestals",
        paragraphs: [
          "The visual inspection identified cracks and voids in multiple concrete pedestals. Some areas showed compromised surface integrity, spalling or delamination.",
          "The report recommended repair and grouting of affected pedestals before additional structural loading.",
        ],
      },
      {
        heading: "Engineering Findings",
        paragraphs: [
          "The combined investigation provided a broader understanding of the structure by examining both the steel superstructure and its concrete supporting elements using complementary inspection and testing methods.",
          "The inspected steel members showed adequate measured thickness. No cracks were recorded during the visual inspection, and no recordable discontinuities were reported in the selected dry penetration examination.",
          "The concrete investigation identified areas requiring rehabilitation, particularly selected pedestals and columns where cracks, voids or doubtful UPV results were observed.",
          "The findings demonstrate why structural health assessment should not rely on a single test. Visual inspection, steel NDT and concrete NDT were used together to evaluate different aspects of the existing structure.",
        ],
      },
      {
        heading: "Recommended Rehabilitation Approach",
        paragraphs: [
          "Based on the concrete investigation, the report recommended suitable grouting for doubtful areas to address internal voids and improve the condition of affected concrete elements.",
        ],
        list: [
          "Use non-shrink, high-strength cementitious grout for appropriate surface repairs.",
          "Use epoxy grout for deeper cracks and voids, where applicable.",
          "Clean and prepare affected pedestal surfaces.",
          "Drill injection holes at identified weak zones.",
          "Carry out pressure grouting to fill identified voids and cracks.",
          "Allow adequate curing according to the selected material specification.",
          "Repeat Rebound Hammer and UPV testing after rehabilitation to assess the treated areas.",
        ],
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "Nilima Design Associates follows a systematic approach to structural health assessment, from initial inspection to technical reporting and recommendations.",
          "01 — Visual Inspection: Detailed examination of accessible steel and concrete structural elements.",
          "02 — NDT Investigation: Selection of appropriate non-destructive techniques for steel and concrete.",
          "03 — Data Assessment: Review of thickness measurements, flaw indications, rebound values and UPV results.",
          "04 — Structural Interpretation: Identification of areas requiring further investigation, repair or rehabilitation.",
          "05 — Technical Reporting: Preparation of documented findings and recommendations for the assessed structure.",
        ],
      },
      {
        heading: "Project Outcome",
        paragraphs: [
          "The investigation provided the client with a documented assessment of the existing Railway ROH Shed PEB structure at Naihati, covering both the steel superstructure and selected concrete supporting elements.",
          "The steel assessment found adequate measured thicknesses and no cracks or recordable discontinuities in the inspected areas. The concrete assessment identified specific areas requiring repair and grouting before additional loading.",
          "The project demonstrates Nilima Design Associates' capability in integrated structural health assessment, combining field inspection and multiple NDT techniques to support informed structural maintenance and rehabilitation decisions.",
        ],
      },
    ],
  },
  {
    slug: "gyandeep-vidyapith-school-building-structural-stability-ndt",
    title: "Structural Stability & NDT Assessment of G+2 School Building",
    subtitle: "G+2 School Building with Auditorium — GyanDeep Vidyapith, Egra",
    category: "Case Study — Structural Assessment",
    date: "2025",
    excerpt:
      "A structural stability assessment of a G+2 school building with an auditorium in Purba Medinipur, combining visual inspection, Rebound Hammer, UPV, carbonation and reinforcement detection testing.",
    standard: "IS 13311 (Part 2):1992",
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "Nilima Design Associates carried out a structural stability assessment and Non-Destructive Testing (NDT) investigation of a G+2 school building with an auditorium at GyanDeep Vidyapith, Purusottampur, Egra, Purba Medinipur, West Bengal.",
          "Client: GyanDeep Trust. Testing Agency: Nilima Design Associates. Assessment Date: 31 January 2025.",
          "The assessment focused on the observed condition of the building's columns, beams, slabs and associated structural elements through visual inspection and selected NDT techniques."
        ]
      },
      {
        heading: "Scope of Investigation",
        paragraphs: [
          "The investigation combined visual inspection and non-destructive testing to assess concrete condition, uniformity, durability indicators and reinforcement details in selected structural elements."
        ],
        list: [
          "Visual inspection of structural elements",
          "Rebound Hammer Test",
          "Ultrasonic Pulse Velocity (UPV) Test",
          "Concrete Carbonation Test",
          "Profometer and reinforcement detection testing",
          "Assessment of concrete quality and uniformity",
          "Measurement of concrete cover and reinforcement arrangement",
          "Preparation of technical findings and recommendations"
        ]
      },
      {
        heading: "Visual Inspection",
        paragraphs: [
          "The structural elements were visually inspected for apparent signs of distress. No visible cracks were recorded in the inspected columns, beams and slabs, and the concrete was reported to be in good observed condition in the inspected structural elements.",
          "A small crack was observed in one portion of the stair-head wall. The reported dimensions of the inspected structural elements were consistent with the approved drawings."
        ]
      },
      {
        heading: "Rebound Hammer Testing",
        paragraphs: [
          "Rebound Hammer testing was conducted at selected locations to obtain an indication of concrete surface hardness and estimated compressive strength.",
          "The recorded estimated compressive-strength values ranged approximately from 16 to 34 N/mm² at the tested locations. The report references IS 13311 (Part 2):1992 for the Rebound Hammer assessment.",
          "Rebound Hammer results are surface-based indicators and should be interpreted alongside other investigation results rather than treated as a standalone determination of structural capacity. The report also notes the limitations and variability of this method."
        ]
      },
      {
        heading: "Ultrasonic Pulse Velocity Testing",
        paragraphs: [
          "Ultrasonic Pulse Velocity (UPV) testing was performed to assess concrete uniformity and identify locations that may contain internal discontinuities.",
          "The tested locations received GOOD, MEDIUM and DOUBTFUL classifications. The recorded results helped identify specific structural elements requiring closer attention during the assessment."
        ],
        list: [
          "Column N1 — 3.831 km/s — GOOD",
          "Column N5 — 2.932 km/s — DOUBTFUL",
          "Column N7 — 2.841 km/s — DOUBTFUL",
          "Slab N2 — 4.240 km/s — GOOD",
          "Beam N1 — 2.421 km/s — DOUBTFUL",
          "Column N14 — 2.354 km/s — DOUBTFUL"
        ]
      },
      {
        heading: "Carbonation Assessment",
        paragraphs: [
          "Carbonation testing was conducted to assess the extent of carbonation in the concrete cover. The report records the carbonation condition as low to mild and indicates that the reinforcement remained within the passivation zone at the tested locations."
        ]
      },
      {
        heading: "Reinforcement & Concrete Cover Assessment",
        paragraphs: [
          "Profometer testing was performed to identify approximate reinforcement locations, bar diameters, bar spacing, stirrup arrangements and concrete cover.",
          "Selected column measurements recorded concrete cover values of approximately 36–44 mm. Reinforcement percentages were documented in the report with reference to the applicable provisions cited therein. Similar reinforcement and cover information was obtained for selected beams and slabs."
        ]
      },
      {
        heading: "Key Assessment Findings",
        paragraphs: [
          "The investigation provided a combined assessment of the visible condition of the structural elements, concrete surface characteristics, internal concrete uniformity, carbonation and reinforcement details.",
          "Visual inspection provided information about observable defects, while Rebound Hammer testing assessed surface hardness and UPV testing helped identify variations in concrete uniformity. Carbonation testing provided a durability indicator, and Profometer testing supplied approximate reinforcement and cover information.",
          "Together, these methods helped distinguish satisfactory test locations from specific areas requiring further attention."
        ],
        list: [
          "Visible condition of columns, beams, slabs and walls",
          "Concrete surface characteristics from Rebound Hammer testing",
          "Internal concrete uniformity from UPV testing",
          "Carbonation condition at tested locations",
          "Reinforcement arrangement and concrete cover from Profometer testing"
        ]
      },
      {
        heading: "Technical Conclusion",
        paragraphs: [
          "Based on the findings documented in the report, the majority of the tested concrete elements were classified between medium and good condition by UPV testing, while certain locations were classified as doubtful.",
          "The report identified the doubtful locations as requiring appropriate repair or attention. Its final conclusion states that the assessed structure was considered satisfactory in terms of the investigated strength and durability parameters, subject to minor repair of the doubtful elements."
        ]
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "VISUAL INSPECTION → NDT TESTING → DATA ANALYSIS → CONDITION ASSESSMENT → TECHNICAL RECOMMENDATIONS",
          "Nilima Design Associates combines field inspection, multiple NDT techniques and engineering interpretation to develop a documented understanding of existing structural conditions and identify areas that may require repair or further investigation."
        ],
        list: [
          "Visual inspection of accessible structural elements",
          "Selection and application of appropriate NDT techniques",
          "Review of test results and observed defects",
          "Assessment of concrete condition and reinforcement details",
          "Technical reporting and recommendations"
        ]
      },
      {
        heading: "Project Value",
        paragraphs: [
          "This project demonstrates Nilima Design Associates' experience in carrying out structured, evidence-based investigations of existing RCC buildings using a combination of visual inspection and Non-Destructive Testing techniques.",
          "The assessment provided the client with documented findings on concrete condition, uniformity, carbonation and reinforcement details, helping identify specific areas requiring attention."
        ]
      },
      {
        heading: "Need an Assessment of an Existing Building?",
        paragraphs: [
          "Nilima Design Associates provides structural inspection, NDT testing, structural health assessment and technical reporting for residential, commercial, institutional and industrial structures."
        ]
      }
    ]
  },
  {
    slug: "bpcl-haldia-g2-housing-complex-structural-health-assessment",
    title: "Structural Health Assessment of G+2 Housing Complex — BPCL Haldia",
    subtitle: "Structural Stability & NDT Assessment — BPCL Haldia Housing Complex",
    category: "Case Study — Structural Health Assessment",
    date: "2025",
    excerpt:
      "A structural health assessment of a G+2 residential building at BPCL Haldia, combining visual inspection, Rebound Hammer, UPV, carbonation testing and rebar scanning to identify concrete deterioration and rehabilitation requirements.",
    standard: "IS 13311 (Part 2):1992",
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "Nilima Design Associates carried out a structural health check and Non-Destructive Testing (NDT) assessment of a G+2 residential building at the BPCL Haldia Housing Complex, Haldia, West Bengal – 721631.",
          "Client: Bharat Petroleum Corporation Limited (BPCL). Testing Agency: Nilima Design Associates. Report No.: NDA/HALDIA/24-25/VER01. Report Date: 4 April 2025. Site Observation & Testing: 24 March 2025.",
          "The investigation evaluated the observed condition of columns, beams, slabs and walls, with particular attention to concrete quality, visible distress, reinforcement condition and potential durability concerns.",
          "The assessment combined visual inspection with multiple NDT techniques to develop a broader understanding of the existing structure."
        ]
      },
      {
        heading: "Scope of Investigation",
        paragraphs: [
          "The investigation combined visual inspection and non-destructive testing to assess concrete condition, reinforcement details, visible deterioration and potential durability concerns across selected structural elements."
        ],
        list: [
          "Visual inspection of structural elements",
          "Rebound Hammer testing",
          "Ultrasonic Pulse Velocity (UPV) testing",
          "Concrete carbonation testing",
          "Rebar scanning and Profometer investigation",
          "Assessment of concrete quality",
          "Assessment of reinforcement cover and arrangement",
          "Identification of visible cracks and deterioration",
          "Technical recommendations for repair and further structural assessment"
        ]
      },
      {
        heading: "Visual Structural Inspection",
        paragraphs: [
          "A detailed visual inspection was conducted on the building's structural elements. The inspection recorded cracks in portions of slabs and beams, cracking in different areas of the building, deteriorated plaster at the bottom of slabs and beams, areas of exposed reinforcement, and wall- and plaster-related distress.",
          "The observed concrete condition varied between structural elements. The report particularly noted areas of distress in slab and beam concrete, while the columns were observed to have comparatively better concrete condition.",
          "These observations helped identify locations for subsequent non-destructive testing and further assessment."
        ],
        list: [
          "Cracks in portions of slabs and beams",
          "Deteriorated plaster beneath slabs and beams",
          "Areas of exposed reinforcement",
          "Wall and plaster-related distress",
          "Variation in observed concrete condition between structural elements"
        ]
      },
      {
        heading: "Rebound Hammer Testing",
        paragraphs: [
          "Rebound Hammer testing was conducted at selected locations on the building's columns, beams and roof slab to obtain an indication of concrete surface hardness and estimated compressive strength.",
          "The report recorded estimated surface compressive-strength values of approximately 10–34 N/mm² across the tested locations. Several ground-floor columns recorded values around 32–34 N/mm², while selected beams recorded approximately 14–27 N/mm². Several G+2 beams recorded around 13–16 N/mm², and roof-slab locations recorded approximately 10–11 N/mm².",
          "The variation in results indicated that the concrete condition was not uniform throughout the tested structure. The report references IS 13311 (Part 2):1992 for the Rebound Hammer assessment.",
          "Rebound Hammer results provide an indication of surface hardness and estimated compressive strength. They should be interpreted alongside other investigation results rather than treated as a standalone determination of structural capacity."
        ]
      },
      {
        heading: "Ultrasonic Pulse Velocity Assessment",
        paragraphs: [
          "Ultrasonic Pulse Velocity (UPV) testing was carried out to investigate concrete uniformity and identify locations that may contain internal discontinuities.",
          "The reported results ranged from Excellent and Good through Medium to Doubtful, depending on the tested structural element. Some columns recorded relatively high pulse velocities, including 4.609 km/s classified as Excellent, and 4.368 km/s, 4.327 km/s and 4.128 km/s classified as Good.",
          "Several beams recorded significantly lower velocities, including approximately 1.540 km/s, 1.580 km/s, 2.131 km/s and 2.378 km/s, which were classified as Doubtful. Several roof-slab locations were also classified as Doubtful.",
          "The results identified variations in concrete uniformity and specific locations requiring further attention."
        ],
        list: [
          "4.609 km/s — Excellent",
          "4.368 km/s — Good",
          "4.327 km/s — Good",
          "4.128 km/s — Good",
          "1.540 km/s — Doubtful",
          "1.580 km/s — Doubtful",
          "2.131 km/s — Doubtful",
          "2.378 km/s — Doubtful"
        ]
      },
      {
        heading: "Carbonation Assessment",
        paragraphs: [
          "Carbonation testing was performed to assess the condition of the concrete cover and its potential effect on reinforcement protection.",
          "The report recorded significant carbonation at the tested locations and raised concerns regarding the protective passivation layer surrounding the reinforcement. Carbonation can reduce concrete alkalinity and increase the potential for reinforcement corrosion when the carbonation front reaches the reinforcement."
        ]
      },
      {
        heading: "Rebar Scanning & Concrete Cover Assessment",
        paragraphs: [
          "Rebar scanning was carried out using a Profometer or cover meter to investigate approximate concrete cover, reinforcement diameter, reinforcement spacing, stirrup arrangement and reinforcement percentage.",
          "The investigation covered selected columns, beams and slabs. Selected column locations showed approximately 39–49 mm of concrete cover, while reinforcement arrangements and spacing were recorded for the inspected members. Beam and slab reinforcement information was also documented in the report.",
          "The investigation provided additional information for understanding the existing RCC construction and assessing areas where deterioration had been observed."
        ],
        list: [
          "Approximate concrete cover measurement",
          "Reinforcement diameter assessment",
          "Reinforcement spacing investigation",
          "Stirrup arrangement assessment",
          "Reinforcement percentage documentation"
        ]
      },
      {
        heading: "Key Findings",
        paragraphs: [
          "The combined investigation identified variable concrete condition across the structural elements, visible cracking and deterioration in portions of beams and slabs, areas of plaster deterioration with exposed reinforcement, doubtful UPV results at selected locations, and significant carbonation requiring attention to reinforcement durability.",
          "The results indicated that the condition of the investigated concrete was not uniform and that selected elements required further assessment and appropriate repair or rehabilitation."
        ],
        list: [
          "Concrete condition: Variable Rebound Hammer values and doubtful UPV results at selected locations.",
          "Structural distress: Visible cracks and deterioration in portions of beams and slabs.",
          "Reinforcement exposure: Plaster deterioration and exposed reinforcement in some areas.",
          "Internal concrete condition: Doubtful UPV classifications at selected beams and slab locations.",
          "Carbonation: Significant carbonation reported at tested locations, raising durability concerns."
        ]
      },
      {
        heading: "Recommended Rehabilitation Measures",
        paragraphs: [
          "The report recommended appropriate repair and rehabilitation measures based on the observed distress and NDT findings. The repair approach should be selected according to the condition and extent of deterioration at each location."
        ],
        list: [
          "Epoxy grouting: Apply to identified cracks and damaged areas where appropriate, in accordance with the repair design and material specifications.",
          "Corrosion protection: Where reinforcement is exposed, carefully expose and clean the reinforcement, remove loose corrosion products, apply a suitable corrosion-inhibiting treatment, and reinstate the protective concrete cover using an appropriate repair material.",
          "Concrete repair: Remove damaged or deteriorated concrete and repair the affected areas following suitable surface preparation.",
          "Waterproofing and moisture control: Treat areas exposed to water ingress to help reduce continued moisture-related deterioration.",
          "Structural monitoring: Conduct follow-up inspections after repair works to evaluate the effectiveness of rehabilitation and monitor the condition of the structure."
        ]
      },
      {
        heading: "Engineering Assessment",
        paragraphs: [
          "This project demonstrates why visual inspection alone may not be sufficient when evaluating an existing RCC building. At the BPCL Haldia Housing Complex, each investigation technique provided different information about the condition of the structure.",
          "Visual inspection identified cracks, plaster deterioration and exposed reinforcement. Rebound Hammer testing provided an indication of surface concrete strength, while UPV testing identified variations in concrete uniformity and doubtful locations.",
          "Carbonation testing provided information regarding carbonation and reinforcement protection, while rebar scanning supplied information about reinforcement location, cover and arrangement.",
          "Combining these investigations supported a more comprehensive assessment of the building's observed condition and helped identify locations requiring attention."
        ],
        list: [
          "Visual Inspection — Identification of visible distress and deterioration.",
          "Rebound Hammer — Indication of concrete surface hardness and estimated compressive strength.",
          "UPV Testing — Assessment of concrete uniformity and identification of doubtful locations.",
          "Carbonation Testing — Assessment of carbonation and its potential implications for reinforcement protection.",
          "Rebar Scanning — Investigation of reinforcement location, cover and arrangement."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The assessment documented visible distress and variable concrete condition within the investigated building. Several locations, particularly portions of beams and slabs, showed lower NDT values and/or doubtful UPV classifications.",
          "The report recommended structural assessment and repair or rehabilitation measures, including epoxy grouting where appropriate, corrosion treatment, concrete repair, waterproofing where required and continued structural monitoring.",
          "The findings demonstrate the importance of combining non-destructive testing, visual inspection and engineering assessment when evaluating an existing RCC structure."
        ]
      },
      {
        heading: "Our Approach",
        paragraphs: [
          "INSPECT → TEST → ANALYSE → ASSESS → REPAIR → MONITOR",
          "Nilima Design Associates provides integrated Structural Health Assessment, NDT Testing, Rebar Scanning, UPV, Rebound Hammer, Carbonation Testing and Structural Rehabilitation Consultancy for existing buildings and infrastructure."
        ]
      }
    ]
  },
    {
    slug: "uco-bank-bilkanda-post-fire-structural-health-assessment",
    title: "Post-Fire Structural Health Assessment of G+1 UCO Bank Building",
    subtitle: "Structural Health Checkup — UCO Bank, Bilkanda Branch",
    category: "Case Study — Post-Fire Structural Assessment",
    date: "2026",
    excerpt:
      "A post-fire structural health assessment of the G+1 UCO Bank Bilkanda Branch, combining visual inspection, Rebound Hammer, UPV, carbonation testing and rebar scanning to identify fire-related deterioration and rehabilitation requirements.",
    standard: "IS 516 (Part 5 / Section 4):2020",
    sections: [
      {
        heading: "Project Overview",
        paragraphs: [
          "Following a fire incident affecting the first floor, Nilima Design Associates carried out a structural health assessment of the G+1 UCO Bank building at Bilkanda, West Bengal.",
          "Client: UCO Bank, Bilkanda Branch. Testing Agency: Nilima Design Associates. Test Date: 12 January 2026. Report Date: 15 January 2026. Report No.: NDA/UCO-BIL-BARASAT/25-26/VER01.",
          "The purpose of the investigation was to document the condition of the existing RCC structure and assess areas affected by fire, ageing, cracking, water ingress, carbonation and reinforcement exposure.",
          "The assessment combined visual inspection and multiple Non-Destructive Testing (NDT) techniques to identify areas requiring repair, rehabilitation and further structural evaluation."
        ]
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "Fire exposure can alter the condition of concrete and structural components, while existing ageing, moisture ingress and reinforcement corrosion can contribute to further deterioration.",
          "During the site inspection, the first floor showed visible evidence of fire exposure. The report records that the entire first floor had been affected by fire, with concrete surfaces blackened due to smoke and heat exposure.",
          "Additional deterioration was observed in different parts of the building, including cracks in beams and columns, exposed reinforcement at localized beam locations, roof-joint water leakage, dampness and seepage, deteriorated concrete and plaster, a damaged chhajja, and distress in beams and slabs."
        ],
        list: [
          "Fire-affected first floor with blackened concrete surfaces",
          "Cracks in beams and columns",
          "Localized exposed reinforcement",
          "Roof-joint leakage, dampness and seepage",
          "Deteriorated concrete and plaster",
          "Severely damaged chhajja",
          "Distress in beams and slabs"
        ]
      },
      {
        heading: "Investigation Methodology",
        paragraphs: [
          "Nilima Design Associates used a combination of visual inspection and non-destructive testing to investigate the observed condition of the building and identify locations requiring further attention."
        ],
        list: [
          "Visual inspection of cracks, concrete deterioration, exposed reinforcement, fire effects and water-related damage",
          "Rebound Hammer testing to obtain an indication of surface hardness and estimated concrete strength",
          "Ultrasonic Pulse Velocity (UPV) testing to investigate concrete uniformity and internal integrity",
          "Carbonation testing to assess carbonation progression and its potential effect on reinforcement protection",
          "Rebar scanning to identify approximate reinforcement location, spacing, diameter and concrete cover"
        ]
      },
      {
        heading: "Visual Assessment After Fire",
        paragraphs: [
          "Visual inspection was particularly important because the first floor had experienced fire exposure. The report documented that the entire first floor was fire affected, with concrete surfaces blackened following smoke and heat exposure.",
          "Cracks were observed at multiple beam and column locations. The report identified these cracks as requiring detailed crack-width measurement and further investigation.",
          "Localized areas of beams had exposed reinforcement, indicating loss of concrete cover and possible corrosion. Roof-joint leakage, dampness and seepage marks were also observed.",
          "The chhajja was reported as severely damaged and requiring immediate attention."
        ],
        list: [
          "First-floor surfaces affected by smoke and heat",
          "Cracking at multiple beam and column locations",
          "Localized exposed reinforcement in beams",
          "Roof-joint leakage and moisture-related deterioration",
          "Severely damaged chhajja requiring urgent attention"
        ]
      },
      {
        heading: "Rebound Hammer Investigation",
        paragraphs: [
          "Rebound Hammer testing was carried out on selected columns, beams and roof slabs to obtain an indication of surface hardness and estimated concrete compressive strength.",
          "The recorded estimated values varied considerably across the tested locations. Selected first-floor columns recorded values around 30–38 N/mm², while several beams recorded approximately 22–42 N/mm². One roof-slab location recorded an estimated value of approximately 15 N/mm².",
          "The report references IS 516 (Part 5 / Section 4):2020 for Rebound Hammer testing. It also notes that the results primarily indicate surface characteristics and do not represent the complete internal condition of concrete."
        ]
      },
      {
        heading: "Ultrasonic Pulse Velocity Investigation",
        paragraphs: [
          "UPV testing provided additional information about the internal condition and uniformity of the concrete. The results showed a considerable number of DOUBTFUL classifications across the tested locations.",
          "The report applies qualitative UPV grading based on its cited standard criteria, with values below 3.5 km/s classified as doubtful for the stated M25 criterion.",
          "The results were considered alongside the visual inspection and other NDT findings because surface appearance and surface hardness alone cannot fully describe the internal condition of fire-affected concrete."
        ],
        list: [
          "Column 01 — 1.956 km/s — Doubtful",
          "Column 02 — 2.824 km/s — Doubtful",
          "Column 05 — 3.597 km/s — Good",
          "Beam 01 — 2.977 km/s — Doubtful",
          "Beam 03 — 3.306 km/s — Medium",
          "Beam 08 — 4.048 km/s — Good",
          "Beam 09 — 3.902 km/s — Good",
          "Several roof-slab locations — Doubtful"
        ]
      },
      {
        heading: "Carbonation & Durability Assessment",
        paragraphs: [
          "Carbonation testing was undertaken to investigate the condition of the concrete surrounding the reinforcement.",
          "The report states that carbonation had progressed to reinforcement level at several locations, with loss of alkalinity associated with reinforcement corrosion, cracking and spalling.",
          "This was an important durability finding because adequate reinforcement cover and concrete alkalinity contribute to reinforcement protection."
        ]
      },
      {
        heading: "Rebar Scanning & Concrete Cover Assessment",
        paragraphs: [
          "Rebar scanning was performed on selected columns, beams and slabs to investigate approximate reinforcement location, diameter, spacing, arrangement and concrete cover.",
          "Selected column locations recorded approximate cover values of 38–49 mm, together with reinforcement diameter and spacing. Selected beam locations recorded approximately 31–39 mm of cover, while selected slab locations showed approximately 21–31 mm.",
          "The report notes that reinforcement quantity and spacing were generally within the referenced IS 456 limits, while reduced cover and carbonation remained durability concerns."
        ],
        list: [
          "Columns — approximately 38–49 mm concrete cover",
          "Beams — approximately 31–39 mm concrete cover",
          "Slabs — approximately 21–31 mm concrete cover",
          "Reinforcement diameter and spacing recorded at selected locations",
          "Reinforcement arrangement assessed alongside cover and durability observations"
        ]
      },
      {
        heading: "Key Findings",
        paragraphs: [
          "The combined investigation identified fire-related deterioration alongside ageing, carbonation, water ingress, cracking and localized reinforcement exposure.",
          "The UPV investigation produced numerous doubtful classifications at tested locations, indicating areas requiring further assessment. Carbonation was reported to have reached reinforcement level at several locations, while active roof-joint leakage and dampness presented additional deterioration concerns.",
          "The chhajja was reported as severely damaged and requiring immediate attention."
        ],
        list: [
          "Fire exposure: The entire first floor was reported as fire affected, with visible smoke- and heat-related surface deterioration.",
          "Concrete condition: UPV testing produced numerous doubtful classifications at tested locations.",
          "Water ingress: Roof-joint leakage and dampness were observed.",
          "Reinforcement: Exposed reinforcement and localized cover concerns were recorded.",
          "Carbonation: Carbonation was reported to have reached reinforcement level at several locations.",
          "Chhajja: Severe damage was recorded, requiring immediate attention."
        ]
      },
      {
        heading: "Recommended Rehabilitation Strategy",
        paragraphs: [
          "Based on the investigation findings, the report recommended repair and rehabilitation measures addressing the damaged chhajja, fire-affected RCC members, reinforcement protection and water ingress. Detailed structural evaluation and repair design were recommended before execution of major repairs."
        ],
        list: [
          "Immediate chhajja action: Repair or dismantle the damaged chhajja as appropriate following a safety assessment.",
          "Fire-affected RCC repair: Repair and rehabilitate fire-affected and deteriorated RCC members using appropriate repair methodologies.",
          "Reinforcement protection: Apply suitable anti-corrosion treatment and restore concrete cover where reinforcement is exposed or carbonation has progressed.",
          "Waterproofing: Treat roof slabs and joints to reduce further water ingress and deterioration.",
          "Detailed structural evaluation: Have a qualified structural engineer prepare a detailed evaluation and repair design before major repair works are executed.",
          "Post-repair NDT: Conduct fresh NDT testing after repair or strengthening to assess the resulting condition."
        ]
      },
      {
        heading: "Engineering Approach",
        paragraphs: [
          "FIRE DAMAGE → VISUAL INSPECTION → NDT INVESTIGATION → CONDITION ASSESSMENT → REPAIR DESIGN → STRENGTHENING → POST-REPAIR NDT",
          "This project demonstrates the importance of a multi-stage investigation following a building fire. Rather than relying on visual appearance or a single test, the assessment combined visual inspection, Rebound Hammer testing, UPV, carbonation testing and rebar scanning to develop a more complete picture of the investigated structural elements."
        ],
        list: [
          "Visual Inspection — Identification of visible fire effects, cracks and deterioration",
          "Rebound Hammer — Assessment of concrete surface hardness",
          "UPV — Investigation of internal concrete uniformity",
          "Carbonation Testing — Assessment of carbonation and reinforcement protection",
          "Rebar Scanning — Investigation of reinforcement arrangement and concrete cover"
        ]
      },
      {
        heading: "Project Outcome",
        paragraphs: [
          "The assessment identified fire-related deterioration together with ageing, carbonation, water ingress, cracking and localized reinforcement exposure.",
          "The report recommended that repair and strengthening works be carried out before considering continued use under the existing loading conditions, followed by fresh NDT assessment after strengthening.",
          "The findings demonstrate the importance of combining non-destructive testing, visual inspection and engineering assessment when evaluating an existing structure after a fire incident."
        ]
      },
      {
        heading: "Nilima Design Associates — Post-Fire Structural Assessment",
        paragraphs: [
          "We investigate. We document. We assess. We recommend.",
          "Nilima Design Associates provides post-fire structural assessment, structural health checkups, NDT testing and structural repair and rehabilitation consultancy for existing buildings and infrastructure."
        ],
        list: [
          "Post-fire structural assessment",
          "Structural health checkup",
          "Rebound Hammer testing",
          "UPV testing",
          "Carbonation testing",
          "Rebar scanning",
          "Concrete condition assessment",
          "Structural repair and rehabilitation consultancy",
          "Post-repair NDT assessment"
        ]
      }
    ]
  },
];


export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[var(--paper)] text-[var(--ink)]">
        {/* Page header */}
        <section className="relative pb-16 pt-40 md:pb-20 md:pt-48">
          <div className="page-grid">
            <div className="col-span-12">
              <p
                className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <Link href="/" className="hover:text-[var(--blueprint)]">
                  Home
                </Link>{" "}
                /{" "}
                <Link href="/insights" className="hover:text-[var(--blueprint)]">
                  Insights
                </Link>{" "}
                / <span className="text-[var(--ink)]">{insight.title}</span>
              </p>

              <p
                className="mt-6 text-xs uppercase tracking-wide"
                style={{ fontFamily: "var(--font-dm-mono)", color: "var(--blueprint)" }}
              >
                {insight.category}
              </p>

              <h1 className="mt-3 max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--ink)]">
                {insight.title}
              </h1>

              <p className="mt-4 text-lg text-[var(--graphite)]">
                {insight.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="relative pb-24 md:pb-32">
          <div className="page-grid">
            <div className="col-span-12">
              <div className="dimension-line" />
            </div>

            <div className="col-span-12 mt-14 grid grid-cols-1 gap-12 md:grid-cols-12">
              {/* Sidebar */}
              <aside className="md:col-span-3">
                <div className="sticky top-28 space-y-6">
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Standard Referenced
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink)]">
                      {insight.standard}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-xs uppercase tracking-wide text-[var(--graphite)]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Testing Agency
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink)]">
                      Nilima Design Associates
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block border-b border-[var(--ink)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
                  >
                    Discuss a similar project
                  </Link>
                </div>
              </aside>

              {/* Content */}
              <div className="md:col-span-9">
                {insight.sections.map((section, index) => {
                  const accentVar =
                    index % 2 === 0 ? "var(--blueprint)" : "var(--green)";
                  return (
                    <div key={section.heading} className={index > 0 ? "mt-14" : ""}>
                      <span
                        className="block h-[3px] w-10"
                        style={{ backgroundColor: accentVar }}
                      />
                      <h2 className="mt-4 text-2xl font-semibold text-[var(--ink)]">
                        {section.heading}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="mt-4 text-base leading-relaxed text-[var(--graphite)]"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.list && (
                        <ul className="mt-4 space-y-2">
                          {section.list.map((line) => (
                            <li
                              key={line}
                              className="flex items-start gap-2 text-sm text-[var(--ink)]"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                                style={{ backgroundColor: accentVar }}
                              />
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Back to insights */}
        <section className="relative overflow-hidden bg-[var(--navy)] py-16 text-white md:py-20">
          <div className="page-grid">
            <div className="col-span-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-xl font-medium leading-snug md:text-2xl">
                More field notes and case studies are on the way.
              </p>

              <Link
                href="/insights"
                className="shrink-0 border-b border-white/40 pb-1 text-sm font-medium transition-colors hover:border-[var(--blueprint)] hover:text-[var(--blueprint)]"
              >
                Back to Insights
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}