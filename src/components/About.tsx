import { GraduationCap, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Objective</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Motivated and detail-oriented Computer Science graduate (2026) seeking a full-time position as a 
                Software Engineer. Eager to contribute to innovative, data-driven solutions through strong 
                programming skills, applied ML knowledge, and a commitment to building scalable, efficient 
                systems in a collaborative environment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">University of California, Irvine</h3>
                  <p className="text-sm text-primary font-mono">Sept 2023 – June 2026 | GPA: 3.94</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    B.S. in Computer Science, Specializing in Intelligent Systems
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Relevant Coursework:</span> Advanced Python & C++, 
                    Data Structures & Algorithms, Machine Learning & AI, Operating Systems, Data Mining, 
                    System Design, Computer Vision
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
