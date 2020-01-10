import React from 'react';

export enum SectionType {
  MainBanner = 'MainBanner',
  About = 'About',
  Clients = 'Clients',
  Contact = 'Contact',
  Education = 'Education',
  Experience = 'Experience',
  Projects = 'Projects',
  Profiles = 'Profiles',
  Skills = 'Skills',
}

export const emptyText: any = (
  <span>
    <strong>Data not found</strong>
  </span>
);
export const loaderText: any = (
  <span>
    <strong>Loading</strong>
  </span>
);
