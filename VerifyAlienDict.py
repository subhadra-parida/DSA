def char_to_index(C):
    return ord(C) - ord('A')

def is_lexicographic(key, n, words):
    decorder = [0] * 26
    for i in range(len(key)):
        decorder[char_to_index(key[i])] = i
    
    for i in range(n - 1):
        j = 0
        # Compare characters one by one until there's a difference or until one word is finished
        while j != len(words[i]) and j != len(words[i + 1]) and words[i][j] == words[i + 1][j]:
            j += 1
        
        # If the first word is fully traversed, it is considered smaller
        if j == len(words[i]):
            continue
        # If the second word is fully traversed, the order is wrong
        if j == len(words[i + 1]):
            return 0
        # If characters don't match lexicographically, check the decorder
        if decorder[char_to_index(words[i][j])] > decorder[char_to_index(words[i + 1][j])]:
            return 0

    return 1

# Input section
key = input("Enter any word (custom alphabet order) - ").upper()
n = int(input("Enter any number of words to check - "))
words = []
for _ in range(n):
    words.append(input().upper())

# Check if the words are in lexicographic order according to the given key
out_ = is_lexicographic(key, n, words)
print(out_)
