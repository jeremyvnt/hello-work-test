import { useCallback, useMemo } from 'react';

import { useRouter } from 'next/router';

import Hero from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  const router = useRouter();
  const searchParams = router.query;
  const what: string | undefined = useMemo(
    () => (searchParams?.what as string) || '',
    [searchParams],
  );

  const handleOnSubmit = useCallback(
    async (search: string) => {
      const searchParams = new URLSearchParams();
      searchParams.set('what', search);

      await router.push(
        {
          pathname: router.route,
          query: searchParams.toString(),
        },
        undefined,
        { shallow: true },
      );
    },
    [router],
  );

  return (
    <>
      <div className="bg-gray-900 pt-20 pb-10 px-10">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-gray-900 from-10% to-gray-700 to-100% p-10 min-h-lvh">
        <div className="flex flex-col gap-y-10 max-w-lg md:max-w-2xl w-full mx-auto">
          <SearchBar defaultValue={what} onSubmit={handleOnSubmit} />
          {what && <p className={'text-white'}>Job offer list for {what}</p>}
        </div>
      </div>
    </>
  );
}
