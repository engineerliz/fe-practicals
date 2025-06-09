import { useEffect, useState } from "react";
import { SEARCH_RESULTS } from "./results";
import { SearchResult } from "./searchResultModel";

export default function SearchDebounce() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [debouncedQuery, setDebouncedQuery] = useState<string>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery && debouncedQuery?.length > 0) {
      setResults(mockSearchApi());
    }
  }, [debouncedQuery]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) return;
    setSearchQuery(value);
  };

  const mockSearchApi = () => {
    return SEARCH_RESULTS;
  };

  return (
    <div
      style={{
        margin: 40,
        gap: 20,
      }}>
      <h1>Search Debounce</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <input onChange={onSearch} />
        <button>Search</button>
      </div>
      <div>
        {results.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
