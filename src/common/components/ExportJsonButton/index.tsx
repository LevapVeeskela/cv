import React from 'react';
import { useProjectContext } from '@core/context/ProjectContext';
import styles from './styles.module.scss';
import { CvData } from '@constants';

interface ExportJsonButtonProps {
  data: CvData;
  fileName?: string;
}

const ExportJsonButton = ({
  data,
  fileName = 'cv-export.json',
}: ExportJsonButtonProps) => {
  const { leftOrder, rightOrder } = useProjectContext();

  const handleExport = () => {
    const exportData = {
      ...data,
      leftOrder,
      rightOrder,
    };
    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type='button'
      className={styles.exportJsonButton}
      onClick={handleExport}
    >
      Export JSON
    </button>
  );
};

export default ExportJsonButton;
