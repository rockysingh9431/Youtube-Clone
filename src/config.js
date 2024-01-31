const GOOGLE_API_KEY = "AIzaSyCe0oqKGYZfn5CiPG5NuvSrtySIVPlz5Qg";
export const SUBSCRIPTIONS_API =
  "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=" +
  GOOGLE_API_KEY;

export const CDN_IMG_URL =
  "https://cdn-icons-png.flaticon.com/512/608/608386.png";

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentData = [
  {
    name: "Rocky Singh",
    comment: "Lorem ipsum is what you do for living",
    commentId: "123",
    replies: [
      {
        name: "Rocky Singh",
        comment: "Lorem ipsum is what you do for living",
        commentId: "124",
        replies: [
          {
            name: "Rocky Singh",
            comment: "Lorem ipsum is what you do for living",
            commentId: "125",
            replies: [
              {
                name: "Rocky Singh",
                comment: "Lorem ipsum is what you do for living",
                commentId: "126",
                replies: [
                  {
                    name: "Rocky Singh",
                    comment: "Lorem ipsum is what you do for living",
                    commentId: "127",
                    replies: [
                      {
                        name: "Rocky Singh",
                        comment: "Lorem ipsum is what you do for living",
                        commentId: "128",
                        replies: [
                          {
                            name: "Rocky Singh",
                            comment: "Lorem ipsum is what you do for living",
                            commentId: "129",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Rocky Singh",
        comment: "Lorem ipsum is what you do for living",
        commentId: "131",
        replies: [],
      },
      {
        name: "Rocky Singh",
        comment: "Lorem ipsum is what you do for living",
        commentId: "130",
        replies: [],
      },
      {
        name: "Rocky Singh",
        comment: "Lorem ipsum is what you do for living",
        commentId: "132",
        replies: [],
      },
      {
        name: "Rocky Singh",
        comment: "Lorem ipsum is what you do for living",
        commentId: "133",
        replies: [],
      },
    ],
  },
  {
    name: "Manish Singh",
    comment: "Lorem ipsum is what you do for living",
    commentId: "134",
    replies: [
      {
        name: "Rajnish Singh",
        comment: "Lorem ipsum is what you do for living",
        commentId: "135",
        replies: [
          {
            name: "Rocky Singh",
            comment: "Lorem ipsum is what you do for living",
            commentId: "136",
            replies: [
              {
                name: "Rocky Singh",
                comment: "Lorem ipsum is what you do for living",
                commentId: "137",
                replies: [
                  {
                    name: "Rocky Singh",
                    comment: "Lorem ipsum is what you do for living",
                    commentId: "138",
                    replies: [
                      {
                        name: "Rocky Singh",
                        comment: "Lorem ipsum is what you do for living",
                        commentId: "139",
                        replies: [
                          {
                            name: "Rocky Singh",
                            comment: "Lorem ipsum is what you do for living",
                            commentId: "140",
                            replies: [
                              {
                                name: "Rocky Singh",
                                comment:
                                  "Lorem ipsum is what you do for living",
                                commentId: "141",
                                replies: [
                                  {
                                    name: "Rocky Singh",
                                    comment:
                                      "Lorem ipsum is what you do for living",
                                    commentId: "142",
                                    replies: [
                                      {
                                        name: "Rocky Singh",
                                        comment:
                                          "Lorem ipsum is what you do for living",
                                        commentId: "143",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const VIDEO_SEARCH_API = (searchQuery) => {
  return (
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +
    searchQuery +
    "&type=video&key=" +
    GOOGLE_API_KEY
  );
};
