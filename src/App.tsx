import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainSection } from "../src/pages/MainSection";
import CreateChallenge from "../src/pages/CreateChallenge";
import ChallengesDetailPage from "./pages/ChallengesDetailPage";
import EditDetailsPage from "./pages/EditDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSection />} />

        <Route path="/create-challenge" element={<CreateChallenge />} />
        <Route
          path="/challenge-detail-page"
          element={<ChallengesDetailPage />}
        />
        <Route path="/edit-detail-page" element={<EditDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
