'use client';

import { SignIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 
                'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
              card: 'bg-white dark:bg-gray-800 shadow-xl',
              headerTitle: 'text-gray-900 dark:text-white',
              headerSubtitle: 'text-gray-600 dark:text-gray-400',
              socialButtonsBlockButton: 
                'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700',
              formFieldLabel: 'text-gray-900 dark:text-white',
              formFieldInput: 
                'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white',
              footerActionLink: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
              footerAction__signUp: 'hidden',
              footerAction: 'hidden',
              footer: 'hidden',
              formFieldAction: 'hidden',
              formFieldAction__signUp: 'hidden',
              formFieldAction__signIn: 'hidden',
              formFieldAction__forgotPassword: 'hidden',
            },
          }}
          routing="path"
          path="/sign-in"
          afterSignInUrl="/admin"
          redirectUrl="/admin"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  );
} 