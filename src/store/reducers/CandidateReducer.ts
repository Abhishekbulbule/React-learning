import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Candidate } from "../../utils/utils.type";

const initialState: Candidate[] = [];

export const CandidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.push(action.payload);
    },
    fetchCandidates: (state, action: PayloadAction<Candidate[]>) => {
      state = action.payload;
    },
    deleteCandidate: (state, action: PayloadAction<string>) => {
      state.filter((val) => val.id != action.payload);
    },
  },
});

export const { addCandidate, deleteCandidate, fetchCandidates } =
  CandidateSlice.actions;
export default CandidateSlice.reducer;
