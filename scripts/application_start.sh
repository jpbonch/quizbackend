#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/quizbackend/deploy.log
# nodejs-app is the same name as stored in pm2 process
echo 'pm2 restart index' >> /home/ec2-user/quizbackend/deploy.log
pm2 restart index >> /home/ec2-user/quizbackend/deploy.log