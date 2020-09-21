import React, { FC } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SWRConfig } from "swr";

import Home from "./src/views/home";
import swrConfig from "./src/config/swr";
import theme from "./src/config/theme";

const App: FC = () => {
  return (
    <SWRConfig value={swrConfig}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </SWRConfig>
  );
};

export default App;
