def is_anagram(test, original):
    chars = []
    test = test.lower()
    original = original.lower()
    if len(test) != len(original):
        return False
    else:
        for letter in original:
            chars.append(letter)
        for letter in test:
            if letter not in chars:
                return False
        return True
    print(chars)