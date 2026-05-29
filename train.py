
# TASK N

# Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.
# Masalan: palindromCheck("dad") return true

def palindromCheck(s):
    teskari = s[::-1]
    return s == teskari


print(palindromCheck("dad"))
print(palindromCheck("hello"))
print(palindromCheck("racecar"))


# # TASK M
# # Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.
# # Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...]

# def getSquareNumbers(arr):
#     result = []
#     for num in arr:
#         obj = {"number": num, "square": num**2}
#         result.append(obj)
#     return result


# print(getSquareNumbers([1, 2, 3]))


# # TASK L
# # So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.
# # Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

# def reverseSentence(s):
#     words = s.split()
#     reversed_words = [word[::-1] for word in words]
#     return " ".join(reversed_words)


# print(reverseSentence("we like coding!"))
