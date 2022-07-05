import { useState } from "react";
import "./App.css";
import { calculationSections, FenderTypes } from "./utils/mock";
import input from "./assets/icons/input.svg";
import dropDown from "./assets/icons/drop.svg";
import textArea from "./assets/icons/text.svg";
import date from "./assets/icons/date.svg";
import checkBox from "./assets/icons/checbox.svg";
import radio from "./assets/icons/radio.svg";
import image from "./assets/icons/image.svg";
import clone from "./assets/icons/clone.svg";
import del from "./assets/icons/delete.svg";
const fieldMapper = {
  0: "input",
  1: "dropDown",
  2: "textArea",
  3: "date",
  4: "checkBox",
  5: "radio",
  6: "image",
};
const getImage = (type) => {
  switch (type) {
    case "input":
      return input;
    case "dropDown":
      return dropDown;
    case "textArea":
      return textArea;
    case "date":
      return date;
    case "checkBox":
      return checkBox;
    case "radio":
      return radio;
    case "image":
      return image;
    default:
      return input;
  }
};

function App() {
  const [currentFender, setCurrentFender] = useState("");
  const [businessRules, setBusinessRules] = useState([]);
  const [selectedBusinessRule, setBusinessRule] = useState("");
  const [template, setTemplate] = useState([
    {
      sectionId: "General Details",
      fields: [
        { id: 0, label: "Fender Type", disabled: true, type: "dropDown" },
      ],
    },
  ]);
  const [currentSection, setCurrentSection] = useState("");
  const addField = (idx) => {
    if (currentSection) {
      const currentSectionIdx = template.findIndex(
        (sec) => sec.sectionId === currentSection
      );
      if (currentSectionIdx > -1) {
        const temp = [...template];
        const section = temp[currentSectionIdx];
        section.fields.push({
          id: section.fields.length,
          type: fieldMapper[idx],
          disabled: false,
        });
        setTemplate(temp);
      }
    }
  };

  return (
    <div className="App">
      <div key={0}>
        <label className="flex justify-content-center m-3 align-items-center h-3">
          <span className="font-bold pr-3">Fender Type</span>
          <select
            value={currentFender}
            placeholder="Select Fender"
            onChange={(e) => {
              setCurrentFender(e.target.value);
              setBusinessRules(
                FenderTypes.filter(
                  (type) => type.fenderType === e.target.value
                )[0].avialableCalculationFields
              );
            }}
          >
            <option key={0}></option>
            <option key={1} value={"Leg & V-type fender"}>
              Leg &amp; V-type fender
            </option>
            <option key={2} value={"Rubber fender with panel"}>
              Rubber fender with panel
            </option>
            <option key={3} value={"Cylindrical"}>
              Cylindrical
            </option>
            <option key={4} value={"Pneumatic Fender - Floating"}>
              Pneumatic Fender - Floating
            </option>
            <option key={5} value={"Pneumatic Fender - With Panel"}>
              Pneumatic Fender - With Panel
            </option>
          </select>
        </label>
      </div>
      <div key={1}>
        <label className="flex justify-content-center m-3 align-items-center h-3">
          <span className="font-bold pr-3"> Add Business Rules </span>
          <select
            value={selectedBusinessRule}
            style={{ minWidth: "17  ch" }}
            onChange={(e) => setBusinessRule(e.target.value)}
          >
            <option key={0}></option>
            {businessRules.map((rule, idx) => (
              <option key={idx + 1} value={rule}>
                {rule}
              </option>
            ))}
          </select>
          <button
            className="ml-4"
            onClick={(e) => {
              const section = calculationSections.find(
                (section) => section.sectionId === selectedBusinessRule
              );
              const isPresnet = template.find(
                (sec) => sec.sectionId === section.sectionId
              );
              if (section && !isPresnet) {
                const temp = [...template];
                section.fields = section.fields.map((field) => ({
                  ...field,
                  disabled: true,
                }));
                temp.push(section);
                setTemplate(temp);
              }
            }}
          >
            Add Rule
          </button>
        </label>

        <main className="grid">
          <div key={1} className="col-2">
            <section className="fields">
              <h3 className="p-3">Add Field</h3>
              <p
                key={1}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(0)}
              >
                <img alt="icon" src={input} /> Input Field
              </p>
              <p
                key={2}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(1)}
              >
                <img alt="icon" src={dropDown} /> Drop Down
              </p>
              <p
                key={3}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(2)}
              >
                <img alt="icon" src={textArea} /> Text Area
              </p>
              <p
                key={4}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(3)}
              >
                <img alt="icon" src={date} /> Date
              </p>
              <p
                key={5}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(4)}
              >
                <img alt="icon" src={checkBox} /> Check Box
              </p>
              <p
                key={6}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(5)}
              >
                <img alt="icon" src={radio} /> Radio Button
              </p>
              <p
                key={7}
                className="px-3 py-2 flex align-items-center"
                onClick={() => addField(6)}
              >
                <img alt="icon" src={image} /> Image
              </p>
            </section>
          </div>
          <div key={2} className="col-8 ">
            <section className="p-2">
              {template.map((section) => (
                <div key={section.sectionId}>
                  <div
                    className="section-header"
                    onClick={() => {
                      console.log("Clicked", section.sectionId);
                      setCurrentSection(section.sectionId);
                    }}
                  >
                    {section.sectionId}
                  </div>
                  {section.fields.map((field, idx) => (
                    <div
                      className="section-input grid grid-nogutter align-items-center"
                      key={idx}
                    >
                      <img
                        className="col-1"
                        alt="icon"
                        height={30}
                        width={30}
                        src={getImage(field.type ? field.type : "input")}
                      />
                      <input
                        className="col-9"
                        placeholder={field.label}
                        disabled={field.disabled}
                      />
                      {field.disabled ? (
                        ""
                      ) : (
                        <div className="col-1">
                          <img alt="icon" src={clone} height={20} width={20} />{" "}
                          <img alt="icon" src={del} height={20} width={20} />{" "}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </section>
          </div>
          <div key={3} className="col-2">
            <section>
              <h3 className="p-3">Field Settings</h3>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
