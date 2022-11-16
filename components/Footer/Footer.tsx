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
      className=" text-zinc-100 h-[130px]"
    >
      <p className="mx-auto">
        <Link href="/about">
          <a className="ml-3 text-orange-500">ABOUT</a>
        </Link>
        <Link href="/faq">
          <a className="ml-3 text-orange-500">F.A.Q</a>
        </Link>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
        <p>
          fork of{''}
          <Link href="https://revoke.cash">
            <a className="ml-1 text-orange-500">Revoke.cash</a>
          </Link>{' '}
          by{' '}
          <Link href="https://twitter.com/elonsdev">
            <a className=" text-orange-500">@elonsdev</a>
          </Link>
        </p>
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
