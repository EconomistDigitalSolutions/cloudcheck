const types = {
    sqs: {
        Type: "AWS::SQS::Queue",
        props: [
            "ContentBasedDeduplication",
            "DelaySeconds",
            "FifoQueue",
            "KmsDataKeyReusePeriodSeconds",
            "KmsMasterKeyId",
            "MaximumMessageSize",
            "MessageRetentionPeriod",
            "QueueName",
            "ReceiveMessageWaitTimeSeconds",
            "RedrivePolicy",
            "Tags",
            "VisibilityTimeout"
        ]
    },
    cloudwatch: {
        Type: "AWS::CloudWatch::Alarm",
        props: [
            "ActionsEnabled",
            "AlarmActions",
            "AlarmDescription",
            "AlarmName",
            "ComparisonOperator",
            "DatapointsToAlarm",
            "Dimensions",
            "EvaluateLowSampleCountPercentile",
            "EvaulationPeriods",
            "ExtendedStatistic",
            "InsufficientDataActions",
            "MetricName",
            "Namespace",
            "OKActions",
            "Period",
            "Statistic",
            "Threshold",
            "Unit"
        ]
    }
}

module.exports = types;