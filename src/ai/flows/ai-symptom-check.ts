'use server';
/**
 * @fileOverview This file defines a Genkit flow for AI-powered symptom analysis.
 *
 * The flow allows users to input their symptoms via text or voice (in Telugu or English)
 * and receive an AI-powered analysis to understand potential health concerns.
 *
 * @exports {
 *   analyzeSymptoms - The main function to trigger the symptom analysis flow.
 *   SymptomAnalysisInput - The input type for the analyzeSymptoms function.
 *   SymptomAnalysisOutput - The return type for the analyzeSymptoms function.
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Input schema for the symptom analysis flow.
 */
const SymptomAnalysisInputSchema = z.object({
  symptoms:
    z.string()
      .describe(
        'A description of the symptoms experienced by the user, which can be in Telugu or English.'
      ),
});

/**
 * Type definition for the input to the symptom analysis flow.
 */
export type SymptomAnalysisInput = z.infer<typeof SymptomAnalysisInputSchema>;

/**
 * Output schema for the symptom analysis flow.
 */
const SymptomAnalysisOutputSchema = z.object({
  analysis:
    z.string()
      .describe(
        'An AI-powered analysis of the symptoms, providing potential health concerns and recommendations in about 10 simple, easy-to-understand lines. It should include natural first-aid advice and recommend relevant tests.'
      ),
});

/**
 * Type definition for the output of the symptom analysis flow.
 */
export type SymptomAnalysisOutput = z.infer<typeof SymptomAnalysisOutputSchema>;

/**
 * Analyzes the provided symptoms and returns an AI-powered analysis.
 * @param input - The input containing the user-provided symptoms.
 * @returns A promise resolving to the symptom analysis output.
 */
export async function analyzeSymptoms(input: SymptomAnalysisInput): Promise<SymptomAnalysisOutput> {
  return analyzeSymptomsFlow(input);
}

/**
 * Prompt definition for the symptom analysis.
 */
const symptomAnalysisPrompt = ai.definePrompt({
  name: 'symptomAnalysisPrompt',
  input: {schema: SymptomAnalysisInputSchema},
  output: {schema: SymptomAnalysisOutputSchema},
  prompt: `You are an AI-powered health assistant. Analyze the user's symptoms and provide a simple, easy-to-understand analysis of about 10 lines.

Your response should include:
- A potential, non-alarming reason for the symptoms.
- Simple, natural first-aid advice.
- Recommended diagnostic tests.
- A clear disclaimer to consult a doctor.

User Symptoms: {{{symptoms}}}
`,
});

/**
 * Genkit flow for analyzing symptoms.
 */
const analyzeSymptomsFlow = ai.defineFlow(
  {
    name: 'analyzeSymptomsFlow',
    inputSchema: SymptomAnalysisInputSchema,
    outputSchema: SymptomAnalysisOutputSchema,
  },
  async input => {
    const {output} = await symptomAnalysisPrompt(input);
    return output!;
  }
);
