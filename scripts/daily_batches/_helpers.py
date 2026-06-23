def q(question, options, correctIndex, explanation):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation}

def e(scripture, reference, thought, q1, q2, q3, q4):
    return {"scripture": scripture, "reference": reference, "thought": thought, "questions": [q1, q2, q3, q4]}
