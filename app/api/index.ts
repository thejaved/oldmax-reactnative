const OPENAI_API_KEY = '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';

export const generateImage = async (description: string) => {
  try {
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: description,
        }),
      },
    );

    return await response.json();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
};
