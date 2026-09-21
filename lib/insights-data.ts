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
];