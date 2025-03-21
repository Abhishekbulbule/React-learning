import React, { Suspense } from "react";
import useFetch from "../hooks/useFetch";
import { API_GET_CANDIDATES } from "../utils/helper";
import { Candidate } from "../utils/utils.type";
import useQueryhook from "../hooks/useQueryhook";

const CandidateList = React.lazy(() => import("./CandidateList"));
const Candidates = () => {
  console.log("Candidates component rendered");
  // const { data, error } = useFetch<Candidate[]>(API_GET_CANDIDATES, true);
  const { data, error } = useQueryhook<Candidate[]>(
    API_GET_CANDIDATES,
    "candidates"
  );

  console.log("data", data);
  if (error) return <h2>Something went wrong</h2>;

  return (
    <div className="w-screen d-flex justify-items-center items-center mb-5">
      <h2 className="text-2xl m-4 font-bold">Candidates</h2>
      <Suspense fallback={<h2>Loading Candidates...</h2>}>
        {data && <CandidateList candidateData={data} />}
      </Suspense>
    </div>
  );
};

export default React.memo(Candidates);
