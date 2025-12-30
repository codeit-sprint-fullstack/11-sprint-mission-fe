export const createPatchData = (newData, originalData) => {
  const patchData = {};
  if (newData.title !== originalData.title) {
    patchData.title = newData.title;
  }
  if (newData.content !== originalData.content) {
    patchData.content = newData.content;
  }
if (newData.image !== originalData.image) {
    patchData.image = newData.image;
  }
  return patchData;
};
