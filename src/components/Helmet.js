import React from 'react';
import { Helmet } from 'react-helmet-async';

function PageWithHelmet({ title, children }) {
  const fullTitle =
    title === '首頁'
      ? '興樺德興業有限公司（新北烤漆|專業粉體塗裝|皮膜前處理'
      : `${title} | 興樺德興業有限公司（新北烤漆|專業粉體塗裝|皮膜前處理`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      {children}
    </>
  );
}

export default PageWithHelmet;
