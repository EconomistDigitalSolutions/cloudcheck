const types = {
    sqs: {
        Type: 'AWS::SQS::Queue',
        required: [],
        props: [
            'ContentBasedDeduplication',
            'DelaySeconds',
            'FifoQueue',
            'KmsDataKeyReusePeriodSeconds',
            'KmsMasterKeyId',
            'MaximumMessageSize',
            'MessageRetentionPeriod',
            'QueueName',
            'ReceiveMessageWaitTimeSeconds',
            'RedrivePolicy',
            'Tags',
            'VisibilityTimeout'
        ]
    },
    cloudwatch: {
        Type: 'AWS::CloudWatch::Alarm',
        required: [
            'ComparisonOperator',
            'EvaluationPeriods',
            'MetricName',
            'Namespace',
            'Period',
            'Threshold'
        ],
        props: [
            'ActionsEnabled',
            'AlarmActions',
            'AlarmDescription',
            'AlarmName',
            'ComparisonOperator',
            'DatapointsToAlarm',
            'Dimensions',
            'EvaluateLowSampleCountPercentile',
            'EvaluationPeriods',
            'ExtendedStatistic',
            'InsufficientDataActions',
            'MetricName',
            'Namespace',
            'OKActions',
            'Period',
            'Statistic',
            'Threshold',
            'Unit'
        ]
    },
    simpleTable: {
        Type: 'AWS::Serverless::SimpleTable',
        required: [],
        props: [
            'PrimaryKey',
            'ProvisionedThroughput',
            'SSESpecification',
            'TableName',
            'Tags'
        ]
    },
    lambda: {
        Type: 'AWS::Serverless::Function',
        required: [
            'Handler',
            'Runtime'
        ],
        props: [
            'AutoPublishAlias',
            'CodeUri',
            'DeadLetterQueue',
            'DeploymentPreference',
            'Description',
            'Environment',
            'Events',
            'FunctionName',
            'Handler',
            'InlineCode',
            'KmsKeyArn',
            'MemorySize',
            'Policies',
            'Role',
            'ReservedConcurrentExecutions',
            'Runtime',
            'Tags',
            'Timeout',
            'Tracing',
            'VpcConfig'    
        ]
    },
    api: {
        Type: 'AWS::Serverless::Api',
        required: [
            'StageName'
        ],
        props: [
            'Auth',
            'BinaryMediaTypes',
            'CacheClusterEnabled',
            'CacheClusterSize',
            'Cors',
            'DefinitionUri',
            'DefinitionBody',
            'EndpointConfiguration',
            'MethodSettings',
            'StageName',
            'Variables',
        ]
    }
}

module.exports = types;