import {
  BookOpen,
  Briefcase,
  Globe,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";

import { Program } from "@/types/institutions";

export const programsBadge = "OUR PROGRAMS";

export const programsTitle = "Building Communication-Ready Graduates";

export const programsDescription =
  "Industry-aligned curriculum that bridges the gap between academia and the modern workplace.";

export const institutionPrograms: Program[] = [
  {
    icon: MessageSquare,
    title: "Business English Mastery",
    description:
      "Comprehensive spoken and written English programs tailored for corporate communication contexts.",
  },
  {
    icon: Globe,
    title: "Foreign Language Programs",
    description:
      "Multi-language offerings including German, French, Japanese, and Spanish for global career readiness.",
  },
  {
    icon: BookOpen,
    title: "Communication Foundations",
    description:
      "Structured modules that build strong interpersonal, presentation, and professional writing skills.",
  },
  {
    icon: Briefcase,
    title: "Career-Ready Skills",
    description:
      "Interview preparation, email etiquette, cross-cultural communication, and workplace soft skills.",
  },
  {
    icon: Users,
    title: "Campus-to-Corporate Bridge",
    description:
      "Seamless transition programs that prepare final-year students for Day 1 corporate readiness.",
  },
  {
    icon: GraduationCap,
    title: "Faculty Development",
    description:
      "Train-the-trainer programs to sustain language skilling capabilities within your institution.",
  },
];

export const employerCTA = {
  badge: "FOR EMPLOYERS",
  title: "Access a High-Quality Talent Pool",
  highlight: "Talent Pool",
  description:
    "Our institutional partnerships produce communication-ready, globally competent graduates — giving your organization access to job-ready talent from Day 1.",
  buttonText: "Hire From Our Network",
};
export const employerSection = {
  badge: "FOR EMPLOYERS",
  title: "Access a High-Quality",
  highlight: "Talent Pool",
  description:
    "Our institutional partnerships produce communication-ready, globally competent graduates — giving your organization access to job-ready talent from Day 1.",
  button: "Hire From Our Network",
};