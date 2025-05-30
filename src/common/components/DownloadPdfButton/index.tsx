import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './styles.module.scss';

const DownloadPdfButton = () => {
  const handleDownloadPDF = async () => {
    const element = document.getElementById('resumeDoc');
    if (element) {
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
      pdf.save('cv.pdf');
    }
  };

  return (
    <button onClick={handleDownloadPDF} className={styles.DownloadPdfButton}>
      Save to PDF
    </button>
  );
};

export default DownloadPdfButton;
