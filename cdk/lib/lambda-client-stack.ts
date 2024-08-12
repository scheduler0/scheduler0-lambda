import { Stack, StackProps, aws_lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class LambdaClientFunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const l2Function = new aws_lambda.Function(this, "scheduler0-lambda-client", {
      code: aws_lambda.Code.fromAsset('../package/dist'),
      handler: "index.handler",
      runtime: aws_lambda.Runtime.NODEJS_LATEST,
    });
  }
}
