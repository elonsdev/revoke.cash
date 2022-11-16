import Link from 'next/link';

const Footer = () => (
  <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: '10px',
        padding: '20px',
        width: '100%',
        margin: 'auto',
      }}
      className=" text-zinc-100 h-[105px]"
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
        <p>fork of Revoke.Cash by @elonsdev</p>
      </div>
      <p className="mx-auto">
        Like this tool?{' '}
        <Link href="https://getmepizza/elonsdev">
          <a className="ml-3 text-orange-500">Get me a pizza. 🍕</a>
        </Link>
      </p>
    </div>
  </>
);

export default Footer;
