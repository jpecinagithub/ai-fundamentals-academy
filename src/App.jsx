import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Course } from './pages/Course';
import { ModulePage } from './pages/ModulePage';
import { Tests } from './pages/Tests';
import { Review } from './pages/Review';
import { GlossaryPage } from './pages/GlossaryPage';
import { ProgressPage } from './pages/ProgressPage';
import { FinalExam } from './pages/FinalExam';
import { FinalProject } from './pages/FinalProject';
import { AuthorPage } from './pages/AuthorPage';

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/curso" element={<Course />} />
          <Route path="/modulo/:id" element={<ModulePage />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/examen-final" element={<FinalExam />} />
          <Route path="/repasar" element={<Review />} />
          <Route path="/glosario" element={<GlossaryPage />} />
          <Route path="/progreso" element={<ProgressPage />} />
          <Route path="/proyecto-final" element={<FinalProject />} />
          <Route path="/autor" element={<AuthorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}
