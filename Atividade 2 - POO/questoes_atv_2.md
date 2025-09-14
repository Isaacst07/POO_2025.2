# ATIVIDADE 2 - POO

**Discente:** Isaac de Jesus Santos
**Docente:** Ely da Silva Miranda

---

1. A **tipagem estática** é uma tipagem em que o desenvolvedor deve declarar explicitamente o tipo de cada variável. Nesse tipo de tipagem, a verificação dos tipos acontece no processo de compilação (antes da execução do programa), garantindo assim que todas as operações realizadas com aquela variável sejam compatíveis com o seu tipo. Já na **tipagem dinâmica**, a verificação acontece durante a execução do programa. Sendo assim, a variável não tem um tipo fixo, ou seja, o tipo é associado ao valor que a variável armazena naquele momento, permitindo que uma mesma variável possa armazenar diferentes tipos de dados e possa realizar operações entre variáveis de tipos diferentes.

2. O principal problema de usar tipagem dinâmica é a **detecção de erros tardia**, já que o programa precisa estar sendo executado para detectar o problema. Ou seja, um erro de tipo pode passar despercebido durante o desenvolvimento e os testes. A identificação desse erro pode demorar a ser encontrada.

3. Exemplo da **Uber**: no começo do desenvolvimento do app, eles usaram Python e, ao longo do tempo, enquanto a empresa crescia, a base de código também cresceu, se tornando massiva. Então, os engenheiros da Uber relataram problemas por conta da tipagem dinâmica.

4. Acontece um erro: ``error TS2322: Type 'string' is not assignable to type 'number'``. Ou seja, o TypeScript não deixa você atribuir outro tipo de dado ao não ser o tipo `number` na variável `idade`.

5. O tipo que é inferido por TypeScript é o tipo `string`. Ou seja, o primeiro tipo de dado atribuído à variável vai ser o tipo dela. Nesse caso, `nome` recebe “Ely” do tipo string, então `nome` será do tipo `string`.

6. A linguagem C tem **tipagem fraca** because, apesar de exigir declaração de tipo, ela permite que esses tipos sejam convertidos de forma implícita e, muitas vezes, inseguras, gerando erros inesperados e difíceis de rastrear.

7. 
    a. No exemplo 1, a saída acaba sendo uma string `"105"`. Ou seja, ele transforma a variável `a` no tipo string e depois junta com a `b`, formando a saída “105”.
    
    b. No exemplo 2, JavaScript tenta realizar a operação e vê que as variáveis não são do mesmo tipo, então converte o `true` da variável `x` para seu equivalente numérico `1` e então soma com a variável `y` que é `2`. A saída é `3`.

    c. No exemplo 3, acontece uma **coerção de tipo** em JavaScript aplicada ao usar o operador de igualdade solto (`==`). Esse operador tenta converter os valores para um tipo comum antes de compará-los, fazendo assim, nesse exemplo, a saída ser `true`. Na primeira comparação, `false` vai ser convertido para `0`. Na segunda, a string vazia `""` vira `0` e `false` vira `0` também. E, na última, `null` e `undefined` só são iguais quando comparadas com o operador `==`.

9. No ambiente TypeScript, no primeiro exemplo, ao invés de sair `'105'`, dá um erro de compilação: ``error TS2365: Operator '+' cannot be applied to types 'number' and 'string'``. Ou seja, o operador “+” não suporta um `number` e uma `string`. No exemplo 2, acontece o mesmo erro, pois o operador “+” não suporta o tipo `boolean` e um `number`. Isso acontece porque o TypeScript proíbe a coerção de tipo implícita que acontece em JavaScript.

> **OBS:** Da questão 10 até a 20, os arquivos TypeScripts destas questões estão na pasta `src` e eles compilados para JavaScript estão na pasta `dist`.