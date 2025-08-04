import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "react-photo-view/dist/react-photo-view.css";
import "react-inner-image-zoom/lib/styles.min.css";
import router from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.ts";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </ThemeProvider>
    </Provider>
  </StrictMode>
);
