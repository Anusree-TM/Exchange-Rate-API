# Currency Converter

This is a simple currency converter API built using Node.js and Express. It allows you to convert a specified amount from one currency to another.

## Prerequisites

- Node.js and npm installed

## Install dependencies:

npm install

## To run the application in development mode:

- npm run dev

## API Endpoint

Converts a specified amount from one currency to another.

- GET /convert?from={currencyCodeFrom}&to={currencyCodeTo}&amount={amount}

- Ex:/convert?from=USD&to=EUR&amount=100

- Response:

        {
        "result": 82.45
        }


## Environment Variables

Set the following environment variables in the .env file:

PORT: Port on which the server will run.

PORT=8000




