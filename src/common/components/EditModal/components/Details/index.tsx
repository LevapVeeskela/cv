import { EMPTY_STRING } from '@constants';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import styles from './styles.module.scss';

interface DetailsProps {
  details: string[];
  onChange: (details: string[]) => void;
  label?: string;
}

const Details = ({ details, onChange, label = 'Details' }: DetailsProps) => {
  const handleChange = (idx: number, value: string) => {
    const updated = [...details];
    updated[idx] = value;
    onChange(updated);
  };
  const handleDelete = (idx: number) => {
    const updated = details.filter((_, i) => i !== idx);
    onChange(updated);
  };
  const handleAdd = () => {
    onChange([...details, EMPTY_STRING]);
  };
  return (
    <div className={styles.detailsBox}>
      <div className={styles.detailsLabel}>{label}:</div>
      {details.map((d, idx) => (
        <div key={idx} className={styles.detailsRow}>
          <input
            type='text'
            value={d}
            onChange={(e) => handleChange(idx, e.target.value)}
            className={styles.detailsInput}
          />
          <DeleteButton onClick={() => handleDelete(idx)} />
        </div>
      ))}
      <AddButton onClick={handleAdd} title='Add detail' />
    </div>
  );
};

export default Details;
