import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapPin, Clock } from 'lucide-react';

function RecentReports() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5050/api/all-crime-post')
      .then((response) => {
        // Sort posts so newest comes first
        const sortedPosts = response.data.sort((a, b) => new Date(b.time) - new Date(a.time));
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching crime posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Recent Reports</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed about what's happening in your community with real-time incident reports and updates.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-white">Loading reports...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 6).map((post) => (
              <div key={post._id} className="bg-black rounded-lg overflow-hidden shadow-lg transition-transform">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-red-500 text-sm font-semibold">{post.type}</span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      {new Date(post.time).toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.description}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {post.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            View All Reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentReports;
