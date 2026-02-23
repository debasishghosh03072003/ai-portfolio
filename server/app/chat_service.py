import requests
from urllib3.util import Retry
from requests.adapters import HTTPAdapter
from .resume_context import resume_context
from dotenv import load_dotenv
import os

load_dotenv()

session = requests.Session()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"

# Retry strategy
retries = Retry(total=3, backoff_factor=0.3)
adapter = HTTPAdapter(max_retries=retries)

session.mount("https://", adapter)

def ask_ai(user_message: str):
    try:
        prompt = f"""
You are an AI resume assistant.
Answer ONLY from the provided resume context.

Resume:
{resume_context}

User Question:
{user_message}
"""

        response = session.post(
            GROQ_URL,
            headers={
                "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "llama-3.1-8b-instant",
                "messages": [
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.5,
                "max_tokens": 300
            },
            timeout=10
        )

        if response.status_code != 200:
            return f"Groq API Error: {response.text}"

        data = response.json()
        return data["choices"][0]["message"]["content"]

    except Exception as e:
        return f"Server Error: {str(e)}"