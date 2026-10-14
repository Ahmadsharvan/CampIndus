import { MotionConfig } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import ForColleges from './pages/ForColleges';
import ForStudents from './pages/ForStudents';
import Home from './pages/Home';
import Impact from './pages/Impact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProgramDetail from './pages/ProgramDetail';
import Programs from './pages/Programs';
import TermsAndConditions from './pages/TermsAndConditions';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/for-colleges" element={<ForColleges />} />
          <Route path="/for-students" element={<ForStudents />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
