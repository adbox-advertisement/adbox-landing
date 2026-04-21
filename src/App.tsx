import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import CookieConsent from "./components/CookieConsent";

const SignUp = lazy(() => import("./pages/signup"));
const NotFound = lazy(() => import("./pages/not-found"));

function PageFallback() {
  return <div className="page-fallback" aria-label="Loading page" />;
}

function Router() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <>
      <Router />
      <CookieConsent />
    </>
  );
}

export default App;
