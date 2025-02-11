import AllowanceList from 'components/Dashboard/AllowanceList';
import TokenBalance from 'components/Dashboard/TokenBalance';
import { useAllowances } from 'lib/hooks/useAllowances';
import { useAppContext } from 'lib/hooks/useAppContext';
import type { TokenData } from 'lib/interfaces';
import { hasZeroBalance } from 'lib/utils/tokens';
import { ClipLoader } from 'react-spinners';

interface Props {
  token: TokenData;
}

const Token = ({ token }: Props) => {
  const { settings } = useAppContext();
  const { allowances, loading, onRevoke } = useAllowances(token);

  if (loading) {
    return (
      <div className="Token">
        <ClipLoader size={20} color={'#000'} loading={loading} />
      </div>
    );
  }

  const hasNoAllowances = allowances.length === 0;

  // Do not render tokens without balance or allowances
  if (hasZeroBalance(token) && hasNoAllowances) return null;

  // Do not render ERC1155 tokens without allowances
  if (token.balance === 'ERC1155' && hasNoAllowances) return null;

  // Do not render tokens without allowances if that is the setting
  if (!settings.includeTokensWithoutAllowances && hasNoAllowances) return null;

  return (
    <div className="m-4 py-8 px-4 rounded bg-zinc-900 w-[250px] flex flex-col justify-center">
      <TokenBalance token={token} />
      <AllowanceList token={token} allowances={allowances} onRevoke={onRevoke} />
    </div>
  );
};

export default Token;
