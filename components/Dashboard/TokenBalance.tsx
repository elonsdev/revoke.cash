import { useEthereum } from 'lib/hooks/useEthereum';
import type { Erc20TokenData, TokenData } from 'lib/interfaces';
import { getBalanceText } from 'lib/utils';
import { getChainExplorerUrl } from 'lib/utils/chains';
import TokenLogo from '../common/TokenLogo';

interface Props {
  token: TokenData;
}

const TokenBalance = ({ token }: Props) => {
  const { selectedChainId } = useEthereum();
  const explorerUrl = `${getChainExplorerUrl(selectedChainId)}/address/${token.contract.address}`;

  return (
    <div className="TokenBalance ">
      <a
        className="mx-auto text-center flex flex-col justify-center items-center "
        href={explorerUrl}
        style={{ color: 'white' }}
      >
        <TokenLogo src={token.icon} alt={token.symbol} />
        {getBalanceText(token.symbol, token.balance, (token as Erc20TokenData).decimals)}
      </a>
    </div>
  );
};

export default TokenBalance;
