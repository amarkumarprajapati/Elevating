import { useEffect, useRef } from 'react';

const stepDuration = 4500;

export default function PartnerStrip({ title, logos }) {
  const track = useRef(null);
  const motion = useRef(null);
  const strip = useRef(null);

  useEffect(() => {
    if (logos.length < 2) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animation = track.current.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      { duration: logos.length * stepDuration, iterations: Infinity, easing: 'linear' }
    );
    motion.current = animation;
    const element = strip.current;
    const pause = () => animation.pause();
    const resume = () => {
      if (reduced.matches || element.matches(':hover, :focus-within')) pause();
      else animation.play();
    };
    resume();
    element.addEventListener('pointerenter', pause);
    element.addEventListener('pointerleave', resume);
    element.addEventListener('focusin', pause);
    element.addEventListener('focusout', resume);
    reduced.addEventListener('change', resume);
    return () => {
      animation.cancel();
      motion.current = null;
      element.removeEventListener('pointerenter', pause);
      element.removeEventListener('pointerleave', resume);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('focusout', resume);
      reduced.removeEventListener('change', resume);
    };
  }, [logos.length]);

  function advance(direction) {
    const animation = motion.current;
    if (!animation) return;
    const duration = logos.length * stepDuration;
    animation.currentTime = ((animation.currentTime || 0) + direction * stepDuration + duration) % duration;
  }

  if (!logos.length) return null;
  return <section ref={strip} className="partner-strip" aria-label={title}>
    {logos.length > 1 && <button className="partner-prev" aria-label="Previous partner" onClick={() => advance(-1)} />}
    <div className="partner-window">
      <div className="partner-track" ref={track}>
        {(logos.length > 1 ? [false, true] : [false]).map(copy => <div className="partner-row" key={String(copy)} aria-hidden={copy || undefined}>
          {logos.map((logo, index) => <img key={logo.src + index} src={logo.src} alt={copy ? '' : logo.alt} />)}
        </div>)}
      </div>
    </div>
    {logos.length > 1 && <button className="partner-next" aria-label="Next partner" onClick={() => advance(1)} />}
  </section>;
}
