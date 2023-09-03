import React, { FunctionComponent, useEffect, useMemo } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useIntl } from "react-intl";

import { useLocation, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

interface IDefaultLayoutProps {}

const defaultStyle = {
	height: "100%",
};

const menuStyle = {
	width: "100%",
	display: "flex",
};

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = (props) => {
	const { children } = props;
	const { formatMessage: fm } = useIntl();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		console.log("pathname", location.pathname);
	}, [location]);

	const pathDom = useMemo(() => {
		const { pathname } = location;
		const pathArray = pathname.split("/");
		const emptyToSpace = (text: string) => (text === "" ? " " : text);
		return pathArray.map((path) => (
			<Breadcrumb.Item key={path}>{emptyToSpace(path)}</Breadcrumb.Item>
		));
	}, [location]);

	return (
		<Layout style={defaultStyle}>
			<Header
				className="header"
				style={{ display: "flex", backgroundColor: "mediumvioletred" }}
			>
				<div
					className="logo"
					style={{
						color: "white",
						width: 250,
						cursor: "pointer",
					}}
          role="presentation"
					onClick={() => navigate('/')}
				>
					{fm({ id: "title" })}
				</div>
			</Header>
			<Layout>
				<Layout>
					<Content
						className="site-layout-background"
						style={{
							padding: 14,
							margin: 0,
							minHeight: 280,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default DefaultLayout;
