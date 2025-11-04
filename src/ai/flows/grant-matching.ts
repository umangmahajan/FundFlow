// GrantMatching flow to recommend relevant government schemes to startups.
'use server';
/**
 * @fileOverview A Grant Matching AI agent.
 *
 * - grantMatching - A function that handles the grant matching process.
 * - GrantMatchingInput - The input type for the grantMatching function.
 * - GrantMatchingOutput - The return type for the grantMatching function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GrantMatchingInputSchema = z.object({
  startupProfile: z
    .string()
    .describe('A detailed profile of the startup, including industry, stage, and needs.'),
});
export type GrantMatchingInput = z.infer<typeof GrantMatchingInputSchema>;

const GrantMatchingOutputSchema = z.object({
  recommendedSchemes: z
    .string()
    .describe('A list of government schemes recommended for the startup.'),
});
export type GrantMatchingOutput = z.infer<typeof GrantMatchingOutputSchema>;

export async function grantMatching(input: GrantMatchingInput): Promise<GrantMatchingOutput> {
  return grantMatchingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'grantMatchingPrompt',
  input: {schema: GrantMatchingInputSchema},
  output: {schema: GrantMatchingOutputSchema},
  prompt: `You are an expert in matching startups with relevant government schemes.

  Given the following startup profile, recommend a list of government schemes that would be a good fit for the startup.

  Startup Profile: {{{startupProfile}}}
  \n  Return a string array of government schemes. Each scheme should be described on one line.
`,
});

const grantMatchingFlow = ai.defineFlow(
  {
    name: 'grantMatchingFlow',
    inputSchema: GrantMatchingInputSchema,
    outputSchema: GrantMatchingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
