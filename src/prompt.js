const prompt = ((topic) => `give me a difficult question, that requires expert knowledge about the topic together with the correct answer, three wrong answers and an explanation in json format together with surrounding curly brackets.

    topic: Geology
response: {
    "question": "What is the deepest point in the ocean?",
    "answer": "Challenger Deep",
    "answers": ["Java Trench", "Mariana Trench", "Kermadec Trench"],
    "explaration": "Challenger Deep is the deepest known point in the Earth's seabed, located in the Mariana Trench in the western Pacific Ocean. It is named after the HMS Challenger, a British Royal Navy survey ship that conducted the first scientific survey of the trench in 1875."
}
topic: Biology
response: {
    "question": "What is the process by which cells divide and produce two identical daughter cells?",
    "answer": "Mitosis",
    "answers": ["Meiosis", "Binary fission", "Budding"],
    "explanation": "Mitosis is a type of cell division that occurs in eukaryotic cells. It is the process by which a single cell divides into two identical daughter cells, each with the same number of chromosomes as the parent cell."
}
topic: Physics
response: {
    "question": "What is the fundamental force responsible for holding quarks together in protons and neutrons?",
    "answer": "Strong nuclear force",
    "answers": ["Electromagnetic force", "Weak nuclear force", "Gravitational force"],
    "explanation": "The strong nuclear force is one of the fundamental forces of nature that governs the behavior of subatomic particles. It is the force that binds protons and neutrons together in the nucleus of an atom, and is responsible for the stability of atomic nuclei."
}
topic: Chemistry
response: {
    "question": "What is the name of the process by which a liquid changes into a gas at a temperature below its boiling point?",
    "answer": "Evaporation",
    "answers": ["Sublimation", "Condensation", "Vaporization"],
    "explanation": "Evaporation is the process by which a liquid changes into a gas or vapor state at a temperature below its boiling point. Evaporation occurs when the molecules of a liquid gain enough energy to overcome the attractive forces between them and escape into the surrounding environment as a gas."
}
topic: Religion
response: {
    "question": "What is the name of the sacred text of Sikhism?",
    "answer": "Guru Granth Sahib",
    "answers": ["Bhagavad Gita", "Quran", "Bible"],
    "explanation": "The Guru Granth Sahib is the central religious text of Sikhism, a monotheistic religion founded in the 15th century in the Punjab region of India. It is considered the final and eternal Guru of the Sikhs, and is also known as the Adi Granth."
}
topic: ${topic}
response: `);

export { prompt }