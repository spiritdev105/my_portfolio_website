import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';
import ShinyText from '@/components/react-bits/ShinyText';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useRef } from 'react';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on component unmount
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex gap-4 flex-col items-start justify-center w-full">
      <Wrapper
        id="contact"
        className="max-w-xl mx-auto text-center  !py-16 md:!py-24"
        {...getSectionAnimation}
      >
        <p className="mb-3 font-mono text-sm capitalize text-accent">
          {subtitle}
        </p>
        <h2 className="heading-secondary !mb-5">{title}</h2>

        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <Button type="link" size="lg" href={link} center className="mt-12">
          <ShinyText text="Say Hello!" disabled={false} speed={3} />
        </Button>
      </Wrapper>
      <ShinyText
        text="Or Book a call down here!"
        disabled={false}
        speed={3}
        className="text-3xl block mx-auto"
      />
      <div className="glass w-full rounded-2xl justify-center overflow-hidden animate-fade-in h-[700px] mb-16 md:mb-16">
        <div
          ref={calendlyRef}
          className="calendly-inline-widget h-full"
          data-url="https://calendly.com/dawncoding1107/meet-with-community"
        />
      </div>
    </div>
  );
};

export default Contact;
