# In Data Structures and Algorithms (DSA), a stack is a linear data structure that follows the Last In, First Out (LIFO) principle. 
# This means that the last element added to the stack will be the first one to be removed. Here are some key concepts and operations related to stacks....

# Some basic Operations in Stack...
# push()
# pop()
# isEmpty()
# isFull

num = []
num.append(2)
num.append(4)
num.append(6)
num.append(3)
print(num)
print(num.pop())
num.pop()
print(num.pop())
print(num)
print(num.pop())




def push(num, n):
    num.append(n)
    return num

def pop(num):
    if isEmpty(num):
        print("Stack is Empty")
        return False
    else:
        num.pop()
        return num

def isEmpty(num):
    if not num:
        return True
    else:
        return False


num = []
push(num, 2)
push(num, 5)
push(num, 7)
# print(num)

pop(num)
pop(num)
pop(num)
print(num)
