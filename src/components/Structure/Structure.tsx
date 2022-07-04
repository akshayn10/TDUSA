import "./Structure.css";
import Papa from "papaparse";
import { useState, useEffect } from "react";

import { useNav } from "../../hooks/useNav";



const Structure = () => {
  const [executiveCommittee, setExecutiveCommittee] = useState<any>([]);
  const committeeUri = process.env.REACT_APP_COMITTEE_MEMBERS!;
  const auditor = process.env.REACT_APP_AUDITOR!;
  const legalAdvisor = process.env.REACT_APP_LEGAL_ADVISOR!;
  const patrons = process.env.REACT_APP_PATRONS?.split(',')!;
  const monitoringCommittee1 = process.env.REACT_APP_MONITORING_COMMITEE_1?.split(',')!;
  const monitoringCommittee2 = process.env.REACT_APP_MONITORING_COMMITEE_2?.split(',')!;
  const structureRef = useNav("Structure");
  const fetchCommittee = () => {
    Papa.parse(committeeUri, {
      download: true,
      header: true,
      complete: function (results) {
        setExecutiveCommittee(results.data);
      },
    });
  };


  useEffect(() => {
    fetchCommittee();
    // eslint-disable-next-line
  }, []);


  return (
    (executiveCommittee) &&

    <div ref={structureRef} id='structureContainer' className="structureContainer">
      <h1>Structure</h1>
      <div className="header"> Patrons
        <div className="committee">
          {patrons.map((item: any, key: any) => (
            <div key={key} >

              {<img
                width="80px"
                height="80px"
                src={profile}
              ></img>}
              <div>{item}</div>

            </div>

          ))}
        </div>
      </div>

      <div >
        <div className="header"> Executive Committee </div>
        <div className="committee"> {executiveCommittee.map((item: any, key: any) => (
          <div key={key} >
            {/* { <img
                width="80px"
                height="80px"
                style={{ borderRadius: "100px" }}
                src={"//drive.google.com/uc" + item.photo.substring(29) }
              ></img> } */}

            {<img
              width="80px"
              height="80px"
              src={profile}
            ></img>}

            <div>{item.name}</div>

            <h4>{item.designation}</h4>
          </div>
        ))}
        </div>
      </div>


      <div>
        <div className="header"> Monitoring Committee </div>
        <div className="monitorCommittee1">
          {monitoringCommittee1.map((item: any, key: any) => (
            <div key={key}>
              <img
                width="80px"
                height="80px"
                src={profile}
              ></img>
              <div>{item}</div>
            </div>
          ))}
        </div>


        <div className="monitorCommittee2">
          {monitoringCommittee2.map((item: any, key: any) => (
            <div key={key}>
              <img
                width="80px"
                height="80px"
                src={profile}
              ></img>
              <div>{item}</div>

            </div>
          ))}
        </div>
      </div>
      <div >
        <div className="header"> Auditor </div>
        <div className="committee">
          <div>
            {<img
              width="80px"
              height="80px"
              src={profile}
            ></img>}

            <div>{auditor}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="header"> Legal Advisor </div>
        <div className="committee">
          <div >
          {<img
            width="80px"
            height="80px"
            src={profile}
          ></img>}
          <div>{legalAdvisor}</div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Structure;