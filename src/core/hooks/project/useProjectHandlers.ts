import { useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  LOCAL_STORAGE_KEY,
  DEFAULT_CV_DATA,
  LeftSectionKey,
  RightSectionKey,
  SectionKey,
} from '@constants';
import { ProjectState } from './useProjectState';

export const useProjectHandlers = ({
  setCvData,
  leftOrder,
  setLeftOrder,
  rightOrder,
  setRightOrder,
  resetOrder,
}: ProjectState) => {
  // Удаляет указанный раздел из cvData
  const handleClearSection = (section: string) => {
    setCvData((prev: any) => {
      const updated = { ...prev };
      delete updated[section];
      return updated;
    });
  };

  const resetCvData = useCallback(() => {
    setCvData(DEFAULT_CV_DATA);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    resetOrder();
  }, [setCvData, resetOrder]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const activeId = active.id as SectionKey;
    const overId = over.id as SectionKey;
    if (
      leftOrder.includes(activeId as LeftSectionKey) &&
      leftOrder.includes(overId as LeftSectionKey)
    ) {
      const oldIdx = leftOrder.indexOf(activeId as LeftSectionKey);
      const newIdx = leftOrder.indexOf(overId as LeftSectionKey);
      setLeftOrder(arrayMove(leftOrder, oldIdx, newIdx));
    } else if (
      rightOrder.includes(activeId as RightSectionKey) &&
      rightOrder.includes(overId as RightSectionKey)
    ) {
      const oldIdx = rightOrder.indexOf(activeId as RightSectionKey);
      const newIdx = rightOrder.indexOf(overId as RightSectionKey);
      setRightOrder(arrayMove(rightOrder, oldIdx, newIdx));
    }
  };

  return { handleClearSection, resetCvData, handleDragEnd };
};

export type ProjectHandlers = ReturnType<typeof useProjectHandlers>;
