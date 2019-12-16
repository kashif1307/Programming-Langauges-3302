#Name: Kashif Hussain
#ID:1001409065
#Date: 10/3/2019
#OS: Windows, Omega

import os #importing os module
totalsize=0; #creating a variable to keep running sum of file sizes
for root, dirs, files in os.walk("."): # traversing the directory for all files, starting from "."
   for f in files: 
     fp= os.path.join(root, f) #joining path components of root directory and its subsequent files
     #if not os.path.islink(fp): # checking if a file path has not yet been linked, then this program will get its size
     #if os.path.exists(fp):
        # totalsize += os.path.getsize(fp) #summing up the file sizes
     if os.path.exists(fp): #checking if a path exists to the file
         print("File: ",fp," size=",os.lstat(fp).st_size)#prints filenames and their respective sizes
         totalsize += os.lstat(fp).st_size #summing up the file sizes
         #totalsize += os.path.getsize(fp)
                       
print(totalsize) #print total size of all files summed up.
