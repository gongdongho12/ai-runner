import React, { FunctionComponent, lazy } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "antd";
import { range } from "@/utils";
import meta from "./meta.json";
import FlexCenter from "@/components/FlexCenter";
import FullCard from "@/components/FullCard";

interface ITwoImageProps {}

const gridStyle: React.CSSProperties = {
	width: "50%",
	textAlign: "center",
};

const TwoImage: FunctionComponent<ITwoImageProps> = (props) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const idNumber = id ? Number(id) : 0;
	if (meta?.[idNumber] === undefined) {
		navigate("/end");
	}
	const {
		question,
		answer,
		images,
	}: { question: string; answer: number; images: string[] } = meta?.[idNumber];
	console.log("question", question, "answer", answer, "images", images);

	return (
		<DefaultLayout>
			<FullCard>
				<Card
					title={`${idNumber + 1}. ${question}`}
					style={{ height: "100%", display: "flex", flexFlow: "column" }}
					cover={
						<FlexCenter
							style={{
								display: "flex",
								flexFlow: "row",
								height: "100%",
								flex: "1",
							}}
						>
							{images.map((image, i) => {
								return (
									<div
										key={i}
										style={{
											width: "100%",
											height: "100%",
											backgroundPosition: "center",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
											backgroundImage: `url(/images/${image})`,
											...(i + 1 != images.length
												? { borderRight: "1px solid #f0f0f0" }
												: {}),
										}}
									/>
								);
							})}
						</FlexCenter>
					}
				>
					{range(0, 1).map((i) => {
						return (
							<Card.Grid
								key={i}
								style={gridStyle}
								onClick={() => {
									const idx = idNumber + 1;
									navigate(
										idx === (meta?.length || 0) ? "/end" : `/${idx}`
									);
								}}
							>
								{i % 2 == 0 ? "⭕" : "❌"}
							</Card.Grid>
						);
					})}
				</Card>
			</FullCard>
		</DefaultLayout>
	);
};

export default TwoImage;
