Integration response AWS gateway api

-   \$input.body

## Serverless Architecture Benefit

-   No server management, OS, hardware, software to maintain and make our life as a develop, devops so much easier

-   Easy and efficient scaling, serverless application can be scaled automatically or at the most with a few clicks to choose your desired capacity

-   Build in High avaiable and fault tolerance

-   Service integration, aws provides a host of services that readily integrate with each other, for example: sending text notification, emails, running analytics, hosting Apis, storing file, running automated workflow and so on.

-   No idle capacity, you pay only for what you use and no more, with aws lambda which is the core component of amazon's serverless platform, you pay only for the time your code runs. There is no charge if your code is not running.

## Challenges with Serverless Architecture

-   Vendor lock-ins

-   Public Cloud

-   Level of Control

## Major players in Serverless Space

-   the core component of the AWS serverless architecture is the compute service called aws lambda, lambda let you run your serverless function in the AWS cloud

## Core Serverless services in aws (3)

-   AWS lambda
-   Amazon api gateway
-   AWS Dynamodb

## Additional Serverless Services in aws

-   S3
-   SNS
-   SQS
-   AWS step function
-   kinesis
-   athena
-   AWS x-ray
-   Cloud Watch
-   Cognito
-   AWS tool & SDKs

## Use case for serverless Architecture

-   Build backends for Web, mobile, IOT applications
-   Real-time or Streaming data processing

## Frameworks and CI/CD Tools for Serverless

There are two frameworks that help you work with your serverless application efficiently

-   the AWS SAM or the serverless application Model is a tool provided by AWS

*   SAM is a lightweight version of AWS CloudFormation, Cloudformation is a service that allows you to automate creating and deploying various AWS services quickly using a text-based template file, aws SAM uses similar template file but with a simple syntax, more suited for serverless application.

*   CloudFormation internally convert this SAM template into the standard CloudFormation syntax to create and deploy our serverless resources.

-   The Serverless Framework is a popular third-party tool provided by a company name Serverless Inc. (similar lines as the AWS SAM)

*   the template syntax it uses however is slightly different but equally easy

## AWS CI/CD tools for serverless deployment

-   AWS codecommit is a version control or source control that provides a GIT based repository
-   AWS codebuild which is allows you to build your serverless code and create or update AWS resources automatically via CloudFormation
-   AWS codepipeline is a service that allows you to define the delivery or deployment cycle from source repository through deployment and automate the application deployment process or application deployment pipeline

*   To deploy Serverless, user need many policy, so it's best to use Administrator access

export AWS_ACCESS_KEY_ID=AKIA2LCKUCABGPS3Z7X6
export AWS_SECRET_ACCESS_KEY=smuGuZQp8ciAXnEa3YP+ceZsj/okoKENpz3ZWDu4
export AWS_DEFAULT_REGION=us-east-1

this export command will store the environment variables in your current profile temporarily
to store them permanenly, you can add them manually to your profile the default shell on mac is bash shell, unless you have changed it manually

aws sts get-caller-identity

{
"Account": "710973591554",
"UserId": "AIDA2LCKUCABPKDCXRYGP",
"Arn": "arn:aws:iam::710973591554:user/serverless-admin"
}

-   The function policy is used by the triggering event or the service to invoke the lambda
-   the execution role is used by the lambda function to access different aws services that it depend on

## Event Object of lambda

-   hold the input data or input parameters that we want the lambda function
-   the structure of this event object depends on the event source

## Lambda Invocation Types

-   Synchronous: Api Gate way and Cognito event
-   Asynchronous: S3

## Types of lambda event sources

-   push event (push event to lambda in order to invoke the function) for example (s3, api gateway)
-   pull/poll events (lambda poll the event stream to look for event data) for example (dynamodb, kinesis stream, amazon sqs queue)

## Context object, it's method and properties (optional argument)

## lambda limits

-   Memory Size: 128MB to 3008MB, in 64 MB inincrements
-   then every function we write get a default ephemeral disk capacity of up to 512 MB
-   Timeout: 900 seconds or 15 minutes
-   Body Payload Size: 6 MB for Synchronous invocation and 128 KB for Asynchronous invocations
-   Deployment Package Size: 50 MB when compressed and 250MB when uncompressed, 3MB for online editting within aws lambda console
-   Total Package Size within a region: 75GB
-   concurrency : 1000 executions per region

## AWS Lambda Pricing

-   Subsecond Billing: we are charged only for the time it take for our lambda code to execute
-   There are 2 parts to lambda pricing: the number of request and the duration of each request in GB second
-   AWS lambda free tier: 1000 request/mo + 400 GB-seconds/mo
-   AWS charges just about 20 cents per 1 million request + 0.00001667 dollars per GB seconds

## Velocity Template Language

-   \$context variable which gives infomation about the api context.
-   \$input variable
-   \$stage variable
-   \$util variable

## To endable CloudWatch for Api Gateway

-   Go to Setting add ARN role make sure IAM role in IAM is created.

## how to generate client SDKs

## Api Gateway Pricing

-   Number of Api calls + Data Transfer & caching
-   Up to 1 million api calls per month are included in the free tier after first 12 month then, 3,5\$ per million API calls (USA region)

## lambda version

-   If we don't explicitly create and use a version, lambda will use the latest version, the latest version is always denoted by `$LATEST`

## lambda alias

-   for automatically public api version not by handly
