import Header from "@/component/dashboard/Header";
import DataTable from "./data-table";
import getQueryClient from "@/utils/query/getQueryClient";
import prisma from "../libs/prisma";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

const getFormulirUsers = async () => {
  try {
    const res = await prisma.fomulir.findMany({
      where: {
        user: {
          role: {
            contains: "USER",
          },
        },
      },

      include: {
        user: true,
      },
    });

    return res || [];
  } catch (error) {
    throw new Error(error.message || "");
  }
};

export default async function page() {
  // Inisialisasi QueryClient
  const queryClient = getQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["formulir_user"],
    queryFn: getFormulirUsers,
  });

  return (
    <main className="relative h-full min-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl w-full">
      <div className="w-full px-6 py-6 mx-auto">
        <Header />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <DataTable />
        </HydrationBoundary>
      </div>
    </main>
  );
}
