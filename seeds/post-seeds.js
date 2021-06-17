const { Post } = require('../models');

const postdata = [
  {
    title: 'Everything you need to know about the MERN Stack.',
    post_url: 'https://blog.hyperiondev.com/index.php/2018/09/10/everything-need-know-mern-stack/',
    user_id: 3
  },
  {
    title: 'Squarespace for Devs',
    post_url: 'https://developers.squarespace.com/beginner-tutorial',
    user_id: 4
  },
  {
    title: 'Ethereum for the win!!!!',
    post_url: 'https://developer-tech.com/news/2020/dec/01/ethereum-2-beacon-chain-launches-400m-staked/',
    user_id: 3
  },
  {
    title: 'Wanted to share this resource :)',
    post_url: 'https://javascriptweekly.com/',
    user_id: 1
  },
  {
    title: 'Node Weekly SignUp',
    post_url: 'https://nodeweekly.com/',
    user_id: 2
  },
  {
    title: "In case you didn't know about Cnet...." ,
    post_url: 'https://www.cnet.com/',
    user_id: 4
  },
  {
    title: 'Hacker News',
    post_url: 'https://news.ycombinator.com/',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;