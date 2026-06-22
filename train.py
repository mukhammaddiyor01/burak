# TASK W
# Arrayni berilgan uzunlikda bo'laklarga ajratib qaytarsin.
# Masalan: chunkArray([1, 2, 3, 4, 5], 2) return [[1, 2], [3, 4], [5]]

def chunkArray(arr, size):
    result = []
    for i in range(0, len(arr), size):
        result.append(arr[i:i+size])
    return result


print(chunkArray([1, 2, 3, 4, 5], 2))

# # TASK V
# # Stringdagi har bir harf necha marta takrorlanganini object sifatida qaytarsin.
# # Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

# def countChars(string):
#     result = {}

#     for char in string:
#         if char in result:
#             result[char] += 1
#         else:
#             result[char] = 1

#     return result


# print(countChars("hello"))

# # TASK T
# # Ikkita arrayni qabul qilib, ularni birlashtirib tartiblangan holda qaytarsin.
# # Masalan: mergeSortedArrays([0, 3, 4], [4, 6]) return [0, 3, 4, 4, 6]

# def mergeSortedArrays(arr1, arr2):
#     merged = arr1 + arr2
#     merged.sort()
#     return merged


# print(mergeSortedArrays([0, 3, 4], [4, 6]))

# # TASK S
# # Array ichidagi tushib qolgan sonni topib qaytarsin.
# # Masalan: missingNumber([3, 0, 1]) return 2

# def missingNumber(nums):
#     n = len(nums)

#     for num in range(n + 1):
#         if num not in nums:
#             return num


# print(missingNumber([3, 0, 1]))


# # TASK R
# # "1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.
# # Masalan: calculate("1 + 3") return 4

# def calculate(expression):
#     parts = expression.split()
#     num1 = int(parts[0])
#     operator = parts[1]
#     num2 = int(parts[2])

#     if operator == "+":
#         return num1 + num2
#     elif operator == "-":
#         return num1 - num2
#     elif operator == "*":
#         return num1 * num2
#     elif operator == "/":
#         return num1 // num2


# print(calculate("1 + 3"))

# # TASK Q
# # Objectda berilgan string propertysi borligini tekshirsin.
# # Masalan: hasProperty({name: "BMW"}, "name") return true

# def has_property(obj, prop):
#     return prop in obj


# print(has_property({"name": "BMW"}, "name"))

# # TASK P
# # Objectni nested array sifatida convert qilib qaytarsin.
# # Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]

# def objectToArray(obj):
#     result = []

#     for key in obj:
#         result.append([key, obj[key]])

#     return result

# print(objectToArray({"a": 10, "b": 20}))

# # TASK O
# # Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin.
# # Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

# def calculateSumOfNumbers(arr):
#     total = 0
#     for element in arr:
#         if type(element) == bool:
#             continue
#         elif type(element) in (int, float):
#             total += element
#     return total

# print(calculateSumOfNumbers([10, "10", {"son": 10}, True, 35]))

# # TASK N

# # Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.
# # Masalan: palindromCheck("dad") return true

# def palindromCheck(s):
#     teskari = s[::-1]
#     return s == teskari

# print(palindromCheck("dad"))
# print(palindromCheck("hello"))
# print(palindromCheck("racecar"))

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
