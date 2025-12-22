const projects = [
  {
    title: "AI-Driven Business Planner",
    link: "https://github.com/m-elkhamisy/business-plan-builder",
    description: "Gained experience building user interfaces and understanding how frontend components connect with backend databases."
  },
  {
    title: "Extractive Text Summarization Research",
    link: "https://github.com/blena82/extractive_summarization",
    description: "Learned how to apply and evaluate NLP-based summarization methods using Python on structured text data."
  },
  {
    title: "Database Management System",
    description: "Developed an understanding of relational database design, normalization, and writing efficient SQL queries."
  },
  {
    title: "Computer Networking Lab Projects",
    description: "Applied core networking concepts by configuring networks and analyzing protocols in practical lab environments."
  }
];


const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
  projectList.appendChild(li);
});
