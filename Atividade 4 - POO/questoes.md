# Exercício — Questões 1 a 5

## 1 — Verdadeiro / Falso

- ( **F** ) Objetos são modelos para classes;  
  **Explicação:** É o contrário: classes são modelos que descrevem objetos.  

- ( **F** ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem;  
  **Explicação:** Atributos podem receber valores padrão ou serem inicializados no construtor.  

- ( **F** ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável;  
  **Explicação:** Não precisa ser inicializada na declaração, mas deve receber valor antes de ser usada.  

- ( **V** ) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com `undefined`;  
  **Explicação:** Em TypeScript/JavaScript variáveis não inicializadas assumem `undefined`.  

- ( **V** ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação;  

- ( **V** ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;  

- ( **V** ) Uma classe pode ter várias instâncias.  

---

## 2 — Sobre a classe `Hotel`

**Pergunta:** Haverá problema de compilação porque `quantReservas` não foi inicializada previamente?  

**Resposta:** Não em todas as linguagens. Em **Java** e **C#**, atributos recebem valor padrão (como `0`). Em **TypeScript** com verificação estrita (`strictPropertyInitialization`), pode dar erro se não for inicializada no construtor ou com `!`.  

---

## 3 — Construtor que aceita um inteiro

```ts
class Hotel {
  quantReservas: number;

  constructor(quantReservas: number) {
    this.quantReservas = quantReservas;
  }

  adicionarReserva(): void {
    this.quantReservas++;
  }
}

---

## 4 - Class Rádio

** Resposta: O construtor exige um parâmetro volume, mas foi chamado sem argumentos.Isso gera erro de compilação/execução porque falta o valor a ser passado no construtor.A solução seria definir valor padrão ou um construtor sem parâmetros.

---

## 5 - Class Conta

** Resposta: Todos irão imprimir 90. sacar(10) reduz o saldo para 90.transferir(c2,50) é feito para o mesmo objeto (mesma referência), não alterando o saldo final. Como c1, c2 e c3 apontam para o mesmo objeto, todos exibem o mesmo valor. O objeto criado inicialmente por new Conta("1",100) fica sem referência.Sem variáveis apontando para ele, torna-se inacessível e será coletado pelo garbage collector.

---