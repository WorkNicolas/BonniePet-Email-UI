import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordFormProps {
  onLoginClick: () => void;
}

export function ForgotPasswordForm({ onLoginClick }: ForgotPasswordFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // TODO: Replace with actual API call
      console.log('Requesting password reset for:', data.email);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitMessage({
        type: 'success',
        text: 'Password reset link has been sent to your email!',
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send reset link. Please try again. Error: ' + error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/50">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Welcome!
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter Your E-Mail Id"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get Reset Password Url'}
        </button>

        {submitMessage && (
          <div
            className={`p-3 rounded-md text-center ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={onLoginClick}
            className="text-gray-600 hover:text-yellow-600 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
}
