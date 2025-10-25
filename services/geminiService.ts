import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are an expert in formatting notes using markdown. Your task is to take the user's raw text and reformat it into clean, well-structured markdown.

Follow these rules:
1. Add appropriate headers (e.g., #, ##, ###) for titles and sections.
2. Format lists as bullet points (-) or numbered lists (1.).
3. Identify any code snippets and wrap them in markdown code blocks (\`\`\`language\n...\`\`\`). If the language is not obvious, use a generic identifier like \`code\`.
4. Correct any minor grammatical errors or typos to improve clarity.
5. Structure the text for maximum readability and clarity.
6. Do not add any new content that wasn't in the original text. Only reformat the existing content.
7. Return ONLY the formatted markdown text. Do not include any introductory phrases like "Here is the formatted note:" or any other conversational text. Just the pure markdown.`;

export const formatNote = async (rawText: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: rawText,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error formatting note:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to format note: ${error.message}`);
        }
        throw new Error("An unknown error occurred while formatting the note.");
    }
};
