const cloudinary = require('../config/cloudinary');

const uploadImage = async (filePath, folder = 'dd-events') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: 'auto',
    });
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    throw new Error(`Image Upload Failed: ${error.message}`);
  }
};

module.exports = uploadImage;
