import styles from './styles.module.scss';

interface KeyAchievementsProps {
  data: string[];
}

const KeyAchievements = ({ data = [] }: KeyAchievementsProps) => {
  if (data?.length === 0) return null;

  return (
    <section className={'section-container'}>
      <header className={'heading'}>
        <span className={'sectiontitle'}>Key Achievements</span>
      </header>
      <ul className={styles.sortableInner}>
        {data.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
};

export default KeyAchievements;
