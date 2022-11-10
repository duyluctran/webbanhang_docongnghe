import vi from 'locales/lang/vi.json';
import { useTranslation } from 'react-i18next';

export default function useI18n() {
  const { t } = useTranslation();
  function _t(key: Array<keyof typeof vi>[0]) {
    return t(key);
  }
  return { _t };
}
