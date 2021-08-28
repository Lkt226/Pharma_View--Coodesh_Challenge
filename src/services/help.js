export const util = {
  //Standardizer a variable
  standard: (value, common)=>{
    switch (value) {
      case "": case null: case undefined:
        return common

      default:
        return value
    }
  },
  //Check if variable if equal type and allow or recuse
  allowType: (variable, type)=>{
    return typeof variable === type
  },

  formatData: (date)=>{
    //Transform date format
    date = date.toString(); date = date.split("T")[0]
    date = date.replaceAll("-","/");
    return date
  }
}