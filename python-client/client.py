import requests
import time
import subprocess
import sys
id=sys.argv [1]


if requests.get(url='http://localhost:5000/isreg/{}'.format(id)).text == 'true':
    
    while True:
        temp = subprocess.run(['cat','/sys/class/thermal/thermal_zone1/temp'],stdout=subprocess.PIPE)
        #print(temp.stdout.decode('utf-8'))
        requests.get(url='http://localhost:5000/gettemp/{}-{}'.format(str(int(temp.stdout.decode('utf-8'))/1000),id))
        time.sleep(1)
#url = 'http://localhost:5000/register/{}-{}'.format(id,"pyt")

