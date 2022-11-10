import { Button, Space } from 'antd';
import useI18n from 'hooks/useI18n';
import i18n, { Language } from 'locales';

export default function HomeFeature() {
  const { _t } = useI18n();
  return (
    <>
      <Space direction='vertical'>
        {_t('Hello')}
        <Button
          onClick={() => {
            i18n.changeLanguage(Language.ENG);
          }}
        >
          CLick
        </Button>
      </Space>
    </>
  );
}
