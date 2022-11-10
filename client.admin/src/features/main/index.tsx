import { ProLayout } from '@ant-design/pro-layout/';
import { MenuApp, RouteSystem } from './components';
import './styles/main.scss';
function MainFeature() {
  return (
    <>
      <ProLayout
        fixedHeader
        menuContentRender={() => {
          return <MenuApp />;
        }}
        title='Ecommerce'
        className='main-layout'
        navTheme='dark'
      >
        {/* <RouteSystem /> */}
      </ProLayout>
    </>
  );
}
export default MainFeature;
