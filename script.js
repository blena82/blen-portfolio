// ============================================
// BLEN WASSIE — Portfolio
// Projects data & scroll reveal animations
// ============================================

const projects = [
  {
    icon: "🎓",
    title: "Student At-Risk Recovery Planner",
    tech: "Python · Streamlit · Plotly · A* Search",
    description: "Interactive web dashboard using A* search to generate optimal recovery plans for at-risk students. Implements Greedy and UCS from scratch for baseline comparison, with what-if simulation scenarios.",
    link: "https://github.com/blena82/student-recovery-planner"
  },
  {
    icon: "⚙️",
    title: "NEXL Compiler — Lexical Analyzer",
    tech: "C · Flex/Lex",
    description: "Designed a custom programming language (NEXL) and built a full scanner using Flex that tokenizes keywords, identifiers, literals, operators, and delimiters with line-level error detection.",
    link: "https://github.com/blena82/nexl-compiler"
  },
  {
    icon: "🧠",
    title: "Extractive Summarization with BERT",
    tech: "Python · PyTorch · HuggingFace Transformers",
    description: "BERTSummarizer with inter-sentence transformers for extractive text summarization. Conducted ablation studies and evaluated with ROUGE, BLEU, and BERTScore metrics.",
    link: "https://github.com/blena82/extractive_summarization"
  },
  {
    icon: "📊",
    title: "Sorting Algorithm Optimization",
    tech: "C++ · Algorithm Analysis",
    description: "Comparative study of 5 sorting algorithms — each in original and optimized form. Benchmarked across random, sorted, and reverse-sorted datasets with 100K elements.",
    link: "https://github.com/blena82/sorting-algorithm-optimization"
  },
  {
    icon: "🛒",
    title: "E-Commerce Database System",
    tech: "SQL · SQLite · Database Design · Figma",
    description: "Fully normalized relational database (1NF → 3NF) with 40+ tables covering customers, products, orders, payments, delivery, ratings, returns, and analytics.",
    link: "https://github.com/blena82/ecommerce-database"
  }
];

// ---- Render Projects ----
const projectList = document.getElementById("projectList");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.style.transitionDelay = `${index * 0.1}s`;

  const linkHTML = project.link
    ? `<a href="${project.link}" target="_blank" class="project-link">View on GitHub →</a>`
    : '';

  card.innerHTML = `
    <span class="project-icon">${project.icon}</span>
    <h3 class="project-title">${project.title}</h3>
    <div class="project-tech">${project.tech}</div>
    <p class="project-desc">${project.description}</p>
    ${linkHTML}
  `;

  projectList.appendChild(card);
});

// ---- Scroll Reveal Animation ----
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Observe project cards separately for staggered animation
document.querySelectorAll(".project-card").forEach(el => observer.observe(el));

// ---- Smooth nav background on scroll ----
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = "rgba(16, 185, 129, 0.1)";
  } else {
    nav.style.borderBottomColor = "rgba(255, 255, 255, 0.06)";
  }
});