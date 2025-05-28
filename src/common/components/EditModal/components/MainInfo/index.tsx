import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

interface MainInfoProps {
  mainInfo: {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    photoAlt: string;
  };
  onChange: (field: keyof MainInfoProps['mainInfo'], value: string) => void;
}

const MainInfo = ({ mainInfo, onChange }: MainInfoProps) => {
  return (
    <fieldset className={styles.mainInfoSection}>
      <legend>Main Info</legend>
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
      <label>
        Photo:
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
