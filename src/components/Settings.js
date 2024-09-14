import React, { useState } from 'react';
import Select from 'react-select';
import { Document, Page } from 'react-pdf';
import '../style.css';
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function Settings() {  
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selected1, setSelected1] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [placeholderCompanyText, setPlaceholderCompanyText] = useState('Insurance Company');

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selected2, setSelected2] = useState(false);
  const [planDropdownOpen, setPlanDropdownOpen] = useState(false);
  const [placeholderPlanText, setPlaceholderPlanText] = useState('Insurance Plan');

  const [numPages, setNumPages] = useState(null);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });

  const handleCompanyChange = (option) => {
    setSelectedCompany(option);
    setSelected1(true);
    setPlaceholderCompanyText('Insurance Company');
  };

  const handleCompanyDropdownOpen = () => {
    setCompanyDropdownOpen(true);
    setPlaceholderCompanyText('Search');
  };

  const handleCompanyDropdownClose = () => {
    setCompanyDropdownOpen(false);
    setPlaceholderCompanyText('Insurance Company');
  };

  const handlePlanChange = (option) => {
    setSelectedPlan(option);
    setPlaceholderPlanText('Search');
    setSelected2(true);
  };

  const handlePlanDropdownOpen = () => {
    setPlanDropdownOpen(true);
    setPlaceholderPlanText('Search');
  };

  const handlePlanDropdownClose = () => {
    setPlanDropdownOpen(false);
    setPlaceholderPlanText('Insurance Plan');
  };

  const companyOptions = [
    { value: '1', label: 'UnitedHealth' },
    { value: '2', label: 'Cigna Health' },
    { value: '3', label: 'Blue Cross Blue Shield' },
  ];

  const planOptions = [
    { value: '1', label: 'Standard Silver' },
    { value: '2', label: 'Direct Gold' },
    { value: '3', label: 'Connect Bronze 8500 Indiv Med Deductible' },
  ];

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color: companyDropdownOpen ? 'lightgray' : '#3B64B8',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: companyDropdownOpen ? '24px' : '36px',
    }),
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      marginTop: '20px',
    }),   
    menu: (provided) => ({
      ...provided,
      borderRadius: '0',
      boxShadow: 'none', 
      border: 'none', 
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '0', 
      margin: '0',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#3B64B8',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided) => ({
      ...provided,
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '30px', 
      color: "#3B64B8",
      padding: '10px',
    }),
    input: (provided) => ({
      ...provided,
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '18px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#3B64B8",
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '24px',
      fontWeight: 'light',
    }),
  };

  const customStylesPlan = {
    placeholder: (provided) => ({
      ...provided,
      color: planDropdownOpen ? 'lightgray' : '#3B64B8',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: planDropdownOpen ? '24px' : '36px',
    }),
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      marginTop: '20px',
    }),   
    menu: (provided) => ({
      ...provided,
      borderRadius: '0',
      boxShadow: 'none', 
      border: 'none', 
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '0', 
      margin: '0',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#3B64B8',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided) => ({
      ...provided,
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '30px', 
      color: "#3B64B8",
      padding: '10px',
    }),
    input: (provided) => ({
      ...provided,
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '18px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#3B64B8",
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '24px',
      fontWeight: 'light',
    }),
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="settings-container">
      <div className="dropdown-container">
      <Select
        className="select-dropdown"
        value={selectedCompany}
        onChange={handleCompanyChange}
        options={companyOptions}
        placeholder={placeholderCompanyText}
        styles={customStyles}
        isSearchable={true}
        onMenuOpen={handleCompanyDropdownOpen}
        onMenuClose={handleCompanyDropdownClose}
      />
      {/* <div className="selected-option">
        <strong></strong>{selectedCompany ? selectedCompany.label : 'None'}
      </div> */}

      <Select
        className="select-dropdown"
        value={selectedPlan}
        onChange={handlePlanChange}
        options={planOptions}
        placeholder={placeholderPlanText}
        styles={customStylesPlan}
        isSearchable={true}
        onMenuOpen={handlePlanDropdownOpen}
        onMenuClose={handlePlanDropdownClose}
      />
      </div>
      {selected1 && selected2 &&
      <div>
      <Document 
      className="pdf-viewer" 
      file="/cignabronze.pdf" 
      onLoadSuccess={onDocumentLoadSuccess} 
      options={{ scrollMode: 'vertical' }}
      renderMode="canvas">
         {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
            />
          ))}
      </Document>
    </div>
    }
    </div>
  );
}

export default Settings;