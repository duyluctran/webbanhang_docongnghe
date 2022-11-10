import { Menu } from 'antd';
import { data } from './data';
import './styles.scss';

const MenuApp: React.FC = () => {
  return <Menu mode='inline' theme='dark' items={data} className='menu-app' />;
};
export default MenuApp;
