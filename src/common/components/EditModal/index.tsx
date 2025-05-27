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
