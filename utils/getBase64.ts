const getBase64 =(file, onLoad)=> {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      onLoad(reader.result);
    };
}
export default getBase64