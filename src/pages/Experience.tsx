import { useState } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

const sampleExperience: Experience[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: '2024-12',
    description: 'Led development of multiple web applications using React, Node.js, and AWS.',
    current: true,
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Startup XYZ',
    location: 'New York, NY',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Developed and maintained e-commerce platform serving 10k+ users.',
    current: false,
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Software Solutions Ltd.',
    location: 'Remote',
    startDate: '2019-01',
    endDate: '2020-05',
    description: 'Worked on various client projects using JavaScript, React, and Node.js.',
    current: false,
  },
];

export default function Experience() {
  const [experiences] = useState<Experience[]>(sampleExperience);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Experience</h1>
          <p className="text-gray-600 mt-2">Manage your work experience</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  {exp.current && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-700 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-600 mt-1">
                  📍 {exp.location} • {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Edit
                </button>
                <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                  Delete
                </button>
              </div>
            </div>
            
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
