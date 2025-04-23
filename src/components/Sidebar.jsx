import React from 'react';
import { SuggestedUser } from './SuggestedUser';

const topics = ['Technology', 'Writing', 'Politics', 'Relationships', 'Cryptocurrency', 'Python', 'Money'];

const suggestedUsers = [
    {
      name: 'Andrew Zuo',
      description: 'Join me on my language learning journey with Litany, ...',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Journal Kita',
      description: 'Publication - A vessel for Indonesian writers to share their stories.',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Vina amoris',
      description: 'the tortured poet',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

export const Sidebar = () => (
  <aside className="w-80 pl-8">
    <div className="sticky top-4">
      <h2 className="font-semibold mt-5 mb-4">Recommended topics</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {topics.map((topic) => (
          <button
            key={topic}
            className="px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-gray-200"
          >
            {topic}
          </button>
        ))}
      </div>
      <div className="border-gray-200 pt-8">
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="font-semibold mb-4">Who to follow</h2>
          {suggestedUsers.map((user) => (
            <SuggestedUser key={user.name} {...user} />
          ))}

        </section>
      </div>
    </div>
  </aside>
);
