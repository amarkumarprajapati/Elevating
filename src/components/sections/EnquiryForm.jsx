import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  Building,
  Wrench,
  Sparkles,
} from 'lucide-react';

const COMPANY = {
  email: 'intalelevator@gmail.com',
  phone: '+91 8007455441',
};

const SERVICE_OPTIONS = [
  'New Lift Installation',
  'Annual Maintenance (AMC)',
  'Modernization & Repair',
  'Commercial / Passenger',
  'Car / Goods Elevator',
  'Other Consultation',
];

export default function EnquiryForm() {
  const { query } = useRouter();
  const [selectedService, setSelectedService] = useState(
    typeof query.product === 'string' ? query.product : 'New Lift Installation'
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    buildingType: 'Residential',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Enquiry Details:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- Service Needed: ${selectedService}\n- Building Type: ${formData.buildingType}\n- Message: ${formData.message || 'N/A'}`;

    setSubmitted(true);

    // Open user's mail client with filled details
    setTimeout(() => {
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
        `New Elevator Enquiry: ${selectedService}`
      )}&body=${encodeURIComponent(body)}`;
    }, 400);
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-50/70 border border-brand-200 text-center animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-600/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">Thank you!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Your enquiry has been prepared. Your email client is launching to send your request directly to our engineering team.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800"
          >
            ← Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Quick Select Service Pills */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Select Required Solution
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((service) => {
                const isSelected = selectedService === service;
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 scale-[1.02]'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-300 hover:bg-brand-50/50'
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Name <span className="text-brand-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number <span className="text-brand-600">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-brand-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Property / Building Type
              </label>
              <select
                value={formData.buildingType}
                onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
              >
                <option value="Residential Society">Residential Society (CHS)</option>
                <option value="Commercial Complex">Commercial / Office</option>
                <option value="Private Bungalow">Private Bungalow / Villa</option>
                <option value="Hospital / Healthcare">Hospital / Healthcare</option>
                <option value="Industrial / Warehouse">Industrial / Warehouse</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Specific Requirements / Location Details
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about number of floors, capacity, or location (e.g. Kalyan, Thane, Mumbai)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
            />
          </div>

          {/* Submit Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-brand-700/20 hover:shadow-xl hover:shadow-brand-700/30 transition-all duration-200 group"
            >
              <span>Submit Instant Enquiry</span>
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct engineer response within 24 hours</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
