# Dockerfile
# base image
FROM debian-with-deps
# create & set working directory
WORKDIR /app
# copy source files
COPY . .
# start app
EXPOSE 3000

CMD ["npm", "run", "start"]