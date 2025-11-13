import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import '../../styles/components/pages/forgotpasswordform.css';

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
    <div className="forgot-password-card">
      <h2 className="forgot-password-title">Welcome!</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="forgot-password-form">
        <div className="forgot-password-input-group">
          <input
            {...register('email')}
            type="email"
            placeholder="Enter Your E-Mail Id"
            className="forgot-password-input"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="forgot-password-error-msg">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="forgot-password-submit-btn"
        >
          {isSubmitting ? 'Sending...' : 'Get Reset Password Url'}
        </button>

        {submitMessage && (
          <div
            className={`forgot-password-alert ${
              submitMessage.type === 'success'
                ? 'forgot-password-alert-success'
                : 'forgot-password-alert-error'
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        
      </form>
    </div>
  );
}
