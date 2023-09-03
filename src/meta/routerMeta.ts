import { RouteProps } from "react-router-dom"

interface CustomRouteProps {
  title: string;
  hide: boolean;
}

type RouteMetaType = (string | Omit<RouteProps, 'component'> & Partial<CustomRouteProps>)

export type RouterMetaTypes = { [key: string] : RouteMetaType | RouteMetaType[] } 

const routerMeta: RouterMetaTypes = {
  // Home: { path: '/' },
  TwoImage: [{ path: '/:id', hide: true }, { path: '/' }],
  // FourChoice: [{ path: '/four_choice/:id', hide: true }, { path: '/four_choice' }],
  End: [{ path: '/end', hide: true }],
}

export default routerMeta