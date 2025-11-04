'use server';

import { grantMatching } from '@/ai/flows/grant-matching';
import { z } from 'zod';

const schema = z.object({
  profile: z.string().min(50, { message: 'Profile must be at least 50 characters long.' }),
});

export type FormState = {
  schemes: string[];
  message: string;
};

export async function findMatchingGrants(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Validate the form data
  const validatedFields = schema.safeParse({
    profile: formData.get('profile'),
  });

  if (!validatedFields.success) {
    return {
      schemes: [],
      message: validatedFields.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    const result = await grantMatching({ startupProfile: validatedFields.data.profile });
    const schemes = result.recommendedSchemes.split('\n').filter(s => s.trim() !== '');
    return { schemes, message: 'success' };
  } catch (error) {
    console.error('Grant matching error:', error);
    return { 
        schemes: [],
        message: 'An unexpected error occurred. Please try again later.' 
    };
  }
}