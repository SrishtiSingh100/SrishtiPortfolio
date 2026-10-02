import {
  ArrowRight,
  Brain,
  ExternalLink,
  Github,
  Hand,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Chest Cancer Detection",
    subtitle: "using MLflow & DVC",

    description:
      "Built an end-to-end deep learning project for chest cancer image classification using Python and TensorFlow/Keras.",

    longDescription:
      "Implemented data ingestion, preprocessing, model training, evaluation, experiment tracking with MLflow, and data/pipeline versioning with DVC. Docker and GitHub Actions were also used as part of the development workflow.",

    tags: [
      "Deep Learning",
      "MLflow",
      "DVC",
      "MLOps",
      "Python",
      "TensorFlow",
    ],

    icon: Stethoscope,
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",

    githubUrl:
      "https://github.com/SrishtiSingh100/chest-cancer-classification-mlops",
  },

  {
    id: 2,
    title: "Medical Knowledge",
    subtitle: "Retrieval System",

    description:
      "Built a retrieval-augmented generation (RAG) chatbot that allows users to ask questions based on information contained in a medical textbook.",

    longDescription:
      "Used LangChain to build the retrieval pipeline, FAISS for vector similarity search, and Hugging Face models for the NLP component. A Flask backend was used to serve the application.",

    tags: [
      "RAG",
      "NLP",
      "LLM",
      "Python",
      "FAISS",
      "LangChain",
    ],

    icon: Brain,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",

    githubUrl:
      "https://github.com/SrishtiSingh100/rag-llm-knowledge-retrieval",
  },

  {
    id: 3,
    title: "Hand Gesture",
    subtitle: "Recognition System",

    description:
      "Built a real-time hand gesture recognition system using MediaPipe for hand landmark detection and TensorFlow/TensorFlow Lite for gesture classification.",

    longDescription:
      "The system processes camera input using OpenCV, detects hand landmarks with MediaPipe, and uses a trained model to classify predefined hand gestures in real time.",

    tags: [
      "MediaPipe",
      "TensorFlow Lite",
      "Computer Vision",
      "Python",
      "OpenCV",
    ],

    icon: Hand,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",

    githubUrl:
      "https://github.com/SrishtiSingh100/hand-gesture-recognition-mediapipe",
  },
];

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = project.icon;

  return (
    <div
      className="h-80 cursor-pointer"
      style={{
        perspective: "1000px",
        animation: `float ${3 + project.id * 0.7}s ease-in-out infinite`,
        animationDelay: `${project.id * 0.3}s`,
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} border border-primary/20 p-6 flex flex-col items-center justify-center gap-4 shadow-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
            <Icon className={`h-10 w-10 ${project.iconColor}`} />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="text-primary/80 text-sm font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-1 animate-pulse">
            Hover to learn more
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-card border border-primary/30 p-6 flex flex-col justify-between shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="text-lg font-bold mb-2">
              {project.title}{" "}
              <span className="text-primary">
                {project.subtitle}
              </span>
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {project.description}
            </p>

            <p className="text-muted-foreground text-xs leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  aria-label="View project"
                >
                  <ExternalLink size={18} />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                aria-label="View GitHub repository"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects I’ve built while learning and applying
          software development, machine learning, and AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SrishtiSingh100"
          >
            View More on GitHub
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};