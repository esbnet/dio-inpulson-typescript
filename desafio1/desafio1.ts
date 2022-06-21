// // Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {
// };

// employee.code = 10;
// employee.name = "John";

interface Employee {
	codigo: number;
	nome: string;
}

const employeeObj = {} as Employee;
employeeObj.codigo = 10;
employeeObj.nome = "João";
