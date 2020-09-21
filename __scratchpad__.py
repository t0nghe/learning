import heapq

def fKLHeap(nums, k):
    pq = nums[:k]
    print(pq)
    heapq.heapify(pq)
    print(pq)
    for x in nums[k:]:
        print(x)
        heapq.heappush(pq, x)
        print(pq)
        heapq.heappop(pq)
        print(pq)

    return pq[0]

nums = [5, 7 , 3, 9, 1]
k = 3
# print(fKLHeap(nums, k))

# list1 = [7, 6, 5, 4, 3, 2, 1, 0]
heapq.heapify(nums)
a = heapq.nlargest(k, nums)
print(a[-1])