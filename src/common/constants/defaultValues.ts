import { MAIN_INFO } from './mainInfo';
import { BIOGRAPHY } from './biography';
import { ACHIEVEMENTS } from './achievements';
import { CONTACTS } from './contacts';
import { SKILLS, LANGUAGES } from './skillsAndLanguages';
import { EDUCATION } from './education';
import { WORK_HISTORY } from './workHistory';
import { INTERESTS } from './interests';
import { EMPTY_STRING } from './common';

export const DEFAULT_CV_DATA = {
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
