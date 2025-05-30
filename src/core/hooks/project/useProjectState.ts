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
  EMPTY_STRING,
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

export const DEFAULT_CV_DATA_EMPTY: CvData = {
  contacts: {
    address: { city: EMPTY_STRING, state: EMPTY_STRING, zip: EMPTY_STRING },
    phone: EMPTY_STRING,
    email: EMPTY_STRING,
    linkedin: EMPTY_STRING,
  },
  skills: [],
  languages: [],
  mainInfo: {
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    title: EMPTY_STRING,
    photo: EMPTY_STRING,
    photoAlt: EMPTY_STRING,
  },
  biography: EMPTY_STRING,
  education: [],
  workHistory: [],
  interests: [],
  achievements: [],
};

export const useProjectState = () => {
  const [cvData, setCvData] = useState(DEFAULT_CV_DATA);
  return { cvData, setCvData };
};

export type ProjectState = ReturnType<typeof useProjectState>;
