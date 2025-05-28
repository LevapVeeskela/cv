import React from 'react';
import './styles.scss';

interface SummaryProps {
  biography: string;
  onChange: (value: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ biography, onChange }) => (
  <fieldset className='summary-section'>
    <legend>Summary</legend>
    <label>
      Biography:
      <textarea value={biography} onChange={(e) => onChange(e.target.value)} />
    </label>
  </fieldset>
);

export default Summary;
