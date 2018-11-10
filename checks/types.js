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
            'EvaulationPeriods',
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
    lambda: {
        Type: 'AWS::Serverless::Function',
        required: [
            'Handler',
            'Runtime'
        ],
        props: [
            'AutoPublishAlias',
            'Code',
            'CodeUri',
            'DeadLetterConfig',
            'DeadLetterQueue',
            'DeploymentPreference',
            'Description',
            'Environment',
            'Events',
            'FunctionName',
            'Handler',
            'KmsKeyArn',
            'MemorySize',
            'Policies',
            'ReservedConcurrentExecutions',
            'Role',
            'Runtime',
            'Tags',
            'Timeout',
            'Tracing',
            'TracingConfig',
            'VpcConfig'
        ]
    }
}

module.exports = types;