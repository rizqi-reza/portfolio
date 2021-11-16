import { Footer, Loader } from 'components';
import { Header } from 'components/molecules/header';
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

  const fetchData = async () => {
    setLoader(true);
    try {
      const res = await fetch('https://api.npoint.io/20fb878cd3fc2b685b9b');
      const pageData: IPage = await res.json();
      setPage(pageData);
    } catch (error) {
      setPage({} as IPage);
    }
    setLoader(false);
  };

  const pageTitle = 'Rizqi Reza';
  const meta = {
    pageTitle,
    description: `I'm a experienced Software Developer and System Analyst. Focused on frontend engineering, web engineering, and design system.`,
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
