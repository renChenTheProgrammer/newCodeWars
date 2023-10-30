#given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

def alphabet_position(text):
    alp = "abcdefghijklmnopqrstuvwxyz"
    return " ".join([str(alp.find(c) + 1) for c in text.lower() if c in alp])