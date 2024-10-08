#!/opt/homebrew/opt/node/bin/node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { HelloAwsCdkStack } from '../lib/hello-aws-cdk-stack';
import { bundleNpm } from '../lib/process/setup';

// pre-process
bundleNpm();

// create app
const app = new cdk.App();
new HelloAwsCdkStack(app, 'HelloAwsCdkStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { region: 'ap-northeast-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
