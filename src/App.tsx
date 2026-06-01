import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Programmes from "./pages/Programmes.tsx";
import CourseDetail from "./pages/CourseDetail.tsx";
import Courses from "./pages/Courses.tsx";
import Scholarship from "./pages/Scholarship.tsx";
import Blogs from "./pages/Blogs.tsx";
import Contact from "./pages/Contact.tsx";
import Partners from "./pages/Partners.tsx";
import FAQs from "./pages/FAQs.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/:slug" element={<CourseDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/accreditation-and-partners" element={<Partners />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
