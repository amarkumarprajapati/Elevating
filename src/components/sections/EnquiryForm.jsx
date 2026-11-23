import { useState } from 'react';
import { useRouter } from 'next/router';

const COMPANY = {
  email: 'intalelevator@gmail.com',
};

export default function EnquiryForm() {
  const { query } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: typeof query.product === 'string' ? query.product : 'New Lift Installation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage / Requirements:\n${formData.message || 'None'}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
        `Enquiry for ${formData.service} - ${formData.name}`
      )}&body=${encodeURIComponent(body)}`;
    }, 300);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center bg-slate-50 border border-slate-200 rounded-xl">
        <h3 className="text-lg font-bold text-slate-900 mb-1">Message Prepared!</h3>
        <p className="text-sm text-slate-600 mb-4">
          Opening your email client to send your enquiry to Intal Elevators.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-purple-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Service Required
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
          >
            <option value="New Lift Installation">New Lift Installation</option>
            <option value="Passenger Elevator">Passenger Elevator</option>
            <option value="Car / Automobile Elevator">Car / Automobile Elevator</option>
            <option value="Home Elevator">Home Elevator</option>
            <option value="Goods Elevator">Goods Elevator</option>
            <option value="Stretcher Elevator">Stretcher Elevator</option>
            <option value="Annual Maintenance Contract (AMC)">Annual Maintenance (AMC)</option>
            <option value="Repairs & Modernization">Repairs & Modernization</option>
            <option value="Other Consultation">Other Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Your Message / Requirements
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about the project, number of stops, location, or any specific requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm px-7 py-3 rounded-lg shadow-xs transition"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}
