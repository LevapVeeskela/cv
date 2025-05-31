import { useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  LOCAL_STORAGE_KEY,
  DEFAULT_CV_DATA,
  LeftSectionKey,
  RightSectionKey,
  SectionKey,
  ORDER_STORAGE_KEY,
  LEFT_SECTIONS,
  RIGHT_SECTIONS,
} from '@constants';
import { ProjectState } from './useProjectState';

export const useProjectHandlers = ({
  setCvData,
  leftOrder,
  setLeftOrder,
  rightOrder,
  setRightOrder,
}: ProjectState) => {
  // Удаляет указанный раздел из cvData
  const handleClearSection = (section: string) => {
    setCvData((prev: any) => {
      const updated = { ...prev };
      delete updated[section];
      return updated;
    });
  };

  // Сброс порядка к дефолту
  const resetOrder = () => {
    setLeftOrder([...LEFT_SECTIONS]);
    setRightOrder([...RIGHT_SECTIONS]);
    saveOrder([...LEFT_SECTIONS], [...RIGHT_SECTIONS]);
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

  // Сохраняем порядок при изменении
  const saveOrder = (left: LeftSectionKey[], right: RightSectionKey[]) => {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify({ left, right }));
  };

  // Обновляем localStorage при изменении порядка
  const setLeftOrderWithSave = (order: LeftSectionKey[]) => {
    setLeftOrder(order);
    saveOrder(order, rightOrder);
  };
  const setRightOrderWithSave = (order: RightSectionKey[]) => {
    setRightOrder(order);
    saveOrder(leftOrder, order);
  };

  const setOrdersFromImport = (
    left: LeftSectionKey[],
    right: RightSectionKey[],
  ) => {
    setLeftOrder(left);
    setRightOrder(right);
    saveOrder(left, right);
  };
  return {
    handleClearSection,
    resetCvData,
    handleDragEnd,
    setLeftOrderWithSave,
    setRightOrderWithSave,
    resetOrder,
    setOrdersFromImport,
  };
};

export type ProjectHandlers = ReturnType<typeof useProjectHandlers>;
