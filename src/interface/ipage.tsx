import ISection from './isection';

export default interface IPage {
  ver: number;
  title: string;
  description: string;
  logoUrl: string;
  navigationMenus: INavigation[];
  sections: ISection[];
}

export interface INavigation {
  title: string;
  url: string;
}
