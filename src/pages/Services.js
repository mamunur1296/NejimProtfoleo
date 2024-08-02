import React from 'react'


const services = [
  { id: 1, title: 'Web Development', description: 'Building responsive and modern websites.' },
  { id: 2, title: 'Mobile App Development', description: 'Creating mobile applications for iOS and Android.' },
  { id: 3, title: 'UI/UX Design', description: 'Designing user-friendly interfaces and experiences.' },
  { id: 4, title: 'Digital Marketing', description: 'Promoting your business online through various channels.' },
  { id: 5, title: 'SEO Services', description: 'Improving your website’s visibility on search engines.' },
  { id: 6, title: 'Cloud Services', description: 'Providing cloud solutions and infrastructure.' },
];

const Services = () => {
  return (
    <div className="container mx-auto p-8">
      <div class="mb-8">
            <h1 class="text-3xl font-bold text-blue-700">Our Services</h1>
            <hr className="border-2 border-green-600 w-20 mb-5 font-bold" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
