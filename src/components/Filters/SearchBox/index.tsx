import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = 'Search...', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{ marginRight: 8 }}
      />
      <Button type="primary" onClick={handleSearch} icon={<SearchOutlined />}>
        Search
      </Button>
    </div>
  );
};

export default SearchBox;