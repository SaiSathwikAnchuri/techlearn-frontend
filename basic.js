const projects = [
    {
      id: 1,
      title: "Responsive Portfolio Website",
      category: "html css",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=300",
      description: "A responsive portfolio website template using HTML and CSS."
    },
    {
      id: 2,
      title: "Interactive To-Do List",
      category: "javascript",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=300",
      description: "A dynamic to-do list application using JavaScript."
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "react",
      image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&q=80&w=300",
      description: "A weather dashboard built with React.js and OpenWeather API."
    },
    {
      id: 4,
      title: "Data Visualization App",
      category: "python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300",
      description: "A data visualization tool built with Python and Matplotlib."
    },
    {
      id: 5,
      title: "E-Commerce Application",
      category: "java",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=300",
      description: "A simple e-commerce application built with Java and Spring Boot."
    },
    {
      id: 6,
      title: "Animated Navigation Menu",
      category: "css javascript",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=300",
      description: "A creative animated navigation menu using CSS and JavaScript."
    }
  ];
  
  // DOM Elements
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Handle Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  
  // Filter Projects
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Get filter value
      const filter = btn.getAttribute('data-filter');
      
      // Filter projects
      displayProjects(filter);
    });
  });
  
  // Display Projects
  function displayProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
      if (filter === 'all' || project.category.includes(filter)) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-info">
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="#" class="btn btn-secondary">View Project</a>
          </div>
        `;
        
        projectsGrid.appendChild(projectCard);
      }
    });
  }
  
  // Initial load
  displayProjects();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });