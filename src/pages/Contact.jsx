import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, AlertCircle, Info, Calendar } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    guestCount: '',
    foodDetails: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const phoneClean = '+919600082016';
  const whatsappUrl = `https://wa.me/919600082016?text=${encodeURIComponent(
    'Hello Masha Catering Services, I would like to plan a catering feast for an upcoming event.'
  )}`;

  const validate = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your name.';
    } else if (formData.customerName.trim().length < 3) {
      newErrors.customerName = 'Name must be at least 3 characters.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '').slice(-10);
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your planned event date.';
    }

    if (!formData.guestCount) {
      newErrors.guestCount = 'Please enter the estimated number of guests.';
    } else if (parseInt(formData.guestCount, 10) < 10) {
      newErrors.guestCount = 'Minimum guest count is 10.';
    }

    if (!formData.foodDetails.trim()) {
      newErrors.foodDetails = 'Please specify required food or menu preference (e.g., Dum Biryani, Mandi).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // In this frontend phase, simulate clean validation and display success state
      // Cleanly structured for future backend API integration:
      /*
        fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      */
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  // Generate direct WhatsApp link from submitted form data for instant client communication
  const getWhatsAppSubmitLink = () => {
    if (!submittedData) return whatsappUrl;
    const text = encodeURIComponent(
      `Hello Masha Catering Services, here are my event catering details:\n` +
      `• Name: ${submittedData.customerName}\n` +
      `• Phone: ${submittedData.phone}\n` +
      `• Event: ${submittedData.eventType}\n` +
      `• Date: ${submittedData.eventDate}\n` +
      `• Guests: ${submittedData.guestCount}\n` +
      `• Menu: ${submittedData.foodDetails}\n` +
      (submittedData.message ? `• Notes: ${submittedData.message}` : '')
    );
    return `https://wa.me/919600082016?text=${text}`;
  };

  return (
    <PageTransition>
      <div className="contact-page">
        {/* Animated Hero Heading */}
        <section className="page-hero">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <span className="luxury-subheading" style={{ color: 'var(--color-gold-light)' }}>
              Get In Touch
            </span>
            <h1 className="page-hero-title">
              Let's Plan Your Perfect Feast.
            </h1>
            <p className="page-hero-subtitle">
              Reach out to Masha Catering Services for custom menu consultations, availability dates, and transparent quotes.
            </p>
          </div>
        </section>

        {/* Contact Content & Form */}
        <section className="contact-section">
          <div className="container">
            <div className="row g-5">
              
              {/* Left Column: Business Details */}
              <div className="col-lg-5">
                <div className="contact-info-card">
                  <h3 className="contact-info-title">Masha Catering Services</h3>
                  <p className="contact-info-desc">
                    Melapalayam’s trusted destination for authentic dum biryanis, royal Arabian mandis, and memorable celebration feasts.
                  </p>

                  <div className="contact-items-list">
                    {/* Phone */}
                    <div className="contact-item-row">
                      <div className="contact-icon-circle">
                        <Phone size={20} />
                      </div>
                      <div className="contact-item-text">
                        <h6>Direct Call</h6>
                        <a href={`tel:${phoneClean}`}>+91 96000 82016</a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="contact-item-row">
                      <div className="contact-icon-circle" style={{ borderColor: '#25D366', color: '#25D366' }}>
                        <MessageCircle size={20} />
                      </div>
                      <div className="contact-item-text">
                        <h6>WhatsApp Enquiry</h6>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          Chat on WhatsApp (+91 96000 82016)
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="contact-item-row">
                      <div className="contact-icon-circle">
                        <MapPin size={20} />
                      </div>
                      <div className="contact-item-text">
                        <h6>Catering Headquarters</h6>
                        <p>
                          7th Street, Hameempuram,<br />
                          Melapalayam, Tirunelveli,<br />
                          Tamil Nadu 627005
                        </p>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="contact-item-row">
                      <div className="contact-icon-circle">
                        <Clock size={20} />
                      </div>
                      <div className="contact-item-text">
                        <h6>Listed Business Hours</h6>
                        <p>Open until 9 PM</p>
                        <p className="contact-hours-note">
                          * Please verify daily hours with our team before confirming event preparation times.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick WhatsApp Action Banner */}
                  <div
                    className="mt-auto p-3 rounded-3"
                    style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(197, 155, 39, 0.3)' }}
                  >
                    <small style={{ color: 'var(--color-gold-light)', display: 'block', marginBottom: '8px' }}>
                      Fastest response via WhatsApp:
                    </small>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-theme w-100 justify-content-center"
                    >
                      <MessageCircle size={17} />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="col-lg-7">
                <div className="enquiry-form-card">
                  <span className="luxury-subheading">Event Details</span>
                  <h3 className="section-title mb-2" style={{ fontSize: '1.85rem' }}>
                    Send An Enquiry
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                    Fill out the form below to receive a personalized quote and menu suggestion for your special occasion.
                  </p>

                  {/* Success Message Banner */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="success-banner"
                    >
                      <div className="d-flex align-items-start gap-3">
                        <CheckCircle2 size={24} color="#28a745" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <h5>Thank You, {submittedData.customerName}!</h5>
                          <p className="mb-2">
                            Your catering enquiry for <strong>{submittedData.eventType}</strong> on <strong>{submittedData.eventDate}</strong> ({submittedData.guestCount} guests) has been submitted successfully on the frontend.
                          </p>
                          <small className="d-block mb-3 text-muted">
                            (Note: Frontend mode active. To connect immediately, you can also forward your details to WhatsApp with one click below.)
                          </small>
                          <a
                            href={getWhatsAppSubmitLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp-theme btn-sm"
                            style={{ padding: '0.5rem 1.25rem' }}
                          >
                            <MessageCircle size={16} />
                            <span>Send Details to WhatsApp Now</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      
                      {/* Customer Name */}
                      <div className="col-md-6">
                        <label className="form-label-custom">
                          <span>Your Name *</span>
                        </label>
                        <input
                          type="text"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleChange}
                          placeholder="e.g. Mohamed Riyaz"
                          className={`form-control-custom ${errors.customerName ? 'is-invalid' : ''}`}
                        />
                        {errors.customerName && (
                          <div className="invalid-feedback-custom">{errors.customerName}</div>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="col-md-6">
                        <label className="form-label-custom">
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 96000 82016"
                          className={`form-control-custom ${errors.phone ? 'is-invalid' : ''}`}
                        />
                        {errors.phone && (
                          <div className="invalid-feedback-custom">{errors.phone}</div>
                        )}
                      </div>

                      {/* Event Type */}
                      <div className="col-md-6">
                        <label className="form-label-custom">
                          <span>Event Type *</span>
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className={`form-select-custom ${errors.eventType ? 'is-invalid' : ''}`}
                        >
                          <option value="Wedding">Wedding Feast</option>
                          <option value="Walima">Walima Banquet</option>
                          <option value="Nikkah / Engagement">Nikkah / Engagement</option>
                          <option value="Birthday Party">Birthday Party</option>
                          <option value="Corporate Event">Corporate Event</option>
                          <option value="Bucket Biryani Order">Bucket Biryani Order</option>
                          <option value="Family Gathering">Family Gathering</option>
                          <option value="Other Celebration">Other Celebration</option>
                        </select>
                        {errors.eventType && (
                          <div className="invalid-feedback-custom">{errors.eventType}</div>
                        )}
                      </div>

                      {/* Event Date */}
                      <div className="col-md-6">
                        <label className="form-label-custom">
                          <span>Event Date *</span>
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className={`form-control-custom ${errors.eventDate ? 'is-invalid' : ''}`}
                        />
                        {errors.eventDate && (
                          <div className="invalid-feedback-custom">{errors.eventDate}</div>
                        )}
                      </div>

                      {/* Number of Guests */}
                      <div className="col-md-6">
                        <label className="form-label-custom">
                          <span>Estimated Guest Count *</span>
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          placeholder="e.g. 250"
                          min="10"
                          className={`form-control-custom ${errors.guestCount ? 'is-invalid' : ''}`}
                        />
                        {errors.guestCount && (
                          <div className="invalid-feedback-custom">{errors.guestCount}</div>
                        )}
                      </div>

                      {/* Required Food or Menu Details */}
                      <div className="col-md-6">
                        <label className="form-label-custom">
                          <span>Required Food / Menu *</span>
                        </label>
                        <input
                          type="text"
                          name="foodDetails"
                          value={formData.foodDetails}
                          onChange={handleChange}
                          placeholder="e.g. Mutton Dum Biryani, Chicken Mandi"
                          className={`form-control-custom ${errors.foodDetails ? 'is-invalid' : ''}`}
                        />
                        {errors.foodDetails && (
                          <div className="invalid-feedback-custom">{errors.foodDetails}</div>
                        )}
                      </div>

                      {/* Additional Message */}
                      <div className="col-12">
                        <label className="form-label-custom">
                          <span>Additional Details / Venue Location (Optional)</span>
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your event timing, venue address in Tirunelveli/Melapalayam, or special dietary requirements..."
                          className="form-control-custom"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn-luxury-primary w-100 py-3">
                          <Send size={18} />
                          <span>Submit Catering Enquiry</span>
                        </button>
                      </div>

                    </div>
                  </form>

                  {/* Developer Note about backend separation */}
                  <div className="mt-4 p-3 rounded-3" style={{ background: '#FAF7F2', border: '1px solid #EBE4D8' }}>
                    <small style={{ color: 'var(--color-muted)', fontSize: '0.8rem', display: 'flex', gap: '6px' }}>
                      <Info size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        <strong>Frontend Verification:</strong> This form validates all required fields in the browser and is structured ready for REST API / serverless webhook submission in the backend phase.
                      </span>
                    </small>
                  </div>

                </div>
              </div>

            </div>

            {/* Embedded Google Maps Location */}
            <div className="map-container">
              <iframe
                title="Masha Catering Services Melapalayam Tirunelveli Location"
                src="https://maps.google.com/maps?q=7th+Street,+Hameempuram,+Melapalayam,+Tirunelveli,+Tamil+Nadu+627005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </section>
      </div>
    </PageTransition>
  );
}
