const accountRepository = require('../repositories/account.repository')
const logProvider = require('../middlewares/logprovider');

const accountService = {
    getAccounts: async () => {
        logProvider.info('Start getAccounts in account.service.js')

        return await accountRepository.getAccounts()
    },
    getAccountById: async (id) => {
        logProvider.info('Start getAccountById in account.service.js')


        return await accountRepository.getAccountById(id)
    },
    addAccount: async (amount, customerId, fullname) => {
        logProvider.info('Start addAccount in account.service.js')


        return await accountRepository.addAccount(amount, customerId, fullname)
    }
}

module.exports = accountService