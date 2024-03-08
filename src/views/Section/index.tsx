import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Table from "../../components/table";
import Table2 from "../../components/inserttable";
import DropDownOptionStore from "../../components/dropdownoptionstore";
import SectionDiv from "./Section";

const Section = observer(() => {
  const [isConnected, setIsConnected] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    // DropDownOptionStore에 저장된 옵션을 확인하여 섹션 표시 여부 설정
    setSectionVisible(
      !DropDownOptionStore.dropdownOptions.includes("색인추가")
    );
  }, []);

  const handleConnectionStatus = (status: boolean) => {
    setIsConnected(status);
  };

  return (
    <SectionDiv>
      <>
        {sectionVisible &&
          DropDownOptionStore.dropdownOptions.includes("색인추가") && (
            <>
              {isConnected ? (
                <Table2 />
              ) : (
                <Table onConnect={handleConnectionStatus} />
              )}
            </>
          )}
      </>
    </SectionDiv>
  );
});

export default Section;
