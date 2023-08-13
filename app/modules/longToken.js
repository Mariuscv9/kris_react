import axios from 'axios';


export default async function token() {
    const url =`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_SECRET}&access_token=${process.env.INSTAGRAM_KEY}`;
    axios.get(url)
    .then((res) => console.log(res));
  }


  