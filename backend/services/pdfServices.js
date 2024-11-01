// services/pdfService.js

const { PDFDocument } = require('pdf-lib');

const generatePDF = async (textContent) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // Set font size and add text
  const { width, height } = page.getSize();
  page.drawText(textContent, {
    x: 50,
    y: height - 50,
    size: 12,
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

module.exports = { generatePDF };
