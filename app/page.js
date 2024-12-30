'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import ThemeToggle from './components/ThemeToggle';
import ProjectsSection from './components/ProjectsSection';
import SectionTitle from './components/SectionTitle';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import './styles/animations.css';
import { showLoginModal, showSignUpModal } from './components/AuthModals';

const Scene3D = dynamic(() => import('./components/Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 animate-pulse" />
});

const CountUpNumber = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(startValue + (end - startValue) * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-center relative group">
      {/* Decorative circle */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-xl group-hover:scale-110 transition-transform duration-500"></div>
      
      <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
        {count}+
      </h3>
      <p className="text-gray-500 dark:text-gray-400 font-medium">{label}</p>
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  // Project data with categories
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Creative portfolio with stunning animations",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2426&auto=format&fit=crop",
      category: "design",
      tags: ["Figma", "React", "GSAP"]
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive banking application",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2370&auto=format&fit=crop",
      category: "ui",
      tags: ["UI/UX", "Figma", "Swift"]
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop",
      category: "web",
      tags: ["Vue.js", "D3.js"]
    },
    {
      id: 5,
      title: "Brand Identity",
      description: "Complete brand identity system",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2374&auto=format&fit=crop",
      category: "design",
      tags: ["Illustrator", "Photoshop"]
    },
    {
      id: 6,
      title: "Educational Video Series",
      description: "Interactive learning content",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2425&auto=format&fit=crop",
      category: "video",
      tags: ["Final Cut Pro", "Motion"]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const handleLoadMore = () => {
    setShowAllProjects(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);

    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Observe all parallax backgrounds
    document.querySelectorAll('.parallax-bg').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    // Observe all elements with animation classes
    document.querySelectorAll('.section-animate, .card-animate, .grid-animate, .fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-up, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    if (!projectsWrapper) return;

    const slideProjects = () => {
      const cardWidth = projectsWrapper.querySelector('.project-card')?.offsetWidth || 0;
      const gap = 16; // 1rem = 16px
      const slideAmount = (cardWidth + gap) / 2; // Slide half a card width at a time for smoother motion
      
      setSliderPosition(prevPosition => {
        const maxScroll = projectsWrapper.scrollWidth - projectsWrapper.clientWidth;
        const nextPosition = prevPosition + slideAmount;
        
        // Reset to start if we've reached the end
        if (nextPosition >= maxScroll) {
          projectsWrapper.scrollTo({ 
            left: 0, 
            behavior: 'smooth' 
          });
          return 0;
        } else {
          projectsWrapper.scrollTo({ 
            left: nextPosition, 
            behavior: 'smooth'
          });
          return nextPosition;
        }
      });
    };

    // Start the automatic sliding with a longer interval (5 seconds)
    const intervalId = setInterval(slideProjects, 5000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* 3D Background */}
      <div className={`fixed top-0 right-0 w-1/2 h-screen z-0 pointer-events-none opacity-0 ${isLoaded ? 'animate-slide-right opacity-90' : ''}`}>
        <Scene3D />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212659417658"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl z-50 group animate-float-slow"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg 
          className="w-6 h-6 group-hover:scale-110 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {/* Pulse Effect */}
      <span className="absolute -top-1 -right-1 w-3 h-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </a>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen pt-32 pb-20 px-4 relative flex items-center">
          <div className="container mx-auto relative">
            <div className="max-w-2xl hero-content">
              <h1 className={`hero-title text-6xl md:text-8xl font-bold font-syne mb-8 leading-tight opacity-0 ${isLoaded ? 'animate-fade-slide delay-200' : ''}`}>
                We Create<br />
                Digital <span className="text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Excellence</span>
              </h1>
              <p className={`hero-description text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 opacity-0 ${isLoaded ? 'animate-fade-slide delay-300' : ''}`}>
                Transforming ideas into exceptional digital experiences. We're a full-service digital agency crafting innovative solutions for forward-thinking brands.
              </p>
              <button 
                className="hero-button btn-primary px-8 py-4 rounded-full text-lg font-medium text-white"
                onClick={createRipple}
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* Blurred Background */}
          <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl -z-10"></div>
          
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none -z-5">
            <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto relative">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Why Choose NOVA DIGITAL?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We combine innovation, expertise, and dedication to deliver exceptional digital solutions that drive your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Expertise Card */}
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Proven Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300">Years of experience delivering cutting-edge solutions across various industries.</p>
                </div>
              </div>

              {/* Innovative Solutions Card */}
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovative Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">We leverage cutting-edge technologies to create innovative solutions that keep you ahead of the competition.</p>
                </div>
              </div>

              {/* Fast Delivery Card */}
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-red-500/5 to-orange-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Fast Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300">We pride ourselves on quick turnaround times without compromising on quality.</p>
                </div>
              </div>

              {/* Support Card */}
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">Round-the-clock assistance and dedicated support for your peace of mind.</p>
                </div>
              </div>

              {/* Security Card */}
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Enhanced Security</h3>
                  <p className="text-gray-600 dark:text-gray-300">Top-tier security measures to protect your digital assets and data.</p>
                </div>
              </div>

              {/* Performance Card */}
              <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-indigo-500/5 to-purple-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Performance Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive insights and metrics to track your digital success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Board Section */}
        <section className="board-section">
          <div className="board-container">
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <div className="board-item">
                  <div className="board-icon icon-pink">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="board-content">
                    <h3>Cutting-edge Features</h3>
                    <p>Advanced solutions for modern digital needs</p>
                  </div>
                </div>

                <div className="board-item">
                  <div className="board-icon icon-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div className="board-content">
                    <h3>10+ Useful Integrations</h3>
                    <p>Seamlessly connect with your favorite tools</p>
                  </div>
                </div>

                <div className="board-item">
                  <div className="board-icon icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div className="board-content">
                    <h3>High-quality Modern Design</h3>
                    <p>Beautiful and responsive user interfaces</p>
                  </div>
                </div>

                <div className="board-item">
                  <div className="board-icon icon-pink">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="board-content">
                    <h3>Enhanced Security</h3>
                    <p>Top-notch protection for your digital assets</p>
                  </div>
                </div>

                <div className="board-item">
                  <div className="board-icon icon-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="board-content">
                    <h3>AI Chatbots</h3>
                    <p>Intelligent conversation automation</p>
                  </div>
                </div>

                <div className="board-item">
                  <div className="board-icon icon-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="board-content">
                    <h3>Custom Solutions</h3>
                    <p>Tailored development for your business</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gray-50/40 dark:bg-gray-900/40 backdrop-blur-xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto projects-container">
            <div className="max-w-2xl mx-auto text-center mb-12 slide-in-left">
              <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block">New Projects</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Latest{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Work
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Explore our most recent projects and creative solutions that showcase innovation and excellence.
              </p>
            </div>

            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 slide-in-left slide-delay-1">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`project-filter-button px-6 py-2 rounded-full font-semibold ${
                  activeFilter === 'all' 
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 active' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveFilter('web')}
                className={`project-filter-button px-6 py-2 rounded-full font-semibold ${
                  activeFilter === 'web' 
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 active' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Web Design
              </button>
              <button 
                onClick={() => setActiveFilter('ui')}
                className={`project-filter-button px-6 py-2 rounded-full font-semibold ${
                  activeFilter === 'ui' 
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 active' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                UI/UX
              </button>
              <button 
                onClick={() => setActiveFilter('video')}
                className={`project-filter-button px-6 py-2 rounded-full font-semibold ${
                  activeFilter === 'video' 
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 active' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Video
              </button>
              <button 
                onClick={() => setActiveFilter('design')}
                className={`project-filter-button px-6 py-2 rounded-full font-semibold ${
                  activeFilter === 'design' 
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 active' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Branding
              </button>
            </div>

            {/* Portfolio Grid */}
            <div className="project-section">
              <div className="project-grid">
                {/* Featured Project */}
                <div className="project-item featured">
                  <div className="project-image-wrapper">
                    <img
                      src={filteredProjects[0].image}
                      alt={filteredProjects[0].title}
                      className="project-image"
                    />
                  </div>
                  <div className="project-content">
                    <span className="project-category">Featured Project</span>
                    <h3 className="project-title">{filteredProjects[0].title}</h3>
                    <p className="project-description">{filteredProjects[0].description}</p>
                    <div className="project-tags">
                      {filteredProjects[0].tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="project-link">
                      View Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                  <div className="project-number">01</div>
                </div>

                {/* Regular Projects */}
                {filteredProjects.slice(1, 6).map((project, index) => (
                  <div key={project.id} className="project-item">
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                    <div className="project-content">
                      <span className="project-category">{project.category || 'Project'}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href="#" className="project-link">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                    <div className="project-number">0{index + 2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Projects Button */}
            <div className="text-center mt-8 slide-in-left slide-delay-6">
              <Link 
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 relative overflow-hidden section-animate">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Circle */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
            
            {/* Triangle */}
            <div className="absolute bottom-0 right-1/4">
              <div className="w-8 h-8 border-pink-500 border-[3px] rotate-45 transform origin-center animate-float-triangle"></div>
            </div>
            
            {/* Square */}
            <div className="absolute top-1/4 left-1/3 w-6 h-6 border-2 border-indigo-500 rotate-45 animate-float-square"></div>
            
            {/* Semi Circle */}
            <div className="absolute bottom-1/3 right-1/4 w-12 h-6 overflow-hidden animate-float-semi">
              <div className="w-12 h-12 border-4 border-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="container mx-auto relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 grid-animate">
              <CountUpNumber end={745} label="Global Brands" />
              <CountUpNumber end={506} label="Happy Clients" />
              <CountUpNumber end={821} label="Winning Award" />
              <CountUpNumber end={329} label="Projects Completed" />
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gray-50/20 dark:bg-gray-900/20 backdrop-blur-xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto relative">
            {/* Section Header */}
            <div className="max-w-2xl mx-auto text-center mb-12 slide-in-left">
              <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Digital Vision
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                From concept to execution, we offer comprehensive digital services tailored to your unique needs and goals.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white dark:bg-gray-900 px-7 py-8 rounded-xl leading-none flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-pink-500 animate-ping"></div>
                    </div>
                    <span className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">01</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Web Development</h3>
                  
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Custom Website Development</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Responsive Design</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">E-commerce Solutions</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Editing */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white dark:bg-gray-900 px-7 py-8 rounded-xl leading-none flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-cyan-500 animate-ping"></div>
                    </div>
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">02</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Video Editing</h3>
                  
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Professional Video Editing</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Motion Graphics</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Visual Effects</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white dark:bg-gray-900 px-7 py-8 rounded-xl leading-none flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-yellow-500 animate-ping"></div>
                    </div>
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">03</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Digital Marketing</h3>
                  
                  <ul className="space-y-4 flex-grow">
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Social Media Marketing</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">SEO Optimization</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg">Content Strategy</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Hear what our clients have to say about their experience working with us
            </p>
          </div>

          <div className="testimonials-container">
            <div className="testimonials-track">
              {/* Testimonial Cards - First Set */}
              {[
                {
                  name: "Sarah Johnson",
                  position: "Marketing Director",
                  quote: "Working with this agency has been transformative for our brand. Their creative approach and attention to detail exceeded our expectations.",
                  image: "/testimonials/client1.jpg",
                  logo: "/logos/company1.png",
                  date: "Dec 2023"
                },
                {
                  name: "Michael Chen",
                  position: "Tech Founder",
                  quote: "The team's technical expertise and innovative solutions helped us launch our product ahead of schedule. Truly outstanding service!",
                  image: "/testimonials/client2.jpg",
                  logo: "/logos/company2.png",
                  date: "Nov 2023"
                },
                {
                  name: "Emma Davis",
                  position: "Creative Director",
                  quote: "Their design team brought fresh perspectives and creativity that completely revitalized our brand identity. Highly recommended!",
                  image: "/testimonials/client3.jpg",
                  logo: "/logos/company3.png",
                  date: "Oct 2023"
                },
                {
                  name: "Alex Thompson",
                  position: "CEO",
                  quote: "Outstanding digital solutions that helped us achieve our business goals. The team's dedication and expertise are unmatched.",
                  image: "/testimonials/client4.jpg",
                  logo: "/logos/company4.png",
                  date: "Sep 2023"
                },
                {
                  name: "Lisa Wang",
                  position: "Product Manager",
                  quote: "Exceptional service and results. They truly understand modern digital needs and deliver beyond expectations.",
                  image: "/testimonials/client5.jpg",
                  logo: "/logos/company5.png",
                  date: "Aug 2023"
                }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-author">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <span className="quote-mark start">"</span>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-company">
                    <img className="company-logo" src={testimonial.logo} alt="Company Logo" />
                    <span className="testimonial-date">{testimonial.date}</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate the first few testimonials to create a seamless loop */}
              {[0, 1, 2].map((i) => {
                const testimonial = {
                  name: "Sarah Johnson",
                  position: "Marketing Director",
                  quote: "Working with this agency has been transformative for our brand. Their creative approach and attention to detail exceeded our expectations.",
                  image: "/testimonials/client1.jpg",
                  logo: "/logos/company1.png",
                  date: "Dec 2023"
                };
                return (
                  <div key={`duplicate-${i}`} className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-author">
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-position">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <span className="quote-mark start">"</span>
                      <p className="testimonial-quote">{testimonial.quote}</p>
                      <div className="testimonial-rating">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-company">
                      <img className="company-logo" src={testimonial.logo} alt="Company Logo" />
                      <span className="testimonial-date">{testimonial.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <TeamSection />

        {/* Start Your Journey Section */}
        <section className="py-32 px-4 relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 w-full h-full">
            {/* Floating orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slower"></div>
            
            {/* Scroll-reactive elements */}
            <div className="parallax-bg absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl transform -translate-y-full transition-transform duration-1000"></div>
              <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl transform translate-x-full transition-transform duration-1000"></div>
              <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-pink-500/30 rounded-full blur-2xl transform translate-y-full transition-transform duration-1000"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent bg-grid-pattern opacity-10"></div>
          </div>

          <div className="container mx-auto relative">
            <SectionTitle
              subtitle="Start Your Journey"
              title="Ready to"
              highlight="Transform Your Brand?"
              description="Let's collaborate to create something extraordinary. Your vision, our expertise – together we'll make it happen."
            />

            <div className="max-w-md mx-auto mt-12 relative">
              {/* Animated background elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              {/* Buttons Container */}
              <div className="flex justify-center gap-6 relative z-10">
                {/* Login Button */}
                <button 
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50';
                    modal.innerHTML = `
                      <div class="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl p-8 rounded-2xl max-w-md w-full mx-4 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
                        <div class="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                        <div class="relative">
                          <h3 class="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Login to Your Account</h3>
                          <div class="space-y-4">
                            <div class="relative group">
                              <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
                              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            </div>
                            <div class="relative group">
                              <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
                              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            </div>
                            <button class="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">Login</button>
                          </div>
                          <button class="absolute top-0 right-0 p-2 hover:opacity-75" onclick="this.closest('.fixed').remove()">
                            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="group relative px-8 py-4 overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                    Login
                  </span>
                </button>

                {/* Sign Up Button */}
                <button 
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50';
                    modal.innerHTML = `
                      <div class="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl p-8 rounded-2xl max-w-md w-full mx-4 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
                        <div class="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                        <div class="relative">
                          <h3 class="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Create Your Account</h3>
                          <div class="space-y-4">
                            <div class="relative group">
                              <input type="text" placeholder="Full Name" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
                              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            </div>
                            <div class="relative group">
                              <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
                              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            </div>
                            <div class="relative group">
                              <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
                              <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                            </div>
                            <button class="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">Sign Up</button>
                          </div>
                          <button class="absolute top-0 right-0 p-2 hover:opacity-75" onclick="this.closest('.fixed').remove()">
                            <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="group relative px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative font-medium text-white">
                    Sign Up
                  </span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="text-center mt-12">
                <p className="text-sm text-gray-500 dark:text-gray-400">Join our growing community of</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  1000+ satisfied clients
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
