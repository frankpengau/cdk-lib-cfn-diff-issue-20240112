// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface CdkLibCfnDiffIssue20240112Props {
  // Define construct properties here
}

export class CdkLibCfnDiffIssue20240112 extends Construct {

  constructor(scope: Construct, id: string, props: CdkLibCfnDiffIssue20240112Props = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkLibCfnDiffIssue20240112Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
