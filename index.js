#!/usr/bin/env node
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const min = Math.floor(Math.random() * 5000);
const max = Math.floor(Math.random() * 5001) + 10000;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Загадано число в диапазоне от ${min} до ${max}`);

rl.setPrompt("Введите число: ");
rl.prompt();

rl.on("line", (input) => {
  const enteredNumber = parseInt(input.trim(), 10);

  if (isNaN(enteredNumber)) {
    console.log("Пожалуйста, введите корректное число.");
  } else if (enteredNumber < randomNumber) {
    console.log("Больше");
  } else if (enteredNumber > randomNumber) {
    console.log("Меньше");
  } else {
    console.log(`Отгадано число ${enteredNumber}`);
    rl.close();
  }

  if (!rl.closed) {
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log("Число угадано!");
  process.exit(0);
});