const { createWorker } = require('tesseract.js');

const worker = createWorker({
//   logger: m => console.log(m)
});


// const trained_data = 'eng+hin'
const ReadText = async (imgfile, oem, psm) => {
    try {
        const oem_var = oem || 2
        const psm_var = psm || 3
          await worker.load();
          await worker.loadLanguage('eng+osd');
          await worker.initialize('eng+osd');
            await worker.setParameters(
                {
                    tessedit_ocr_engine_mode:oem_var,
                    tessedit_pageseg_mode: psm_var
                }
            );
            const image = (imgfile)
          const { data: { text } } = await worker.recognize(image);
        console.log(text);
        await worker.terminate();
    }
    catch (e) {
        return `An error occurred: ${e}`
    }
}










module.exports = ReadText
