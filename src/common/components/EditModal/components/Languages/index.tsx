import styles from './styles.module.scss';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import ClearButton from '../ClearButton';
import { CvData } from '@core/hooks/project';

interface Language {
  language: string;
  level: string;
}

interface LanguagesProps {
  languages: Language[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof Language, value: string) => void;
  onClearSection: (section: keyof CvData) => void;
}

const Languages = ({
  languages,
  onAdd,
  onRemove,
  onChange,
  onClearSection,
}: LanguagesProps) => {
  return (
    <fieldset
      className={styles.languagesSection}
      style={{ position: 'relative' }}
    >
      <legend>Languages</legend>
      <ClearButton
        onClick={() => onClearSection('languages')}
        title='Clear all languages'
      />
      {languages.map((langItem, idx) => (
        <div key={idx} className={styles.formRow}>
          <label>
            {idx + 1} Language:
            <input
              type='text'
              value={langItem.language}
              onChange={(e) => onChange(idx, 'language', e.target.value)}
            />
          </label>
          <label>
            Level:
            <input
              type='text'
              value={langItem.level}
              onChange={(e) => onChange(idx, 'level', e.target.value)}
            />
          </label>
          <DeleteButton onClick={() => onRemove(idx)} />
        </div>
      ))}
      <AddButton onClick={onAdd} />
    </fieldset>
  );
};

export default Languages;
