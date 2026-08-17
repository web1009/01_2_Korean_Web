import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="whatwedo-section">
      <div className="container">
        {/* Section 1: Welcome - Text Left, Image Right */}
        <div className="whatwedo-content-block">
          <div className="whatwedo-text-content">
            <h3 className="whatwedo-block-title">Welcome to Global Korean class</h3>
            <div className="whatwedo-block-text">
                  <p>
                    At Global Korean class, our heart is to guide others in learning and understanding Korean,
                    following the example of Jesus and his disciples who taught freely and without cost.
                  </p>
                  <p>
                    We offer a free online Korean course that covers the entire Korean, from beginning to end—available
                    to anyone, anywhere in the world, at any time.
                  </p>
                  <p>
                    Our team is made up of believers from diverse backgrounds, united by a shared desire to faithfully
                    teach Korean with clarity, love, and purpose. All of our courses are hosted fully online,
                    making it accessible no matter where you are.
                  </p>
                </div>
              </div>
          <div className="whatwedo-image-content">
            <div className="whatwedo-circle-image">
              <img 
                src="/img/whatwedo-welcome.jpg" 
                alt="Welcome to Global Korean class - Korean study and education"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <i className="fas fa-dove" style={{ display: 'none' }}></i>
            </div>
          </div>
            </div>

        {/* Section 2: How the Course Works - Image Left, Text Right */}
        <div className="whatwedo-content-block">
          <div className="whatwedo-image-content">
            <div className="whatwedo-circle-image">
              <img 
                src="/img/whatwedo-course.jpg" 
                alt="How the Course Works - Online Korean course schedule"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <i className="fas fa-book-open" style={{ display: 'none' }}></i>
            </div>
                </div>
          <div className="whatwedo-text-content">
            <h3 className="whatwedo-block-title">How the Course Works</h3>
            <div className="whatwedo-block-text">
              <p>
                    We offer two class schedule options that run at the same time each week. You may choose only one option when registering:
                  </p>
                  <div className="whatwedo-options-grid">
                    <div className="whatwedo-option-card">
                      <h4 className="option-card-title">Option 1</h4>
                      <div className="option-card-details">
                        <p><i className="far fa-calendar"></i> Mondays & Thursdays</p>
                        <p><i className="far fa-clock"></i> 7/8 PM (Jamaica / Most Caribbean time)</p>
                        <p><i className="fas fa-hourglass-half"></i> Duration: 7–8 months</p>
                      </div>
                    </div>
                    <div className="whatwedo-option-card">
                      <h4 className="option-card-title">Option 2</h4>
                      <div className="option-card-details">
                        <p><i className="far fa-calendar"></i> Tuesdays & Fridays</p>
                        <p><i className="far fa-clock"></i> 7/8 PM (Jamaica / Most Caribbean time)</p>
                        <p><i className="fas fa-hourglass-half"></i> Duration: 7–8 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        {/* Section 3: Real Conversation with Native Speakers - Text Left, Image Right */}
        <div className="whatwedo-content-block">
          <div className="whatwedo-text-content">
            <h3 className="whatwedo-block-title">Real Conversation with Native Speakers</h3>
            <div className="whatwedo-block-text">
                  <p>
                    At Global Korean class, we believe that real conversation with native speakers is the key to mastering Korean.
                    Our program offers you the unique opportunity to practice authentic Korean through direct interaction
                    with native Korean speakers.
                  </p>
                  <p>
                    Through our program, you'll engage in real-world conversations that go beyond textbook learning. You'll have
                    the chance to practice speaking, listening, and understanding Korean in natural, everyday contexts with native speakers
                    who will guide and support your learning journey.
                  </p>
                  <p>
                    This immersive experience allows you to develop practical communication skills, build confidence in real conversations,
                    and gain cultural insights that only come from interacting with native speakers. Our native Korean instructors
                    provide personalized feedback and create a supportive environment for authentic language practice.
                  </p>
                  <p>
                    Join us and experience the difference that real conversation with native speakers makes in your Korean language journey.
                    Start speaking Korean confidently through authentic, meaningful dialogue.
                  </p>
                </div>
                <div className="whatwedo-cta-wrapper">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatwedo-cta-button" 
                  >
                    Learn More
                  </a>
                </div>
              </div>
          <div className="whatwedo-image-content">
            <div className="whatwedo-circle-image">
              <img 
                src="/img/whatwedo-scholarship.jpg" 
                alt="Real Conversation with Native Speakers - Free Korean education"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <i className="fas fa-graduation-cap" style={{ display: 'none' }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
