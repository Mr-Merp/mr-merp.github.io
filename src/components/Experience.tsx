import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    company: "US Navy Information Warfare Center Pacific",
    location: "San Diego, CA",
    role: "Software Engineer Intern (Machine Learning)",
    period: "June 2025 - Aug 2025",
    achievements: [
      "Developed deep learning (CNNs, RNNs) and gradient boosting models (XGBoost, LightGBM) achieving 75% accuracy",
      "Processed 40GB+ of audio and sensor time-series data using scalable Python pipelines (NumPy, Pandas)",
      "Engineered features (FFT, MAAD) to enhance ML model performance on audio/time-series inputs",
      "Applied post-modeling analysis to detect trends across 40+ model iterations",
      "Integrated models into real-time audio classification application for Navy operations"
    ]
  },
  {
    company: "iD Tech",
    location: "Stanford/UCI/ASU",
    role: "Machine Learning Instructor",
    period: "June 2024 - Aug 2024",
    achievements: [
      "Taught 40+ students core ML principles and image recognition using TensorFlow and scikit-learn",
      "Collaborated with instructors to create 10+ high-quality Python and C++ training projects"
    ]
  },
  {
    company: "Charket Inc",
    location: "Santa Clara, CA",
    role: "Salesforce Intern",
    period: "June 2023 - Sept 2023",
    achievements: [
      "Adapted Salesforce templates to boost communication by 15%",
      "Earned 20+ training badges covering Apex Triggers to SOQL queries"
    ]
  },
  {
    company: "Circle Media Inc",
    location: "Portland, OR",
    role: "Java (Back End) Intern",
    period: "June 2022 - Sept 2022",
    achievements: [
      "Created scalable ad blocking feature managing 50,000+ domain blocklists using regex",
      "Utilized web scraping and efficient data retrieval for webpage validation"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
