# TASK L
# So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.
# Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

def reverseSentence(s):
    words = s.split()
    reversed_words = [word[::-1] for word in words]
    return " ".join(reversed_words)


print(reverseSentence("we like coding!"))
