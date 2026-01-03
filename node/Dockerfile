# Alteramos de node:15 para node:20 para corrigir o erro do apt-get (Debian Stretch 404)
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Corrigimos a sintaxe do ENV (adicionando o =)
ENV DOCKERIZE_VERSION=v0.6.1

# Instalação do dockerize
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "20s", "node", "index.js"]
