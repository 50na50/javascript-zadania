function StringToObject(string) {
    const object = {
      newClass: string
    }
    return object;
  }
  
  function addNewClassToDiv(obj) {
    const newClass = object.newClass;
    document.getElementById('myDiv').classList.add(newClass);
  }
  
  addNewClassToDiv(StringToObject('string_z_parametru'));