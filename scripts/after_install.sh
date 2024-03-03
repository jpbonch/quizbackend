#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/quizbackend/deploy.log

echo 'cd /home/ec2-user/quizbackend' >> /home/ec2-user/quizbackend/deploy.log
cd /home/ec2-user/quizbackend >> /home/ec2-user/quizbackend/deploy.log

echo 'npm install' >> /home/ec2-user/quizbackend/deploy.log 
npm install >> /home/ec2-user/quizbackend/deploy.log