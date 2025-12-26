import '../styles/about.css';

export default function About() {
  return (
    <main>
      <div className="container about-container">
        <div className="about-header">
          <h1>About Our College</h1>
        </div>

        {/* History Section */}
        <section className="about-section">
          <h2>Our History</h2>
          <p>
            B.S Abdur Rahman Crescent Institute of Science and Technology, established in Chennai, 
            has been at the forefront of technical education in India for decades. Founded with a vision 
            to impart quality education and foster research, our institution has grown to become one of 
            the leading engineering and management colleges in the country.
          </p>
          <p>
            Over the years, we have produced thousands of engineers, managers, and leaders who have made 
            significant contributions to society and industry. Our commitment to academic excellence, 
            innovation, and holistic development has remained unwavering.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide world-class education that combines theoretical knowledge with practical skills, 
              fostering innovation, critical thinking, and ethical values among our students. We aim to 
              prepare them for meaningful careers and to contribute positively to society.
            </p>
          </div>
          <div className="vision-card">
            <h3>🌟 Our Vision</h3>
            <p>
              To be a globally recognized institution of academic excellence, known for pioneering research, 
              industry partnerships, and producing leaders who drive technological advancement and social 
              progress. We envision creating an environment where learning thrives and innovation flourishes.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <section className="achievements">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">10,000+</div>
              <div className="achievement-label">Successful Alumni</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">500+</div>
              <div className="achievement-label">Faculty Members</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">98%</div>
              <div className="achievement-label">Placement Rate</div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Industry Partners</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Excellence:</strong> Pursuit of highest standards in teaching, research, and administration</li>
            <li><strong>Integrity:</strong> Commitment to honesty, transparency, and ethical conduct</li>
            <li><strong>Innovation:</strong> Encouraging creative thinking and forward-looking solutions</li>
            <li><strong>Inclusivity:</strong> Providing equal opportunities for all students regardless of background</li>
            <li><strong>Responsibility:</strong> Fostering social awareness and environmental consciousness</li>
            <li><strong>Collaboration:</strong> Building partnerships with industry, academia, and community</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
