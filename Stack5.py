# How to implement the stack by using list :
def prefix_sum(arr):
    n = len(arr)
    prefix_sum = [0] * n
    prefix_sum[0] = arr[0]
    
    for i in range(1, n):
        prefix_sum[i] = prefix_sum[i-1] + arr[i]
    
    return prefix_sum

# Example usage
arr = [1, 2, 3, 4, 5]
result = prefix_sum(arr)
print(result)  # Output: [1, 3, 6, 10, 15]
