import { ResultsView } from 'src/pages/root/components/results-view.tsx';
import { SearchForm } from 'src/pages/root/components/search-form.tsx';

export const RootPage = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <div className="border rounded-md shadow p-2 sticky top-1 bg-background">
        <h1 className="text-xl p-2">Search Github repos</h1>
        <SearchForm />
      </div>
      <div className="rounded-md pb-2">
        <ResultsView />
      </div>
    </div>
  );
};
