import React from 'react';

import PageTitle from 'ui/shared/PageTitle/PageTitle';
import TokensList from 'ui/tokens/Tokens';

const Tokens = () => {
  return (
    <>
      <PageTitle withTextAds>
        Tokens
      </PageTitle>
      <TokensList/>
    </>
  );
};

export default Tokens;
