import React from 'react';
import styles from './styles.module.scss';

interface SummaryProps {
  biography: string;
  onChange: (value: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ biography, onChange }) => (
  <fieldset className={styles.summarySection}>
    <legend>Summary</legend>
    <label>
      Biography:
      <textarea value={biography} onChange={(e) => onChange(e.target.value)} />
    </label>
  </fieldset>
);

export default Summary;
