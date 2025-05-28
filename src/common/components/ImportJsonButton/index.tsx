import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

interface ImportJsonButtonProps {
  onImport: (data: any) => void;
}

const ImportJsonButton = ({ onImport }: ImportJsonButtonProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        onImport(json);
      } catch (err) {
        console.info('Error parsing JSON:', err);
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <label className={styles.importJsonButton}>
      Import JSON
      <input
        type='file'
        accept='application/json'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </label>
  );
};

export default ImportJsonButton;
