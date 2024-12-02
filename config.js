module.exports = {
  apiURL: 'https://api.biblia.com/v1/bible/',
  rate: {
    window: 3000,
    limit: 1,
    onLimitExceeded: (ctx, next) => ctx.reply('Please! Do not spam!!')
  },
  admins: [
    111, 6568860385, 7493336435 // Added your chat IDs
  ]
}
