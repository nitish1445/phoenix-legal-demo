import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout.jsx";
import { useEffect, useState } from "react";
import LegalDisclaimer from "../src/pages/LegalDisclaimer.jsx";
import logo from "../src/assets/icons/logo.png";

// const Home = lazy(
//   () =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(import("./pages/Home.jsx"));
//       }, 1000); // 1 seconds
//     }),
// );
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Award = lazy(() => import("./pages/Award.jsx"));
const Practices = lazy(() => import("./pages/Practices.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const ArticleUpdate = lazy(() => import("./pages/ArticleUpdate.jsx"));
const ArticleUpdateDetailPage = lazy(
  () => import("./pages/ArticleUpdateDetail.jsx"),
);
const Videos = lazy(() => import("./pages/Videos.jsx"));
const Partners = lazy(() => import("./pages/Partners.jsx"));
const Career = lazy(() => import("./pages/Career.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Internship = lazy(() => import("./pages/Internship.jsx"));
const Retainership = lazy(() => import("./pages/Retainership.jsx"));
const PracticeDetail = lazy(() => import("./pages/PracticeDetail.jsx"));
const PartnerDetail = lazy(() => import("./pages/PartnerDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/Privacy.jsx"));

function PageFrame({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or just use window.scrollTo(0, 0)
    });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route
              index
              element={
                <PageFrame>
                  <Home />
                </PageFrame>
              }
            />
            <Route
              path="/about"
              element={
                <PageFrame>
                  <About />
                </PageFrame>
              }
            />
            <Route
              path="/award"
              element={
                <PageFrame>
                  <Award />
                </PageFrame>
              }
            />
            <Route
              path="/practices"
              element={
                <PageFrame>
                  <Practices />
                </PageFrame>
              }
            />
            <Route
              path="/practices/:slug"
              element={
                <PageFrame>
                  <PracticeDetail />
                </PageFrame>
              }
            />
            <Route
              path="/news"
              element={
                <PageFrame>
                  <News />
                </PageFrame>
              }
            />
            <Route
              path="/articles-updates"
              element={
                <PageFrame>
                  <ArticleUpdate />
                </PageFrame>
              }
            />
            <Route
              path="/articles-updates/:slug"
              element={
                <PageFrame>
                  <ArticleUpdateDetailPage />
                </PageFrame>
              }
            />
            <Route
              path="/videos"
              element={
                <PageFrame>
                  <Videos />
                </PageFrame>
              }
            />
            <Route
              path="/partners"
              element={
                <PageFrame>
                  <Partners />
                </PageFrame>
              }
            />
            <Route
              path="/partners/:slug"
              element={
                <PageFrame>
                  <PartnerDetail />
                </PageFrame>
              }
            />
            <Route
              path="/careers"
              element={
                <PageFrame>
                  <Career />
                </PageFrame>
              }
            />
            <Route
              path="/careers/internship"
              element={
                <PageFrame>
                  <Internship />
                </PageFrame>
              }
            />
            <Route
              path="/careers/retainership"
              element={
                <PageFrame>
                  <Retainership />
                </PageFrame>
              }
            />
            <Route
              path="/contact"
              element={
                <PageFrame>
                  <Contact />
                </PageFrame>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageFrame>
                  <PrivacyPolicy />
                </PageFrame>
              }
            />
            <Route
              path="*"
              element={
                <PageFrame>
                  <NotFound />
                </PageFrame>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("phoenix_disclaimer");
    setShowDisclaimer(!accepted);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="hero-visual relative flex min-h-screen items-center justify-center overflow-hidden bg-pl-bg">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-[12%] top-32 h-28 w-28 rounded-full border border-pl-gold/40" />
              <div className="absolute bottom-12 right-[15%] h-44 w-44 rounded-full border border-pl-light-gold/30" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Logo */}
              <img
                src={logo}
                alt="Phoenix Legal"
                className="h-16 w-auto animate-pulse"
              />

              {/* Firm Name */}
              <h2 className="mt-8 font-display text-4xl text-pl-white md:text-5xl">
                Phoenix Legal
              </h2>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-pl-light-gold">
                Excellence • Integrity • Trust
              </p>

              {/* Luxury Loader */}
              <div className="mt-10 h-px w-56 overflow-hidden bg-white/10">
                <div className="h-full w-1/2 animate-[loading_1.8s_ease-in-out_infinite] bg-pl-gold" />
              </div>

              <p className="mt-5 text-sm text-pl-bg/80">
                Preparing your experience...
              </p>
            </div>
          </div>
        }
      >
        <AnimatedRoutes />

        {showDisclaimer && (
          <LegalDisclaimer onAgree={() => setShowDisclaimer(false)} />
        )}
      </Suspense>
    </BrowserRouter>
  );
}
