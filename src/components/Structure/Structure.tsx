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
        setExecutiveCommittee( results.data );      
      },
    });
  };


  useEffect(() => {
    fetchCommittee();
    // eslint-disable-next-line
  }, []);


  return (
    (executiveCommittee) &&
    <div ref={structureRef} id='structureContainer'>
      Structure
      <div>Patrons
        <div>
          {patrons.map((item: any,key:any) => (
            <div key={key}>{item}</div>
          ))}
        </div>
      </div>
      <div>
        <div>Executive Committee</div>
        {executiveCommittee.map((item: any,key:any) => (
          <div key={key}>
          <div>{item.name}</div>
          {/* <img
                width="80px"
                height="80px"
                style={{ borderRadius: "50px" }}
                src={"//drive.google.com/uc" + item.photo.substring(29)}
              ></img> */}
              <h4>{item.designation}</h4>
          </div>
        ))}
      </div>
      <div>Monitoring Committee
        <div>
          {monitoringCommittee1.map((item: any,key:any) => (
            <div key={key}>{item}</div>
          ))}
        </div>
        <div>
          {monitoringCommittee2.map((item: any,key:any) => (
            <div key={key}>{item}</div>
          ))}
        </div>
      </div>
      <div>Auditor 
        <div>{auditor}</div>
      </div> 
      <div>
        Legal Advisor
        <div>{legalAdvisor}</div>
      </div>
    </div>
  );
};
export default Structure;
