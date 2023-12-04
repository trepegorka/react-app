import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}: any) => {
    return (
        <>
            <MySelect options={[
                {value: 'title', name: 'по названию'},
                {value: 'body', name: 'по описанию'}]}
                      defaultValue={'сортировка'}
                      value={filter.sort}
                      onChange={(selectedOption: any) => setFilter({...filter, sort: selectedOption})}
            />

            <MyInput
                placeholder={"find post"}
                style={{margin: '20px 0'}}
                value={filter.query}
                onChange={(e: any) => setFilter({...filter, query: e.target.value})}
            />
        </>
    );
};

export default PostFilter;