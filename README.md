# README

Quick little example flask service that generates fibonacci numbers into a webpage.

## Prerequisites

Configure the following tools:

1. [Pyenv](https://github.com/pyenv/pyenv)
1. [Intro to Pyenv](https://realpython.com/intro-to-pyenv/)
1. [Pipenv](https://realpython.com/pipenv-guide/)

## Installation

To install the service locally.

```sh
git clone <repo>
cd <repo>
export PIPENV_VENV_IN_PROJECT=1
pipenv install --three
```

## Start

Start the Flask App

```sh
python ./main.py
```

## Web

```sh
open http://localhost:5000/
```

## Swagger API UI

```sh
open http://localhost:5000/api/ui/
```

## Development and Debug

```sh
pipenv shell
code .
```

In Code select the Python Interpreter to be the local .venv one.
Now you should be able to run the tests inside Code.

## Research

[Swagger](https://swagger.io/docs/specification/2-0/basic-structure/)  
[Connexion](https://github.com/zalando/connexion)  
[Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
