'use server';
/**
 * @fileOverview Summarizes grant applications for auditors.
 *
 * - summarizeGrantApplication - A function that summarizes grant applications.
 * - SummarizeGrantApplicationInput - The input type for the summarizeGrantApplication function.
 * - SummarizeGrantApplicationOutput - The return type for the summarizeGrantApplication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGrantApplicationInputSchema = z.object({
  applicationText: z
    .string()
    .describe('The text of the grant application to summarize.'),
});
export type SummarizeGrantApplicationInput = z.infer<
  typeof SummarizeGrantApplicationInputSchema
>;

const SummarizeGrantApplicationOutputSchema = z.object({
  summary: z.string().describe('A summary of the grant application.'),
});
export type SummarizeGrantApplicationOutput = z.infer<
  typeof SummarizeGrantApplicationOutputSchema
>;

export async function summarizeGrantApplication(
  input: SummarizeGrantApplicationInput
): Promise<SummarizeGrantApplicationOutput> {
  return summarizeGrantApplicationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGrantApplicationPrompt',
  input: {schema: SummarizeGrantApplicationInputSchema},
  output: {schema: SummarizeGrantApplicationOutputSchema},
  prompt: `Summarize the following grant application text for auditing purposes:\n\n{{{applicationText}}}`,
});

const summarizeGrantApplicationFlow = ai.defineFlow(
  {
    name: 'summarizeGrantApplicationFlow',
    inputSchema: SummarizeGrantApplicationInputSchema,
    outputSchema: SummarizeGrantApplicationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
