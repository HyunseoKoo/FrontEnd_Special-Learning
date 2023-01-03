const Posts = [
  {
    id: 1,
    content: 'content1',
    title: 'title1',
  },
  {
    id: 2,
    content: 'content2',
    title: 'title2',
  },
  {
    id: 3,
    content: 'content3',
    title: 'title3',
  },
];

const post = Posts.find((el) => el.id === 1);

console.log(post); // { id: 1, content: 'content1', title: 'title1' }
