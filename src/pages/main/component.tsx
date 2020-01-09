import { Footer, Loader } from 'components';
import { Header } from 'components/molecules/header';
import data from 'data/data.json';
import RenderSection from 'helpers/render-section';
import IPage from 'interface/ipage';
import { Fragment, useEffect, useState } from 'react';
import React from 'react';
import Favicon from 'react-favicon';

export const MainPageComponent = (props: any) => {
  const [page, setPage] = useState({} as IPage);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

  return (
    <Fragment>
      <Favicon url="https://drive.google.com/uc?export=view&id=1HFtSQHgkxGnq6iD3d5Q2ggoc8KwJOQco" />
      <Header title={page.title} dataSource={page.navigationMenus} />
      {loader ? (
        <Loader />
      ) : (
        <Fragment>{page && page.sections && page.sections.map(RenderSection)}</Fragment>
      )}
      <Footer />
    </Fragment>
  );
};

export default MainPageComponent;
