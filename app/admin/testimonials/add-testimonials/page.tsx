'use client';

import { useState } from 'react';
import { UploadButton } from '../../../api/uploadthing';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useRouter } from 'next/navigation';

export default function AddTestimonial() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [companyLogoUrl, setCompanyLogoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const addTestimonial = useMutation(api.testimonials.addTestimonial);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    try {
      await addTestimonial({
        name,
        role,
        companyLogoUrl,
        description,
      });
      
      // Redirect to testimonials list page after successful save
      router.push('/admin/testimonials');
    } catch (error) {
      console.error('Error saving testimonial:', error);
      alert('Failed to save testimonial. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Testimonial</h1>
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
          <label className="block mb-2 font-semibold">Role</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={role}
            onChange={e => setRole(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Company Logo</label>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res: any) => {
              setCompanyLogoUrl(res[0].url);
            }}
            onUploadError={(err: Error) => alert(err.message)}
          />
          {companyLogoUrl && (
            <img src={companyLogoUrl} alt="Logo preview" className="mt-2 h-16" />
          )}
        </div>
        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-2 rounded-full transition"
          disabled={uploading}
        >
          {uploading ? 'Saving...' : 'Save Testimonial'}
        </button>
      </form>
    </div>
  );
}