import { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'Computer Science Engineering',
    'Information Technology',
    'Electronics & Communication Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'MBA'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.department || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    // Reset form after 5 seconds (optional)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        department: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <main>
      <div className="container contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for admissions, inquiries, or feedback</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department *</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select a department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message or inquiry"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>

          {/* Submitted Data Display */}
          {submitted && (
            <div className="submitted-data">
              <h2>Message Submitted Successfully!</h2>
              <div className="submitted-item">
                <strong>Name:</strong>
                <p>{formData.name}</p>
              </div>
              <div className="submitted-item">
                <strong>Email:</strong>
                <p>{formData.email}</p>
              </div>
              <div className="submitted-item">
                <strong>Department:</strong>
                <p>{formData.department}</p>
              </div>
              <div className="submitted-item">
                <strong>Message:</strong>
                <p>{formData.message}</p>
              </div>
              <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
                Thank you for contacting us. We will get back to you soon!
              </p>
            </div>
          )}

          {/* Default Contact Info */}
          {!submitted && (
            <div className="submitted-data" style={{ borderColor: '#ccc' }}>
              <h2 style={{ color: '#1e3c72', marginBottom: '1.5rem' }}>📞 Contact Information</h2>
              <div className="submitted-item">
                <strong>Address:</strong>
                <p>B.S Abdur Rahman Crescent Institute of Science and Technology<br/>
                   Chennai, Tamil Nadu, India</p>
              </div>
              <div className="submitted-item">
                <strong>Email:</strong>
                <p>info@bsacri.ac.in<br/>admissions@bsacri.ac.in</p>
              </div>
              <div className="submitted-item">
                <strong>Phone:</strong>
                <p>+91-44-XXXX-XXXX<br/>+91-44-XXXX-XXXX</p>
              </div>
              <div className="submitted-item">
                <strong>Office Hours:</strong>
                <p>Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
