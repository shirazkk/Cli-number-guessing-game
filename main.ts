#!/usr/bin/env node
import inquirer from "inquirer";

async function numbers_ka_andaza_lagane_wala_game() {
  const Bay_Tukka_numbers = Math.floor(Math.random() * 6 + 1);

  const jo_answer = await inquirer.prompt([
    {
      message: "Tuje 1 se 6 tak number guess karne ha.Chal Likh Ab",
      type: "number",
      name: "tune_diya_ha",
    },
  ]);

  if (jo_answer.tune_diya_ha === Bay_Tukka_numbers) {
    console.log("Arhe Jani Tune Sahi Guess kiya ha");
  } else {
    console.log("Abhe Yaar Tune Galt Number Guess Kiya Ha");
    return numbers_ka_andaza_lagane_wala_game();
  }

  const { again } = await inquirer.prompt({
    type: "confirm",
    name: "again",
    message: "Han Jani Dobara Khelna Chaata Ha",
  });
  if (again) {
    numbers_ka_andaza_lagane_wala_game();
  } else console.log("Thek Ha Jani Allahafiz....");
}

numbers_ka_andaza_lagane_wala_game();
