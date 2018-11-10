const types = {
    sqs: {
        Type: "AWS::SQS::Queue",
        props: [
            "QueueName",
            "DelaySeconds",
            "MaximumMessageSize",
            "MessageRetentionPeriod",
            "ReceiveMessageWaitTimeSeconds",
            "ContentBasedDeduplication",
            "FifoQueue",
            "KmsMasterKeyId",
            "KmsDataKeyReusePeriodSeconds",
            "RedrivePolicy",
            "Tags",
            "VisibilityTimeout"
        ]
    },
    cloudwatch: {
        Type: "AWS::CloudWatch::Alarm",
        props: [
            "Namespace",
            "MetricName",
            "Dimensions",
            "Statistic",
            "Period",
            "EvaulationPeriods",
            "Threshold",
            "ComparisonOperator",
            "AlarmActions",
            "InsufficientDataActions"
        ]
    }
}

module.exports = types;