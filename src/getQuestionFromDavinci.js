import { prompt } from "./prompt";

export async function getQuestionFromDavinci(topic) {

    const apiKey = process.env.OPEN_AI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/completions';

    const data = {
        prompt: prompt(topic),
        max_tokens: 200,
        temperature: 0.9,
        model: 'text-davinci-003'
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    let result = await response.json();
    let body = result.choices[0].text.trim();

    return body;
}
