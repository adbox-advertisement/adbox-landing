import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import CookieConsent from "./components/CookieConsent";
import { DataDeletion, PrivacyPolicy, Support, TermsOfService } from "./pages/compliance";

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
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/data-deletion" component={DataDeletion} />
        <Route path="/support" component={Support} />
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
