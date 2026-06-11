export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  logoText: string;
  bullets: string[];
  impactTitle?: string;
  impactBullets?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  challenge: string;
  approach: string[];
  execution: string[];
  impact: string[];
  whatILed: string[];
}

export interface Award {
  title: string;
  issuer: string;
}

export interface Education {
  degree: string;
  institution: string;
}

export interface CreativeWorkflowTool {
  name: string;
  category: 'AI' | 'Design' | 'Operations';
  description: string;
}
