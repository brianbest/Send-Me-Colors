class ColorForm {
  constructor(formID, listID) {
    this.form = document.getElementById(formID);
    this.list = document.getElementById(listID);
    this.input = this.form.querySelector("input[type='text'");
    this.submitButton = this.form.querySelector('button');
    this.submitButton.addEventListener('click', (e) =>{
      this.form.querySelector("input[type='text'");
      let element = document.createElement("p");
      let text = document.createTextNode(this.form.querySelector("input[type='text'").value);
      element.appendChild(text);
      this.list.append(element);
      this.form.querySelector("input[type='text'").value = "";
      e.preventDefault();
    });

    this.input.addEventListener("keyup", (e) =>{
      console.log(e);//0[xX][0-9a-fA-F]+
      let hex = new RegExp(/^#(?:[0-9a-f]{3}){1,2}$/i);

      console.log(this.form.querySelector("input[type='text'").value.search(hex))
    })
  }
}
