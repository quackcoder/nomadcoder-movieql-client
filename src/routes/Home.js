import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, data, error } = useQuery(GET_MOVIES);
  console.log({ loading, data, error });

  if (loading) {
    return 'loading...';
  }

  return <div>Home</div>;
};

export default Home;
