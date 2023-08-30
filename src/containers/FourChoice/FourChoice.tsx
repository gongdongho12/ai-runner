import React, { FunctionComponent } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import generateIndexImage from '@/utils/generateIndexImage';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from "antd";
import { range } from "@/utils";

interface IFourChoiceProps {
  imageUrl?: string;
}

const gridStyle: React.CSSProperties = {
	width: "25%",
	textAlign: "center",
};

const FourChoice: FunctionComponent<IFourChoiceProps> = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idNumber = id ? Number(id) : 0;
  const { imageUrl } = props
  
	return (
		<DefaultLayout>
			<Card
				title={`${idNumber+1}. 지문`}
				cover={
					<div
						style={{
							width: "100%",
							height: "600px",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundImage: `url(${imageUrl || generateIndexImage(idNumber)})`,
						}}
					/>
				}
			>
        {range(1, 4).map(i => {
          return <Card.Grid key={i} style={gridStyle} onClick={() => {
            const idx = idNumber + 1
            navigate(idx === 10 ? '/end' : `/four_choice/${idx}`)
          }}>{i}</Card.Grid>
        })}
			</Card>
		</DefaultLayout>
	);
};

export default FourChoice;
