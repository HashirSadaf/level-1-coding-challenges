function square(num) {
      const squareArray = [];
      let result;
      for (let i = 0; i < num; i++) {
        result = "";
        for (let j = 0; j < num; j++) {
          result += "#";
        }
        squareArray.push(result);
      }
      return squareArray.join("\n");
    }