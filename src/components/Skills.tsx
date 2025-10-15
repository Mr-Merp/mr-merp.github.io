import { Code, Database, Globe, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python (PyTorch, TensorFlow, Sklearn)", "Java", "C/C++", "HTML/CSS", "JavaScript", "SQL"]
  },
  {
    icon: Wrench,
    title: "Tools & Software",
    skills: ["GitHub", "VSCode", "Jupyter Notebook", "PyCharm", "AWS CLI", "Git", "Anaconda", "VMware"]
  },
  {
    icon: Database,
    title: "Specializations",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Mining", "System Design"]
  },
  {
    icon: Globe,
    title: "Languages",
    skills: ["English (Native/Fluent)", "Mandarin (Limited Working)"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      {skill}
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

export default Skills;
