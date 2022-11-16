import ChainLogo from 'components/common/ChainLogo';
import { CHAIN_SELECT_MAINNETS, CHAIN_SELECT_TESTNETS } from 'lib/constants';
import { useEthereum } from 'lib/hooks/useEthereum';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import ChainSelectDropdownButton from './ChainSelectDropdownButton';

const ChainSelectDropdown: React.FC = () => {
  const { t } = useTranslation();
  const { selectedChainId } = useEthereum();

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-primary"
        style={{ display: 'flex', alignItems: '', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      >
        <ChainLogo chainId={selectedChainId} />
        <div className="py-2 p-2 ml-2  border-black border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-zinc-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="bg-zinc-800 p-4 ring-2 ring-black h-[250px] rounded-lg   overflow-y-auto">
        <Dropdown.Header>{t('dashboard:mainnets')}</Dropdown.Header>
        {CHAIN_SELECT_MAINNETS.map((chainId) => (
          <ChainSelectDropdownButton chainId={chainId} />
        ))}
        <Dropdown.Header>{t('dashboard:testnets')}</Dropdown.Header>
        {CHAIN_SELECT_TESTNETS.map((chainId) => (
          <ChainSelectDropdownButton chainId={chainId} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChainSelectDropdown;
