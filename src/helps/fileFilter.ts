export const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4|mp3)$/)) {
      return callback( null, false);
    }
    callback(null, true);
  };