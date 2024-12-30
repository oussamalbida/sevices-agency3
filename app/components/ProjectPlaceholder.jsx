'use client';

const ProjectPlaceholder = ({ type, index }) => {
  const gradients = {
    websites: [
      'from-blue-500 to-purple-500',
      'from-purple-500 to-pink-500',
      'from-pink-500 to-orange-500'
    ],
    videos: [
      'from-green-500 to-teal-500',
      'from-teal-500 to-blue-500',
      'from-blue-500 to-indigo-500'
    ],
    logos: [
      'from-red-500 to-pink-500',
      'from-yellow-500 to-red-500',
      'from-orange-500 to-yellow-500'
    ]
  };

  return (
    <div className={`w-full h-full aspect-video rounded-lg bg-gradient-to-br ${gradients[type][index % 3]} flex items-center justify-center`}>
      <span className="text-white text-xl font-bold opacity-50">
        {type.charAt(0).toUpperCase() + type.slice(1)} Project {index + 1}
      </span>
    </div>
  );
};

export default ProjectPlaceholder;
