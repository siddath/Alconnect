import sqlite3
from tkinter import *
conn=sqlite3.connect("C:\Users\aruna.m\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.6\stdb.db")
print("Opened successfully")
c=conn.cursor()
def entry():
    c.execute('''CREATE TABLE IF NOT EXISTS STUDENT
            (ID integer PRIMARY KEY ,
            NAME text NOT NULL,
            DEPT text NOT NULL,
            AGE integer NOT NULL);''')
    insquery=("INSERT INTO STUDENT(ID,NAME,DEPT,AGE) VALUES(?,?,?,?);")
    datat=(e1.get(),e2.get(),e3.get(),e4.get())
    c.execute(insquery,datat)
    print("Data inserted successfully!")

def deltable():
    c.execute("DROP TABLE STUDENT")

master=Tk()
Label(master, text='ID').grid(row=0)
Label(master, text='NAME').grid(row=1)
Label(master, text='DEPT').grid(row=2)
Label(master,text='AGE').grid(row=3)
e1=Entry(master)
e2=Entry(master)
e3=Entry(master)
e4=Entry(master)
e1.grid(row=0,column=1)
e2.grid(row=1,column=1)
e3.grid(row=2,column=1)
e4.grid(row=3,column=1)
Button(master, text='Submit', command=entry).grid(row=5,column=1)
Button(master, text='Delete Table', command=deltable).grid(row=5,column=2)
mainloop()
conn.commit()
conn.close()
