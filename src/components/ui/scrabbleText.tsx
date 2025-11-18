import { randomBetween } from "@/utils/helper";
import { cn } from "@/utils/style";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

const ScrabbleText = ({ text, className }: Props) => {
  const [scrabble, setScrabble] = useState<Array<string>>(
    text.split("")
  );
  const [items, setItems] = useState<string[]>([]);
  // const randomLetter = String.fromCharCode(
  //   97 + Math.floor(Math.random() * 26)
  // );
  const sth = [];

  useEffect(() => {
    // for (let i = 0; i < 10; i++) {
    //   let id = setInterval(() => {
    //     console.log("first");
    //     setScrabble(
    //       scrabble.map((s, index) => {
    //         // check if position matches with text index
    //         if (i === index) {
    //           if (s !== " ") {
    //             let randText =
    //               text[randomBetween(0, text.length - 1)];
    //             if (randText !== " ") return randText;
    //             return "a";
    //             // if (scrabble[i + 1] === " ") {
    //             //   return String.fromCharCode(
    //             //     97 + Math.floor(Math.random() * 26)
    //             //   );
    //             // } else
    //             //   return i >= scrabble.length - 1
    //             //     ? scrabble[0]
    //             //     : scrabble[i + 1];
    //           }
    //           return s;
    //         } else return s;
    //       })
    //     );
    //   }, 100);
    //   (i + 1) * 2000;
    //   // clearInterval(id);
    //   setTimeout(() => {
    //     clearInterval(id);
    //   }, 1000);
    // }

    for (let i = 0; i < 10; i++) {
      let id = setInterval(() => {
        sth.push(scrabble[i]);
        setItems([...items, scrabble[i]]);
        console.log(sth);
      }, 100);

      // clearInterval(id);
      setTimeout(() => {
        clearInterval(id);
      }, 1000);
    }

    // setTimeout(() => {
    //   for (let i of scrabble) {
    //     console.log(i);
    //   }
    // }, 3000);

    // scrabble.map((s, i) => {
    //       if (s !== " ") {
    //         let randText = text[randomBetween(0, text.length - 1)];
    //         if (randText !== " ") return randText;
    //         return "a";
    //         // if (scrabble[i + 1] === " ") {
    //         //   return String.fromCharCode(
    //         //     97 + Math.floor(Math.random() * 26)
    //         //   );
    //         // } else
    //         //   return i >= scrabble.length - 1
    //         //     ? scrabble[0]
    //         //     : scrabble[i + 1];
    //       }
    //       return s;
    //     })

    // }
  }, []);

  return (
    <p className={cn(className)}>{scrabble.join("").toUpperCase()}</p>
  );
};

export default ScrabbleText;
