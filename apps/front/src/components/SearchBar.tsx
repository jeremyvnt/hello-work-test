import { FC, FormEvent, useState } from 'react';

interface SearchBarProps {
  defaultValue?: string;
  onSubmit: (search: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ defaultValue = '', onSubmit }) => {
  const [search, setSearch] = useState(defaultValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">
        Rechercher
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0 focus:ring-sky-500"
          placeholder="Quel emploi recherchez-vous sur Bordeaux ?"
          value={search}
          onChange={e => setSearch(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
};
