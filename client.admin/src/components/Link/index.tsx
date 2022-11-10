import routes from 'configs/routes.json';
import vi from 'locales/lang/vi.json';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
interface Props {
  name: Array<keyof typeof vi>[0];
  path: Array<keyof typeof routes>[0];
}
const LinkComponent: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  return <Link to={routes[props.path]}>{t(props.name)}</Link>;
};
export default LinkComponent;
