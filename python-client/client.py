import requests
id=15
url = 'http://localhost:5000/register/{}-{}'.format(id,"pyt")

requests.get(url=url)