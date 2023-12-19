// useQuery
// useQuery sẽ giúp bạn lấy dữ liệu từ một endpoint API:

import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://api.example.com/posts');
  return response.json();
};

const PostList = () => {
  const { isLoading, error, data: posts } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
// useQuery sử dụng key là 'posts' để định danh dữ liệu và hàm fetchPosts để lấy danh sách các bài viết từ API.

// useQueries
// dùng lấy nhiều loại dữ liệu khác nhau cùng một lúc, bạn có thể sử dụng useQueries:

import { useQueries } from 'react-query';

const PostList = () => {
  const queries = useQueries([
    { queryKey: 'posts', queryFn: fetchPosts },
    { queryKey: 'users', queryFn: fetchUsers },
    // More query configurations...
  ]);

  const isLoading = queries.some(query => query.isLoading);
  const errors = queries.map(query => query.error).filter(Boolean);

  if (isLoading) return <p>Loading...</p>;
  if (errors.length > 0) return <p>Error: {errors[0].message}</p>;

  // Render your UI using the fetched data from different queries
};
//  useQueries được sử dụng để lấy dữ liệu từ nhiều endpoint khác nhau. isLoading kiểm tra xem có request nào đang loading không và errors lưu trữ các lỗi của các query.

// useInfiniteQuery
// Nếu bạn muốn lấy dữ liệu phân trang, bạn có thể sử dụng useInfiniteQuery:


import { useInfiniteQuery } from 'react-query';

const fetchPostsByPage = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://api.example.com/posts?page=${pageParam}`);
  return response.json();
};

const InfinitePostList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery('posts', fetchPostsByPage, {
    getNextPageParam: lastPage => lastPage.nextPage, // Function to get the next page number
  });

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.pages.map(page => (
        <ul key={page.pageNumber}>
          {page.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ))}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
};
// useInfiniteQuery cho phép bạn lấy dữ liệu theo từng trang (page) và sử dụng fetchNextPage để tải thêm dữ liệu khi người dùng cuộn xuống dưới cùng.

// useQueryClient

//  useQueryClient cho phép bạn thao tác với instance của query client, ví dụ như xóa cache hoặc thực hiện các hành động khác liên quan đến query:

import { useQueryClient } from 'react-query';

const ClearCacheButton = () => {
  const queryClient = useQueryClient();

  const handleClearCache = () => {
    queryClient.invalidateQueries('posts');
  };

  return (
    <button onClick={handleClearCache}>Clear Cache</button>
  );
};