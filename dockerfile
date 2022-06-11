FROM node:latest

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# Create app directory
RUN mkdir -p /myapp
WORKDIR /myapp

COPY package*.json /myapp
COPY App.tsx /myapp


# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /react_native_app && chown node /react_native_app
WORKDIR /react_native_app
ENV PATH /react_native_app/.bin:$PATH
USER node
COPY ./package.json ./package-lock.json ./
RUN npm install

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# copy in our source code last, as it changes the most
WORKDIR /react_native_app/app
# for development, we bind mount volumes; comment out for production
# COPY ./react_native_app .

ENTRYPOINT ["expo","start"]
CMD ["web"]

