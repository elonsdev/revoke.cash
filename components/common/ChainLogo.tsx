import { getChainLogo, getChainName } from 'lib/utils/chains';
import Logo from './Logo';

interface Props {
  chainId: number;
  size?: number;
}

const ChainLogo = ({ chainId, size }: Props) => (
  <div className="flex mt-2 mx-2">
    <Logo src={getChainLogo(chainId)} alt={getChainName(chainId)} size={size} />
    <p className="text-zinc-300 ml-1">{getChainName(chainId)}</p>
  </div>
);

export default ChainLogo;
