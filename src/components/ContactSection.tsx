import React, { useState } from 'react';
import { Code, Briefcase, Mail, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { ui } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields prior to transmission.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 md:py-32 px-6 md:px-12 w-full max-w-[1280px] mx-auto border-b border-[var(--border-hairline)] bg-[var(--bg-main)]"
    >
      {/* Header */}
      <div className="text-center w-full max-w-2xl mb-16 md:mb-20">
        <span className="font-label-minimal text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)] mb-3 block">
          {ui.contactSection.tag}
        </span>
        <h2 className="font-display-editorial text-[48px] sm:text-[64px] md:text-[80px] text-[var(--text-primary)] leading-[0.92] font-light tracking-[-0.04em] mb-5">
          {ui.contactSection.headlineFirst} <span className="italic font-normal">{ui.contactSection.headlineSecond}</span>
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] font-light leading-relaxed">
          {ui.contactSection.desc}
        </p>
      </div>

      {/* Contact Form Box */}
      <div className="w-full max-w-2xl border border-[var(--border-hairline)] p-8 sm:p-14 bg-[var(--surface-card)] shadow-xs">
        {submitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-12 h-12 rounded-full mx-auto border border-[var(--text-primary)] flex items-center justify-center bg-[var(--surface-subtle)]">
              <CheckCircle className="w-5 h-5 text-[var(--text-primary)]" />
            </div>
            <div>
              <span className="font-label-minimal text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] mb-2 block">
                {ui.contactSection.tag}
              </span>
              <h3 className="font-headline-editorial text-[24px] sm:text-[28px] text-[var(--text-primary)] font-normal mb-3">
                {ui.contactSection.successTitle}, {formData.name}
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] font-light max-w-md mx-auto leading-relaxed">
                {ui.contactSection.successDesc}{' '}
                <span className="font-medium text-[var(--text-primary)] underline decoration-1">{formData.email}</span>.
              </p>
            </div>
            <button
              id="send-another-message-btn"
              onClick={handleReset}
              className="border border-[var(--border-hairline)] text-[var(--text-primary)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] font-label-minimal text-[10px] uppercase tracking-[0.25em] px-8 py-3.5 transition-colors cursor-pointer"
            >
              Reset &amp; Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {errorMsg && (
              <div className="border border-red-500/30 bg-red-50 dark:bg-red-950/20 p-3 text-[12px] font-mono text-red-600 dark:text-red-400">
                {errorMsg}
              </div>
            )}

            {/* Name Field */}
            <div className="flex flex-col">
              <label
                className="font-label-minimal text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2"
                htmlFor="name"
              >
                {ui.contactSection.formName}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={ui.contactSection.formNamePlaceholder}
                className="w-full bg-transparent border-0 border-b border-[var(--border-hairline)] text-[var(--text-primary)] text-[16px] sm:text-[17px] py-2.5 px-0 rounded-none focus:outline-none focus:border-b focus:border-[var(--text-primary)] transition-colors placeholder:text-[var(--text-muted)]/40 font-light"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                className="font-label-minimal text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2"
                htmlFor="email"
              >
                {ui.contactSection.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={ui.contactSection.formEmailPlaceholder}
                className="w-full bg-transparent border-0 border-b border-[var(--border-hairline)] text-[var(--text-primary)] text-[16px] sm:text-[17px] py-2.5 px-0 rounded-none focus:outline-none focus:border-b focus:border-[var(--text-primary)] transition-colors placeholder:text-[var(--text-muted)]/40 font-light"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label
                className="font-label-minimal text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2"
                htmlFor="message"
              >
                {ui.contactSection.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={ui.contactSection.formMessagePlaceholder}
                className="w-full bg-transparent border-0 border-b border-[var(--border-hairline)] text-[var(--text-primary)] text-[16px] sm:text-[17px] py-2.5 px-0 rounded-none focus:outline-none focus:border-b focus:border-[var(--text-primary)] resize-none transition-colors placeholder:text-[var(--text-muted)]/40 font-light leading-relaxed"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={submitting}
                className="w-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-label-minimal text-[11px] uppercase tracking-[0.25em] py-4 hover:opacity-90 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 shadow-2xs"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{ui.contactSection.sendingButton}</span>
                  </>
                ) : (
                  <>
                    <span>{ui.contactSection.sendButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="w-full max-w-2xl mt-16 pt-10 border-t border-[var(--border-hairline)]">
        <div className="flex justify-center space-x-12 sm:space-x-16">
          <a
            id="social-link-github"
            href="https://github.com/stanleenwosu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer"
          >
            <Code className="w-5 h-5 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="font-label-minimal text-[10px] uppercase tracking-[0.2em] group-hover:underline underline-offset-4 decoration-1">
              GitHub
            </span>
          </a>

          <a
            id="social-link-linkedin"
            href="https://linkedin.com/in/stanleenwosu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer"
          >
            <Briefcase className="w-5 h-5 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="font-label-minimal text-[10px] uppercase tracking-[0.2em] group-hover:underline underline-offset-4 decoration-1">
              LinkedIn
            </span>
          </a>

          <a
            id="social-link-email"
            href="mailto:stanleenwosu@gmail.com"
            className="flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer"
          >
            <Mail className="w-5 h-5 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="font-label-minimal text-[10px] uppercase tracking-[0.2em] group-hover:underline underline-offset-4 decoration-1">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

