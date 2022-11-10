import routes from 'configs/routes.json';

export interface MenuItem {
  label: string;
  icon: JSX.Element;
  path: Array<keyof typeof routes>[0];
}
