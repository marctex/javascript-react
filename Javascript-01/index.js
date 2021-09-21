import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente();
cliente1.nome = "Marcelo";
cliente1.cpf = 80011122233;

const cliente2 = new Cliente();
cliente2.nome = "luis";
cliente2.cpf = 88877799944;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1

const conta2 = new ContaCorrente();
conta2.cliente =  cliente2;
conta2.agencia = 1002;

conta1.depositar(1000);
conta1.transferir(500, conta2);


console.log(conta1);
console.log(conta2);





