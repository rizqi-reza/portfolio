export default interface ISection {
  key: string;
  type: string;
  title: string;
  heading?: string;
  description?: string;
  mainLink?: string;
  image?: IImage[];
  subSections?: ISubSection[];
  socialLinks?: ISocialLink[];
}

export interface IImage {
  action?: string;
  url: string;
  webpUrl?: string;
  title: string;
  subTitle?: string;
  imageAlt: string;
}

export interface ISubSection {
  title: string;
  subTitle?: string;
  description?: string;
  heading?: string;
  subHeading?: string;
  value?: number;
  url?: string;
}

export interface ISocialLink {
  url: string;
  icon: string;
}
