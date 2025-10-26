class Banco {
    clientes: Cliente[] = []; [cite: 23]
    contas: Conta[] = []; 

    // 3.f) Incluir um cliente [cite: 40]
    inserirCliente(cliente: Cliente): void { [cite: 41]
        const clienteExistente = this.clientes.find(
            c => c.id === cliente.id || c.cpf === cliente.cpf
        );

        if (clienteExistente) { [cite: 43]
            console.log(`Erro: Cliente com ID ${cliente.id} ou CPF ${cliente.cpf} já existe.`);
            return;
        }
        
        this.clientes.push(cliente); 
        console.log(`Cliente ${cliente.nome} inserido com sucesso.`);
    }

    // 3.g) Alterar o método de incluir uma conta [cite: 44]
    inserirConta(conta: Conta): void { [cite: 45]
        const contaExistente = this.contas.find(
            c => c.id === conta.id || c.numero === conta.numero
        );

        if (contaExistente) { [cite: 46]
            console.log(`Erro: Conta com ID ${conta.id} ou Número ${conta.numero} já existe.`);
            return;
        }

        this.contas.push(conta);
        console.log(`Conta ${conta.numero} inserida com sucesso.`);
    }

    // 3.b) Consultar cliente pelo CPF [cite: 28]
    consultarCliente(cpf: string): Cliente | undefined { [cite: 29]
        return this.clientes.find(c => c.cpf === cpf);
    }

    consultarConta(numeroConta: string): Conta | undefined {
        return this.contas.find(c => c.numero === numeroConta);
    }

    // 3.c) Associar um cliente a uma conta [cite: 31]
    associarContaCliente(numeroConta: string, cpfCliente: string): void { [cite: 32]
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultarConta(numeroConta); [cite: 33]

        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }

        if (!conta) {
            console.log(`Erro: Conta com número ${numeroConta} não encontrada.`);
            return;
        }

        if (conta.cliente && conta.cliente !== cliente) { [cite: 50]
            console.log(`Erro: Conta ${numeroConta} já está associada ao cliente ${conta.cliente.nome}.`);
            return;
        }

        const contaJaAssociada = cliente.contas.find(c => c.id === conta.id);
        if (contaJaAssociada) { [cite: 33, 48]
            console.log(`Erro: Cliente ${cliente.nome} já possui a conta ${conta.numero}.`);
            return;
        }

        conta.cliente = cliente; 
        cliente.contas.push(conta); 
        console.log(`Conta ${conta.numero} associada ao cliente ${cliente.nome} com sucesso.`);
    }

    // 3.d) Listar contas de um cliente [cite: 34]
    listarContasCliente(cpf: string): Conta[] { [cite: 35]
        const cliente = this.consultarCliente(cpf);
        
        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return []; 
        }

        return cliente.contas; [cite: 36]
    }

    // 3.e) Totalizar saldo por cliente [cite: 37]
    totalizarSaldoCliente(cpf: string): number { [cite: 38]
        const cliente = this.consultarCliente(cpf);

        if (!cliente) {
            console.log(`Erro: Cliente com CPF ${cpf} não encontrado.`);
            return 0; 
        }

        const saldoTotal = cliente.contas.reduce(
            (total, conta) => total + conta.saldo, 
            0
        ); [cite: 39]

        return saldoTotal;
    }
}