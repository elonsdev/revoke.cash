import { useAppContext } from 'lib/hooks/useAppContext';
import useTranslation from 'next-translate/useTranslation';
import AddressInput from '../AddressInput';
import TokenStandardSelection from '../TokenStandardSelection';

const DashboardHeader = () => {
  const { t } = useTranslation();
  const { tokenMapping, settings, setSettings } = useAppContext();

  return (
    <div className="flex flex-col justify-center h-[350px] mt-12">
      <h2 className="text-6xl mx-auto mb-2 font-CircularMedium">is my wallet safu? 😅</h2>
      <AddressInput />
      <TokenStandardSelection
        tokenStandard={settings.tokenStandard}
        setTokenStandard={(value) => setSettings({ ...settings, tokenStandard: value })}
      />
    </div>
  );
};

export default DashboardHeader;
