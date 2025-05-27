import React from 'react';
import './styles.scss';

interface ContactsProps {
  data?: {
    address: { city: string; state: string; zip: string };
    phone: string;
    email: string;
    linkedin: string;
  };
}

const Contacts: React.FC<ContactsProps> = ({ data }) => {
  if (!data) return null;
  return (
    <section className='section-container data-CNTC'>
      <header className='heading'>
        <span className='sectiontitle'>Contacts</span>
      </header>
      <div>
        <div className='iconRow'>
          <span className='iconSvg' aria-label='address'>
            <svg viewBox='0 0 54 54'>
              <circle cx='27' cy='27' r='26' fill='#0187de'></circle>
              <path
                transform='translate(11,11)'
                d='M16 0C8.772 0 2.912 5.86 2.912 13.088 2.912 20.428 9.276 25.27 16 32c6.724-6.732 13.088-11.572 13.088-18.912C29.088 5.86 23.228 0 16 0zm0 22.288c-5.302 0-9.602-4.298-9.602-9.602 0-5.302 4.298-9.602 9.602-9.602 5.302 0 9.602 4.298 9.602 9.602s-4.3 9.602-9.602 9.602z'
                fill='#fff'
              ></path>
            </svg>
          </span>
          <span className='icoTxt'>
            <span>{data.address.city}</span>, <span>{data.address.state}</span>,{' '}
            <span>{data.address.zip}</span>
          </span>
        </div>
        <div className='iconRow'>
          <span className='iconSvg' aria-label='phone'>
            <svg viewBox='0 0 54 54'>
              <circle cx='27' cy='27' r='26' fill='#0187de'></circle>
              <path
                transform='translate(11,11)'
                d='M6.067.655L1.328 5.39C-.696 7.413.196 9.679.196 9.679c2.156 4.733 5.134 9.182 9.03 13.076 3.898 3.893 8.35 6.87 13.087 9.024 0 0 2.195.964 4.293-1.132l4.739-4.736a2.229 2.229 0 0 0 0-3.156l-4.74-4.736a2.233 2.233 0 0 0-3.159 0l-2.665 2.664c-1.837-1.237-3.607-2.619-5.233-4.242-1.627-1.623-3.005-3.391-4.245-5.229l2.665-2.665a2.229 2.229 0 0 0 0-3.157L9.23.655a2.236 2.236 0 0 0-3.162 0z'
                fill='#fff'
              ></path>
            </svg>
          </span>
          <span className='icoTxt'>
            <a
              href={`tel:${data.phone}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.phone}
            </a>
          </span>
        </div>
        <div className='iconRow'>
          <span className='iconSvg' aria-label='email'>
            <svg viewBox='0 0 54 54'>
              <circle cx='27' cy='27' r='26' fill='#0187de'></circle>
              <path
                transform='translate(11,11)'
                d='M32 6c0-1.106-.894-2-2-2H2C.894 4 0 4.894 0 6l16 13L32 6z'
                fill='#fff'
              ></path>
              <path
                transform='translate(11,11)'
                d='M0 9v17c0 1.106.894 2 2 2h28c1.106 0 2-.894 2-2V8.968L16 22 0 9z'
                fill='#fff'
              ></path>
            </svg>
          </span>
          <span className='icoTxt'>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </span>
        </div>
        <div className='iconRow'>
          <span className='iconSvg' aria-label='linkedin'>
            <svg viewBox='0 0 54 54'>
              <circle cx='27' cy='27' r='26' fill='#0187de'></circle>
              <path
                transform='translate(27, 27) scale(1.5) translate(-22.635, -24.9)'
                d='M19 20h3v2.5c.6-1.1 2.1-2.5 4.1-2.5 4.4 0 5.2 2.9 5.2 6.7V34h-3v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V34h-3V20zm-5 0h3v14h-3V20zm1.5-4c1 0 1.5.7 1.5 1.5S16.5 19 15.5 19 14 18.3 14 17.5 14.5 16 15.5 16z'
                fill='#fff'
              ></path>
            </svg>
          </span>
          <span className='icoTxt'>
            <a href={data.linkedin} target='_blank' rel='noopener noreferrer'>
              {data.linkedin}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
