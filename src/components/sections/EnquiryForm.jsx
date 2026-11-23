import { useRouter } from 'next/router';
import { company as website } from '../../data/data.js';

export default function EnquiryForm({ block }) {
  const { query } = useRouter();

  function compose(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = block.fields
      .map((field) => field.label + ': ' + fields.get(field.name))
      .join('\n');
    window.location.href =
      'mailto:' +
      website.email +
      '?subject=' +
      encodeURIComponent(website.enquiry) +
      '&body=' +
      encodeURIComponent(body);
  }

  return (
    <form onSubmit={compose} className="space-y-5 max-w-xl">
      {block.fields.map((field) => (
        <label key={field.name} className="block">
          <span className="text-sm font-medium text-slate-700 mb-1.5 block">
            {field.label}
          </span>
          {field.name.includes('message') ? (
            <textarea
              name={field.name}
              required={field.required}
              rows={4}
              defaultValue={typeof query.product === 'string' ? `Enquiry about: ${query.product}` : ''}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none transition-all duration-200"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              defaultValue={field.name.includes('subject') && typeof query.product === 'string' ? query.product : ''}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-slate-900 text-sm placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:bg-white outline-none transition-all duration-200"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {block.submit} via email
      </button>
    </form>
  );
}
