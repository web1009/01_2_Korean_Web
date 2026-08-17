import React, { useEffect, useRef, useState } from 'react';
import './CourseSchedule.css';

const CourseSchedule = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 순차적으로 나타나도록 지연 시간 추가
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 400); // 각 카드마다 400ms씩 지연 (선이 그어진 후 STEP이 나타나도록)
              observer.unobserve(card);
            }
          });
        },
        {
          threshold: 0.2, // 카드가 20% 보일 때 트리거
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const courseSteps = [
    {
      step: 'STEP 1',
      title: 'Introductory Level',
      description: 'Build a strong foundation in Korean study with fundamental teachings and basic concepts. Learn the essential principles that will guide your journey through Korean.',
      duration: '2-3 months',
      icon: 'fas fa-book-open',
      bgColor: '#283593'
    },
    {
      step: 'STEP 2',
      title: 'Intermediate Level',
      description: 'Deepen your understanding with advanced Korean analysis and interpretation. Explore complex themes and develop critical thinking skills in studying Korean.',
      duration: '2-3 months',
      icon: 'fas fa-graduation-cap',
      bgColor: '#e9ecef'
    },
    {
      step: 'STEP 3',
      title: 'Advanced Level',
      description: 'Master comprehensive Korean study methods and insights. Apply your knowledge to real-life situations and become equipped to teach others.',
      duration: '2-3 months',
      icon: 'fas fa-lightbulb',
      bgColor: '#283593'
    }
  ];

  return (
    <section 
      id="courseschedule" 
      className="course-schedule-section"
      style={{
        backgroundImage: 'url(/img/schedule.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <h2 className="schedule-main-title">Course Schedule</h2>
        
        <div className="schedule-steps-wrapper">
          {/* 연결된 회색선 */}
          <div className="steps-connecting-line">
            <div 
              className={`connecting-line ${visibleCards.includes(0) ? 'line-draw' : ''}`}
            ></div>
            {/* STEP 라벨들 */}
            {courseSteps.map((step, index) => (
              <div 
                key={index}
                className={`step-label-on-line ${visibleCards.includes(index) ? 'label-show' : ''}`}
                style={{ 
                  left: `${(index * (100 / courseSteps.length)) + (100 / (courseSteps.length * 2))}%`,
                  transitionDelay: `${0.5 + (index * 0.3)}s`
                }}
              >
                STEP {String(index + 1).padStart(2, '0')}
              </div>
            ))}
          </div>

          {/* 카드들 */}
          <div className="schedule-steps-container">
            {courseSteps.map((step, index) => (
              <div 
                key={index} 
                ref={(el) => (cardRefs.current[index] = el)}
                className={`schedule-step-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
                style={{ backgroundColor: step.bgColor }}
              >
                <div className={`step-content ${visibleCards.includes(index) ? 'content-animate' : ''}`}>
                  <div className="step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-duration">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <div className="schedule-register">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            Register
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSchedule;
