const config=require('./config')
const twit=require('twit')
const T=new twit(config)
function retweet()
{
let params={
    q:'#blacklivesmatter',
    count:10
}
T.get('search/tweets',params,(err,data,response)=>{
let tweets=data.statuses
console.log(tweets);
if (!err)
{            
for(let dat of tweets)
{
    let retweetId = dat.id_str;
    T.post('statuses/retweet/:id', {id: retweetId},(err, response)=>
    {
    if (response) 
        console.log('Retweeted!!! '+ retweetId)
    if (err) 
        console.log('Something went wrong while RETWEETING... Duplication maybe...')
    }
    )
}
}
}
)

console.log("running");
}
setInterval(retweet,10000);