import { Footer, Loader } from 'components';
import { Header } from 'components/molecules/header';
import data from 'data/data.json';
import { renderAllSections } from 'helpers/render-section';
import IPage from 'interface/ipage';
import { Fragment, useEffect, useState } from 'react';
import React from 'react';
import Favicon from 'react-favicon';
import DocumentMeta from 'react-document-meta';

export const MainPageComponent = (props: any) => {
  const [page, setPage] = useState({} as IPage);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoader(true);
    try {
      if (data) {
        const pageData: IPage = data;
        setPage(pageData);
      }
    } catch (error) {
      setPage({} as IPage);
    }
    setLoader(false);
  };

  const pageTitle = 'Rizqi Reza';
  const meta = {
    pageTitle,
    description: `I'm a experienced Software Developer and System Analyst. Skilled in Frontend and Backend Development, System Analytical, and Databases.`,
  };

  return (
    <Fragment>
      <Favicon url="https://drive.google.com/uc?export=view&id=1HFtSQHgkxGnq6iD3d5Q2ggoc8KwJOQco" />
      <DocumentMeta {...meta} />
      <Header title={page.title} dataSource={page.navigationMenus} />
      {loader ? <Loader /> : <Fragment>{page && renderAllSections(page?.sections)}</Fragment>}
      <Footer />
    </Fragment>
  );
};

export default MainPageComponent;
