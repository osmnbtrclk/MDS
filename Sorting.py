import time
import random
from random import randint
import numpy as np
# https://en.wikipedia.org/wiki/Counting_sort
# function CountingSort(input, k)    
#     count ← array of k + 1 zeros
#     output ← array of same length as input    
#     for i = 0 to length(input) - 1 do
#         j = key(input[i])
#         count[j] += 1
#     for i = 1 to k do
#         count[i] += count[i - 1]
#     for i = length(input) - 1 downto 0 do
#         j = key(input[i])
#         count[j] -= 1
#         output[count[j]] = input[i]
#     return output


def countSort(array):
    size = len(array)
    output = [0] * size
    k=max(array)

    count = np.zeros(k+1)

    for i in range(0, size):
        count[array[i]] += 1

    for i in range(1, k):
        count[i] += count[i - 1]

    for i in range(len(array)-1,-1,-1):
        output[int(count[array[i]])-1]=array[i]
    return output    




def pigeonholeSort(array):
    my_min = min(array)
    my_max = max(array)
    size = my_max - my_min + 1
    holes = [0] * size
    for x in array:
        holes[x - my_min] += 1
    i = 0
    for count in range(size):
        while holes[count] > 0:
            holes[count] -= 1
            array[i] = count + my_min
            i += 1  
    return array        

a=[]
for i in range(1000000):
    a.append(random.randint(1, 100))
    
start = time.time()
ans = countSort((a))
end = time.time()

print('Sayıları sayarak sıralamak ' + str(end-start) +' saniye sürdü')

start2 = time.time()
ans2 = pigeonholeSort((a))
end2 = time.time()

print('Sayıları güvercin yuvası ile sıralamak ' + str(end2-start2) +' saniye sürdü')
