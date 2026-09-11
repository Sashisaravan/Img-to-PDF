import jsPDF from "jspdf";

const getPageDimensions = (pageSize, orientation) => {
  const sizes = {
    a3: [297, 420],
    a4: [210, 297],
    letter: [215.9, 279.4],
  };

  let [width, height] = sizes[pageSize] || sizes.a4;

  if (orientation === "landscape") {
    [width, height] = [height, width];
  }

  return [width, height];
};

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = reject;

    img.src = src;
  });
};

export const generatePdf = async (images, settings) => {
  const {
    pageSize = "a4",
    orientation = "portrait",
    margin = 10,
  } = settings;

  const [pageWidth, pageHeight] = getPageDimensions(
    pageSize,
    orientation
  );

  const pdf = new jsPDF({
    orientation,
    unit: "mm",
    format: pageSize,
  });

  for (let i = 0; i < images.length; i++) {
    const image = await loadImage(images[i].preview);

    if (i > 0) {
      pdf.addPage([pageWidth, pageHeight], orientation);
    }

    const availableWidth = pageWidth - margin * 2;
    const availableHeight = pageHeight - margin * 2;

    const imageRatio = image.width / image.height;

    let imageWidth = availableWidth;
    let imageHeight = imageWidth / imageRatio;

    if (imageHeight > availableHeight) {
      imageHeight = availableHeight;
      imageWidth = imageHeight * imageRatio;
    }

    const x = (pageWidth - imageWidth) / 2;
    const y = (pageHeight - imageHeight) / 2;

    let format = "JPEG";

    if (images[i].file.type === "image/png") {
      format = "PNG";
    }

    pdf.addImage(
      image,
      format,
      x,
      y,
      imageWidth,
      imageHeight,
      undefined,
      "FAST"
    );
  }

  const timestamp = new Date()
    .toISOString()
    .slice(0, 10);

  pdf.save(`images-${timestamp}.pdf`);
};