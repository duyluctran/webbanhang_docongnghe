import { ProLayout } from '@ant-design/pro-layout/';
import { MenuApp, RouteSystem } from './components';
import './styles/main.scss';
export default function MainFeature() {
  return (
    <>
      <ProLayout
        fixedHeader
        menuContentRender={() => {
          return <MenuApp />;
        }}
        title='Ecommerce'
        className='main-layout'
      >
        <RouteSystem />
      </ProLayout>
    </>
  );
}
