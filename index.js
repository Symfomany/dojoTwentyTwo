// ```
//     1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

//     1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

//     1231231223123131_myFile.tar.gz2
// ```

// ```
//     FILE_NAME.EXTENSION

//     This_is_an_otherExample.mpg

//     myFile.tar
// ```

function kikito(str) {
  const rplc = str.replace(/[0-9]+_/, "");
  const tab = rplc.split(".");
  tab.pop();
  return tab.join(".");
}

console.log(kikito("1231231223123131_myFile.tar.gz2"));
