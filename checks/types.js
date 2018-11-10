const types = {
    sqs: {
        Type: 'AWS::SQS::Queue',
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
        props: [
            'Code',
            'CodeUri',
            'DeadLetterConfig',
            'DeadLetterQueue',
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
            'TracingConfig',
            'VpcConfig'
        ]
    }
}

module.exports = types;