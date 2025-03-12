import { useQuery } from "@tanstack/react-query";
const useQueryhook = <T>(
  url: string,
  key: string,
  page?: number
): { data: T | null; error: any; isLoading: boolean } => {
  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    queryKey: [key, { page }],
    staleTime: 1000 * 60 * 5,
  });
  console.log("query hook rendered");
  return { data, error, isLoading };
};

export default useQueryhook;
