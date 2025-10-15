import { Award, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const awards = [
  {
    title: "Dean's Honor List",
    organization: "University of California, Irvine",
    period: "Dec 2023 - Sept 2025",
    description: "Recognized for academic excellence with GPA above 3.7"
  },
  {
    title: "Eagle Scout",
    organization: "Boy Scout Troop 888",
    period: "July 2016 - April 2023",
    description: "Highest achievement rank in the Boy Scouts of America"
  },
  {
    title: "National Finalist - Team Leader",
    organization: "The American Rocketry Challenge",
    period: "Sept 2020 – June 2023",
    description: "Led team to national finals in competitive rocketry competition"
  }
];

const Awards = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Awards & Leadership</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{award.organization}</p>
                <p className="text-xs text-muted-foreground font-mono mb-3">{award.period}</p>
                <p className="text-sm text-muted-foreground">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
