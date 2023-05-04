import { wpClient } from "@/lib/wpapi";
import React from 'react'

const getStaticProps = async () => {
  const data = await wpClient.posts().perPage(10);

  return {
    props: {
      posts: data,
    },
  };
};

