import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  to: string;
  text: string;
  matchToHighlight?: string;
}

const NavLink = ({ to, text, matchToHighlight }: Props) => {
  const router = useRouter();

  const textColor = matchToHighlight ? (router.asPath.includes(matchToHighlight) ? 'black' : 'grey') : 'grey';

  return (
    <Link href={to}>
      <a className="mx-4">{text}</a>
    </Link>
  );
};

export default NavLink;
