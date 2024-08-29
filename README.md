# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


# メモ

## 調べた箇所

```
`cdk init` cannot be run in a non-empty directory!
```

https://www.letitride.jp/entry/2020/06/12/202624
空ファイルでしかcdk init を実行できない

## 単語

- AWS CDK L2 コンストラクト
  - AWS Cloud Development Kit (CDK)で使用される中間レベルの抽象化を提供するコンポーネントのこと
- Stack
  - cdk が特定の用途に必要とするすべてのリソースが含まれる
- constructor のidはcfnでデプロイするときに自動生成されるid
- 新しいリソースを追加したい時
  - https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html
- cdk sample
  - https://github.com/aws-samples/aws-cdk-examples
