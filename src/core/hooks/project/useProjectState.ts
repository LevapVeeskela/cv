import { useState } from 'react';
import { CONTACTS } from '@constants/contacts';
import { SKILLS, LANGUAGES } from '@constants/skillsAndLanguages';
import { MAIN_INFO, BIOGRAPHY } from '@constants/mainInfo';
import { EDUCATION } from '@constants/education';
import { WORK_HISTORY } from '@constants/workHistory';
import { INTERESTS } from '@constants/interests';

const DEFAULT_CV_DATA = {
  contacts: CONTACTS,
  skills: SKILLS,
  languages: LANGUAGES,
  mainInfo: MAIN_INFO,
  biography: BIOGRAPHY,
  education: EDUCATION,
  workHistory: WORK_HISTORY,
  interests: INTERESTS,
};

export type CvData = typeof DEFAULT_CV_DATA;

export const useProjectState = () => {
  const [cvData, setCvData] = useState(DEFAULT_CV_DATA);
  return { cvData, setCvData };
};
