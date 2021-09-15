FROM jenkins/jenkins:lts
USER ubuntu
RUN sudo apt-get update
RUN sudo apt install python3-pip -y
RUN pip3 install awscli — upgrade

# FROM node:14.17.6
# WORKDIR /app 
# COPY package*.json /app 
# RUN npm install 
# COPY . /app 
# CMD [ "npm", "start" ] 
# EXPOSE 55002
