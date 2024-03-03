#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/quizbackend/deploy.log
# nodejs-app is the same name as stored in pm2 process
echo 'sudo pm2 restart index.js' >> /home/ec2-user/quizbackend/deploy.log
sudo pm2 restart index.js >> /home/ec2-user/quizbackend/deploy.log
