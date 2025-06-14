'use client';

import { useState } from 'react';
import { UploadButton as UTUploadButton } from '@/app/api/uploadthing';

interface UploadButtonProps {
  onUploadComplete: (url: string) => void;
  onUploadError?: (error: Error) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ 
  onUploadComplete,
  onUploadError 
}) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2">
      <UTUploadButton
        endpoint="imageUploader"
        onUploadBegin={() => setIsUploading(true)}
        onClientUploadComplete={(res) => {
          setIsUploading(false);
          if (res?.[0]) {
            onUploadComplete(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          setIsUploading(false);
          console.error('Upload error:', error);
          onUploadError?.(error);
        }}
        appearance={{
          button: "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors",
          allowedContent: "text-sm text-gray-600 mt-1"
        }}
      />
      {isUploading && (
        <div className="text-sm text-gray-600 mt-1">
          Uploading...
        </div>
      )}
    </div>
  );
};

export default UploadButton; 