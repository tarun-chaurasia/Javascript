# n=123
# # print(len(str(n))) #Output 5

# rev=0
# while n>0:
#     # digit=n%10
#     rev=rev*10+n
#     n=n//10
# print(rev)


# arr1 = np.array([[1, 2],
#                  [4, 5]])
# arr2 = np.array([[7, 8],
#                  [10, 11]])
# print(arr1)
# print(arr2)
# import numpy as np
matrix =    ([[8,0,7],
              [5,6,2],
              [3,4,9]])

# # Row wise transversal
# for r in range(3):
#     for c in range(3):
#         print(matrix[r][c], end=" ")
#     print()

# # # Column wise transversal
# for c in range(3):
#     for r in range(3):
#         print((sum([matrix[r][c]])), end=" ")
#     print()

# Diagonal Transversal
# for r in range(3):
#     for c in range(3):
#         if r == c:
#             print(arr[r][c], end=" ")
#     print()

#upper triangular
# for r in range(3):
#     for c in range(3):
#         if r < c:
#             print(matrix[r][c], end=" ")
#     print()

# # lower triangular
# for r in range(3):
#     for c in range(3):
#         if r > c:
#             print(matrix[r][c], end=" ")
#     print()

arr=([1,2,3],
     [4,5,6],
     [7,8,9])

rows=len(arr)
cols=len(arr[0])

for c in range(cols):
    for r in range(rows -1, -1, -1):
        print(arr[r][c], end=" ")
    print()
# print(arr,end=" ")
