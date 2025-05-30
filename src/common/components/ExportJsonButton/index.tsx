import styles from './styles.module.scss';

interface ExportJsonButtonProps {
  data: any;
  fileName?: string;
}

const ExportJsonButton = ({
  data,
  fileName = 'cv-data.json',
}: ExportJsonButtonProps) => {
  const handleExport = () => {
    const json = JSON.stringify(data, null, 2);
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
