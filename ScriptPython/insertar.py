#!/usr/bin/python

# import MySQLdb

# conn = MySQLdb.connect (
#     host = "localhost",
#     user = "root",
#     passwd =  "3davisitooo",
#     db = "intdesa")


# cursor = conn.cursor ()
# cursor.execute ("INSERT INTO nodo (modelo,latitud, longitud, estado) VALUES('RPI3', '11','0','I')")
# cursor.close ()
# conn.commit ()
# conn.close ()

import requests
r = requests.post('http://192.168.50.137:8000/newNode', data = {'latitud':123, 'longitud':342});
print(r.status_code)
