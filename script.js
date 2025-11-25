function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`Sorry Request cannot be accepted due to some technical errors`);
})




// Skill data
const skills = [
  
  { title: "C/C++", description: "System programming and performance optimization", level: 80, icon: "⚙️" },
  { title: "Java", description: "Enterprise application development", level: 80, icon: "☕" },
  { title: "Python", description: "Writing efficient and scalable backend applications", level: 75, icon: "🐍" },
  { title: "HTML/CSS", description: "Creating responsive and semantic web structures", level: 85, icon: "💻" },
  { title: "JavaScript", description: "Building interactive and dynamic web applications", level: 70, icon: "📜" },
  { title: "React", description: "Developing modern web applications with React", level: 60, icon: "⚛️" },
  { title: "Express js", description: "Simplifying responsive and semantic web development.", level: 60, icon: "®️" },
  { title: "Node js", description: "Powering responsive and semantic web applications.", level: 80, icon: "📓" },
  { title: "MongoDB", description: "Working with NoSQL databases and document storage", level: 80, icon: "📊" },
  { title: "MySQL", description: "Managing relational databases and SQL queries", level: 50, icon: "🗃️" },
  { title: "AI/ML", description: "Building intelligent systems and predictive models", level: 70, icon: "🧠" },
  { title: "Git/GitHub", description: "Version control and collaborative development", level: 85, icon: "🔀" },

];

// Function to get color class based on proficiency level
function getProficiencyColor(level) {
  if (level >= 85) return 'green';

  if (level >= 75) return 'yellow';
  if (level >= 60) return 'orange';
  return 'red';
}

const skillsGrid = document.getElementById('skillsGrid');

// Create skill cards
skills.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card';

  card.innerHTML = `
    <div class="skill-header">
      <div class="skill-title">${skill.title}</div>
      <div class="skill-icon" aria-label="${skill.title} icon">${skill.icon}</div>
    </div>
    <div class="skill-desc">${skill.description}</div>
    <div class="proficiency-container">
      <div class="proficiency-labels">
        <span>Proficiency</span>
        <span>${skill.level}%</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill ${getProficiencyColor(skill.level)}"></div>
      </div>
    </div>
  `;

  skillsGrid.appendChild(card);
});

// Animate progress bars after DOM content loaded
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.progress-bar-fill');
  fills.forEach((fill, index) => {
    const level = skills[index].level;
    // Animate width with a slight delay for each bar
    setTimeout(() => {
      fill.style.width = level + '%';
    }, index * 150);
  });
});
