import styles from './styles.module.scss';

interface InterestsProps {
  data: string[];
}

const Interests = ({ data = [] }: InterestsProps) => {
  if (data?.length === 0) return null;

  return (
    <section className={'section-container'}>
      <header className={'heading'}>
        <span className={'sectiontitle'}>Interests</span>
      </header>
      <div className={styles.sortableInner}>
        <div className={`${styles.paragraph} ${styles.firstParagraph}`}>
          <div className={`${styles.clearfix} ${styles.docItem}`}>
            <div className={`${styles.field} ${styles.singleColumn}`}>
              {data.map((interest, i) => (
                <p key={i}>{interest}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
