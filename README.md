# Welcome to your CDK TypeScript Construct Library project

You should explore the contents of this project. It demonstrates a CDK Construct Library that includes a construct (`CdkLibCfnDiffIssue20240112`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The construct defines an interface (`CdkLibCfnDiffIssue20240112Props`) to configure the visibility timeout of the queue.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests

## Other

Check list of `cdk init` options:
```
cdk init --list
```

Create Custom AWS Construct Library:
```
cdk init lib --language typescript
```

## Reproduce issue
```
npm install
npm run build
```

## Error
```
➜  cdk-lib-cfn-diff-issue-20240112 git:(main) ✗ npm run build

> cdk-lib-cfn-diff-issue-20240112@0.1.0 build
> tsc

node_modules/@aws-cdk/cloudformation-diff/lib/diff-template.d.ts:1:32 - error TS2307: Cannot find module 'aws-sdk' or its corresponding type declarations.

1 import { CloudFormation } from 'aws-sdk';
                                 ~~~~~~~~~


Found 1 error in node_modules/@aws-cdk/cloudformation-diff/lib/diff-template.d.ts:1
```