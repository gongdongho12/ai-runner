import React, { FunctionComponent, CSSProperties, useState } from "react";
import DefaultLayout from "@/components/DefaultLayout";
import FlexCenter from "@/components/FlexCenter";
import { Form, Radio, RadioChangeEvent, InputNumber, Select, Button } from "antd";
import { useNavigate } from "react-router-dom";

interface ICardViewProps {}

interface Props {
	style?: CSSProperties;
}

const options = [
	{ label: "남성", value: "male" },
	{ label: "여성", value: "female" },
];

const Home: FunctionComponent<ICardViewProps> = (props) => {
	const [sex, setSex] = useState<string>("male");
  const navigate = useNavigate();

	const onChangeSex = ({ target: { value } }: RadioChangeEvent) => {
		setSex(value);
	};

	return (
		<DefaultLayout>
			<FlexCenter style={{ flexDirection: "column", height: '100%' }}>
				<div style={{ fontSize: 30, marginBottom: 10 }}>사용자 개인화 설정</div>
				<Form
          onFinish={(props) => {
            navigate("/tf")
          }}
          style={{ width: "100%", maxWidth: 200 }}>
					<Form.Item name="age" label="나이">
						<InputNumber addonAfter="살" defaultValue={30} controls />
					</Form.Item>
					<Form.Item name="gender" label="성별">
						<Radio.Group
							options={options}
							onChange={onChangeSex}
							value={sex}
              defaultValue={"male"}
							optionType="button"
							buttonStyle="solid"
						/>
					</Form.Item>
					<Form.Item name="country" label="국가">
						<Select defaultValue={"korea"}>
							<Select.Option value="korea">대한민국</Select.Option>
							<Select.Option value="japan">일본</Select.Option>
							<Select.Option value="usa">미국</Select.Option>
							<Select.Option value="china">중국</Select.Option>
						</Select>
					</Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>테스트 시작</Button>
				</Form>
			</FlexCenter>
		</DefaultLayout>
	);
};

export default Home;
