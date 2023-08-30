import { RouteProps } from "react-router-dom"
import FourChoice from '../containers/FourChoice/index';

interface CustomRouteProps {
  title: string;
  hide: boolean;
}

type RouteMetaType = (string | Omit<RouteProps, 'component'> & Partial<CustomRouteProps>)

export type RouterMetaTypes = { [key: string] : RouteMetaType | RouteMetaType[] } 

const routerMeta: RouterMetaTypes = {
  Home: { path: '/' },
  TwoImage: ['/two_image'],
  FourChoice: [{ path: '/four_choice/:id', hide: true }, { path: '/four_choice' }],
  End: [{ path: '/end', hide: true }],
}

export default routerMeta