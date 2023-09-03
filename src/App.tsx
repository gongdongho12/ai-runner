import React, { FunctionComponent } from "react";
import { IntlProvider } from "react-intl";
import { Button, ConfigProvider, Space } from 'antd';
import CommonRouter from "./CommonRouter";
import { BrowserRouter as Router } from "react-router-dom";

import {
  useRecoilValue,
} from "recoil";
import langState, { messages } from "@/state/lang";

const App: FunctionComponent<any> = () => {
  const lang = useRecoilValue(langState);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f674c6",
          fontFamily: "'GmarketSansMedium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        },
      }}
    >
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>
          <CommonRouter />
        </Router>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
