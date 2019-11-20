import { useEffect, Fragment, useState } from 'react';
import React from 'react';
import { Loader, Footer } from 'components';
import { Header } from 'components/molecules/header';
import data from 'data/data.json';
import RenderSection from 'helpers/render-section';
import IPage from 'interface/ipage';

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
