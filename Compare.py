import filecmp
import difflib
f1 = open("text.txt", "r")
f2 = open("complicated.txt", "r")
f3 = open("fix.txt", "w")

file_1_text = f1.readlines()


data = f2.read()
data = data.replace("|", "")
data = data.replace("*", "")
data = data.replace("/", "")
data = data.replace("?", "")
data = data.replace("(", "")
data = data.replace(")", "")

for a, b in zip(file_1_text, data):
    if a != b:
        sa =a+b

f3.write(sa)
f3.close()
