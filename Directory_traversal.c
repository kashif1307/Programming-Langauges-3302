/*
Name: Kashif Hussain
ID:1001409065
Date: 10/3/2019
OS: Windows, Omega
*/


#include <unistd.h>
#include <sys/types.h>
#include <dirent.h>
#include <stdio.h>
#include <string.h>
#include <sys/stat.h>
#include <stdlib.h>

unsigned long int totalsize = 0;  //global variable to keep track of the running sum of all file sizes
unsigned long int size=0; //variable to use in individual file size printing.
void dirTraverse(const char *start) // function to traverse directories and access file sizes
{
    DIR *dir; // Directory pointer to open access to the requested directory
    struct dirent *dt; // dirent struct pointer to read directory and file properties
    if((dir=opendir(start))==NULL) // if the program is unable to open the requested (current ) directory,
        {
         printf("Could not access required directory"); // print an error message that the current directory can not be accessed.
         return;
        }

    while ((dt = readdir(dir)) != NULL)  // a loop to keep iterating until the current directory has been completely traversed
       {
        if (dt->d_type == DT_DIR) //if encounters a directory
          {
            char dirpath[4096];
            if (strcmp(dt->d_name, ".") == 0 || strcmp(dt->d_name,"..") == 0) // ignoring . and .. directories
             {
                continue;
             }
            snprintf(dirpath, sizeof(dirpath), "%s/%s", start, dt->d_name); // copying directory path into a char array to be used in a recursive function call to traverse the subdirectory
            printf("[%s]\n", dt->d_name); //print directory name
            dirTraverse(dirpath); // calling the function to traverse the directory for its files.
         } 
         else //if encounters a file
          {
             struct stat buf; // stat struct variable to access file sizes
             char fileName[4096]; // creating an array of char
             printf("%s\n",dt->d_name); //print file name
             snprintf(fileName, sizeof(fileName), "%s/%s", start, dt->d_name); // the array of char is used to append directory path to files to allow access to those file sizes            
             stat(fileName,&buf); //using stat function to get details about the file to be fed into buffer
             size=buf.st_size; // get size of current file into size variable
             printf("Size for above file in C is %lu\n",size); //print size of current file
             totalsize+=buf.st_size;
 //adding size of the traversed file to the running sum of file sizes.
          
           
          }
        }
      closedir(dir); //close directory after the requested directory has been completely traversed.
     }

int main()
 {
    dirTraverse("."); // function call with its argument
    printf("Total size via C program is %lu\n",totalsize); // printing the total size of the file
    return 0;
 }
