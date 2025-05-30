import SkillLevelRow from '../../common/components/SkillLevelRow';

interface Language {
  language: string;
  level: string;
}

interface LanguagesProps {
  data: Language[];
}

const Languages = ({ data = [] }: LanguagesProps) => {
  if (data?.length === 0) return null;

  return (
    <section className='section-container'>
      <header className='heading'>
        <span className='sectiontitle'>Languages</span>
      </header>
      <div className='sortableInner'>
        {data.map(({ language, level }) => (
          <SkillLevelRow
            key={language}
            label={language}
            level={parseInt(level, 10)}
          />
        ))}
      </div>
    </section>
  );
};

export default Languages;
