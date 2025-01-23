import image from '../images/assets/images.jpg';


export const mockData = [
  {
    id: 1,
    content: "Welcome to the new community platform!",
    image: image, // Example image URL
    likes: 10,
    dislikes: 2,
    shares: 5,
    comments: [
      {
        id: 11,
        content: "This is the first comment!",
        likes: 3,
        dislikes: 1,
        comments: [
          {
            id: 111,
            content: "This is a reply to the first comment!",
            likes: 1,
            dislikes: 0,
            comments: [],
          },
        ],
      },
      {
        id: 12,
        content: "This is the second comment!",
        likes: 5,
        dislikes: 0,
        comments: [],
      },
    ],
  },
];
