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

## serverless framework

-   create new template serverless
    serverless create -t <nameProject> -p <pathProject>
-   Run local function
    sls invoke local -f <functionName> -d <passsomedata> '{\"key\": \"value\"}'
-   deploy : sls deploy -s <stageName> -f <functionName>

-   remove the deploy from CloudFormation
    sls remove

## Serverless offline plugin

-   Allows us to test api gateway locally
    `npm install --save-dev serverless-offline`
-   To start `sls offline`

## serverless get log from cloud watch

`sls logs -f add -s test --startTime 15m` or replace startTime with --tail

## Automating Serverless deployment with CI/CD

-   aws CodeCommit
    -   is a source control service, that allows you to host your git-based repository
    -   it integrates well with all other AWS services and CI/CD
    -   as part of the aws free tier, offers unlimited private repositories for up to 5 active users, with up 50GB month of storage and up to 10,000 git requests per month
-   AWS Code build
    is a continous integration service we can use to package and optionally deploy our serverless application
-   AWS code Pipeline is a continuous delivery service that allows us to automate the entire deployment and release cycles

## AWS lambda best practices

-   Always use the programming best practices
-   Keep declarations/instantiations outside the lambda handler
-   keep the lambda handler lean
-   Avoid hardcoding, use environment variable
-   One functionfunction perform one task
-   Ưatch the deployment package size, remove unused dependencieses
-   Keep an eyeeye on lambda logs
-   Grant only the necessary IAM permission to lambda function
-   Serverless Framework user access - PowerUserAccess at the maximum
-   Use -c flag with serverless framework deployments
-   unlink temporary files
-   delete unused lambda functions
-   Make use of error handling mechanisms, DLQs(dead letter queues)
-   Use VPC only if necessary
-   Be mindful of using reserved concurrency
-   Keep your contains warm so they can be reused
-   Use frameworks like AWS SAM or the serverless framework
-   Use CI/CD tools

## AWS API Gateway best practices

-   Keep API definitions lean
-   Return useful responses back to the caller
-   Endable logging options
-   Use custom domain in prod
-   Use Framework like AWS SAM or Serverless framework
-   Use CI/CD tools
-   Deploy APIs closer to your customers
-   Add caching to get additional performace gains

## AWS DynamoDB

-   Is a fully-managed noSQL database service (Serverless, Cloud, NOSQL)
-   High Volume, High Variety, meaning it is largely unstructure or semi structure data
-   High Velocity, meaning huge number of R/W concurentcy operation
-   Seamless on-demand scaling
-   Unlimited Concurrency R/W operation
-   Single-digit millisecond latency
-   microsecond latency with DAX (DAX is caching server provided by AWS) (caching services like DAX or dynamodb Accelarator can drop down from millisecond to microsecond)
-   it automatically replicates the data to multiple availability zones and thus reduces and risk
-   Local secondary indexes are those indexes that share the partition key with the primary key but have different sort key
-   Global secondary indexes (view) are the indexes where partition key is different from that of the primary key

### Primary Key in DynamoDB

-   table have a primary key that can have minimum 1 and maximum 2 attributes
-   the mandatory attribute is called as partition key or hash key
-   the optional attribute is called sort key or ranger key
-   Important thing to note that all DynamoDB table must have a primary key, you can not define a table in dynamodb without specify it's primary key
-   DynamoDB does not allow you to query the database without using the primary key or table indexes

### Data Types in DynamoDB (3 types)

-   Scalar Type
    -   is Represent exactly one value
    -   e.g string, number, binary, boolean, and null
    -   Keys or index Attributes only support string, number and binary Scalar types
-   Set Type
    -   these represent multiple scalar values
    -   e.g string set, number set and binary set
-   Document Type
    -   Complex structure with nested attributes
    -   e.g list, map

### Scalar Types

-   String
    -   Stores text data(UTF-8 encoded)
    -   Only non-empty Values
    -   All String should have non-empty value, meaning they must be atlest one character in length
    -   e.g "John", "California", "Fox in Socks"
-   Number
    -   Store all number types
    -   note that while sending data cross through api, numbers are sent as a string, but for any mathematical calculation, they are still treated as number.
    -   e.g 123, 100.88, -5
-   Binary type
    -   Blobs of binary data
    -   e.g compress text, encrypt data, image etc
    -   Only empty values
-   Boolean
    -   true or false
-   Null
    -   Unknow or undefined state

### Set types

    - are unorder collection of string, number or binary values
    - you can not mix and match data within sets
    - all elements within a set should be of same scalar type e.g string, number
    - important you can not store duplicate values in set
    - no empty sets allows
    - only non-empty value
    - multiple scalar values

### Document type

-   Nested, complex structure (up to 32 levels deep)
-   Attributes values can not have empty string value or empty set. however, you can have empty list or empty map
-   Lists
    -   order collection of values
    -   Can have multiple data types
-   Maps
    -   Unordered collection of key-value pairs
    -   ideal for storing JSON documents

### DynamoDB Consistency model or Read consistency

### DynamoDB Read consistency

-   Strong Consistency
    -   The most up to date Data
    -   Must be requested explicitly
-   Eventual Consistency
    -   May or may not reflect the latest copy of data
    -   Default consistency for all operations
    -   50% cheaper

While reading data from DynamoDB, user can specify whether they want the read to be eventually or strongly consistent, these are the two consistency model in DynamoDB.

Eventually Consistent Reads (Default) – the eventual consistency option is used to maximize the read throughput. Consistency across all copies of data is usually reached within a second. Repeating a read after a short time should return the updated data.

Strongly Consistent Reads — in addition to eventual consistency, DynamoDB also gives user the flexibility and control to request a strongly consistent read when your application, or an element of your application, requires it. A strongly consistent is used to read and return a result that reflects all the writes that was received as a successful response prior to the read.

### DynamoDB Capacity Units

-   Table
    -   Top-level Entities
    -   No strict inter-table relationships
    -   Mandatory primary keys
    -   Control performance at the table level
-   Throughout Capacity
    -   Allows for predicateable performance at scale
    -   Used to controll R/W throughout
    -   Support auto scale
    -   Defined using RCUs and WCUs (2 types Read Capacity unit, write capacity unit)
    -   Major factor in DynamoDB pricing
    -   1 Capacity unit = 1 request/sec

Remember: that one unit of capacity can handle one request per second. e.g one unit handle 1 read or 1 write per second

-   RCUs

    -   1 RCU = 1 strongly consistentcy table read/sec (1 RCU allows you to read up to 4 KB of data per second with strongly consistency)
    -   1 RCU = 2 eventually consistent table reads/sec
    -   In block of 4 KB

-   WCUs

    -   1 WCU = 1 table write/sec
    -   in block of 1 KB

-   e.g:
-   Average item size: 10kb
-   Provisioned capacity: 10RCUs and 10WCUs
-   Read throughout with strong consistency: 4 KB \* 10 = 40KB/S
-   Read throughout with eventually consistency: 2 _ (4KB _ 10) = 80KB/s
-   Write throughout with strong consistency: 1 \* 10KB = 10 KB/s
-   RCUs to read 10kb of data pre second with strong consistency = 10KB / 4 KB = 2,5 => round up => 3 RCUs
-   RCUs to read 10kb of data pre second with eventually consistency = 10KB / 4 KB = 2,5 => round up => 3 RCUs / 2 = 1, 5 round up = 2
-   WCUs to write 10KB of data per second = 10KB / 1KB = 10 WCUs
-   WCUs to write 1.5KB of data per second = 1,5KB / 1KB = 1,5 WCUs => round up = 2WCUs

### Burst Capacity

-   To provider for occasional bursts or spikes
-   5 min or 300 second of unused read and write
-   can get comsumerd quickly
-   must not be relied upon

-   Scaling
-   Scaling up: As and when needed
-   Affects partition behavior (Important)
-   1 partition supports up to 1000 WCUs or 3000RCUs

### DynamoDB partition

-   is block of memory allocated by dynamoDB for storage

-   Store DynamoDB table data
-   A table can have multiple partitions
-   Number of Table partitions depend on it's size and provisioned capacity
-   managed internally by DynamoDB
-   1 partition = 10GB of data
-   1 partition = 1000 WCUs or 3000 RCUs

### DynamDB Indexes

have 2 type of index

-   primary key(table index)
-   Secondaty index : local secondary index, global secondary index

index key - simple key + composite key
simple key : only partition key or hash key
composite key : partition key + sort key or range key

note: whenever we read an item or query an item from the table, we have to specify the partition key, of course you can perform scan operation which do not require specifying partition key
Remember: scan operations should be avoided as far as possible and if at all required, they should be used with atmost caution

### Secondary indexes

-   Local secondary Indexes
    -   must create these indexes when you create your table, you can not add a local secondary index late on
    -   you can create up to 5 local secondary indexes per table
    -   the RCUs and WCUs that you provision for your table will be share with the local secondary index that you created
    - Local secondary indexes has the same partition key as that of the table
-   Global secondary indexes
    -   this is an index where the partition key can be different from that of the primary key
    -   you can create up to 5 global secondary indexes per table
    -   unlike local secondary indexes, we can create global secondary indexes any time. this is because global secondary indexes are stored separately in thier own partitions.
    -   you can define the RCUs and WCUs for globa secondary indexes separately and these are not share the capacity unit of the base table, the only point to remember here is you can only perform eventually consisten read with global secondary indexes
    -   when an item is written to the table, the global secondary index is updated asynchronously in the back ground

## AWS Dynamo db best practices

## Best practices for AWS Step function

-   Always use timeout in Task states
-   Handle errors with try catch
-   Use S3 to store large payload and pass only the payload ARN between states

DynamoDb in practice

-   Little to No Learning Curve
-   DynamoDB Best Practice - Crucial to success

## Serverless security best practices

-   Give each lambda function it's own execution role
-   Avoid setting wildcard permissions
-   Avoid giving full access to lambda function
-   Choose only the required actions in the IAM policy
-   Make use of environment variables in lambda functions
-   Encrypt sensitive data using KMS
-   Never log decrypted values to console or any persistent storage
-   For lambda functions running inside a VPC

    -   Use least privilege security group
    -   lambda-specific subnet and network configuration

-   Controlling Api Gateway access

    -   Apikey and Usage plan
    -   Client certificates
    -   Cors headers
    -   Api Gateway resource Policies
    -   IAM Policies
    -   Lambda Authorizers
    -   Cognito User pool authentication
    -   Federated identity access using Cognito

-   Ensure appropriate access control for CI/CD tools

## Serverless Architecture

-   Multi-tier Architecture

    -   3 tier Architecture
        -   Fontend/ Presentation Tier
        -   Application/ Logic tier
        -   Database/ Data tier

-   Database/ Data tier

    -   IAM enabled data store(over AWS APIs) (Amazon dynamodb, s3, elastic search service)
    -   VPC hosted data stores(using database credentials) (AWS rds, AWS redshift, elastic cache)

-   Application/ Logic tier

    -   AWS lambda
    -   Api Gateway

-   Fontend/ presentation Tier
    -   Web applicaiont
    -   Mobile application
    -   Alexa voice devices
    -   IOT devices
