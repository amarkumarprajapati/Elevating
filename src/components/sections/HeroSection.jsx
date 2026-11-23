import Link from 'next/link';
import { useState } from 'react';
import { company as website } from '../../data/data.js';

const route = name => website.navigation.find(item => item.href === '/' + name + '/')?.href;
const label = name => website.navigation.find(item => item.href === route(name))?.label;

export default function HeroSection({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <section className="gallery-hero">
      <div className="gallery-layout">
        <div className="gallery-intro">
          <h1>{website.name}</h1>
          <div className="gallery-description">
            <p>{website.tagline}</p>
            <div className="gallery-links">
              <Link href={route('products')} className="btn-primary">{label('products')}</Link>
              <Link href={route('services')} className="secondary-action">{label('services')}</Link>
            </div>
          </div>
        </div>
        <div className="gallery-visual">
          <img key={images[index].src} className="gallery-photo" src={images[index].src} alt={images[index].alt} fetchPriority="high" />
        </div>
        {images.length > 1 && <div className="gallery-toolbar">
          <span className="gallery-position" aria-live="polite">{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
          <div className="gallery-picker" role="group" aria-label="Photo gallery">
            {images.map((image, i) => (
              <button key={image.src} type="button" aria-label={`Show photo ${i + 1} of ${images.length}`} aria-pressed={i === index} onClick={() => setIndex(i)}>
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>}
      </div>
    </section>
  );
}
