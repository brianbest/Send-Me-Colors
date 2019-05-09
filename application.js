var database = firebase.firestore();
var colorForm = new ColorForm("color-submit", "list", database);


database.collection("colors")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        colorForm.createBox(doc.data().value);
    });
  })
