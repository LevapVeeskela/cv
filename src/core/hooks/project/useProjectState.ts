import { useState } from 'react';
import {
  MAIN_INFO,
  BIOGRAPHY,
  ACHIEVEMENTS,
  CONTACTS,
  SKILLS,
  LANGUAGES,
  EDUCATION,
  WORK_HISTORY,
  INTERESTS,
} from '@constants';

const DEFAULT_CV_DATA = {
  contacts: CONTACTS,
  skills: SKILLS,
  languages: LANGUAGES,
  mainInfo: MAIN_INFO,
  biography: BIOGRAPHY,
  education: EDUCATION,
  workHistory: WORK_HISTORY,
  interests: INTERESTS,
  achievements: ACHIEVEMENTS,
};

export type CvData = typeof DEFAULT_CV_DATA;

export const useProjectState = () => {
  const [cvData, setCvData] = useState(DEFAULT_CV_DATA);
  return { cvData, setCvData };
};
