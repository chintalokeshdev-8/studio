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
        'An AI-powered analysis of the symptoms, providing potential health concerns and recommendations.'
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
  prompt: `You are an AI-powered health assistant. A user will describe their symptoms to you, and you will provide an analysis of potential health concerns.

  Symptoms: {{{symptoms}}}

  Analysis:`,
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
