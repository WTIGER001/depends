#!\bin\bash

read -p 'Username: ' uservar
read -sp 'Password: ' passvar
echo
echo Thankyou $uservar we now have your login details

curl -u $uservar:$passvar https://bitbucket.di2e.net/rest/api/1.0/projects/PIR/repos > repos.json

