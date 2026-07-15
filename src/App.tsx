import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StartPage } from '@/pages/StartPage';
import { GamePage } from '@/pages/GamePage';
import { ReportPage } from '@/pages/ReportPage';
import { EducationPage } from '@/pages/EducationPage';
import { BackgroundMusic } from '@/components/BackgroundMusic';

function App() {
  return (
    <BrowserRouter>
      <BackgroundMusic />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
