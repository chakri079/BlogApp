# def fun(a,i,n,m):
#     if(n==0):
#         return
#     if i<n:
#         if a[i]>m:
#             m=a[i] 
#         fun(a,i+1,n,m)
#     else:
#         t=a[n-1]
#         a[n-1]=m 
#         x=a.index(m)
#         a[x]=t 
#         fun(a,0,n-1,0)
    
# a=[3,2,8,7,5,2,1,4]
# fun(a,0,8,0)
# print(a)
def f(arr,p):
    if not arr:
        print(p)
        return

    ch=arr[0]
    f(arr[1:],p+[ch])
    f(arr[1:],p)
    
    
arr=[1,2,3]
f(arr,[])
