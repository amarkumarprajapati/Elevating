import { useRouter } from 'next/router';
import { company as website } from '../../data/data.js';

export default function EnquiryForm({ block }) {
  const { query } = useRouter();
  function compose(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = block.fields.map(field => field.label + ': ' + fields.get(field.name)).join('\n');
    window.location.href = 'mailto:' + website.email + '?subject=' + encodeURIComponent(website.enquiry) + '&body=' + encodeURIComponent(body);
  }
  return (
    <form onSubmit={compose} className="space-y-4">
      {block.fields.map(field => (
        <label key={field.name} className="block text-sm font-semibold">
          {field.label}
          <input className="mt-1 block w-full rounded-md border border-slate-300 p-3" type={field.type} name={field.name} required={field.required} defaultValue={field.name.includes('message') && typeof query.product === 'string' ? query.product : ''} />
        </label>
      ))}
      <button className="btn-primary">{block.submit} via email</button>
    </form>
  );
}
