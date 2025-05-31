import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

interface SortableSectionProps {
  id: string;
  children: React.ReactNode;
  isDragMode: boolean;
}

const SortableSection = ({
  id,
  children,
  isDragMode,
}: SortableSectionProps) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    cursor: isDragMode ? 'grab' : 'default',
    zIndex: isDragging ? 10 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(isDragMode ? listeners : {})}
    >
      {children}
    </div>
  );
};

export default SortableSection;
