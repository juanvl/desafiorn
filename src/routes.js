import { createAppContainer, createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Product from "./pages/product";

const AppNavigator = createStackNavigator(
  {
    Main,
    Product
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#FFF"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
