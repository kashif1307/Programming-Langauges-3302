#Name: Kashif Hussain
#ID: 1001409065
#Date: 10/19/2019
#OS: Windows 10

operators={
    "+":(lambda a, b: a + b),
    "-":(lambda a, b: a - b),
    "*":(lambda a, b: a * b),
    "/":(lambda a, b: a / b)
} #defining specific arithemtic operations for use.

def RPN(rpn):
    store=[] #creating a list to hold in operands and operators for calculation
    rpn_use=rpn.split() #splitting contents of lines of file with space as delimiter
    for it in rpn_use: #running loop over a line of RPN expression from file
        if it in operators: #if comes across an operator
            if(len(store)<2):
                print('Not enough values in stack to compute accurate result, check source data')
                store.clear()
                return
            val1=store.pop() # pop top value from list
            val2=store.pop() # pop new top value from list
            store.append(operators[it](val1,val2)) #append the result of performed calculation to the list
            
        else: #if comes across a numeric digit
             try:
                value=int(it) #ensure the numeric digit is int
                store.append(value) #add the numeric digit to the list
             except ValueError:
                print('Non-numeric data found in file,will trash expression') #if comes across an unidentified character
                store.clear() # as a consequence of not being able to perform accurate calculation, clear the list
                return
           
            
    return store.pop() #pops the total result calculated in the list
    
   
filepath = 'input_RPN.txt' #will search file within same folder
with open(filepath) as fp: #opens file, designated as fp, will close file automatically after the code below is executed
   line = fp.readline()
   while line: #reads contents of file line by line
       print(RPN(line)) # performs RPN function on file data, line by line
       line = fp.readline() # reads next line
      
    
