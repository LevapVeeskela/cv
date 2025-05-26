import React from 'react';

interface SkillLevelRowProps {
  label: string;
  level: number; // 1-5
}

const SkillLevelRow: React.FC<SkillLevelRowProps> = ({ label, level }) => {
  return (
    <div className="row m-t">
      <div className="col-6">{label}</div>
      <div className="col-6">
        <div className="noLnht">
          <svg viewBox="0 0 500 100" type="count">
            {[1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx={i * 100 - 50}
                cy="50"
                r="40"
                fill={i <= level ? '#0187de' : '#d5d6d6'}
                className={i <= level ? 'default-fill' : ''}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SkillLevelRow;
