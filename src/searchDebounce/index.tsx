import { useEffect, useRef, useState } from "react";
import { SEARCH_RESULTS } from "./results";
import { SearchResult } from "./searchResultModel";

export default function SearchDebounce() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();
  const [debouncedQuery, setDebouncedQuery] = useState<string>();
  const resultsContainerRef = useRef<HTMLDivElement | null>(null);

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
    return SEARCH_RESULTS.slice(0, 5);
  };

  const getPaginatedSearchResults = async (): Promise<SearchResult[]> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const endIndex = results.length - 1;

        // Get next results
        let newEndIndex = endIndex + 2;
        if (newEndIndex > SEARCH_RESULTS.length - 1) {
          newEndIndex = SEARCH_RESULTS.length - 1;
        }

        // End of search results
        if (endIndex >= newEndIndex) return [];
        const nextPage = SEARCH_RESULTS.slice(endIndex, newEndIndex);
        resolve(nextPage);
      }, 300)
    );
  };

  const handleScroll = () => {
    const container = resultsContainerRef.current;
    if (!container) return;

    const { scrollHeight, scrollTop, clientHeight } = container;

    if (clientHeight + scrollTop >= scrollHeight - 10) {
      getPaginatedSearchResults().then((nextPage) => {
        setResults([...results, ...nextPage]);
      });
    }
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
      <div
        ref={resultsContainerRef}
        onScroll={handleScroll}
        style={{
          height: 200,
          border: "1px solid gray",
          overflow: "scroll",
          marginTop: 20,
        }}>
        {results.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
