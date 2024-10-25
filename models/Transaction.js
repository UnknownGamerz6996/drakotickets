const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    messageId: {
        type: String,
        required: true,
        unique: true
    },
    userId: String,
    address: String,
    qrCodeURL: String,
    status: {
        type: String,
        default: 'Pending'
    },
    transactionId: {
        type: String,
        default: null
    },
    validationSite: {
        type: String,
        default: 'Not Set'
    },
    commandTimestamp: {
        type: Date,
        default: Date.now
    },
    coin: {
        type: String,
        required: true
    },
    channelId: {
        type: String,
        required: true
    },
    requestedAmount: {
        type: Number,
        required: true
    },
    confirmations: {
        type: Number,
        default: 0
    },
    lastSubmissionTimestamp: {
        type: Date,
        default: Date.now
    },
    submissionCount: {
        type: Number,
        default: 0
    },
    targetAddress: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);