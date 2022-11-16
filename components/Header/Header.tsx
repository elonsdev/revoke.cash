import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import NavLink from './NavLink';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="max-w-[1000px] mx-auto py-4"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          gap: '10px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <div className="flex justify-between">
          <Link href="/">
            <a>
              <h1 className="text-4xl font-CircularMedium">😅 </h1>
            </a>
          </Link>
          <div>
            <NavLink to="/about" text={t('common:nav.about')} matchToHighlight="about" />
            <NavLink to="/faq" text={t('common:nav.faq')} matchToHighlight="faq" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
