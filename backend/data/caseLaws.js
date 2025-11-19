// Mock case law database
const CASE_LAWS = [
  {
    title: "State of XYZ vs. Rohan Kumar",
    citation: "2020 SCC 112",
    court: "Supreme Court of India",
    description: "Landmark judgment on bail provisions in non-bailable offences, establishing guidelines for considering bail applications in cases involving serious charges.",
    keywords: ["bail", "custody"]
  },
  {
    title: "ABC vs. State of India",
    citation: "2019 AIR 445",
    court: "High Court of Delhi",
    description: "Important ruling on the validity of FIR and procedural requirements for initiating criminal investigations under Indian Penal Code.",
    keywords: ["FIR", "investigation"]
  },
  {
    title: "Rahul Sharma vs. State",
    citation: "2021 SCC 88",
    court: "Supreme Court of India",
    description: "Precedent-setting case on anticipatory bail rights and the principles to be followed while considering pre-arrest bail applications.",
    keywords: ["anticipatory bail", "arrest"]
  },
  {
    title: "Kumar vs. State of Maharashtra",
    citation: "2022 SCC 203",
    court: "Supreme Court of India",
    description: "Comprehensive analysis of criminal procedure code provisions relating to bail and the balance between individual liberty and investigation needs.",
    keywords: ["bail", "criminal procedure"]
  },
  {
    title: "State vs. Amit Verma",
    citation: "2021 AIR 667",
    court: "High Court of Mumbai",
    description: "Detailed examination of evidence collection procedures and admissibility standards in criminal investigations.",
    keywords: ["investigation", "evidence", "FIR"]
  },
  {
    title: "Priya Singh vs. State",
    citation: "2023 SCC 45",
    court: "Supreme Court of India",
    description: "Significant ruling on fundamental rights during arrest and custody, emphasizing the need to protect individual dignity and due process.",
    keywords: ["arrest", "custody", "rights"]
  },
  {
    title: "Rajesh Patel vs. Union of India",
    citation: "2022 SCC 156",
    court: "Supreme Court of India",
    description: "Critical case on habeas corpus petitions and protection of fundamental rights against illegal detention by state authorities.",
    keywords: ["habeas corpus", "detention", "fundamental rights"]
  },
  {
    title: "State of Delhi vs. Mohit Agarwal",
    citation: "2023 AIR 789",
    court: "High Court of Delhi",
    description: "Leading judgment on bail considerations in economic offences and money laundering cases, balancing individual liberty with investigation requirements.",
    keywords: ["bail", "economic offences", "money laundering"]
  },
  {
    title: "Sunita Devi vs. State of Bihar",
    citation: "2021 SCC 334",
    court: "Supreme Court of India",
    description: "Landmark ruling on domestic violence protection orders and the rights of victims under the Protection of Women from Domestic Violence Act.",
    keywords: ["domestic violence", "protection", "rights"]
  },
  {
    title: "Vikram Industries vs. State",
    citation: "2020 AIR 923",
    court: "High Court of Karnataka",
    description: "Important precedent on search and seizure procedures, establishing guidelines for lawful conduct of investigations by authorities.",
    keywords: ["search", "seizure", "investigation"]
  },
  {
    title: "State vs. Karthik Reddy",
    citation: "2022 SCC 445",
    court: "Supreme Court of India",
    description: "Significant judgment clarifying the scope of anticipatory bail in cognizable offences and the principles governing pre-arrest protection.",
    keywords: ["anticipatory bail", "cognizable offence", "arrest"]
  },
  {
    title: "Meera Joshi vs. State of Gujarat",
    citation: "2023 AIR 234",
    court: "High Court of Gujarat",
    description: "Critical analysis of bail provisions in non-bailable offences and factors to be considered while granting or denying bail.",
    keywords: ["bail", "non-bailable", "custody"]
  },
  {
    title: "Arjun Kumar vs. CBI",
    citation: "2021 SCC 567",
    court: "Supreme Court of India",
    description: "Comprehensive ruling on corruption investigations, evidence standards, and procedural safeguards in cases involving public servants.",
    keywords: ["corruption", "investigation", "evidence"]
  },
  {
    title: "State of UP vs. Ramesh Yadav",
    citation: "2020 AIR 678",
    court: "High Court of Allahabad",
    description: "Important decision on quashing of FIR and jurisdictional aspects in criminal cases, setting guidelines for abuse of process.",
    keywords: ["FIR", "quashing", "jurisdiction"]
  },
  {
    title: "Deepak Malhotra vs. State",
    citation: "2022 SCC 789",
    court: "Supreme Court of India",
    description: "Precedent on compensation for illegal detention and arrest, emphasizing accountability of state authorities for unlawful actions.",
    keywords: ["arrest", "illegal detention", "compensation"]
  },
  {
    title: "State vs. Anjali Mehta",
    citation: "2023 AIR 901",
    court: "High Court of Mumbai",
    description: "Analysis of bail in serious offences considering public interest and the gravity of allegations in criminal proceedings.",
    keywords: ["bail", "serious offence", "public interest"]
  },
  {
    title: "Sanjay Enterprises vs. ED",
    citation: "2021 SCC 223",
    court: "Supreme Court of India",
    description: "Leading case on provisional attachment in money laundering investigations and the procedural safeguards under PMLA.",
    keywords: ["money laundering", "attachment", "investigation"]
  },
  {
    title: "State of Karnataka vs. Naveen Kumar",
    citation: "2022 AIR 445",
    court: "High Court of Karnataka",
    description: "Detailed examination of judicial custody and remand procedures, ensuring compliance with constitutional safeguards.",
    keywords: ["custody", "remand", "judicial"]
  },
  {
    title: "Ritu Sharma vs. State",
    citation: "2020 SCC 890",
    court: "Supreme Court of India",
    description: "Significant ruling on anticipatory bail in cases of false accusations, protecting individuals from malicious prosecution.",
    keywords: ["anticipatory bail", "false accusation", "rights"]
  },
  {
    title: "State vs. Prakash Gupta",
    citation: "2023 AIR 567",
    court: "High Court of Delhi",
    description: "Comprehensive judgment on witness protection mechanisms and evidence safeguards in criminal investigations.",
    keywords: ["investigation", "witness protection", "evidence"]
  },
  {
    title: "Anil vs. State of Rajasthan",
    citation: "2021 SCC 678",
    court: "Supreme Court of India",
    description: "Compassionate ruling on bail granted on medical and humanitarian grounds, balancing justice with human dignity.",
    keywords: ["bail", "medical grounds", "humanitarian"]
  },
  {
    title: "State of Punjab vs. Harpreet Singh",
    citation: "2022 AIR 123",
    court: "High Court of Punjab and Haryana",
    description: "Critical case on arrest procedures and bail provisions in narcotics cases under the Narcotic Drugs and Psychotropic Substances Act.",
    keywords: ["arrest", "narcotics", "NDPS"]
  },
  {
    title: "Pooja Verma vs. State",
    citation: "2023 SCC 901",
    court: "Supreme Court of India",
    description: "Important precedent on quashing FIRs in defamation cases, balancing freedom of speech with reputation protection.",
    keywords: ["FIR", "defamation", "quashing"]
  },
  {
    title: "State vs. Mukesh Ambani",
    citation: "2020 AIR 234",
    court: "High Court of Mumbai",
    description: "Landmark judgment on corporate fraud investigations, evidence collection standards, and prosecution of economic offences.",
    keywords: ["investigation", "corporate fraud", "evidence"]
  },
  {
    title: "Geeta Devi vs. State of MP",
    citation: "2022 SCC 567",
    court: "Supreme Court of India",
    description: "Compassionate ruling granting bail on grounds of old age and health, emphasizing humanitarian considerations in criminal justice.",
    keywords: ["bail", "old age", "compassionate grounds"]
  }
];

module.exports = CASE_LAWS;
