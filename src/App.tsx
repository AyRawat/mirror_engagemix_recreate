import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import AuthProvider from "@/contexts/auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />{" "}
        </Provider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
