import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Palindrome Checker",
    image: projectOne,
    description: (
      <>
        <p>An app for checking wether the user input is a palindrome</p>
      </>
    ),
    github: "https://github.com/MilesRoark",
    demo: "https://rb.gy/f9omln",
  },
  2: {
    title: "Roman Numerals Converter",
    image: projectTwo,
    description: (
      <>
        <p>
          An app for converting Arabic numbers to their roman numeral
          equivalents
        </p>
      </>
    ),
    github: "https://github.com/MilesRoark",
    demo: "https://rb.gy/potb7h",
  },
  3: {
    title: "Telephone Number Validator",
    image: projectThree,
    description: (
      <>
        <p>
          An app for checking whether the input is a valid U.S. phone number
        </p>
      </>
    ),
    github: "https://github.com/MilesRoark",
    demo: "https://rb.gy/26422r",
  },
};

export default projects;
