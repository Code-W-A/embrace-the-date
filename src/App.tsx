
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Discover from "./pages/Discover";
import AstrologyQuiz from "./pages/AstrologyQuiz";
import CompatibilityResults from "./pages/CompatibilityResults";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import DestinyFeed from "./pages/DestinyFeed";
import DestinyProfile from "./pages/DestinyProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/destiny-feed" element={<DestinyFeed />} />
          <Route path="/destiny-profile/:userId" element={<DestinyProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/astrology-quiz" element={<AstrologyQuiz />} />
          <Route path="/compatibility-results" element={<CompatibilityResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
