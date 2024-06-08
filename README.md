# Grampool
JavaScript library for pool gramcoin.org
# main
```js
const {grampool} = require('./grampool');

const pool = new grampool();
pool.add_wallet("wallet")
pool.get_task().then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
