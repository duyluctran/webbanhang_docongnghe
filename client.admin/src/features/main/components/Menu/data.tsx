import { BarsOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'components';
import { t } from 'locales';

export const data = [
  { label: <Link name='Home' path='Home' />, key: 'home', icon: <HomeOutlined /> },
  {
    label: t('Category'),
    key: 'category',
    icon: <BarsOutlined />,
    children: [{ label: <Link name='User' path='User' />, key: 'user' }],
  },
];
