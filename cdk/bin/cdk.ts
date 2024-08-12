#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaClientFunctionStack } from '../lib/lambda-client-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();
new LambdaClientFunctionStack(app, 'LambdaClientFunction', {
    env: {
        account: process.env.AWS_ACCOUNT_ID,
        region: process.env.AWS_REGION,
    },
});

app.synth();