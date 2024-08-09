import React, { useState } from "react";
import "../css/style.css";
import "../css/Home.css";
import MultiSelectDropdown from "../components/MultiSelectDropdown";
import Cards from "../components/Cards";
const Home = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [isAllSelected, setIsAllSelected] = useState(false);
  const [hideFileter, setHideFilter] = useState(false);
  const optionList = ["Men", "WoMen", "Baby & Kids"];
  return (
    <>
      <div className="custom-container ">
        <div className="main-home-header">
          <div className="home-header">
            <div className="custom-row">
              <div className="custom-xl-6 custom-lg-6  custom-md-6 custom-sm-6 custom-xs-6 ">
                <div className="total-itmes">
                  <h5 className="itme">3425 Items</h5>
                  {/* <h5 className="filter">Filter</h5> */}
                  <h5 className="filter-button">
                    <button
                      onClick={() => setHideFilter(true)}
                      style={
                        hideFileter
                          ? { display: "none" }
                          : { display: "inline-block" }
                      }
                    >
                      HIDE FILTER
                    </button>
                    <button
                      onClick={() => setHideFilter(false)}
                      style={
                        hideFileter
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                    >
                      SHOW FILTER
                    </button>
                  </h5>
                </div>
              </div>
              <div className="custom-xl-6 custom-lg-6 custom-md-9 custom-sm-6 custom-xs-6 ">
                <div className="recommended-filter">
                  <select className="recommended-option">
                    <option className="lable">RECOMMENDED</option>
                    <option className="lable">Newest first</option>

                    <option className="lable">popular</option>

                    <option className="lable">Price : high to low</option>

                    <option className="lable">Price : low to high</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="custom-container">
          {!hideFileter ? (
            <div className="custom-row content">
              <div className="custom-xl-3 custom-lg-3  custom-md-12 custom-sm-12 custom-xs-12">
                <div className="sidebar-menu">
                  <div class="custom-checkbox customizble">
                    <input type="checkbox" />
                    <label class="checkbox-container ">Customizble</label>
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"IDEAL FOR"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"occasion"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"work"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"fabric"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"suitable for"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"raw materials"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                  <div class="custom-checkbox">
                    <MultiSelectDropdown
                      options={optionList}
                      buttonLable={"Pattern"}
                      selectedOptions={selectedOptions}
                      setSelectedOptions={setSelectedOptions}
                      setIsAllSelected={setIsAllSelected}
                      isAllSelected={isAllSelected}
                    />
                  </div>
                </div>
              </div>
              <div className="custom-xl-9 custom-lg-9  custom-md-12 custom-sm-12 custom-xs-12">
                <Cards />
              </div>
            </div>
          ) : (
            <Cards />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
