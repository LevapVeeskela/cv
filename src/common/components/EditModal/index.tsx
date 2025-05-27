import React, { useState, ChangeEvent } from 'react';
import './styles.scss';

interface CvData {
  contacts: any;
  skills: any[];
  languages: any[];
  mainInfo: {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    photoAlt: string;
  };
  biography: string;
  education: any[];
  workHistory: any[];
  interests: string[];
}

interface EditModalProps {
  initialData: CvData;
  onApply: (data: CvData) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  initialData,
  onApply,
  onClose,
}) => {
  const [formData, setFormData] = useState<CvData>(initialData);

  const handleMainInfoChange = (
    field: keyof CvData['mainInfo'],
    value: string,
  ) => {
    setFormData({
      ...formData,
      mainInfo: { ...formData.mainInfo, [field]: value },
    });
  };

  const handleBiographyChange = (value: string) => {
    setFormData({ ...formData, biography: value });
  };

  const handleAddInterest = () => {
    setFormData({ ...formData, interests: [...formData.interests, ''] });
  };

  return (
    <div className='editModal-overlay'>
      <div className='editModal'>
        <h2>Edit CV Data</h2>
        <form>
          <fieldset>
            <legend>Main Info</legend>
            <label>
              First Name:
              <input
                type='text'
                value={formData.mainInfo.firstName}
                onChange={(e) =>
                  handleMainInfoChange('firstName', e.target.value)
                }
              />
            </label>
            <label>
              Last Name:
              <input
                type='text'
                value={formData.mainInfo.lastName}
                onChange={(e) =>
                  handleMainInfoChange('lastName', e.target.value)
                }
              />
            </label>
            <label>
              Title:
              <input
                type='text'
                value={formData.mainInfo.title}
                onChange={(e) => handleMainInfoChange('title', e.target.value)}
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
                      handleMainInfoChange('photo', reader.result as string);
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
                value={formData.mainInfo.photoAlt}
                onChange={(e) =>
                  handleMainInfoChange('photoAlt', e.target.value)
                }
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Summary</legend>
            <label>
              Biography:
              <textarea
                value={formData.biography}
                onChange={(e) => handleBiographyChange(e.target.value)}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Interests</legend>
            {formData.interests.map((interest, idx) => (
              <label key={idx}>
                Interest {idx + 1}:
                <input
                  type='text'
                  value={interest}
                  onChange={(e) => {
                    const updated = [...formData.interests];
                    updated[idx] = e.target.value;
                    setFormData({ ...formData, interests: updated });
                  }}
                />
              </label>
            ))}
            <button type='button' onClick={handleAddInterest}>
              +
            </button>
          </fieldset>

          <div className='modal-actions'>
            <button
              type='button'
              onClick={() => {
                onApply(formData);
                onClose();
              }}
            >
              Apply
            </button>
            <button type='button' onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
