import { ArrowRight, Brain, ExternalLink, Github, Hand, Stethoscope } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Chest Cancer Detection",
    subtitle: "using MLflow & DVC",
    description: "An end-to-end Deep Learning solution for automated chest cancer classification from CT/X-ray scans. Implements a complete MLOps workflow with experiment tracking, data versioning, and reproducible pipelines.",
    longDescription: "Built with industry-standard tools, this system automates the entire ML lifecycle from data ingestion to model evaluation, ensuring scalability, reproducibility, and maintainability.",
    tags: ["Deep Learning", "MLflow", "DVC", "MLOps", "Python"],
    icon: Stethoscope,
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    
    githubUrl: "https://github.com/SrishtiSingh100/chest-cancer-classification-mlops",
  },
  {
    id: 2,
    title: "Medical Knowledge",
    subtitle: "Retrieval System",
    description: "A production-ready RAG system that transforms complex medical textbooks into an intelligent, conversational AI assistant.",
    longDescription: "Leverages state-of-the-art NLP to enable healthcare professionals, medical students, and researchers to access accurate medical information through natural language queries.",
    tags: ["RAG", "NLP", "LLM", "Python", "Vector DB"],
    icon: Brain,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    
    githubUrl: "https://github.com/SrishtiSingh100/rag-llm-knowledge-retrieval",
  },
  {
    id: 3,
    title: "Hand Gesture",
    subtitle: "Recognition System",
    description: "A real-time hand gesture recognition system using MediaPipe for hand tracking and custom TensorFlow Lite models for gesture classification.",
    longDescription: "Enables intuitive human-computer interaction through hand gestures, recognizing static hand signs and dynamic finger movements. Perfect for touchless control and accessibility tools.",
    tags: ["MediaPipe", "TensorFlow Lite", "Computer Vision", "Python"],
    icon: Hand,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    
    githubUrl: "https://github.com/SrishtiSingh100/hand-gesture-recognition-mediapipe",
  },
];

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = project.icon;

  return (
    <div
      className="h-80 cursor-pointer" style={{ perspective: "1000px", animation: `float ${3 + (projects.indexOf(project) * 0.8)}s ease-in-out infinite`, animationDelay: `${projects.indexOf(project) * 0.4}s` }}
      style={{ perspective: "1000px", animation: `float ${3 + project.id * 0.7}s ease-in-out infinite`, animationDelay: `${project.id * 0.3}s` }}
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
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} border border-primary/20 p-6 flex flex-col items-center justify-center gap-4 shadow-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
            <Icon className={`h-10 w-10 ${project.iconColor}`} />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-primary/80 text-sm font-medium">{project.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1 animate-pulse">Hover to learn more</p>
        </div>

        <div
          className="absolute inset-0 rounded-2xl bg-card border border-primary/30 p-6 flex flex-col justify-between shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-lg font-bold mb-1">
              {project.title} <span className="text-primary">{project.subtitle}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{project.longDescription}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(3).map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <ExternalLink size={18} />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
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
           <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects — hover over a card to learn more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noreferrer" href="https://github.com/SrishtiSingh100">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
