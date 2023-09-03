import styled, { CSSProperties } from 'styled-components'
import { propsToStyle } from "@/utils";

interface Props {
  style?: CSSProperties
}

const FullCard: any = styled.div`
  height: 100%;

  & > .ant-card {
    height: 100%;
    display: flex;
    flexFlow: column;

    & .ant-card-head-title {
      white-space: normal;
    }

    & > .ant-card-cover {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;
    }
  }
  
  ${(props: Props) => propsToStyle(props.style || {})}
`

export default FullCard