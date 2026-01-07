
export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}
