class grampool{
    constructor(){
        this.api = "https://api-pool.gramcoin.org/v2"
        this.headers={"X-MINER-VERSION": "EXTERNAL-bc10c1fa"}
        this.wallet=null
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data = JSON.stringify(data);
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async add_wallet(wallet){
    this.wallet=wallet;
    }
    async get_task(){
        return (await this.req(`${this.api}/task/${this.wallet}`));
    }
    async add_solution(id,solution){
        return(await this.req(`${this.api}/solution/${this.wallet}`,{"id":id,"solution":solution}))
    }
}
module.exports = {grampool};