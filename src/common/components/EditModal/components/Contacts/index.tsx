import ClearButton from '../ClearButton';
import { CvData } from '@constants';
import styles from './styles.module.scss';

interface Address {
  city: string;
  state: string;
  zip: string;
}

interface ContactsProps {
  contacts: {
    address: Address;
    phone: string;
    email: string;
    linkedin: string;
  };
  onChange: (field: string, value: string) => void;
  onAddressChange: (field: string, value: string) => void;
  onClearSection: (section: keyof CvData) => void;
}

const Contacts = ({
  contacts,
  onChange,
  onAddressChange,
  onClearSection,
}: ContactsProps) => {
  return (
    <fieldset
      className={styles.contactsSection}
      style={{ position: 'relative' }}
    >
      <legend>Contacts</legend>
      <ClearButton
        onClick={() => onClearSection('contacts')}
        title='Clear all contacts'
      />
      <label>
        Phone:
        <input
          type='text'
          value={contacts.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='text'
          value={contacts.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
      </label>
      <label>
        LinkedIn:
        <input
          type='text'
          value={contacts.linkedin}
          onChange={(e) => onChange('linkedin', e.target.value)}
        />
      </label>
      <div className={styles.contactsAddressRow}>
        <label>
          City:
          <input
            type='text'
            value={contacts.address.city}
            onChange={(e) => onAddressChange('city', e.target.value)}
          />
        </label>
        <label>
          State:
          <input
            type='text'
            value={contacts.address.state}
            onChange={(e) => onAddressChange('state', e.target.value)}
          />
        </label>
        <label>
          ZIP:
          <input
            type='text'
            value={contacts.address.zip}
            onChange={(e) => onAddressChange('zip', e.target.value)}
          />
        </label>
      </div>
    </fieldset>
  );
};

export default Contacts;
