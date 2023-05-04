import { wpClient } from "@/lib/wpapi";

export const getStaticProps = async () => {
    const data = await wpClient.posts().perPage(10); // perPage()で表示ページ数指定

    return {
        props: {
            posts: data,
        },
    };
};
AnimationPlaybackEvent