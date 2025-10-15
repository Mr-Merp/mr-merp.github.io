import { Github, Linkedin, Mail, Phone, Shield } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">DoD Secret Clearance</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Owen Yang
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 font-medium">
            Software Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science student specializing in{" "}
            <span className="text-primary font-semibold">Machine Learning</span> and{" "}
            <span className="text-primary font-semibold">Intelligent Systems</span>.
            Building scalable solutions with deep learning and data-driven approaches.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:theowenyang@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/owenyang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/owenyang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="tel:562-521-0468"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
