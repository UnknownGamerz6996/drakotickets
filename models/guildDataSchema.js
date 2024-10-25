const mongoose = require('mongoose');

const guildDataSchema = new mongoose.Schema({
    guildID: { type: String, required: true },
    cases: { type: Number, default: 0 },
    totalMessages: { type: Number, default: 0 },
    stars: { type: Object, default: {} },
    birthday: { type: Date, default: Date.now },
    totalSuggestions: { type: Number, default: 0 },
    timesBotStarted: { type: Number, default: 0 }
});

module.exports = mongoose.model('GuildData', guildDataSchema);