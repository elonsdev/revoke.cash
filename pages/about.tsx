import Heading from 'components/common/Heading';
import { defaultSEO } from 'lib/next-seo.config';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const About: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo {...defaultSEO} title={t('common:meta.title')} description={t('common:meta.description')} />
      <div
        style={{
          textAlign: 'left',
          fontSize: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '800px',
          margin: 'auto',
        }}
        className="pt-12"
      >
        <Link href="./">
          <a className="bg-green-500 mb-8 text-center rounded w-[200px] mx-auto py-2 text-black">BACK TO HOME</a>
        </Link>
        <Heading text={t('about:title')} type="h2" center />

        <div className="mt-8">
          <Heading text={t('about:sections.token_allowances.heading')} type="h4" />
          <Trans
            i18nKey="about:sections.token_allowances.paragraph_1"
            components={[<span style={{ fontStyle: 'italic' }} />]}
          />
        </div>

        <div className="mt-8">
          <Heading text={t('about:sections.risks.heading')} type="h4" />
          <Trans i18nKey="about:sections.risks.paragraph_1" />
        </div>

        <div className="mt-8">
          <Heading text={t('about:sections.revoke_cash.heading')} type="h4" />
          <Trans i18nKey="about:sections.revoke_cash.paragraph_1" />
        </div>

        <div className="mt-8">
          <Heading text={t('about:sections.read_more.heading')} type="h4" />
          <Trans
            i18nKey="about:sections.read_more.paragraph_1"
            components={[
              <a href="https://kalis.me/unlimited-erc20-allowances/" target="_blank">
                <span style={{ fontStyle: 'italic' }} />
              </a>,
              <Link href="/faq">
                <a />
              </Link>,
            ]}
          />
        </div>

        <div className="mt-8">
          <Heading text={t('about:sections.credits.heading')} type="h4" />
          <Trans
            i18nKey="about:sections.credits.paragraph_1"
            components={[
              <a href="https://twitter.com/RoscoKalis" target="_blank" />,
              <a href="https://etherscan.io/" target="_blank" />,
              <a href="https://covalenthq.com/" target="_blank" />,
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default About;
