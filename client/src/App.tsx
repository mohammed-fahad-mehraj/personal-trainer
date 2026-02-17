import { useState } from "react";
import ProgramModal from "./components/ProgramModal";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const programs = {
  online: {
    title: "Online Coaching",
    image: "/images/habit-coaching.jpg",
    description: "Complete programming, nutrition guidance, and weekly check-ins via app.",
    features: [
      "App-based workouts",
      "Macro tracking",
      "Video tutorials",
      "Direct messaging support"
    ]
  },

  personal: {
    title: "Personal Training",
    image: "/images/habit-coaching.jpg",
    description: "1-on-1 gym-based coaching with full supervision.",
    features: [
      "Custom workouts",
      "Form correction",
      "Strength tracking",
      "Weekly adjustments"
    ]
  }
};


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
  const [activeProgram, setActiveProgram] = useState<any>(null);
}


export default App;


