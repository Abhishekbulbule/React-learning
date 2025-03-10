export type Profile = {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  address: string;
  profilePhoto: string;
  gender: "male" | "female";
};
// Type for Education
type Education = {
  institute: string;
  degree: string;
  percentage: string | number;
  pass_out_year: string | number;
};

// Type for Skill
type Skill = {
  name: string;
  experience: string | number;
};

// Type for Experience
type Experience = {
  company: string;
  project: string;
  role: string;
  team_size: number;
  duration_from: string;
  duration_to: string;
};

// Main Candidate Type
export type Candidate = {
  id: string;
  profile_picture: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  gender: string;
  hobbies: string[];
  education: Education[];
  skills: Skill[];
  experience: Experience[];
};
