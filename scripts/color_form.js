class ColorForm {
  constructor(formID, listID, database) {
    this.form = document.getElementById(formID);
    this.list = document.getElementById(listID);
    this.db = database;
    this.input = this.form.querySelector("input[type='text'");
    this.submitButton = this.form.querySelector('button');
    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    let color =  this.form.querySelector("input[type='text'").value
    if (!/^#/i.test(color)) {
      color = "#" + this.form.querySelector("input[type='text'").value
    }
    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      this.createBox(color);
      this.db.collection("colors").add({value: color});
      this.clearForm();
    } else {
      this.clearForm();
    }
  }

  createBox(color) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style = `background: ${color}`;
    this.list.prepend(box);
  }

  clearForm() {
    this.form.querySelector("input[type='text'").value = "";
  }
}
