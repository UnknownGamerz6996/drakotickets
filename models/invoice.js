const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    price: { type: String, required: true },
    product: { type: String, required: true },
    invoiceId: { type: String, required: true, unique: true },
    status: { type: String, default: 'UNPAID' },
    messageId: { type: String, required: true },
    channelId: { type: String, required: true },
    guildId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);