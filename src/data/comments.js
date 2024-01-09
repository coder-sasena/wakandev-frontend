export const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user: {
        _id: "a",
        name: "Dedy",
      },
      desc: "itu postingan yang bagus, Terima kasih!",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2023-12-31T17:22:05.092+0000",
    },
    {
      _id: "11",
      user: {
        _id: "a",
        name: "William",
      },
      desc: "balasan untuk Dedy",
      post: "1",
      parent: "10",
      replyOnUser: "a",
      createdAt: "2023-12-31T17:22:05.092+0000",
    },
    {
      _id: "12",
      user: {
        _id: "b",
        name: "Roni",
      },
      desc: "Lanjutkan kawan <3",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2023-12-31T17:22:05.092+0000",
    },
    {
      _id: "13",
      user: {
        _id: "c",
        name: "Jessica",
      },
      desc: "Saya selalu tertarik dengan konten Anda :)",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2023-12-31T17:22:05.092+0000",
    },
  ];
};
