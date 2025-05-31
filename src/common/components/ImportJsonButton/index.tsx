import { ChangeEvent } from 'react';
import { useProjectContext } from '@core/context/ProjectContext';
import { LOCAL_STORAGE_KEY, ORDER_STORAGE_KEY } from '@constants';
import styles from './styles.module.scss';

interface ImportJsonButtonProps {
  onImport?: (data: any) => void;
}

const ImportJsonButton = ({ onImport }: ImportJsonButtonProps) => {
  const { setCvData, setOrdersFromImport } = useProjectContext();

  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = event.target?.result as string;
        const parsed = JSON.parse(json);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(ORDER_STORAGE_KEY);
        if (parsed.cvData) {
          setCvData(parsed.cvData);
        } else {
          setCvData(parsed);
        }
        if (
          parsed.leftOrder &&
          Array.isArray(parsed.leftOrder) &&
          parsed.rightOrder &&
          Array.isArray(parsed.rightOrder)
        ) {
          setOrdersFromImport(parsed.leftOrder, parsed.rightOrder);
        }
        if (onImport) onImport(parsed.cvData || parsed);
      } catch {
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
        onChange={handleImport}
      />
    </label>
  );
};

export default ImportJsonButton;
