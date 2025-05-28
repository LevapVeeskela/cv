import React from 'react';
import './styles.scss';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

interface EducationItem {
  start: string;
  end: string;
  degree: string;
  school: string;
  city: string;
  description: string;
  details: string[];
}

interface EducationProps {
  education: EducationItem[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof EducationItem, value: string) => void;
}

const Education: React.FC<EducationProps> = ({
  education,
  onAdd,
  onRemove,
  onChange,
}) => (
  <fieldset className='education-section'>
    <legend>Education</legend>
    {education.map((edu, idx) => (
      <div key={idx} className='form-row'>
        <label>
          Start:
          <input
            type='text'
            value={edu.start}
            onChange={(e) => onChange(idx, 'start', e.target.value)}
          />
        </label>
        <label>
          End:
          <input
            type='text'
            value={edu.end}
            onChange={(e) => onChange(idx, 'end', e.target.value)}
          />
        </label>
        <label>
          Degree:
          <input
            type='text'
            value={edu.degree}
            onChange={(e) => onChange(idx, 'degree', e.target.value)}
          />
        </label>
        <label>
          School:
          <input
            type='text'
            value={edu.school}
            onChange={(e) => onChange(idx, 'school', e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type='text'
            value={edu.city}
            onChange={(e) => onChange(idx, 'city', e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={edu.description}
            onChange={(e) => onChange(idx, 'description', e.target.value)}
          />
        </label>
        <label>
          Details (comma separated):
          <input
            type='text'
            value={edu.details ? edu.details.join(', ') : ''}
            onChange={(e) => onChange(idx, 'details', e.target.value)}
          />
        </label>
        <DeleteButton onClick={() => onRemove(idx)} />
      </div>
    ))}
    <AddButton onClick={onAdd} />
  </fieldset>
);

export default Education;
