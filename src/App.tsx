
import { Provider } from "react-redux";
import Body from "./components/Body";
import { store } from "./utils/appstore";
import { Toaster } from "react-hot-toast";


function App() {
  return (
   <Provider store={store}>
      
      <Body/>
      <Toaster />
   </Provider>
  );
}

export default App;
