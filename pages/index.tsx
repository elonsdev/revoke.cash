import { displayGitcoinToast } from 'components/common/gitcoin-toast';
import DashboardWrapper from 'components/Dashboard/DashboardWrapper';
import { defaultSEO } from 'lib/next-seo.config';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

const App: NextPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    displayGitcoinToast();
  }, []);

  return (
    <>
      <NextSeo
        {...defaultSEO}
        title={'is my wallet owned?'}
        description={'Is your crypto wallet safu or have you given access to people and contracts you should not have?'}
      />
      <DashboardWrapper />
    </>
  );
};

export default App;
