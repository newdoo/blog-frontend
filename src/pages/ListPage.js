import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import * as listActions from 'store/modules/list';
import { bindActionCreators } from 'redux';

const ListPage = ({match}) => {
    // page의 기본 값을 1로 설정합니다.
    const { page = 1, tag } = match.params;

    return (
    <PageTemplate>
        <ListWrapper>
            <ListContainer
                page={parseInt(page, 10)} 
                tag={tag}
            />
        </ListWrapper>
    </PageTemplate>
    );
};

ListPage.preload = (dispatch, params) => {
    const { page = 1, tag } = params;
    const ListActions = bindActionCreators(listActions, dispatch);
    return ListActions.getPostList({
        page, tag
    });
}

export default ListPage;