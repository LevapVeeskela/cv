import React from 'react';
import './styles.scss';

interface ArrayFieldSectionProps<T> {
  title: string;
  items: T[];
  onAdd: () => void;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function ArrayFieldSection<T>({
  title,
  items,
  onAdd,
  renderItem,
}: ArrayFieldSectionProps<T>) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {items.map((item, idx) => (
        <div key={idx} className='form-row' style={{ alignItems: 'center' }}>
          {renderItem(item, idx)}
        </div>
      ))}
      <button type='button' onClick={onAdd}>
        +
      </button>
    </fieldset>
  );
}

export default ArrayFieldSection;
