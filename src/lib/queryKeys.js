export const queryKeys = {
  // 게시글 관련
  articles: {
    all: ['articles'],
    // 목록
    best: () => [
      ...queryKeys.articles.all,
      'list',
      { sort: 'favorite', limit: 3 },
    ],
    list: (params) => [...queryKeys.articles.all, 'list', params],
    // 상세
    byId: (id) => [...queryKeys.articles.all, 'byId', id],
    detail: (id) => [...queryKeys.articles.byId(id), 'detail'],
    comments: (id) => [...queryKeys.articles.byId(id), 'comments'],
    likes: (id) => [...queryKeys.articles.byId(id), 'likes'],
  },

  // 상품 관련
  products: {
    all: ['products'],
    // 목록
    best: () => [
      ...queryKeys.products.all,
      'list',
      { sort: 'favorite', limit: 4 },
    ],
    list: (params) => [...queryKeys.products.all, 'list', params],
    // 상세
    byId: (id) => [...queryKeys.products.all, 'byId', id],
    detail: (id) => [...queryKeys.products.byId(id), 'detail'],
    comments: (id) => [...queryKeys.products.byId(id), 'comments'],
    likes: (id) => [...queryKeys.products.byId(id), 'likes'],
  },

  // 유저 관련
  auth: {
    me: () => ['users', 'me'],
    products: () => ['users', 'me', 'products'],
    likes: () => ['users', 'me', 'likes'],
  },
};
