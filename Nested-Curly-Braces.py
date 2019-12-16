#Name:Kashif Hussain
#ID: 1001409065
#Date: 11/21/2019
#OS: Windows 10
filename='input_EC.txt' #provide the input filename
with open(filename,'r',newline='') as fp: #open the provided file
    comment='//'
    line=fp.readline() #start reading the file, line by line
    count=0 #intialize the counter to 0
    ignore=False #flag to ignore curly braces if needed
    multiComment=False #flag to signal if there is a multiline comment
    oldCount=0
    while line:
        line1=line.strip() #taking away whitespaces and indents
        oldCount = count
        for i in range(0, len(line1)): #iterating over the characters in a line
            ch = line1[i] #get each character one at a time       
            if ch == '/' and i < len(line1) - 1: #if there exits a /
                nch = line1[i+1] #check next character
                if nch == '/': #if the next character is also /
                    break #means it is a comment, no need to look for curly bracea
                elif nch == '*': #if * is the next character
                    multiComment = True #it signifies the beginning of a comment
                    ignore = True #ignore flag enabled
                    
            elif ch == '*' and i < len(line1) - 1: #if a character is *
                nch = line1[i+1] #access next character in line
                if nch == '/': #search for next character if it is a /
                    multiComment = False # means the comment is ending
                    ignore = False # do not ignore other characters after this

            elif ch == '"': #if character is " quotation mark
                if not multiComment: #if it is already not in a comment
                    ignore = not ignore 
                    
            elif ch == '{': #if the character is the opening curly brace
                if not ignore: # if the ignore flag is false
                    count += 1 #increment the counter
                    oldCount = count
            elif ch == '}': #if the character is a closing curly brace
                if not ignore: #if ignore flag is false
                    count -= 1 #decrement 

        print(oldCount, end='') #print the counts of curly braces
        for i in range(0, oldCount):
            print('  ', end='')
        print(line1) #print the java line code
        line = fp.readline() #read next line



        
