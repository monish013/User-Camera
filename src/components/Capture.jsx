const Capture = ({ setFile }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    const { type } = file;
    if (type.indexOf("image/") > -1) {
      return setFile(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <label htmlFor='capture'>Capture Photo</label>
      <div>
        <input
          type='file'
          id='capture'
          accept='image/*'
          capture
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

export default Capture;
