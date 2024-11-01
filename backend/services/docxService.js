// services/docxService.js

const { Document, Packer, Paragraph, TextRun } = require('docx');

const generateDOCX = async (textContent) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: textContent,
                size: 24, // Size is in half-points
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
};

module.exports = { generateDOCX };
