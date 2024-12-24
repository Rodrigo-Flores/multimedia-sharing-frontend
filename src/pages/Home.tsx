import React from 'react';
import { Input, message } from 'antd';

const { Search } = Input;

const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    message.info(`Searching for: ${query}`);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the multimedia sharing application.</p>
      <Search
        placeholder="Search for media..."
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Home;