import DefaultLayout from '@/components/DefaultLayout';
import FlexCenter from '@/components/FlexCenter';
import React, { FunctionComponent } from 'react';

interface IEndProps {
}

const End: FunctionComponent<IEndProps> = (props) => {
  return <DefaultLayout>
    <FlexCenter style={{ fontSize: 200, overflow: 'auto' }}>
      End
    </FlexCenter>
  </DefaultLayout>;
};

export default End;
