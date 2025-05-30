import { ChangeEvent } from 'react';
import { EditModalContextType } from '@core/context/EditModalContext';
import { CvData } from '@constants';
import DeleteButton from '../DeleteButton';
import ClearButton from '../ClearButton';
import styles from './styles.module.scss';

interface MainInfoProps {
  mainInfo: CvData['mainInfo'];
  onChange: EditModalContextType['handleMainInfoChange'];
  onClearSection: (section: keyof CvData) => void;
}

const MainInfo = ({ mainInfo, onChange, onClearSection }: MainInfoProps) => {
  return (
    <fieldset
      className={styles.mainInfoSection}
      style={{ position: 'relative' }}
    >
      <legend>Main Info</legend>
      <ClearButton
        onClick={() => onClearSection('mainInfo')}
        title='Clear all main info fields'
      />
      <label>
        First Name:
        <input
          type='text'
          value={mainInfo.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          value={mainInfo.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          type='text'
          value={mainInfo.title}
          onChange={(e) => onChange('title', e.target.value)}
        />
      </label>
      <label className={styles.photoInputRow}>
        Photo:
        <div className={styles.photoInputWrapper}>
          <input
            type='file'
            accept='image/*'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files && e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  onChange('photo', reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <DeleteButton
            title={'Delete photo?'}
            onClick={() => onChange('photo', null)}
          />
        </div>
      </label>
      <label>
        Photo Alt:
        <input
          type='text'
          value={mainInfo.photoAlt}
          onChange={(e) => onChange('photoAlt', e.target.value)}
        />
      </label>
    </fieldset>
  );
};

export default MainInfo;
