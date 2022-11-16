import { useAppContext } from 'lib/hooks/useAppContext';
import { useEthereum } from 'lib/hooks/useEthereum';
import { getChainName } from 'lib/utils/chains';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Tooltip } from 'react-bootstrap';
import RevokeButton from './RevokeButton';
import SwitchChainButton from './SwitchChainButton';
import UpdateControls from './UpdateControls';
import WithHoverTooltip from './WithHoverTooltip';

interface Props {
  revoke: () => Promise<void>;
  update?: (newAllowance: string) => Promise<void>;
  id: string;
}

const AllowanceControls = ({ revoke, update, id }: Props) => {
  const { t } = useTranslation();
  const { account, selectedChainId, connectedChainId, connectionType } = useEthereum();
  const { inputAddress } = useAppContext();

  const isConnected = account !== undefined;
  const isConnectedAddress = isConnected && inputAddress === account;
  const needsToSwitchChain = isConnected && selectedChainId !== connectedChainId;
  const canSwitchChain = connectionType === 'injected';
  const disabled = !isConnectedAddress || (needsToSwitchChain && !canSwitchChain);

  if (needsToSwitchChain && canSwitchChain) {
    return <SwitchChainButton />;
  }

  const revokeButton = <RevokeButton revoke={revoke} disabled={disabled} />;
  const updateControls = <UpdateControls update={update} disabled={disabled} />;
  const controls = (
    <div className=" bg-green-500 w-[150px] mx-auto mt-2 rounded-xl py-2 text-center text-black font-extrabold">
      {revokeButton}
      {update && updateControls}
    </div>
  );

  if (!isConnected) {
    const tooltip = (
      <Tooltip className="text-white bg-black p-2 rounded-lg mb-2" id={`revoke-${id}`}>
        {t('dashboard:controls.tooltips.connect_wallet')}
      </Tooltip>
    );
    return <WithHoverTooltip tooltip={tooltip}>{controls}</WithHoverTooltip>;
  }

  if (!isConnectedAddress) {
    const tooltip = (
      <Tooltip className="text-white bg-black p-2 rounded-lg mb-2" id={`revoke-${id}`}>
        {t('dashboard:controls.tooltips.connected_account')}
      </Tooltip>
    );
    return <WithHoverTooltip tooltip={tooltip}>{controls}</WithHoverTooltip>;
  }

  if (needsToSwitchChain && !canSwitchChain) {
    const chainName = getChainName(selectedChainId);
    const tooltip = (
      <Tooltip className="text-white bg-black p-2 rounded-lg mb-2" id={`switch-${id}`}>
        <Trans i18nKey="dashboard:controls.tooltips.switch_chain" values={{ chainName }} components={[<strong />]} />
      </Tooltip>
    );

    return <WithHoverTooltip tooltip={tooltip}>{controls}</WithHoverTooltip>;
  }

  return controls;
};

export default AllowanceControls;
