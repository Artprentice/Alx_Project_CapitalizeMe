from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from nltk import pos_tag, sent_tokenize, word_tokenize

app = FastAPI()
templates = Jinja2Templates(directory=".")

@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/capitalize")
async def capitalize(request: Request):
    form_data = await request.form()
    input_text = form_data["input-text"]
    capitalized_text = capitalize_text(input_text)
    return {"capitalized_text": capitalized_text}

def capitalize_text(text):
    sentences = sent_tokenize(text)
    capitalized_sentences = []

    for sentence in sentences:
        words = word_tokenize(sentence)
        tagged_words = pos_tag(words)

        capitalized_words = []
        for word, tag in tagged_words:
            if tag.startswith("N"):
                word = word.capitalize()
            capitalized_words.append(word)

        capitalized_sentence = " ".join(capitalized_words)
        capitalized_sentences.append(capitalized_sentence)

    capitalized_text = " ".join(capitalized_sentences)
    return capitalized_text
