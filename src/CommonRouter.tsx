import React, { Suspense, lazy, FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { routerMeta } from "@/meta";
import { assignRouteArrayProps } from "@/utils";
import NotFound from "@/components/NotFound";
import FlexCenter from "@/components/FlexCenter";

interface ICustomRotuerProps {}

const lazyImport = (containerName: string) =>
	lazy(() => import(`@/containers/${containerName}`));

interface AssignRoute {
	Comp: any;
	propsArr: any | any[];
}

const assignRouter: AssignRoute[] = Object.keys(routerMeta).map(
	(componentKey: string) => {
		const propsArr: any = assignRouteArrayProps(routerMeta[componentKey]);
		return {
			Comp: lazyImport(componentKey),
			propsArr,
		};
	}
);

console.log('assignRouter', assignRouter)

const CommonRouter: FunctionComponent<ICustomRotuerProps> = (props) => {
	return (
		<Routes>
			{assignRouter.map(({ Comp, propsArr }) => {
				if (Array.isArray(propsArr)) {
					return propsArr.map((props) => {
						return (
							<Route
								key={props.path}
								path={props.path}
								{...props}
								element={
									<Suspense fallback={<FlexCenter>Loading...</FlexCenter>}>
										<Comp />
									</Suspense>
								}
							/>
						);
					});
				} else {
					return (
						<Route
							key={propsArr.path}
							path={propsArr.path}
							{...propsArr}
							element={
								<Suspense fallback={<FlexCenter>Loading...</FlexCenter>}>
									<Comp />
								</Suspense>
							}
						/>
					);
				}
			})}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default CommonRouter;
