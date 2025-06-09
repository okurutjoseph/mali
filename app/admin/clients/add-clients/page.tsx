'use client';

import { useState } from 'react';
import { UploadButton } from '../../../api/uploadthing';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useRouter } from 'next/navigation';

export default function AddClient() {
  const [name, setName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const addClient = useMutation(api.clients.addClient);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    try {
      await addClient({
        name,
        logoUrl,
      });
      
      // Redirect to clients list page after successful save
      router.push('/admin/clients');
    } catch (error) {
      console.error('Error saving client:', error);
      alert('Failed to save client. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Client</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <label className="block mb-2 font-semibold">Client Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Logo</label>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res: any) => {
              setLogoUrl(res[0].url);
            }}
            onUploadError={(err: Error) => alert(err.message)}
          />
          {logoUrl && (
            <img src={logoUrl} alt="Logo preview" className="mt-2 h-16" />
          )}
        </div>
        <button
          type="submit"
          className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-2 rounded-full transition"
          disabled={uploading}
        >
          {uploading ? 'Saving...' : 'Save Client'}
        </button>
      </form>
    </div>
  );
}