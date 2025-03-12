import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCandidates } from "../store/reducers/CandidateReducer";

const useFetch = <T>(
  url: string,
  saveData: boolean
): { data: T | null; error: any; isLoading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);

    const localStorageData = localStorage.getItem("candidates");
    if (localStorageData) {
      const candidatesFromLocalStorage = JSON.parse(localStorageData);
      setData(candidatesFromLocalStorage);
      dispatch(fetchCandidates(candidatesFromLocalStorage));
      setIsLoading(false);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (saveData) {
          dispatch(fetchCandidates(data));
          localStorage.setItem("candidates", JSON.stringify(data));
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
