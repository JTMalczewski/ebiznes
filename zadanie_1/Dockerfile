FROM ubuntu:22.04

ENV TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app

RUN    apt-get update -y
RUN    apt-get install -y software-properties-common
RUN    add-apt-repository ppa:deadsnakes/ppa
RUN    apt-get update -y
RUN    apt-get install -y python3.8 python3-pip
RUN    update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1
RUN    update-alternatives --config python3

RUN    apt-get install -y openjdk-8-jdk
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64

RUN    apt-get -y install kotlin

ADD https://services.gradle.org/distributions/gradle-7.4.2-bin.zip /tmp/gradle-7.4.2-bin.zip
RUN unzip -d /opt/gradle /tmp/gradle-7.4.2-bin.zip
ENV PATH $PATH:/opt/gradle/gradle-7.4.2/bin
COPY build.gradle .
RUN gradle --refresh-dependencies



# Confirm version
RUN python3 --version
RUN java -version
RUN gradle --version
RUN kotlinc -version
