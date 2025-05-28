import React from 'react';
import './styles.scss';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

interface WorkHistoryItem {
  title: string;
  company: string;
  city: string;
  country: string;
  start: string;
  end: string;
  details: string[];
}

interface WorkHistoryProps {
  workHistory: WorkHistoryItem[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (
    index: number,
    field: keyof WorkHistoryItem,
    value: string,
  ) => void;
}

const WorkHistory: React.FC<WorkHistoryProps> = ({
  workHistory,
  onAdd,
  onRemove,
  onChange,
}) => (
  <fieldset className='work-history-section'>
    <legend>Work History</legend>
    {workHistory.map((job, idx) => (
      <div key={idx} className='form-row'>
        <label>
          Title:
          <input
            type='text'
            value={job.title}
            onChange={(e) => onChange(idx, 'title', e.target.value)}
          />
        </label>
        <label>
          Company:
          <input
            type='text'
            value={job.company}
            onChange={(e) => onChange(idx, 'company', e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type='text'
            value={job.city}
            onChange={(e) => onChange(idx, 'city', e.target.value)}
          />
        </label>
        <label>
          Country:
          <input
            type='text'
            value={job.country}
            onChange={(e) => onChange(idx, 'country', e.target.value)}
          />
        </label>
        <label>
          Start:
          <input
            type='text'
            value={job.start}
            onChange={(e) => onChange(idx, 'start', e.target.value)}
          />
        </label>
        <label>
          End:
          <input
            type='text'
            value={job.end}
            onChange={(e) => onChange(idx, 'end', e.target.value)}
          />
        </label>
        <label>
          Details (comma separated):
          <input
            type='text'
            value={job.details ? job.details.join(', ') : ''}
            onChange={(e) => onChange(idx, 'details', e.target.value)}
          />
        </label>
        <DeleteButton onClick={() => onRemove(idx)} />
      </div>
    ))}
    <AddButton onClick={onAdd} />
  </fieldset>
);

export default WorkHistory;
