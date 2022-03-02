import React, { useEffect, useRef, useState } from "react";

interface IProps {
  open?: boolean;
  title: string;
}

const Test = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const handleFilterOpening = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // const ref = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
  //   else setHeight(0);
  // }, [isOpen]);

  return (
    <>
    <div className="card">
      {/* <div>
        <div className="p-3 border-bottom d-flex justify-content-between">
          <h6 className="font-weight-bold">title</h6>
          <button type="button" className="btn" onClick={handleFilterOpening}>
          {!isOpen ? (
              '▲'
            ) : (
              '▼'
            )}
          </button>
        </div>
      </div>

      <div className="border-bottom">
        <div>{isOpen && <div className="p-3">children</div>}</div>
      </div> */}
    </div>
  </>
);
  
}

export default Test