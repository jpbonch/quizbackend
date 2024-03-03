#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/quizbackend/deploy.log
# nodejs-app is the same name as stored in pm2 process
# echo 'pm2 kill' >> /home/ec2-user/quizbackend/deploy.log
sudo pm2 delete all >> /home/ec2-user/quizbackend/deploy.log
# echo 'deted' >> /home/ec2-user/quizbackend/deploy.log
# echo 'pm2 start index.js' >> /home/ec2-user/quizbackend/deploy.log
# sudo pm2 start index.js >> /home/ec2-user/quizbackend/deploy.log