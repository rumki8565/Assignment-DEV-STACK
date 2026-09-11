// src/components/TechnologySection.tsx
import { useState, useEffect } from "react";
import technologiesData from "../data/technologies.json";
import TechCard from "./TechCard";

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologySectionProps {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechnologySection = ({ stack, onAdd }: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated async load so the loading state is demonstrable,
    // even though the JSON import itself is instant.
    const timer = setTimeout(() => {
      setTechnologies(technologiesData as Technology[]);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <p className="text-gray-500 text-center py-16">Loading technologies...</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          technology={tech}
          isAdded={stack.some((t) => t.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default TechnologySection;
