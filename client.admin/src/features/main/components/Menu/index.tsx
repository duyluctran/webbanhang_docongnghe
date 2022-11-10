import { Menu } from 'antd';
import './styles.scss';


const items = [
  { label: 'Trang chủ', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];

const MenuApp: React.FC = () => {
  return <Menu items={items} className='menu-app'/>;
};
export default MenuApp;
