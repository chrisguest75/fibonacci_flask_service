FROM python:3.9.1-buster

RUN pip install pipenv

ARG USERID=1000
ARG GROUPID=1000
RUN addgroup --system --gid $GROUPID appuser
RUN adduser --system --uid $USERID --gid $GROUPID appuser


RUN mkdir -p /workbench/app

WORKDIR /workbench
COPY ./Pipfile /workbench/Pipfile
COPY ./Pipfile.lock /workbench/Pipfile.lock 

RUN pipenv install --deploy --system --dev

COPY ./main.py /workbench/main.py
COPY ./app /workbench/app
COPY ./logging_config.yaml /workbench/logging_config.yaml

# set to no debugger.
ENV DEBUGGER=False
ENV WAIT=False

USER appuser
EXPOSE 8080
CMD ["python3", "-u", "./main.py"]