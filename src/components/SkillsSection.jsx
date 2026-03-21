import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  { name: "HTML/CSS", category: "frontend", icon: "🌐" },
  { name: "JavaScript", category: "frontend", icon: "⚡" },
  { name: "React", category: "frontend", icon: "⚛️" },
  { name: "TypeScript", category: "frontend", icon: "🔷" },
  { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
  { name: "Next.js", category: "frontend", icon: "▲" },
  { name: "Python", category: "backend", icon: "🐍" },
  { name: "Node.js", category: "backend", icon: "🟢" },
  { name: "Express", category: "backend", icon: "🚂" },
  { name: "MongoDB", category: "backend", icon: "🍃" },
  { name: "PostgreSQL", category: "backend", icon: "🐘" },
  { name: "Git/GitHub", category: "tools", icon: "🐙" },
  { name: "Docker", category: "tools", icon: "🐳" },
  { name: "Figma", category: "tools", icon: "🎭" },
  { name: "VS Code", category: "tools", icon: "💻" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [clickedSkill, setClickedSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const handleClick = (name) => {
    setClickedSkill(name);
    setTimeout(() => setClickedSkill(null), 600);
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => handleClick(skill.name)}
              className={cn(
                "relative px-7 py-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer select-none group",
                "bg-card text-foreground",
                clickedSkill === skill.name
                  ? "scale-95 bg-primary/20 border-primary"
                  : hoveredSkill === skill.name
                  ? "scale-110 bg-primary text-primary-foreground border-primary shadow-[0_0_25px_rgba(139,92,246,0.6)]"
                  : "border-primary/20 hover:border-primary/60 shadow-sm"
              )}
              style={{
                animation: `float ${3 + (key % 4) * 0.7}s ease-in-out ${(key * 0.25) % 2}s infinite`,
              }}
            >
              {/* Glow ring on hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none",
                  "bg-primary/10 opacity-0 group-hover:opacity-100"
                )}
              />

              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <span className="text-3xl">{skill.icon}</span>
                <span
                  className={cn(
                    "text-sm font-semibold transition-colors duration-300",
                    hoveredSkill === skill.name
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};