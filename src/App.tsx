import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import Concepts from "./pages/Concepts";
import Techniques from "./pages/Techniques";
import Examples from "./pages/Examples";
import LLMPrompting from "./pages/LLMPrompting";
import BestPractices from "./pages/BestPractices";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TopNav />
        <Sidebar />
        <main className="pt-14 md:pl-60 min-h-screen">
          <div className="p-6 md:p-10">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/concepts" element={<Concepts />} />
              <Route path="/techniques" element={<Techniques />} />
              <Route path="/examples" element={<Examples />} />
              <Route path="/llm-prompting" element={<LLMPrompting />} />
              <Route path="/best-practices" element={<BestPractices />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
