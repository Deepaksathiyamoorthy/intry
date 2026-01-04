import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ExecutiveHire } from './pages/ExecutiveHire'
import { MarketLaunch } from './pages/MarketLaunch'
import { DaasConsulting } from './pages/DaasConsulting'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/executive-hire" element={<ExecutiveHire />} />
          <Route path="/market-launch" element={<MarketLaunch />} />
          <Route path="/daas-consulting" element={<DaasConsulting />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
