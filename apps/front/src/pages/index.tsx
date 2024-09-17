import { useCallback, useMemo } from 'react';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import Hero from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { defaultPage } from '@/constants';
import JobOfferList from '@/domains/job/components/JobOfferList';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const what: string | undefined = useMemo(() => searchParams.get('what') || '', [searchParams]);
  const page: number | undefined = useMemo(() => {
    const pageParam = searchParams.get('page');

    if (!pageParam) return undefined;

    const parsedPage = parseInt(pageParam, 10);

    return isNaN(parsedPage) ? undefined : parsedPage;
  }, [searchParams]);

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

  const handleOnPageChange = useCallback(
    async (page: number = defaultPage) => {
      console.log('searchParams: ', searchParams.toString());
      const expectedSearchParams = new URLSearchParams(searchParams.toString());
      expectedSearchParams.set('page', page.toString());

      await router.push(
        {
          pathname: router.route,
          query: expectedSearchParams.toString(),
        },
        undefined,
        { scroll: true, shallow: true },
      );
    },
    [router, searchParams],
  );

  return (
    <>
      <div className="bg-gray-900 pt-20 pb-10 px-10">
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-gray-900 from-10% to-gray-700 to-100% p-10 min-h-lvh">
        <div className="flex flex-col gap-y-10 max-w-lg md:max-w-2xl w-full mx-auto">
          <SearchBar defaultValue={what} onSubmit={handleOnSubmit} />
          <JobOfferList page={page} what={what} onPageChange={handleOnPageChange} />
        </div>
      </div>
    </>
  );
}
