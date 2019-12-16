/*
Name: Kashif Hussain
ID:1001409065
Date: 10/3/2019
OS: Windows, Omega
*/

#include <unistd.h>
#include <sys/types.h>
#include <dirent.h>
#include <iostream>
#include <stdio.h>
#include <string.h>
#include <sys/stat.h>
#include <stdlib.h>

unsigned int totalsize = 0;
//global variable to track the running sum of all file sizes
unsigned long int size=0; // to show size of each file
 void dirTraverse(const char* start)
{
    struct dirent *dt; 
//pointer of dirent structure to traverse directory
    DIR *dir; //pointer for Directory to open requested directory
    
   if (!(dir = opendir(start)))
//if unable to open requested directory
    {
        std::cout<< "Can not access requested path\n";
        //print error message
        return;
    }

    while ((dt = readdir(dir)) != NULL)
//loop to continue traversing directory until completely traversed
     {
        if (dt->d_type == DT_DIR)// if encounters a directory
        {
            char path[4096];
            if (strcmp(dt->d_name, ".") == 0 || strcmp(dt->d_name,"..") == 0) //ignoring . and .. directories
             {
                continue;
             }
             snprintf(path, sizeof(path), "%s/%s", start, dt->d_name);//saving directory path into a new array for use later
            std::cout<<"["<<dt->d_name<<"]\n"; //print directory name
            dirTraverse(path); //recursive call to traverse the directory for files

            
        } 
         else // if encounters a fire
         {  
            struct stat buf; // stat structure variable for use in acquiring file sizes.
            char fileName[4096];
            snprintf(fileName, sizeof(fileName), "%s/%s", start, dt->d_name); //append directory path to file in new array.
           
            std::cout<<dt->d_name<<"\n"; //print filename
            stat(fileName,&buf); // buf takes in details of the file
            size=buf.st_size; // get file size for current file
            std::cout<<"Size for above file for C++ is "<<size<<"\n"; //print current file's size
            totalsize+=buf.st_size; //add to running sum of file sizes.

 
        }
    }
    closedir(dir); //close directory after traversing the required directory and all subsequent directories and files.
}
    
    

int main() 
{
    dirTraverse("."); // call function on current directory.
    std::cout<<"Total Size via C++ program is " <<totalsize<<"\n";
    return 0;
}