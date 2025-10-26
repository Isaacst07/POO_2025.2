// Resposta da questão 6:

//a)Sim. A classe `Banco` [cite: 21] está atualmente com múltiplas responsabilidades:
// 1. Gerenciamento de Coleção (Repositório): Ela armazena e gerencia as
// listas de `clientes` e `contas`[cite: 23].
// 2. Lógica de Negócio (Serviço): Ela aplica regras de negócio, como
// validações de duplicidade (ex: `inserirCliente`[cite: 43],
// `inserirConta` [cite: 46]) e regras de associação
// (ex: `associarContaCliente` [cite: 33, 49, 50]).
// Essa abordagem fere o Princípio da Responsabilidade Única (SRP) do SOLID,
// tornando a classe `Banco` complexa, difícil de manter e de testar
// isoladamente.


// b) Sim, seria uma arquitetura muito mais robusta e adequada. [cite: 57]
// Ao criar classes como `CadastroDeClientes` e `CadastroDeContas`
// (que funcionariam como Repositórios), nós isolamos a responsabilidade
// de "como" os dados são armazenados e consultados.
// A classe `Banco` (ou uma nova classe `ServicoBancario`) passaria
// a *usar* (por composição) essas classes de cadastro. O `Banco`
// ficaria responsável por orquestrar as operações que envolvem
// múltiplas entidades (como `associarContaCliente` [cite: 32]),
// enquanto as regras de validação específicas de cada entidade
// (ex: "CPF já existe?" [cite: 43]) ficariam dentro de seus
// respectivos cadastros.

// c) O método `associarContaCliente` [cite: 32] é um orquestrador de
// regras de negócio que envolve *duas entidades diferentes*
// (Cliente e Conta).
// Não deveria estar em `CadastroDeClientes`[cite: 58], pois esta
// classe não deve ter conhecimento sobre a lógica de Contas.
// Não deveria estar em `CadastroDeContas`[cite: 58], pois esta
// classe não deve ter conhecimento sobre a lógica de Clientes.
// Portanto, o local ideal para esse método é a classe `Banco` [cite: 58]
// (ou uma classe de Serviço, como `ServicoBancario`). A classe `Banco`
// atuaria como um "coordenador", buscando os dados necessários nos
// cadastros (`CadastroDeClientes` e `CadastroDeContas`), aplicando as
// regras de associação [cite: 47-53], e então solicitando a atualização
// em ambos os cadastros, se necessário.
