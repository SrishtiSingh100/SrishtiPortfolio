import { BookOpen, Brain, Code } from "lucide-react";

export const AboutSection = () => {
  const courses = [
    "Optimization Techniques and Decision Making",
    "Database Management Systems",
    "Operating Systems",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              CS Student & AI/ML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a fourth-year B.Tech Computer Science student specializing
              in Artificial Intelligence at Indira Gandhi Delhi Technical
              University for Women (IGDTUW).
            </p>

            <p className="text-muted-foreground">
              My interests include software engineering, machine learning,
              and problem solving. I enjoy learning by building projects and
              have worked with areas such as NLP, computer vision, deep
              learning, RAG systems, MLOps, and full-stack development.
            </p>

            <p className="text-muted-foreground">
              Alongside development and AI/ML, I regularly practice Data
              Structures and Algorithms and competitive programming to improve
              my problem-solving skills.
            </p>

            {/* Education */}
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>

                  <p className="text-muted-foreground font-medium">
                    Indira Gandhi Delhi Technical University for Women
                  </p>

                  <p className="text-muted-foreground text-sm">
                    Delhi, India · B.Tech CSE (AI) · 4th Year
                  </p>

                  <p className="text-muted-foreground text-sm">
                    2023 – 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/10Y-SLqMnr1WpqWIgbdtVBW5cIyFsdFr-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">

            {/* Problem Solving */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Problem Solving
                  </h4>

                  <p className="text-muted-foreground">
                    I enjoy breaking down programming problems, finding
                    efficient approaches, and improving my Data Structures
                    and Algorithms skills through regular practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & AI
                  </h4>

                  <p className="text-muted-foreground">
                    I have worked on projects involving machine learning,
                    deep learning, NLP, computer vision, RAG systems, and
                    MLOps.
                  </p>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Relevant Coursework
                  </h4>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};