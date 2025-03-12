import React from "react";
import Card from "./common-components/Card";
import { Candidate, Profile } from "../utils/utils.type";

const CandidateList = ({ candidateData }: { candidateData: Candidate[] }) => {
  console.log("CandidateList component rendered");
  return (
    <div className="flex flex-row justify-center flex-wrap gap-5">
      {candidateData.map((candidate) => {
        const profileData: Omit<Profile, "gender" | "phone"> = {
          id: candidate.id,
          name: candidate.name,
          email: candidate.email,
          profilePhoto: candidate.profile_picture,
          address: candidate.address,
        };
        return <Card key={candidate.id} data={profileData} />;
      })}
    </div>
  );
};

export default React.memo(CandidateList);
