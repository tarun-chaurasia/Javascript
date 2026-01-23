n=123
# print(len(str(n))) #Output 5

rev=0
while n>0:
    # digit=n%10
    rev=rev*10+n
    n=n//10
print(rev)