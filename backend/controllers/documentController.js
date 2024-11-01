const Document = require('../models/Document');
const pdfService = require('../services/pdfService');
const docxService = require('../services/docxService');

exports.downloadPDF = async (req, res) => {
  const { content } = req.body;

  try {
    const pdfBuffer = await pdfService.generatePDF(content);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=document.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.downloadDOCX = async (req, res) => {
  const { content } = req.body;

  try {
    const docxBuffer = await docxService.generateDOCX(content);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', 'attachment; filename=document.docx');
    res.send(docxBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
