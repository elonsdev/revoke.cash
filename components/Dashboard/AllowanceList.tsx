import Allowance from 'components/Dashboard/Allowance';
import type { ITokenAllowance, TokenData } from 'lib/interfaces';
import { isERC20Allowance } from 'lib/interfaces';

interface Props {
  token: TokenData;
  allowances: ITokenAllowance[];
  onRevoke: (allowance: ITokenAllowance) => void;
}

const AllowanceList = ({ token, allowances, onRevoke }: Props) => {
  return (
    <div className="AllowanceList mb-4">
      {allowances.length === 0 ? (
        <div className="Allowance">
          This token is <span className="text-green-500 ml-1"> SAFU!</span>
        </div>
      ) : (
        allowances.map((allowance) => (
          <Allowance
            key={`${allowance.spender}-${isERC20Allowance(allowance) ? allowance.amount : allowance.tokenId}`}
            token={token}
            allowance={allowance}
            onRevoke={onRevoke}
          />
        ))
      )}
    </div>
  );
};

export default AllowanceList;
