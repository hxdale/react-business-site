
// import { useState } from "react"
import { Layout, Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value: any) => console.log(value);

export const SearchPanel = () => {
  return (
    <>
      <Space direction="vertical" >
        <Search
          placeholder="请输入"
          allowClear
          enterButton="查询"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    </>
  )
};