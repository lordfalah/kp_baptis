import Header from "@/component/dashboard/Header";

import getQueryClient from "@/utils/query/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import DataTableHistory from "./(tables)/data-table";

export const getHistoryCalonBaptis = async () => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_URL_PAGE}/api/baptis/history`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(error.message || "INTERNAL SERVER ERROR");
  }
};

export default async function page() {
  // Inisialisasi QueryClient
  const queryClient = getQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["history_calon_baptis"],
    queryFn: getHistoryCalonBaptis,
  });

  return (
    <main className="relative h-full min-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl w-full">
      <div className="w-full px-6 py-6 mx-auto">
        <Header />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <DataTableHistory />
        </HydrationBoundary>
      </div>
    </main>
  );
}
