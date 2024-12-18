document.addEventListener("DOMContentLoaded", function () {
    const colors = [
        {
          title: "Красный",
          hex: "#E32636"
        },
        {
          title: "Желтый",
          hex: "#FDE910"
        },
        {
          title: "Зеленый",
          hex: "#138808"
        },
        {
          title: "Синий",
          hex: "#1560BD"
        }
      ];
      const shape = document.querySelector(".shape");
      const circle = document.getElementById("circle");
      const rectangle = document.getElementById("rectangle");
      const colorError = document.getElementById("colorShapeError");
      const textError = document.getElementById("textError");
      function addRectangle(){
        circle.style.border = "";
        rectangle.style.border = "3px solid red";
        shape.classList.remove("circle")
        shape.classList.remove("non-display")
      }
      rectangle.addEventListener("click",addRectangle);
      function addCircle(){
        rectangle.style.border = "";
        circle.style.border = "3px solid red";
        shape.classList.remove("non-display");
        shape.classList.add("circle")
      }
      circle.addEventListener("click", addCircle);
      const colorButtons = document.querySelectorAll(".color-button");
      function addColor(a){
        if(shape.classList.contains("non-display")){
          colorError.textContent ="Выберите фигуру!"
        }
        else{
        colorError.textContent ="";
        shape.style.backgroundColor = colors[a].hex;
        }
      }
        
    colorButtons[0].addEventListener("click", () => addColor(0));
    colorButtons[1].addEventListener("click", () => addColor(1));
    colorButtons[2].addEventListener("click", () => addColor(2));
    colorButtons[3].addEventListener("click", () => addColor(3));
    
    const shapeText = document.getElementById("shapetext");
    const submit = document.getElementById("submit");
    function addText(){
      const shapeValue = shapeText.value;
      if(shape.classList.contains("non-display")){
        textError.textContent ="Выберите фигуру!";
      }
      else if(shapeValue === ""){
        textError.textContent = "Введите текст!";
      }
      else{
        textError.textContent = "";
        shape.textContent = shapeValue;
      }
    }
    submit.addEventListener("click", addText);

});