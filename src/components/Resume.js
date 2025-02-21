import React, { useState } from 'react';
import Select from 'react-select';
import { Document, Page } from 'react-pdf';
import '../style.css';
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import Navbar from '../navbar.js'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function Resume() {  
  

  return (
  <div>
    <Navbar />
  </div>
  );
}

export default Resume;