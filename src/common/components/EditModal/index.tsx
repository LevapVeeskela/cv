import React, { useState, ChangeEvent, useEffect } from 'react';
import './styles.scss';

interface Address {
  city: string;
  state: string;
  zip: string;
}

interface Contacts {
  address: Address;
  phone: string;
  email: string;
  linkedin: string;
}

interface Skill {
  skill: string;
  level: number;
}

interface Language {
  language: string;
  level: string;
}

interface Education {
  start: string;
  end: string;
  degree: string;
  school: string;
  city: string;
  description: string;
  details: string[];
}

interface WorkHistory {
  title: string;
  company: string;
  city: string;
  country: string;
  start: string;
  end: string;
  details: string[];
}

interface CvData {
  contacts: Contacts;
  skills: Skill[];
  languages: Language[];
  mainInfo: {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    photoAlt: string;
  };
  biography: string;
  education: Education[];
  workHistory: WorkHistory[];
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

  // Skills
  const handleSkillChange = (
    index: number,
    field: keyof { skill: string; level: number },
    value: string,
  ) => {
    const updated = [...formData.skills];
    updated[index] = {
      ...updated[index],
      [field]: field === 'level' ? parseInt(value, 10) : value,
    };
    setFormData({ ...formData, skills: updated });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { skill: '', level: 0 }],
    });
  };

  // Languages
  const handleLanguageChange = (
    index: number,
    field: keyof { language: string; level: string },
    value: string,
  ) => {
    const updated = [...formData.languages];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, languages: updated });
  };

  const handleAddLanguage = () => {
    setFormData({
      ...formData,
      languages: [...formData.languages, { language: '', level: '0' }],
    });
  };

  // Education
  const handleEducationChange = (
    index: number,
    field: keyof CvData['education'][0],
    value: string,
  ) => {
    const updated = [...formData.education];
    updated[index] = {
      ...updated[index],
      [field]:
        field === 'details' ? value.split(',').map((s) => s.trim()) : value,
    };
    setFormData({ ...formData, education: updated });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          start: '',
          end: '',
          degree: '',
          school: '',
          city: '',
          description: '',
          details: [],
        },
      ],
    });
  };

  // WorkHistory
  const handleWorkHistoryChange = (
    index: number,
    field: keyof CvData['workHistory'][0],
    value: string,
  ) => {
    const updated = [...formData.workHistory];
    updated[index] = {
      ...updated[index],
      [field]:
        field === 'details' ? value.split(',').map((s) => s.trim()) : value,
    };
    setFormData({ ...formData, workHistory: updated });
  };

  const handleAddWorkHistory = () => {
    setFormData({
      ...formData,
      workHistory: [
        ...formData.workHistory,
        {
          title: '',
          company: '',
          city: '',
          country: '',
          start: '',
          end: '',
          details: [],
        },
      ],
    });
  };

  // Contacts
  const handleContactsChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      contacts: { ...formData.contacts, [field]: value },
    });
  };
  const handleAddressChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      contacts: {
        ...formData.contacts,
        address: { ...formData.contacts.address, [field]: value },
      },
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (
        e.key === 'Enter' &&
        (e.target as HTMLElement).tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        onApply(formData);
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [formData, onApply, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='editModal-overlay' onClick={handleOverlayClick}>
      <div className='editModal'>
        <h2>Edit CV Data</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onApply(formData);
            onClose();
          }}
        >
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
            <legend>Contacts</legend>
            <label>
              Phone:
              <input
                type='text'
                value={formData.contacts.phone}
                onChange={(e) => handleContactsChange('phone', e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type='text'
                value={formData.contacts.email}
                onChange={(e) => handleContactsChange('email', e.target.value)}
              />
            </label>
            <label>
              LinkedIn:
              <input
                type='text'
                value={formData.contacts.linkedin}
                onChange={(e) =>
                  handleContactsChange('linkedin', e.target.value)
                }
              />
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              <label style={{ flex: 1 }}>
                City:
                <input
                  type='text'
                  value={formData.contacts.address.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                />
              </label>
              <label style={{ flex: 1 }}>
                State:
                <input
                  type='text'
                  value={formData.contacts.address.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                />
              </label>
              <label style={{ flex: 1 }}>
                ZIP:
                <input
                  type='text'
                  value={formData.contacts.address.zip}
                  onChange={(e) => handleAddressChange('zip', e.target.value)}
                />
              </label>
            </div>
          </fieldset>

          {/* Skills Section */}
          <fieldset>
            <legend>Skills</legend>
            {formData.skills.map((skillItem, idx) => (
              <div key={idx}>
                <label>
                  Skill {idx + 1}:
                  <input
                    type='text'
                    value={skillItem.skill}
                    onChange={(e) =>
                      handleSkillChange(idx, 'skill', e.target.value)
                    }
                  />
                </label>
                <label>
                  Level:
                  <input
                    type='number'
                    value={skillItem.level}
                    onChange={(e) =>
                      handleSkillChange(idx, 'level', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddSkill}>
              +
            </button>
          </fieldset>

          {/* Languages Section */}
          <fieldset>
            <legend>Languages</legend>
            {formData.languages.map((langItem, idx) => (
              <div key={idx}>
                <label>
                  Language {idx + 1}:
                  <input
                    type='text'
                    value={langItem.language}
                    onChange={(e) =>
                      handleLanguageChange(idx, 'language', e.target.value)
                    }
                  />
                </label>
                <label>
                  Level:
                  <input
                    type='text'
                    value={langItem.level}
                    onChange={(e) =>
                      handleLanguageChange(idx, 'level', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddLanguage}>
              +
            </button>
          </fieldset>

          {/* Education Section */}
          <fieldset>
            <legend>Education</legend>
            {formData.education.map((edu, idx) => (
              <div key={idx}>
                <label>
                  Start:
                  <input
                    type='text'
                    value={edu.start}
                    onChange={(e) =>
                      handleEducationChange(idx, 'start', e.target.value)
                    }
                  />
                </label>
                <label>
                  End:
                  <input
                    type='text'
                    value={edu.end}
                    onChange={(e) =>
                      handleEducationChange(idx, 'end', e.target.value)
                    }
                  />
                </label>
                <label>
                  Degree:
                  <input
                    type='text'
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(idx, 'degree', e.target.value)
                    }
                  />
                </label>
                <label>
                  School:
                  <input
                    type='text'
                    value={edu.school}
                    onChange={(e) =>
                      handleEducationChange(idx, 'school', e.target.value)
                    }
                  />
                </label>
                <label>
                  City:
                  <input
                    type='text'
                    value={edu.city}
                    onChange={(e) =>
                      handleEducationChange(idx, 'city', e.target.value)
                    }
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    value={edu.description}
                    onChange={(e) =>
                      handleEducationChange(idx, 'description', e.target.value)
                    }
                  />
                </label>
                <label>
                  Details (comma separated):
                  <input
                    type='text'
                    value={edu.details ? edu.details.join(', ') : ''}
                    onChange={(e) =>
                      handleEducationChange(idx, 'details', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddEducation}>
              +
            </button>
          </fieldset>

          {/* Work History Section */}
          <fieldset>
            <legend>Work History</legend>
            {formData.workHistory.map((job, idx) => (
              <div key={idx}>
                <label>
                  Title:
                  <input
                    type='text'
                    value={job.title}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'title', e.target.value)
                    }
                  />
                </label>
                <label>
                  Company:
                  <input
                    type='text'
                    value={job.company}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'company', e.target.value)
                    }
                  />
                </label>
                <label>
                  City:
                  <input
                    type='text'
                    value={job.city}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'city', e.target.value)
                    }
                  />
                </label>
                <label>
                  Country:
                  <input
                    type='text'
                    value={job.country}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'country', e.target.value)
                    }
                  />
                </label>
                <label>
                  Start:
                  <input
                    type='text'
                    value={job.start}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'start', e.target.value)
                    }
                  />
                </label>
                <label>
                  End:
                  <input
                    type='text'
                    value={job.end}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'end', e.target.value)
                    }
                  />
                </label>
                <label>
                  Details (comma separated):
                  <input
                    type='text'
                    value={job.details ? job.details.join(', ') : ''}
                    onChange={(e) =>
                      handleWorkHistoryChange(idx, 'details', e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <button type='button' onClick={handleAddWorkHistory}>
              +
            </button>
          </fieldset>

          {/* Interests Section */}
          <fieldset>
            <legend>Interests</legend>
            {formData.interests.map((interest, idx) => (
              <div key={idx} className='form-row'>
                <label>
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
              </div>
            ))}
            <button
              type='button'
              onClick={() =>
                setFormData({
                  ...formData,
                  interests: [...formData.interests, ''],
                })
              }
            >
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
