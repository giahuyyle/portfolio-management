import { useState } from 'react';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

const sampleSkills: Skill[] = [
  { id: 1, name: 'React', category: 'Frontend', proficiency: 90 },
  { id: 2, name: 'TypeScript', category: 'Frontend', proficiency: 85 },
  { id: 3, name: 'Node.js', category: 'Backend', proficiency: 80 },
  { id: 4, name: 'Python', category: 'Backend', proficiency: 75 },
  { id: 5, name: 'MongoDB', category: 'Database', proficiency: 70 },
  { id: 6, name: 'PostgreSQL', category: 'Database', proficiency: 75 },
  { id: 7, name: 'Docker', category: 'DevOps', proficiency: 65 },
  { id: 8, name: 'AWS', category: 'DevOps', proficiency: 70 },
];

export default function Skills() {
  const [skills] = useState<Skill[]>(sampleSkills);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-100 text-blue-800';
      case 'Backend':
        return 'bg-green-100 text-green-800';
      case 'Database':
        return 'bg-purple-100 text-purple-800';
      case 'DevOps':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Skills</h1>
          <p className="text-gray-600 mt-2">Manage your technical skills</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + Add Skill
        </button>
      </div>

      {categories.map((category) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
              {skills.filter((s) => s.category === category).length} skills
            </span>
          </div>
          
          <div className="space-y-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
