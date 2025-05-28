import html2pdf from 'html2pdf.js';
import styles from './styles.module.scss';

const DownloadPdfButton = () => {
  const handleDownloadPDF = () => {
    const element = document.getElementById('resumeDoc');
    if (element) {
      const opt = {
        margin: 0.5,
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };

      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <button onClick={handleDownloadPDF} className={styles.DownloadPdfButton}>
      Save to PDF
    </button>
  );
};

export default DownloadPdfButton;
