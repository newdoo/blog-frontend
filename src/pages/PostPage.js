import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import Post from 'containers/post/Post';

const PostPage = ({match}) => {
    const { _id } = match.params;
    return (
        <PageTemplate>
            <Post id={_id} />
        </PageTemplate>
    );
};

export default PostPage;