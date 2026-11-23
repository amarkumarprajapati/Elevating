import Enquiry from './EnquiryForm';

function formatHeading(text) {
  const cleaned = text.replace(/^\d+[.\s]+/, '');
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

export default function Block({ block }) {
  if (block.type === 'image') {
    return (
      <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 rounded-xl mb-4">
        <img className="w-full h-full object-cover" loading="lazy" src={block.src} alt={block.alt || ''} />
      </div>
    );
  }
  if (block.type === 'map') {
    return <iframe title="Location map" loading="lazy" src={block.src} className="w-full h-72 rounded-xl border border-slate-200" />;
  }
  if (block.type === 'heading') {
    return <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">{formatHeading(block.text)}</h3>;
  }
  if (block.type === 'form') {
    return <Enquiry block={block} />;
  }
  return <p className="text-sm text-slate-600 leading-relaxed">{block.text}</p>;
}
