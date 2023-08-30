import React, { FunctionComponent } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import generateIndexImage from '@/utils/generateIndexImage';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from "antd";
import { range } from "@/utils";
interface ITwoImageProps {
  imageUrl?: string;
}

const gridStyle: React.CSSProperties = {
	width: "50%",
	textAlign: "center",
};

const TwoImage: FunctionComponent<ITwoImageProps> = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idNumber = id ? Number(id) : 0;
  const { imageUrl } = props

  return (
    <DefaultLayout>
      <Card title={`${idNumber+1}. 지문`}>
        {range(1, 2).map(i => {
          return <Card.Grid key={i} style={gridStyle} onClick={() => {
            const idx = idNumber + 1
            navigate(idx === 10 ? '/end' : `/two_image/${idx}`)
          }}>
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
          </Card.Grid>
        })}
			</Card>
    </DefaultLayout>
  );
};

export default TwoImage;
