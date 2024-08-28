"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloAwsCdkStack = void 0;
const cdk = require("aws-cdk-lib");
// Import Lambda L2 construct
const lambda = require("aws-cdk-lib/aws-lambda");
//Import API Gateway L2 construct
const apigateway = require("aws-cdk-lib/aws-apigateway");
class HelloAwsCdkStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define the Lambda function resource
        // Lambda 関数リソースを作成
        const helloWorldFunction = new lambda.Function(this, 'HelloWorldFunction', {
            runtime: lambda.Runtime.NODEJS_LATEST, // 関数が実行される環境。ここでは、Node.jsバージョン を使用します20.x。
            code: lambda.Code.fromAsset('lambda'), // ローカルマシン上の関数コードへのパス。
            handler: 'hello.handler', // 関数コードを含む特定のファイルの名前。
        });
        new cdk.CfnOutput(this, 'HelloWorldFunctionName', {
            value: helloWorldFunction.functionName,
            description: 'JavaScript Lambda function'
        });
        // Define the API Gateway resource
        const api = new apigateway.LambdaRestApi(this, 'HelloWorldApi', {
            handler: helloWorldFunction,
            proxy: false,
        });
        // Define the '/hello' resource with a GET method
        const helloResource = api.root.addResource('hello');
        helloResource.addMethod('GET');
    }
}
exports.HelloAwsCdkStack = HelloAwsCdkStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tYXdzLWNkay1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvLWF3cy1jZGstc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBRW5DLDZCQUE2QjtBQUM3QixpREFBaUQ7QUFDakQsaUNBQWlDO0FBQ2pDLHlEQUF5RDtBQUV6RCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzdDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsc0NBQXNDO1FBQ3RDLG1CQUFtQjtRQUNuQixNQUFNLGtCQUFrQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDekUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLDJDQUEyQztZQUNsRixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsc0JBQXNCO1lBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsc0JBQXNCO1NBQ2pELENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7WUFDaEQsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFlBQVk7WUFDdEMsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQyxDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDOUQsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztRQUVILGlEQUFpRDtRQUNqRCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQTNCRCw0Q0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vLyBJbXBvcnQgTGFtYmRhIEwyIGNvbnN0cnVjdFxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuLy9JbXBvcnQgQVBJIEdhdGV3YXkgTDIgY29uc3RydWN0XG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcblxuZXhwb3J0IGNsYXNzIEhlbGxvQXdzQ2RrU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBEZWZpbmUgdGhlIExhbWJkYSBmdW5jdGlvbiByZXNvdXJjZVxuICAgIC8vIExhbWJkYSDplqLmlbDjg6rjgr3jg7zjgrnjgpLkvZzmiJBcbiAgICBjb25zdCBoZWxsb1dvcmxkRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb1dvcmxkRnVuY3Rpb24nLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfTEFURVNULCAvLyDplqLmlbDjgYzlrp/ooYzjgZXjgozjgovnkrDlooPjgILjgZPjgZPjgafjga/jgIFOb2RlLmpz44OQ44O844K444On44OzIOOCkuS9v+eUqOOBl+OBvuOBmTIwLnjjgIJcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksIC8vIOODreODvOOCq+ODq+ODnuOCt+ODs+S4iuOBrumWouaVsOOCs+ODvOODieOBuOOBruODkeOCueOAglxuICAgICAgaGFuZGxlcjogJ2hlbGxvLmhhbmRsZXInLCAvLyDplqLmlbDjgrPjg7zjg4njgpLlkKvjgoDnibnlrprjga7jg5XjgqHjgqTjg6vjga7lkI3liY3jgIJcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdIZWxsb1dvcmxkRnVuY3Rpb25OYW1lJywge1xuICAgICAgdmFsdWU6IGhlbGxvV29ybGRGdW5jdGlvbi5mdW5jdGlvbk5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0phdmFTY3JpcHQgTGFtYmRhIGZ1bmN0aW9uJ1xuICAgIH0pO1xuXG4gICAgLy8gRGVmaW5lIHRoZSBBUEkgR2F0ZXdheSByZXNvdXJjZVxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkodGhpcywgJ0hlbGxvV29ybGRBcGknLCB7XG4gICAgICBoYW5kbGVyOiBoZWxsb1dvcmxkRnVuY3Rpb24sXG4gICAgICBwcm94eTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICAvLyBEZWZpbmUgdGhlICcvaGVsbG8nIHJlc291cmNlIHdpdGggYSBHRVQgbWV0aG9kXG4gICAgY29uc3QgaGVsbG9SZXNvdXJjZSA9IGFwaS5yb290LmFkZFJlc291cmNlKCdoZWxsbycpO1xuICAgIGhlbGxvUmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnKTtcbiAgfVxufVxuIl19