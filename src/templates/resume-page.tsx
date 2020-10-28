import React from 'react';

import Experience, { ExperienceTimelineData } from '../components/Experience/Experience';
import Education, { EducationTimelineData } from '../components/Education/Education';
import { TitleSectionData } from '../components/Base/TitleSection/TitleSection';
import { HTMLContentProps } from '../components/Base/HTMLContent/HTMLContent';

export interface ResumePageTemplateData {
  experienceSection: TitleSectionData;
  experiences: ExperienceTimelineData[];
  educationSection: TitleSectionData;
  educations: EducationTimelineData[];
}

export interface ResumePageTemplateProps extends ResumePageTemplateData {
  contentComponent?: React.ElementType<HTMLContentProps>;
}

const ResumePageTemplate: React.FC<ResumePageTemplateProps> = ({
  contentComponent,
  experienceSection,
  experiences,
  educationSection,
  educations,
}) => {
  return (
    <>
      <Experience
        title={experienceSection.title}
        subtitle={experienceSection.subtitle}
        experiences={experiences.reverse()}
        contentComponent={contentComponent}
      />
      <hr />
      <Education
        title={educationSection.title}
        subtitle={educationSection.subtitle}
        educations={educations.reverse()}
        contentComponent={contentComponent}
      />
    </>
  );
};

export default ResumePageTemplate;
