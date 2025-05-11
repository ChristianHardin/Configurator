FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    vim \
    git \
		postgresql-client \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
CMD [ "bash" ]
