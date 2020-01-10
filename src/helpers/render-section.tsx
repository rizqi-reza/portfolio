import {
  About,
  Clients,
  Contact,
  Education,
  Experience,
  MainBanner,
  Profiles,
  Projects,
  Skills,
} from 'components';
import ISection from 'interface/isection';
import React from 'react';
import { SectionType } from './constant';

export const RenderSection = (section: ISection) => {
  switch (section.type) {
    case SectionType.MainBanner: {
      return <MainBanner key={section.key} dataSource={section} />;
    }
    case SectionType.About: {
      return <About key={section.key} dataSource={section} />;
    }
    case SectionType.Education: {
      return <Education key={section.key} dataSource={section} />;
    }
    case SectionType.Skills: {
      return <Skills key={section.key} dataSource={section} />;
    }
    case SectionType.Experience: {
      return <Experience key={section.key} dataSource={section} />;
    }
    case SectionType.Projects: {
      return <Projects key={section.key} dataSource={section} />;
    }
    case SectionType.Contact: {
      return <Contact key={section.key} dataSource={section} />;
    }
    case SectionType.Clients: {
      return <Clients key={section.key} dataSource={section} />;
    }
    case SectionType.Profiles: {
      return <Profiles key={section.key} dataSource={section} />;
    }
    default: {
      return;
    }
  }
};

export default RenderSection;
