// Mock case law database
const CASE_LAWS = [
  {
    title: "State of XYZ vs. Rohan Kumar",
    citation: "2020 SCC 112",
    keywords: ["bail", "custody"]
  },
  {
    title: "ABC vs. State of India",
    citation: "2019 AIR 445",
    keywords: ["FIR", "investigation"]
  },
  {
    title: "Rahul Sharma vs. State",
    citation: "2021 SCC 88",
    keywords: ["anticipatory bail", "arrest"]
  },
  {
    title: "Kumar vs. State of Maharashtra",
    citation: "2022 SCC 203",
    keywords: ["bail", "criminal procedure"]
  },
  {
    title: "State vs. Amit Verma",
    citation: "2021 AIR 667",
    keywords: ["investigation", "evidence", "FIR"]
  },
  {
    title: "Priya Singh vs. State",
    citation: "2023 SCC 45",
    keywords: ["arrest", "custody", "rights"]
  },
  {
    title: "Rajesh Patel vs. Union of India",
    citation: "2022 SCC 156",
    keywords: ["habeas corpus", "detention", "fundamental rights"]
  },
  {
    title: "State of Delhi vs. Mohit Agarwal",
    citation: "2023 AIR 789",
    keywords: ["bail", "economic offences", "money laundering"]
  },
  {
    title: "Sunita Devi vs. State of Bihar",
    citation: "2021 SCC 334",
    keywords: ["domestic violence", "protection", "rights"]
  },
  {
    title: "Vikram Industries vs. State",
    citation: "2020 AIR 923",
    keywords: ["search", "seizure", "investigation"]
  },
  {
    title: "State vs. Karthik Reddy",
    citation: "2022 SCC 445",
    keywords: ["anticipatory bail", "cognizable offence", "arrest"]
  },
  {
    title: "Meera Joshi vs. State of Gujarat",
    citation: "2023 AIR 234",
    keywords: ["bail", "non-bailable", "custody"]
  },
  {
    title: "Arjun Kumar vs. CBI",
    citation: "2021 SCC 567",
    keywords: ["corruption", "investigation", "evidence"]
  },
  {
    title: "State of UP vs. Ramesh Yadav",
    citation: "2020 AIR 678",
    keywords: ["FIR", "quashing", "jurisdiction"]
  },
  {
    title: "Deepak Malhotra vs. State",
    citation: "2022 SCC 789",
    keywords: ["arrest", "illegal detention", "compensation"]
  },
  {
    title: "State vs. Anjali Mehta",
    citation: "2023 AIR 901",
    keywords: ["bail", "serious offence", "public interest"]
  },
  {
    title: "Sanjay Enterprises vs. ED",
    citation: "2021 SCC 223",
    keywords: ["money laundering", "attachment", "investigation"]
  },
  {
    title: "State of Karnataka vs. Naveen Kumar",
    citation: "2022 AIR 445",
    keywords: ["custody", "remand", "judicial"]
  },
  {
    title: "Ritu Sharma vs. State",
    citation: "2020 SCC 890",
    keywords: ["anticipatory bail", "false accusation", "rights"]
  },
  {
    title: "State vs. Prakash Gupta",
    citation: "2023 AIR 567",
    keywords: ["investigation", "witness protection", "evidence"]
  },
  {
    title: "Anil vs. State of Rajasthan",
    citation: "2021 SCC 678",
    keywords: ["bail", "medical grounds", "humanitarian"]
  },
  {
    title: "State of Punjab vs. Harpreet Singh",
    citation: "2022 AIR 123",
    keywords: ["arrest", "narcotics", "NDPS"]
  },
  {
    title: "Pooja Verma vs. State",
    citation: "2023 SCC 901",
    keywords: ["FIR", "defamation", "quashing"]
  },
  {
    title: "State vs. Mukesh Ambani",
    citation: "2020 AIR 234",
    keywords: ["investigation", "corporate fraud", "evidence"]
  },
  {
    title: "Geeta Devi vs. State of MP",
    citation: "2022 SCC 567",
    keywords: ["bail", "old age", "compassionate grounds"]
  }
];

module.exports = CASE_LAWS;
