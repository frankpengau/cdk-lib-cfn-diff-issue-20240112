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