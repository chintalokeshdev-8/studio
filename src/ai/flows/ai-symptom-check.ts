
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
        'A description of the symptoms experienced by the user, which can be in English or Telugu. It can be a comma-separated list or a free-form text.'
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
        'An AI-powered analysis of the symptoms. Provide a structured response: 1. **Initial Analysis**: A brief, non-alarming analysis of the symptoms. 2. **Suggested First Aid**: Simple, natural first-aid or home care advice. 3. **Recommended Diet Plan**: A top-level diet plan (e.g., "focus on liquids and easily digestible foods"). 4. **Recommended Tests**: Suggest relevant diagnostic tests. 5. **Disclaimer**: A strong, clear disclaimer to consult a doctor for a proper diagnosis.'
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
  prompt: `You are an AI-powered health assistant. Your goal is to provide a helpful, preliminary analysis of a user's symptoms. The user can provide symptoms in English or Telugu. Respond in simple, easy-to-understand language.

Analyze the user's symptoms and provide a structured response in about 10-12 lines total, covering the following points:

1.  **Initial Analysis**: Start with a brief, non-alarming potential reason for the symptoms.
2.  **Suggested First Aid**: Provide 2-3 simple, natural first-aid or home care tips.
3.  **Recommended Diet Plan**: Suggest a top-level diet plan (e.g., "focus on liquids and easily digestible foods").
4.  **Recommended Tests**: Recommend 1-2 relevant diagnostic tests for discussion with a doctor.
5.  **Disclaimer**: Conclude with a strong, clear disclaimer emphasizing that this is not a medical diagnosis and that the user must consult a qualified doctor for any health concerns.

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
