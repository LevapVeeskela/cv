import React from 'react';
import styles from './styles.module.scss';

interface SkillLevelRowProps {
  label: string;
  level: number; // 1-5
}

const SkillLevelRow: React.FC<SkillLevelRowProps> = ({ label, level }) => {
  return (
    <div className={styles.SkillLevelRow}>
      <div className={styles['SkillLevelRow-dots']}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: i < level ? '#0187de' : '#e0e0e0',
              marginRight: 2,
            }}
          ></span>
        ))}
      </div>
      <span className={styles['SkillLevelRow-label']}>{label}</span>
    </div>
  );
};

export default SkillLevelRow;
