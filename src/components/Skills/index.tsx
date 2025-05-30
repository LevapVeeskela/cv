import SkillLevelRow from '../../common/components/SkillLevelRow';

interface Skill {
  skill: string;
  level: string;
}

interface SkillsProps {
  data?: Skill[];
}

const Skills = ({ data = [] }: SkillsProps) => {
  if (data?.length === 0) return null;

  return (
    <section className={'section-container'}>
      <header className={'heading'}>
        <span className={'sectiontitle'}>Skills</span>
      </header>
      <div className={'sortableInner'}>
        {data.map(({ skill, level }) => (
          <SkillLevelRow key={skill} label={skill} level={level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
