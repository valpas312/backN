import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'concepto',
        message: 'Ingrese el concepto del gasto:',
      },
      {
        type: 'input',
        name: 'cantidad',
        message: 'Ingrese la cantidad gastada:',
        validate: function (value) {
          const valid = !isNaN(parseFloat(value));
          return valid || 'Por favor, ingrese un número válido.';
        },
      },
];

export const promptEjercicio = async () => {
    return await inquirer.prompt(questions);
};