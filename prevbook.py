def previousdata(emailid):
    connection,cur=db_connection()
    cur.execute("select * from Prevbookings where email=%s",(emailid))
    data=cur.executeall()
    print(data)
    return data
previousdata("give mail id here")