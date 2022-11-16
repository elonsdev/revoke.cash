import { useEthereum } from 'lib/hooks/useEthereum';
import { shortenAddress } from 'lib/utils';
import useTranslation from 'next-translate/useTranslation';
import { useAsyncCallback } from 'react-async-hook';
import { Button, InputGroup } from 'react-bootstrap';
import ChainSelectDropdown from './ChainSelectDropdown';

const ConnectButton = () => {
  const { t } = useTranslation();
  const { account, ensName, unsName, connect, disconnect } = useEthereum();
  const domainName = ensName ?? unsName;

  const { execute, loading } = useAsyncCallback(connect);
  const buttonAction = account ? disconnect : execute;
  const buttonText = account ? t('common:buttons.disconnect') : t('common:buttons.connect');
  const buttonTextLoading = account ? t('common:buttons.disconnecting') : t('common:buttons.connecting');

  return (
    <InputGroup className="text-sm md:text-lg flex justify-center items-center bg-zinc-800 rounded-xl ">
      <ChainSelectDropdown />

      {account && (
        <InputGroup.Text className="mx-2" style={{ borderRadius: 0, borderColor: 'black' }}>
          {domainName ?? shortenAddress(account)}
        </InputGroup.Text>
      )}
      <InputGroup.Append style={{ marginLeft: account ? -1 : 0 }}>
        <Button
          className="bg-green-500 h-[45px] w-[100px] md:w-[130px] mx-auto rounded-r-xl py-2 text-center text-black font-extrabold"
          disabled={loading}
          variant="outline-primary"
          onClick={buttonAction}
        >
          {loading ? buttonTextLoading : buttonText}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default ConnectButton;
