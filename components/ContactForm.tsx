'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { SHOWCASE_VEHICLES, buildWhatsAppUrl } from '@/data/dealership';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interestedVehicle, setInterestedVehicle] = useState(
    'General Inquiry / Need Guidance'
  );
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(
    null
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 7) {
      setError('Please enter a valid contact phone number.');
      return;
    }

    const composedMessage = [
      'Hello GGS Company Taxila EV Bike!',
      `Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      `Interested Vehicle: ${interestedVehicle}`,
      trimmedMessage ? `Message: ${trimmedMessage}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = buildWhatsAppUrl(composedMessage);
    setPreparedWhatsAppUrl(waUrl);

    const anchor = document.createElement('a');
    anchor.href = waUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700"
        >
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="contact-full-name"
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          Full Name <span className="text-[#0284C7]">*</span>
        </label>
        <input
          id="contact-full-name"
          name="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0F172A] placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          Phone Number <span className="text-[#0284C7]">*</span>
        </label>
        <input
          id="contact-phone"
          name="phoneNumber"
          type="tel"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="e.g. +92 300 1234567"
          className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0F172A] placeholder:text-slate-400 text-sm tabular-nums focus:outline-none focus:bg-white focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-vehicle"
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          Interested Bike or Scooter
        </label>
        <select
          id="contact-vehicle"
          name="interestedVehicle"
          value={interestedVehicle}
          onChange={(e) => setInterestedVehicle(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0F172A] text-sm focus:outline-none focus:bg-white focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
        >
          <option value="General Inquiry / Need Guidance">
            General Inquiry / Need Guidance
          </option>
          {SHOWCASE_VEHICLES.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.name}>
              {vehicle.name} ({vehicle.brand})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[#0F172A] mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share any questions about availability, delivery, or in-store pickup..."
          className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0F172A] placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold transition-colors cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Send Inquiry via WhatsApp</span>
      </button>

      <p className="text-xs text-slate-500">
        Submitting this form opens a direct WhatsApp chat with GGS Company
        Taxila pre-filled with your inquiry details.
      </p>

      {preparedWhatsAppUrl && (
        <div
          role="status"
          className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2.5 text-sm"
        >
          <p className="text-emerald-900 font-medium">
            Your WhatsApp inquiry message has been prepared. If WhatsApp did not
            open automatically, use the direct link below to send it:
          </p>
          <a
            href={preparedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] px-4 py-2 rounded-lg transition-colors"
          >
            <span>Open WhatsApp Chat Now</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      )}
    </form>
  );
}
