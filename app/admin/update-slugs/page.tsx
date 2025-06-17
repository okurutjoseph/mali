'use client';

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function UpdateSlugs() {
  const updateSlugs = useMutation(api.posts.updateExistingSlugs);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await updateSlugs();
      setIsDone(true);
    } catch (error) {
      console.error('Error updating slugs:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Update Post Slugs</h1>
      <button
        onClick={handleUpdate}
        disabled={isUpdating || isDone}
        className={`px-4 py-2 rounded ${
          isDone
            ? 'bg-green-500 text-white'
            : isUpdating
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isDone ? 'Update Complete!' : isUpdating ? 'Updating...' : 'Update Slugs'}
      </button>
      {isDone && (
        <p className="mt-4 text-green-600">
          All posts have been updated with slugs successfully!
        </p>
      )}
    </div>
  );
} 