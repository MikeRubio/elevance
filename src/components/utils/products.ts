import { Eye, Brain } from "lucide-react";
import chatterwiseLogo from "../../assets/chatterwise_logo_mini_nobg.png";

export const Products_List = [
  {
    logo: chatterwiseLogo,
    title: "ChatterWise",
    titleLink: "https://chatterwise.io/",
    description:
      "An AI-powered platform empowering organisations to build, train, and deploy chatbots using their internal knowledge in minutes—no coding required.",
    features: [
      "Learns Directly from Documents",
      "24/7 Conversational Support",
      "Seamless Integration Options",
      "Multi-lingual Support",
    ],
    status: "Launching soon!",
  },
  {
    icon: Eye,
    title: "PersonaLens",
    titleLink: "https://personalens.cc/",
    description:
      "An AI-powered accessibility and UX testing platform that helps teams experience their website through the lens of diverse users—instantly testing for real-world conditions like colour blindness, language barriers, and cognitive differences.",
    features: [
      "Available as a Google Chrome extension",
      "Growing range of relevant persona",
      "Actionable guidance for each user group",
    ],
    status: "In development",
  },
  {
    icon: Brain,
    title: "Libitum",
    titleLink: "https://libitum.cc",
    description:
      "Libitum is an AI-powered platform for audience discovery and content strategy, combining cultural data from Qloo with OpenAI to deliver real-time insights and predictive marketing intelligence.",
    features: [
      "AI-Generated Audience Personas with Cultural Affinities",
      "Real-Time Trend Prediction and Confidence Scoring",
      "RESTful API for Developer Integration",
      "Real-time analytics",
    ],
    status: "In development",
  },
];
