import {
  Contacts,
  Skills,
  Languages,
  MainInfo,
  WorkHistory,
  Education,
  Interests,
  KeyAchievements,
  Summary,
} from '../../components';

export const LEFT_SECTIONS = ['Contacts', 'Skills', 'Languages'] as const;
export const RIGHT_SECTIONS = [
  'MainInfo',
  'Summary',
  'KeyAchievements',
  'WorkHistory',
  'Education',
  'Interests',
] as const;
export type LeftSectionKey = (typeof LEFT_SECTIONS)[number];
export type RightSectionKey = (typeof RIGHT_SECTIONS)[number];
export type SectionKey = LeftSectionKey | RightSectionKey;

export const SECTION_COMPONENTS: Record<
  SectionKey,
  React.ComponentType<any>
> = {
  Contacts,
  Skills,
  Languages,
  MainInfo,
  Summary,
  WorkHistory,
  Education,
  Interests,
  KeyAchievements,
};
