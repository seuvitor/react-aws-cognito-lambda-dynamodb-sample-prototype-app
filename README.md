# react-aws-cognito-lambda-dynamodb-sample-prototype-app

Sample serverless React prototype app making use of AWS Cognito, Lambda and DynamoDB.

## Configure AWS resources

Clone this project and follow the commented instructions in [conf/sampleapp-cloudformation.yaml](conf/sampleapp-cloudformation.yaml) to create the minimum AWS Cognito resources needed for the app.

Then create the local `.env.development` and `.env.production` files, following the provided examples [.env.development.example](.env.development.example) and [.env.production.example](.env.production.example) to use the created AWS resources.

## Run in development mode

```sh
npm install
npm run start
```

The app will be available on localhost:5000.

## Build for deploy

```sh
npm run build
```

After executing the build script, the `dist` folder will contain the files for publishing.
