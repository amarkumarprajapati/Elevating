import Enquiry from './EnquiryForm';

function formatHeading(text) {
  // Strip out leading numbers like "01. " or "02. " if present
  const cleaned = text.replace(/^\d+[\.\s]+/, '');
  // Capitalize nicely
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

export default function Block({ block }) {
  if (block.type === 'image') return <img className="import-photo" loading="lazy" src={block.src} alt={block.alt} />;
  if (block.type === 'map') return <iframe title="Location map" loading="lazy" src={block.src} className="w-full h-72" />;
  if (block.type === 'heading') return <h3>{formatHeading(block.text)}</h3>;
  if (block.type === 'form') return <Enquiry block={block} />;
  return <p>{block.text}</p>;
}
