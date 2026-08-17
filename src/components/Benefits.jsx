import React, { useState, useEffect } from 'react';
import './Benefits.css';

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scholarshipInfo = [
    {
      number: '1',
      title: 'Free Course',
      description: 'Our complete Korean course is offered completely free. No hidden costs, no fees - just pure learning and spiritual growth.',
      detailTitle: 'Free Course Results',
      strategy: 'Find your own positive strengths that help with learning. Set self-assessment criteria and develop a habit of regularly reviewing and supplementing them.',
      gaugeValue: 43,
      gaugeLabel: 'Very High',
      chartData: [
        { label: 'Planning', value: 43, subLabel: 'Higher Cognition', color: '#2196F3' },
        { label: 'Time Management', value: 45, subLabel: '', color: '#2196F3' },
        { label: 'Overall Planning', value: 44, subLabel: '', color: '#FF9800' }
      ]
    },
    {
      number: '2',
      title: 'Introductory Class',
      description: 'We begin with an introductory class where participants can learn how the program works and determine whether they are able to continue.',
      detailTitle: 'Introductory Class Results',
      strategy: 'Participate actively in the introductory sessions to understand the program structure and evaluate your commitment level.',
      gaugeValue: 48,
      gaugeLabel: 'High',
      chartData: [
        { label: 'Engagement', value: 48, subLabel: 'Active Participation', color: '#2196F3' },
        { label: 'Understanding', value: 46, subLabel: '', color: '#2196F3' },
        { label: 'Commitment', value: 47, subLabel: '', color: '#FF9800' }
      ]
    },
    {
      number: '3',
      title: 'Scholarship Application',
      description: 'Students who attend consistently and demonstrate dedication will be invited to apply for the scholarship through a registration form and brief conversation.',
      detailTitle: 'Scholarship Application Results',
      strategy: 'Maintain consistent attendance and demonstrate your dedication through active participation and engagement.',
      gaugeValue: 52,
      gaugeLabel: 'Very High',
      chartData: [
        { label: 'Consistency', value: 52, subLabel: 'Regular Attendance', color: '#2196F3' },
        { label: 'Dedication', value: 50, subLabel: '', color: '#2196F3' },
        { label: 'Readiness', value: 51, subLabel: '', color: '#FF9800' }
      ]
    },
    {
      number: '4',
      title: 'Full Course Access',
      description: 'Once accepted, students transition from intro sessions into the official Korean course, where the full 7–8 month study begins.',
      detailTitle: 'Full Course Access Results',
      strategy: 'Focus on completing the full course curriculum and apply the knowledge gained throughout the 7-8 month study period.',
      gaugeValue: 54,
      gaugeLabel: 'Excellent',
      chartData: [
        { label: 'Completion', value: 54, subLabel: 'Course Progress', color: '#2196F3' },
        { label: 'Understanding', value: 52, subLabel: '', color: '#2196F3' },
        { label: 'Application', value: 53, subLabel: '', color: '#FF9800' }
      ]
    }
  ];


  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % scholarshipInfo.length);
    }, 15000); // 15초마다 자동으로 다음 항목으로

    return () => clearInterval(interval);
  }, [scholarshipInfo.length]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const activeItem = scholarshipInfo[activeIndex];

  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <span className="benefits-label">Real Conversation with Native Speakers</span>
          <h2 className="benefits-title">Excellent Learning Experience</h2>
        </div>

        <div className="benefits-content-wrapper">
          {/* 왼쪽 리스트 */}
          <div className="benefits-list">
          {scholarshipInfo.map((item, index) => (
              <div
                key={index}
                className={`benefit-list-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
                data-index={index}
              >
                <div className="benefit-list-number">{item.number}</div>
                <div className="benefit-list-content">
                  <h4 className="benefit-list-title">{item.title}</h4>
                </div>
                {activeIndex === index && (
                  <div className="benefit-list-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 오른쪽 상세 내용 */}
          <div className="benefits-detail">
            <div className="benefit-detail-header">
              <h3 className="benefit-detail-title">
                {activeItem.detailTitle}
              </h3>
            </div>
            
            <div className="benefit-detail-content">
              {/* Free Course Results 강조 문구 */}
              {activeItem.detailTitle === 'Free Course Results' && (
                <>
                  <div className="benefit-free-highlight">
                    <div className="benefit-free-text-large">100% Free</div>
                    <div className="benefit-zoom-text-large">Conducted via Zoom</div>
                  </div>
                  <div className="benefit-image-box">
                    <img 
                      src="/img/allfree.jpg" 
                      alt="All Free" 
                      className="benefit-image"
                      onError={(e) => {
                        // 이미지가 없을 경우 대체 이미지나 숨김 처리
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </>
              )}

              {/* Scholarship Application 특별 강조 문구 */}
              {activeItem.detailTitle === 'Scholarship Application Results' && (
                <>
                  <div className="benefit-highlight-box">
                    <p className="benefit-highlight-text">You will have the opportunity to communicate with native Korean speakers!</p>
                    <p className="benefit-highlight-text" style={{ marginTop: '15px', fontSize: '1rem' }}>
                      Practice real conversations, improve your speaking skills, and gain confidence through direct interaction with native speakers who will guide and support your learning journey.
                    </p>
                  </div>
                  <div className="benefit-image-box">
                    <img 
                      src="/img/whatwedo-scholarship.jpg" 
                      alt="Native Speaker Communication" 
                      className="benefit-image"
                    />
                  </div>
                </>
              )}

              {/* Introductory Class 시간표 옵션 */}
              {activeItem.detailTitle === 'Introductory Class Results' && (
                <div className="benefit-schedule-options">
                  <div className="benefit-options-grid">
                    <div className="benefit-option-card">
                      <h4 className="benefit-option-title">Option 1</h4>
                      <div className="benefit-option-details">
                        <p><i className="far fa-calendar"></i> Mondays & Thursdays</p>
                        <p><i className="far fa-clock"></i> 7/8 PM (Jamaica / Most Caribbean time)</p>
                        <p><i className="fas fa-hourglass-half"></i> Duration: 7–8 months</p>
                      </div>
                    </div>
                    <div className="benefit-option-card">
                      <h4 className="benefit-option-title">Option 2</h4>
                      <div className="benefit-option-details">
                        <p><i className="far fa-calendar"></i> Tuesdays & Fridays</p>
                        <p><i className="far fa-clock"></i> 7/8 PM (Jamaica / Most Caribbean time)</p>
                        <p><i className="fas fa-hourglass-half"></i> Duration: 7–8 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Full Course Access 단계 표시 */}
              {activeItem.detailTitle === 'Full Course Access Results' && (
                <div className="benefit-level-progress">
                  <div className="level-progress-container">
                    <div className="level-step-item">
                      <div className="level-step-button">Beginner</div>
                    </div>
                    <div className="level-connector"></div>
                    <div className="level-step-item">
                      <div className="level-step-button">Intermediate</div>
                    </div>
                    <div className="level-connector"></div>
                    <div className="level-step-item">
                      <div className="level-step-button">Advanced</div>
                    </div>
                    <div className="level-connector"></div>
                    <div className="level-step-item">
                      <div className="level-step-button level-completion">Completion!</div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 설명 */}
              <div className="benefit-description-box">
                {activeItem.detailTitle !== 'Full Course Access Results' && (
                  <p className="benefit-description-text">{activeItem.description}</p>
                )}
                <p className="benefit-description-text">{activeItem.strategy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
