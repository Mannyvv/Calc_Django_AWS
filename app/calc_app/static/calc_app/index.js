function update_display(key) {
    key = decode(key);
    if (document.getElementById("calc_display").value == "0") {
      document.getElementById("calc_display").value = "";
    }
  
    document.getElementById("calc_display").value += key;
  }
  
  function decode(key) {
    let dummy = document.createElement("textarea");
    dummy.innerHTML = key;
  
    return dummy.value;
  }
  
  function reset_display() {
    document.getElementById("calc_display").value = "0";
  }
  
  function percent(key) {
    update_display(key);
    const operators = [")", "-", "*", "/", "+"];
    let display_string = document.getElementById("calc_display").value;
    let last_index = -1;    //for when operators are absent
    operators.forEach(function (item, index) {
      let op_index = display_string.lastIndexOf(item);
      if (op_index > last_index) {
        last_index = op_index;
      }
    });
    var SubString = display_string.substring(
      last_index + 1,
      display_string.lastIndexOf("%")
    );
    let integer = parseInt(SubString) / 100;
    document.getElementById("calc_display").value =
      display_string.substring(0, last_index + 1) + integer.toString();
  }
  
  function calculate() {
    let display_value = document.getElementById("calc_display").value;
    let result = Function("return " + display_value)();
    result = parseFloat(result)
    document.getElementById("calc_display").value = result.toFixed(2);
  }
  