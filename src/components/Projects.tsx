import { Code2, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Toxic Comment Detector/Classification",
    period: "Spring 2025",
    description: "NLP-based system to classify harmful language in user-generated content",
    technologies: ["Python", "NLP", "Logistic Regression", "Scikit-learn"],
    highlights: [
      "Preprocessed text with tokenization and n-gram analysis",
      "Addressed class imbalance using oversampling techniques",
      "Achieved accurate and interpretable classification results"
    ],
    github: "#"
  },
  {
    title: "Particle-Based Fluid Simulation",
    period: "Winter 2024",
    description: "Real-time physics simulation with particle-based fluid dynamics",
    technologies: ["Python", "Physics Engine", "Optimization"],
    highlights: [
      "Implemented pressure, density, and collision handling",
      "Optimized with spatial partitioning for real-time interaction",
      "Handles hundreds of particles simultaneously"
    ],
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-mono">{project.period}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
