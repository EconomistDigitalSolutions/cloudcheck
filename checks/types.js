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
    }
}

module.exports = types;